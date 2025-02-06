

const Header = () => {
  return (
    <div className="bg-white shadow-sm">
    <div className="container mx-auto flex items-center justify-between py-4 px-6">
      {/* Logo */}
      <div className="flex items-center">
        <div className="border-2 border-cyan-400 rounded-md p-1">
          <span className="font-bold text-gray-800 text-lg">DevKid</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex space-x-6 text-gray-600 font-medium">
        <a href="#" className="hover:text-gray-900">Home</a>
        <a href="#" className="hover:text-gray-900">Courses</a>
        <a href="#" className="hover:text-gray-900">Careers</a>
        <a href="#" className="hover:text-gray-900">Blog</a>
        <a href="#" className="hover:text-gray-900">About Us</a>
      </nav>

      {/* User Profile */}
      <div className="flex items-center space-x-2">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="User Avatar"
          className="w-8 h-8 rounded-full object-cover"
        />
        <span className="text-gray-800 font-medium">Lina</span>
        <button className="text-gray-600">
          ▼
        </button>
      </div>
    </div>
  </div>
  )
}

export default Header