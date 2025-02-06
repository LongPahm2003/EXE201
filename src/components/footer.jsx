import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
      <footer className="bg-gray-100 py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {/* Logo and Social Media */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">DevKid</h2>
              <p className="text-sm text-gray-600 mt-2">©2025 Devkid.com</p>
              <p className="text-sm text-gray-600">DevKid is a registered trademark of Devkid.com</p>
              <div className="flex items-center space-x-4 mt-4">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
            </div>
  
            {/* Courses */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Courses</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li><a href="#" className="hover:text-gray-800">Classroom courses</a></li>
                <li><a href="#" className="hover:text-gray-800">Virtual classroom courses</a></li>
                <li><a href="#" className="hover:text-gray-800">E-learning courses</a></li>
                <li><a href="#" className="hover:text-gray-800">Video Courses</a></li>
                <li><a href="#" className="hover:text-gray-800">Offline Courses</a></li>
              </ul>
            </div>
  
            {/* Community */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Community</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li><a href="#" className="hover:text-gray-800">Learners</a></li>
                <li><a href="#" className="hover:text-gray-800">Partners</a></li>
                <li><a href="#" className="hover:text-gray-800">Developers</a></li>
                <li><a href="#" className="hover:text-gray-800">Transactions</a></li>
                <li><a href="#" className="hover:text-gray-800">Blog</a></li>
                <li><a href="#" className="hover:text-gray-800">Teaching Center</a></li>
              </ul>
            </div>
  
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Quick links</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li><a href="#" className="hover:text-gray-800">Home</a></li>
                <li><a href="#" className="hover:text-gray-800">Professional Education</a></li>
                <li><a href="#" className="hover:text-gray-800">Courses</a></li>
                <li><a href="#" className="hover:text-gray-800">Admissions</a></li>
                <li><a href="#" className="hover:text-gray-800">Testimonial</a></li>
                <li><a href="#" className="hover:text-gray-800">Programs</a></li>
              </ul>
            </div>
  
            {/* More */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">More</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li><a href="#" className="hover:text-gray-800">Press</a></li>
                <li><a href="#" className="hover:text-gray-800">Investors</a></li>
                <li><a href="#" className="hover:text-gray-800">Terms</a></li>
                <li><a href="#" className="hover:text-gray-800">Privacy</a></li>
                <li><a href="#" className="hover:text-gray-800">Help</a></li>
                <li><a href="#" className="hover:text-gray-800">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;