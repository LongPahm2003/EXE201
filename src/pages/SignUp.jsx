import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../redux/actions/auth/authActions";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    phoneNumber: "",
    avatarUrl: "", 
  });
  const [successMessage, setSuccessMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(register(formData));
    if (result.type === "REGISTER_SUCCESS") {
      setSuccessMessage("Tạo tài khoản thành công! Đang chuyển hướng...");
      setTimeout(() => {
        navigate("/signin");
      }, 2000); // Chuyển hướng sau 2 giây
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left side - Image */}
      <div className="w-1/2">
        <img
          src="/src/assets/images/login.jpg"
          className="w-full h-screen object-cover"
          alt="Login"
        />
      </div>

      {/* Right side - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16">
        <div className="max-w-md w-full mx-auto">
          <h1 className="text-2xl font-semibold mb-2 ml-[100px]">
            Welcome to DevKid
          </h1>
          <div className="flex rounded-full bg-red-500/20 p-1 mb-8">
            <Link
              to="/signin"
              className="flex-1 py-2 rounded-full text-redbg-red-500 text-center"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="flex-1 py-2 rounded-full bg-red-500 text-white text-center"
            >
              Register
            </Link>
          </div>

          {successMessage && (
            <div className="mb-4 text-green-500 text-center">
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
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
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-redbg-red-500"
                placeholder="Enter your Email Address"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-redbg-red-500"
                placeholder="Enter your Password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Họ và tên
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-redbg-red-500"
                placeholder="Nhập họ và tên"
                value={formData.fullName}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Số điện thoại
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-redbg-red-500"
                placeholder="Nhập số điện thoại"
                value={formData.phoneNumber}
                onChange={handleInputChange}
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
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-redbg-red-500"
                placeholder="Enter your Avatar URL"
                value={formData.avatarUrl}
                onChange={handleInputChange}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 px-4 rounded-full hover:bg-black transition duration-200"
            >
              Đăng Ký
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
