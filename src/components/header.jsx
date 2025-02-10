const Header = () => {
  return (
    <div className="bg-red-500 shadow-sm">
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
          className="hidden md:flex space-x-6 text-black
         font-medium"
        >
          <a href="/" className="hover:text-gray-900">
            Home
          </a>
          <a href="/course" className="hover:text-gray-900">
            Courses
          </a>
          <a href="#" className="hover:text-gray-900">
            Careers
          </a>
          <a href="/blog" className="hover:text-gray-900">
            Blog
          </a>
          <a href="#" className="hover:text-gray-900">
            About Us
          </a>
        </nav>

        {/* User Profile */}
        <div className="flex items-center space-x-2">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="User Avatar"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-gray-800 font-medium">Lina</span>
          <button className="text-gray-600">▼</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
