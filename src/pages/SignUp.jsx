import  { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../redux/actions/auth/authActions";
import { Spin, message } from "antd";
import "antd/dist/reset.css"; // Import antd CSS

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    phoneNumber: "",
    avatarUrl: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [errors, setErrors] = useState({}); // Thêm state để lưu trữ lỗi
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Xóa lỗi của trường khi người dùng bắt đầu nhập lại
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({}); // Reset lỗi trước khi gửi
    try {
      const result = await dispatch(register(formData));
      if (result.type === "REGISTER_SUCCESS") {
        setSuccessMessage("Tạo tài khoản thành công! Đang chuyển hướng...");
        message.success("Đăng ký thành công!");
        setTimeout(() => {
          navigate("/signin");
          setLoading(false);
        }, 2000);
      }
    } catch (error) {
      setLoading(false);
      if (error.response && error.response.status === 400) {
        // Giả sử error.response.data chứa JSON như bạn cung cấp
        const validationErrors = error.response.data.errors;
        setErrors(validationErrors);
        message.error("Vui lòng kiểm tra lại thông tin đăng ký!");
      } else {
        message.error("Đăng ký thất bại, vui lòng thử lại!");
      }
    }
  };

  const handleLoginClick = () => {
    setLoginLoading(true);
    setTimeout(() => {
      navigate("/signin");
      setLoginLoading(false);
    }, 1000);
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
          <div className="flex rounded-full bg-gray-200 p-1 mb-8">
            <button
              onClick={handleLoginClick}
              className="flex-1 py-2 rounded-full text-redbg-red-500 text-center relative"
              disabled={loginLoading}
            >
              {loginLoading ? (
                <Spin
                  size="small"
                  className="absolute inset-0 flex items-center justify-center"
                />
              ) : (
                "Login"
              )}
            </button>
            <Link
              to="/signup"
              className="flex-1 py-2 rounded-full bg-[#49BBBD] text-white text-center"
            >
              Register
            </Link>
          </div>

          {successMessage && (
            <div className="mb-4 text-green-500 text-center">
              {successMessage}
            </div>
          )}

          <Spin spinning={loading} tip="Đang xử lý...">
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
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-redbg-red-500 ${
                    errors.Email ? "border-red-500" : ""
                  }`}
                  placeholder="Enter your Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={loading}
                />
                {errors.Email && (
                  <p className="text-red-500 text-sm mt-1">{errors.Email[0]}</p>
                )}
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
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-redbg-red-500 ${
                    errors.Password ? "border-red-500" : ""
                  }`}
                  placeholder="Enter your Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  disabled={loading}
                />
                {errors.Password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.Password.join(", ")}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  FullName
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-redbg-red-500 ${
                    errors.FullName ? "border-red-500" : ""
                  }`}
                  placeholder="Enter your Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  disabled={loading}
                />
                {errors.FullName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.FullName[0]}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-redbg-red-500 ${
                    errors.PhoneNumber ? "border-red-500" : ""
                  }`}
                  placeholder="Enter your Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  disabled={loading}
                />
                {errors.PhoneNumber && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.PhoneNumber[0]}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-[#49BBBD] text-white py-2 px-4 rounded-full hover:bg-black transition duration-200"
                disabled={loading}
              >
                {loading ? "Đang đăng ký..." : "Register"}
              </button>
            </form>
          </Spin>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
