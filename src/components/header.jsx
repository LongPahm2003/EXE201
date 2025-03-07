import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Modal, Button, Spin, Dropdown, Menu } from "antd";
import { useSelector, useDispatch } from "react-redux"; // Thêm useDispatch
import {
  DownOutlined,
  LogoutOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { logout } from "../redux/actions/auth/authActions";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Thêm dispatch
  const user = useSelector((state) => state.auth.user);

  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const showLoginModal = () => {
    setIsLoginModalVisible(true);
  };

  const handleCancel = () => {
    setIsLoginModalVisible(false);
  };

  const handleRegister = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/signup");
    }, 1000);
  };

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/signin");
    }, 1000);
  };
  const handleLogout = async () => {
    await dispatch(logout());
    navigate("/signin");
  };

  // Menu cho dropdown
  const userMenu = (
    <Menu>
      <Menu.Item key="0" icon={<UserOutlined />}>
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item key="1" icon={<LogoutOutlined />}>
        <a onClick={handleLogout}>Logout</a>
      </Menu.Item>
      {/* Adding two new items with icons as requested */}
      <Menu.Item key="2" icon={<SettingOutlined />}>
        <Link to="/settings">Settings</Link>
      </Menu.Item>
      <Menu.Item key="3" icon={<QuestionCircleOutlined />}>
        <Link to="/help">Help</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="bg-[#49BBBD] shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/src/assets/images/logo.jpg"
            className="w-full h-16 rounded-lg "
            alt="Dev Kid Logo"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-16 text-white font-medium">
          <a href="/" className="hover:text-gray-900">
            Home
          </a>
          <a href="/course" className="hover:text-gray-900">
            Courses
          </a>
          <a href="careers" className="hover:text-gray-900">
            Careers
          </a>
          <a href="/blog" className="hover:text-gray-900">
            Blog
          </a>
          <a href="aboutUs" className="hover:text-gray-900">
            About Us
          </a>
        </nav>

        {/* User Profile and Cart */}
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="text-white hover:text-gray-900">
            <img
              src="/src/assets/images/shopping-cart.png"
              alt="History"
              className="w-8 h-8"
            />
          </Link>

          {user ? (
            <Dropdown overlay={userMenu} trigger={["click"]}>
              <div className="flex items-center space-x-2 cursor-pointer">
                <img
                  src={user.avatarUrl}
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full"
                />
                <DownOutlined className="text-white" />
              </div>
            </Dropdown>
          ) : (
            <button
              onClick={showLoginModal}
              className="text-white hover:text-gray-900"
            >
              Đăng nhập
            </button>
          )}
        </div>

        {/* Login Modal */}
        <Modal
          title={
            <div className="flex flex-col items-center">
              <img
                src="/src/assets/images/logo.jpg"
                alt="Logo"
                className="w-16 h-16 mb-2"
              />
              <h2 className="text-xl font-semibold text-gray-800">
                Đăng nhập / Đăng ký
              </h2>
            </div>
          }
          visible={isLoginModalVisible}
          onCancel={handleCancel}
          footer={null}
          width={400}
          className="rounded-lg"
        >
          {loading ? (
            <div className="flex justify-center items-center h-40">
              <Spin size="large" />
            </div>
          ) : (
            <div className="p-6">
              <p className="text-center text-gray-700 mb-6">
                Vui lòng đăng nhập hoặc đăng kí tài khoản để tham gia học tập
                cùng chúng tôi.
              </p>
              <div className="flex justify-between space-x-4">
                <Button
                  type="primary"
                  onClick={handleRegister}
                  className="flex-1 bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  Đăng ký
                </Button>
                <Button
                  type="default"
                  onClick={handleLogin}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  Đăng nhập
                </Button>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Header;
