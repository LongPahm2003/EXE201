import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Alert } from "antd";
import { login } from "../redux/actions/auth/authActions";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
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
    const result = await dispatch(login(formData));

    if (result && result.type === "LOGIN_SUCCESS") {
      navigate("/");
    } else {
      setErrorMessage(
        "Đăng nhập không thành công, vui lòng kiểm tra lại mật khẩu."
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-row bg-white">
      {/* Left side - Image */}
      <div className="w-1/2">
        <img
          src="/src/assets/images/login.jpg"
          className="w-full h-screen object-cover"
          alt="Login"
        />
      </div>

      {/* Right side - Login Form */}
      <div className="w-1/2 flex flex-col items-center justify-center px-10">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Welcome to DevKid
          </h2>

          {errorMessage && (
            <Alert
              message={errorMessage}
              type="error"
              showIcon
              className="mb-4"
            />
          )}

          {/* Login/Register Toggle */}
          <div className="flex rounded-full bg-red-500/20 p-1 mb-8">
            <Link
              to="/signin"
              className="flex-1 py-2 rounded-full bg-red-500 text-white text-center"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="flex-1 py-2 rounded-full text-redbg-red-500 text-center"
            >
              Register
            </Link>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Nhập email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Nhập mật khẩu"
                  className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-redbg-red-500"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-redbg-red-500">
                Forgot Password ?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-2 rounded-full bg-red-500 text-white hover:bg-black transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
