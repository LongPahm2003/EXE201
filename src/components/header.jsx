import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Modal, Button, Spin } from "antd";

const Header = () => {
  const navigate = useNavigate();

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
        <nav
          className="hidden md:flex space-x-16 text-white
         font-medium"
        >
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
          <img
            src="/src/assets/images/user.png"
            alt="User Avatar"
            className="w-8 h-8 rounded-full object-cover cursor-pointer bg-white"
            onClick={showLoginModal}
          />
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
            </div>
          }
          visible={isLoginModalVisible}
          onCancel={handleCancel}
          footer={null}
          width={400}
          height={600}
        >
          {loading ? (
            <div className="flex justify-center">
              <Spin size="large" />
            </div>
          ) : (
            <>
              <p>
                Vui lòng đăng nhập hoặc đăng kí tài khoản để tham gia học tập
                cùng chúng tôi.
              </p>
              <div className="flex justify-between">
                <Button type="primary" onClick={handleRegister}>
                  Đăng ký
                </Button>
                <Button type="default" onClick={handleLogin}>
                  Đăng nhập
                </Button>
              </div>
            </>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Header;
