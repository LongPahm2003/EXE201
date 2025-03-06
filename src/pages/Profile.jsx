import React, { useState } from "react";

const Profile = () => {
  const [formData, setFormData] = useState({
    firstName: "Forhan",
    lastName: "Faujang",
    email: "forhanfaujang@gmail.com",
    title: "Designer",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile updated:", formData);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-5 max-w-md mx-auto my-5">
      <h2 className="text-lg font-semibold mb-2 text-gray-800">
        Account Details
      </h2>
      <p className="text-sm text-gray-600 mb-5">Manage your Yoshicon Profile</p>

      <div className="flex items-center mb-5">
        <img
          src="https://via.placeholder.com/50" // Replace with actual profile image URL
          alt="Profile"
          className="w-12 h-12 rounded-full mr-3"
        />
        <p className="text-xs text-gray-600">
          Profile Pictures, PNG, JPG, GIF max 5MB
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black"
        />
        <select
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black"
        >
          <option value="Designer">Designer</option>
          <option value="Developer">Developer</option>
          <option value="Manager">Manager</option>
          <option value="Other">Other</option>
        </select>
        <a href="#" className="text-red-600 text-sm block mb-4 hover:underline">
          Change Password
        </a>
        <button
          type="submit"
          className="w-full bg-black text-white p-2 rounded-md text-sm hover:bg-gray-800"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Profile;
