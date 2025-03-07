import  { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../redux/actions/auth/authActions";
import { Spin } from "antd";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoadingLogin, setIsLoadingLogin] = useState(false);
  const [isLoadingRegister, setIsLoadingRegister] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoadingLogin(true);
    setErrorMessage("");
    const result = await dispatch(login(formData, navigate));
    if (result?.type === "LOGIN_SUCCESS") {
      navigate("/");
    } else {
      setErrorMessage("Login failed, please check your credentials.");
    }
    setIsLoadingLogin(false);
  };

  const handleRegisterClick = () => {
    setIsLoadingRegister(true);
    setTimeout(() => {
      navigate("/signup");
      setIsLoadingRegister(false);
    }, 500);
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-1/2 hidden md:block">
        <img
          src="src/assets/images/login.jpg"
          className="w-full h-screen object-cover"
          alt="Login"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-10">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Welcome to DevKid
          </h2>
          {errorMessage && (
            <div className="mb-4 text-red-500 text-center">{errorMessage}</div>
          )}

          <div className="flex rounded-full bg-gray-200 p-1 mb-8">
            <Link
              to="/signin"
              className="flex-1 py-2 rounded-full bg-[#49BBBD] text-white text-center flex items-center justify-center"
            >
              {isLoadingLogin ? <Spin size="small" className="mr-2" /> : null}
              {isLoadingLogin ? "Logging in..." : "Login"}
            </Link>
            <button
              onClick={handleRegisterClick}
              disabled={isLoadingRegister}
              className="flex-1 py-2 rounded-full text-gray-600 text-center flex items-center justify-center"
            >
              {isLoadingRegister ? (
                <Spin size="small" className="mr-2" />
              ) : null}
              {isLoadingRegister ? "Redirecting..." : "Register"}
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-redbg-red-500 "
                value={formData.email}
                onChange={handleInputChange}
                disabled={isLoadingLogin}
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-redbg-red-500 "
                  value={formData.password}
                  onChange={handleInputChange}
                  disabled={isLoadingLogin}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                  disabled={isLoadingLogin}
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2 rounded-md bg-[#49BBBD] text-white hover:bg-black transition flex items-center justify-center"
              disabled={isLoadingLogin}
            >
              {isLoadingLogin ? <Spin size="small" className="mr-2" /> : null}
              {isLoadingLogin ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
