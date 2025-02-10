const Footer = () => {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Logo & Text */}
        <div className="flex flex-col items-center justify-center mb-6">
          <img src="/src/assets/images/logo.jpg" className="w-12 h-12 mb-2" />
          <div className="text-white text-base font-medium">
            Virtual Class for Zoom
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="text-center mb-6">
          <h3 className="text-white text-xl font-semibold mb-4">
            Subscribe to get our Newsletter
          </h3>
          <div className="flex justify-center items-center gap-4">
            <input
              type="email"
              placeholder="Your Email"
              className="px-5 py-2.5 rounded-full bg-[#2F3146] text-white w-full max-w-sm focus:outline-none focus:ring-2 focus:ring-[#4AC7F4] transition-all"
            />
            <button className="px-6 py-2.5 bg-[#4AC7F4] text-white rounded-full hover:bg-[#3ab3e0] transition-all duration-300 font-medium">
              Subscribe
            </button>
          </div>
        </div>

        {/* Links Section */}
        <div className="flex justify-center items-center gap-8 text-gray-300 text-sm mb-4">
          <a
            href="#"
            className="hover:text-[#4AC7F4] transition-colors duration-300"
          >
            Careers
          </a>
          <a
            href="#"
            className="hover:text-[#4AC7F4] transition-colors duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-[#4AC7F4] transition-colors duration-300"
          >
            Terms & Conditions
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          © 2021 Class Technologies Inc.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
