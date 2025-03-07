import { useEffect, useState } from "react";
import { Bell, Search, Plus, Filter, MoreVertical } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdCourses } from "../redux/actions/auth/courseActionAdmin";


const Admin = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
   const dispatch = useDispatch();
    
    const loading = useSelector(state => state.courses?.loading || false);
    const error = useSelector(state => state.courses?.error || null);
    const coursesAdData = useSelector(state => state.courses?.courses?.result?.data || []);
  
    useEffect(() => {
        dispatch(fetchAdCourses());
      }, [dispatch]);

  const menuItems = [
    "Dashboard", "Courses", "Students", "Instructors", "Sales & Revenue", "Reports", "Settings"
  ];

  

  // Render content based on active tab
  const renderTabContent = () => {
    switch(activeTab) {
      case "Courses":
        return (
          <div className="space-y-6">
            <div className="flex justify-between">
              <h3 className="text-xl font-semibold">All Courses</h3>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg">
                  <Filter size={16} />
                  <span>Filter</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg">
                  <Plus size={16} />
                  <span>Add Course</span>
                </button>
              </div>
            </div>
            
            {loading ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
              </div>
            ) : error ? (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Error: </strong>
                <span className="block sm:inline">{error.message || "Failed to load courses"}</span>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                  <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Instructor</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Students</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {coursesAdData.length > 0 ? (
                      coursesAdData.map((course) => (
                        <tr key={course.id || course._id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="font-medium text-gray-900">{course.name || course.title || "Untitled"}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {course.instructor?.name || course.instructorName || "Unknown"}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {course.studentCount || course.students || 0}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              course.status === "Active" || course.isPublished ? 
                                "bg-green-100 text-green-800" : 
                                "bg-yellow-100 text-yellow-800"
                            }`}>
                              {course.status || (course.isPublished ? "Active" : "Draft")}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {course.rating ? course.rating.toFixed(1) : "N/A"}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <button className="text-gray-500">
                              <MoreVertical size={16} />
                              </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="px-6 py-4 text-center text-gray-500">
                          No courses found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        );
      default:
        return (
          <>
            <h3 className="text-lg font-semibold mb-4">{activeTab}</h3>
            <p>Content for {activeTab} will be displayed here.</p>
          </>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-5 shadow-md">
        <h2 className="text-xl font-bold">DevKid</h2>
        <ul className="mt-6 space-y-4">
          {menuItems.map((item) => (
            <li
              key={item}
              className={`cursor-pointer p-2 rounded-lg ${activeTab === item ? "text-blue-500 font-semibold bg-gray-200" : ""}`}
              onClick={() => setActiveTab(item)}
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="absolute bottom-5 flex items-center space-x-3">
          <img src="/avatar.png" alt="Admin" className="w-10 h-10 rounded-full" />
          <span>Alex Johnson</span>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <header className="flex justify-between items-center">
          <div className="relative w-80">
            <Search className="absolute left-3 top-2.5 text-gray-500" />
            <input type="text" placeholder="Search..." className="w-full pl-10 py-2 border rounded-lg" />
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="text-gray-500" />
            <span>Alex Johnson</span>
          </div>
        </header>

        {/* Dynamic Content */}
        <div className="mt-6 bg-white p-6 shadow rounded-lg">
          {renderTabContent()}
        </div>
      </main>
    </div>
  );
};

export default Admin;