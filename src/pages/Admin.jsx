import { useState } from "react";
import { Bell, Search } from "lucide-react";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const menuItems = [
    "Dashboard",
    "Courses",
    "Students",
    "Instructors",
    "Sales & Revenue",
    "Reports",
    "Settings",
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-5 shadow-md">
        <h2 className="text-xl font-bold">DevKid</h2>
        <ul className="mt-6 space-y-4">
          {menuItems.map((item) => (
            <li
              key={item}
              className={`cursor-pointer p-2 rounded-lg ${
                activeTab === item
                  ? "text-blue-500 font-semibold bg-gray-200"
                  : ""
              }`}
              onClick={() => setActiveTab(item)}
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="absolute bottom-5 flex items-center space-x-3">
          <img
            src="/avatar.png"
            alt="Admin"
            className="w-10 h-10 rounded-full"
          />
          <span>Alex Johnson</span>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <header className="flex justify-between items-center">
          <div className="relative w-80">
            <Search className="absolute left-3 top-2.5 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 py-2 border rounded-lg"
            />
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="text-gray-500" />
            <span>Alex Johnson</span>
          </div>
        </header>

        {/* Dynamic Content */}
        <div className="mt-6 bg-white p-6 shadow rounded-lg">
          <h3 className="text-lg font-semibold mb-4">{activeTab}</h3>
          <p>Content for {activeTab} will be displayed here.</p>
        </div>
      </main>
    </div>
  );
};

export default Admin;
