import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-hot-toast";

import { initAuth } from "../redux/actions/auth/authActions";

const Profile = () => {
  const dispatch = useDispatch();
  const { user, tokens } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    avatarUrl: "",
  });

  useEffect(() => {
    console.log("User from Redux:", user, "Tokens:", tokens);
    dispatch(initAuth());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        avatarUrl: user.avatarUrl || "https://via.placeholder.com/50",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const accessToken = tokens?.accessToken;
      if (!accessToken) {
        console.error("No access token found");
        toast.error("No access token found!", {
          duration: 3000,
          position: "top-right",
        });
        return;
      }

      const decoded = jwtDecode(accessToken);
      const userId = decoded.iss;

      console.log("Sending update with userId:", userId, "data:", formData);

      await axios.put(
        `https://devkid.online/api/users/${userId}`,
        {
          name: formData.name,
          avatarUrl: formData.avatarUrl,
          email: formData.email,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      toast.success("Update successfully!", {
        duration: 3000,
        position: "top-right",
      });
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile. Please try again!", {
        duration: 3000,
        position: "top-right",
      });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-5 max-w-md mx-auto my-5">
      <h2 className="text-lg font-semibold mb-2 text-gray-800">
        Account Details
      </h2>
      <p className="text-sm text-gray-600 mb-5">Manage your Profile</p>

      <div className="flex items-center mb-5">
        <img
          src={formData.avatarUrl || "https://via.placeholder.com/50"}
          alt="Profile"
          className="w-12 h-12 rounded-full mr-3"
        />
        <p className="text-xs text-gray-600">Profile Pictures</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        <div>
          <label
            htmlFor="avatarUrl"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Avatar URL
          </label>
          <input
            type="text"
            id="avatarUrl"
            name="avatarUrl"
            placeholder="Enter avatar URL"
            value={formData.avatarUrl}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
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
