import { useEffect, useState } from "react";
import { Bell, Search, Plus, Filter } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdCourses } from "../redux/actions/auth/courseActionAdmin";
import { useNavigate } from "react-router";
import { Image } from "antd";
import { fetchOrders } from "../redux/actions/orderActions";

const Admin = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Dashboard");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user || null);
  const accessToken = useSelector(
    (state) => state.auth.token || localStorage.getItem("accessToken")
  );
  const loading = useSelector((state) => state.adminCourse?.loading || false);
  const error = useSelector((state) => state.adminCourse?.error || null);
  const coursesAdData = useSelector(
    (state) => state.adminCourse?.courses?.result?.data || []
  );
  const orders = useSelector((state) => state.order.orders);
  const loadingOrders = useSelector((state) => state.order.loading);
  const errorOrders = useSelector((state) => state.order.error);

  useEffect(() => {
    if (!user || !accessToken) {
      navigate("/login");
      return;
    }

    const fetchData = async () => {
      try {
        await dispatch(fetchAdCourses(accessToken));
        await dispatch(fetchOrders(accessToken)); // 👈 Thêm dòng này nếu bạn đã có action fetchOrders
        console.log("Fetch data completed");
      } catch (err) {
        console.error("Fetch data error:", err);
      }
    };

    fetchData();
  }, [dispatch, user, accessToken, navigate]);

  const menuItems = [
    "Dashboard",
    "Courses",
    "Students",
    "Instructors",
    "Sales & Revenue",
    "Reports",
    "Payment History",
    "Settings",
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "Courses":
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-gray-800">All Courses</h3>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                  <Filter size={16} className="text-gray-600" />
                  <span className="text-gray-700">Filter</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
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
              <div
                className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <strong className="font-bold">Error: </strong>
                <span className="block sm:inline">
                  {typeof error === "string" ? error : JSON.stringify(error)}
                </span>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Image
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Course
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Description
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Price
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {coursesAdData && coursesAdData.length > 0 ? (
                      coursesAdData.map((course) => (
                        <tr
                          key={course.id || course._id}
                          className="hover:bg-gray-50 transition-colors"
                        >
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Image
                              src={course.imageUrl}
                              alt={course.name}
                              className="w-10 h-10 rounded-full"
                            />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="font-medium text-gray-900">
                              {course.name || course.title || "Untitled"}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {course.description || "Unknown"}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {course.price || course.price || 0}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                course.status === "Active" || course.isPublished
                                  ? "bg-green-100 text-green-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {course.status ||
                                (course.isPublished ? "Active" : "Draft")}
                            </span>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="5"
                          className="px-6 py-4 text-center text-gray-500"
                        >
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
      case "Payment History":
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">
              Payment History
            </h3>
            {loadingOrders ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
              </div>
            ) : errorOrders ? (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                <strong>Error:</strong> {errorOrders}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Order ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Created
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {orders.length > 0 ? (
                      orders.map((order) => (
                        <tr key={order.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                            {order.studentId}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                            {order.price}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <span
                              className={`px-2 py-1 text-xs font-semibold rounded-full ${
                                order.status === "completed"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {order.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {new Date(order.createAt).toLocaleString("vi-VN", {
                              day: "2-digit",
                              month: "2-digit",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="4"
                          className="px-6 py-4 text-center text-gray-500"
                        >
                          No orders found
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
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {activeTab}
            </h3>
            <p className="text-gray-600">
              Content for {activeTab} will be displayed here.
            </p>
          </>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-5 shadow-md fixed h-screen">
        <h2 className="text-2xl font-bold text-gray-800">DevKid</h2>
        <ul className="mt-6 space-y-2">
          {menuItems.map((item) => (
            <li
              key={item}
              className={`cursor-pointer p-2 rounded-lg transition-colors ${
                activeTab === item
                  ? "text-blue-600 font-semibold bg-blue-50"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab(item)}
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="absolute bottom-5 flex items-center space-x-3">
          <img
            src={user.avatarUrl}
            alt="Admin"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-gray-700">{user.name}</span>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 ml-64">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <div className="relative w-80">
            <Search className="absolute left-3 top-2.5 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="text-gray-500 hover:text-gray-700 cursor-pointer" />
            <span className="text-gray-700">{user.name}</span>
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
