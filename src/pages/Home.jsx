import {
  FaCalendarCheck,
  FaFileInvoiceDollar,
  FaUsers,
  FaChalkboardTeacher,
  FaBookOpen,
  FaGraduationCap,
} from "react-icons/fa";
import studentImg from "../assets/images/student.jpg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <FaFileInvoiceDollar className="text-white text-3xl" />,
      title: "Online Billing, Invoicing, & Contracts",
      description:
        "Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts.",
    },
    {
      icon: <FaCalendarCheck className="text-white text-3xl" />,
      title: "Easy Scheduling & Attendance Tracking",
      description:
        "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance.",
    },
    {
      icon: <FaUsers className="text-white text-3xl" />,
      title: "Customer Tracking",
      description:
        "Automate and track emails to individuals or groups. Skilline's built-in system helps organize your organization.",
    },
  ];

  const testimonials = [
    {
      name: "John Doe",
      role: "Parent",
      comment:
        "DevKid has made learning so much easier for my child. The platform is intuitive and effective!",
      avatar: "https://via.placeholder.com/150",
    },
    {
      name: "Jane Smith",
      role: "Teacher",
      comment:
        "I love how DevKid simplifies classroom management and makes teaching more interactive.",
      avatar: "https://via.placeholder.com/150",
    },
    {
      name: "Alice Johnson",
      role: "Student",
      comment:
        "The courses are engaging, and I can learn at my own pace. Highly recommended!",
      avatar: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[#49BBBD] text-white py-20 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold">
              <span className="text-yellow-400">Studying</span> Online is now
              much easier
            </h1>
            <p className="mt-6 text-lg">
              DevKid is an interesting platform that will teach you in a more
              interactive way.
            </p>
            <div className="mt-8 flex items-center space-x-4">
              <button className="bg-white text-teal-500 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition duration-300">
                Join for free
              </button>
              <button className="flex items-center space-x-2 hover:text-teal-200 transition duration-300">
                <span className="w-12 h-12 bg-white text-teal-500 flex items-center justify-center rounded-full shadow-lg">
                  ▶
                </span>
                <span>Watch how it works</span>
              </button>
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2 flex justify-center relative mt-12 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <img
              src={studentImg}
              alt="Student"
              className="w-72 rounded-lg shadow-2xl"
            />
            <div className="absolute top-10 right-10 bg-white p-4 rounded-lg shadow-lg">
              <p className="text-sm font-semibold text-gray-800">
                250K Assisted Student
              </p>
            </div>
            <div className="absolute bottom-10 left-10 bg-white p-4 rounded-lg shadow-lg">
              <p className="text-sm font-semibold text-gray-800">
                Congratulations
                <br />
                Your admission completed
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Success Metrics Section */}
      <motion.div
        className="text-center py-20 px-8 bg-gray-50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-gray-900">Our Success</h2>
        <p className="text-gray-600 max-w-xl mx-auto mt-4">
          Omare id fames interdum porttitor nulla turpis etiam. Diam vitae
          sollicitudin at nec nam et pharetra gravida.
        </p>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-teal-500 text-4xl font-bold">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="block text-black text-2xl">15K+</span> Students
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="block text-black text-2xl">75%</span> Total success
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="block text-black text-2xl">35</span> Main questions
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="block text-black text-2xl">26</span> Chief experts
          </motion.div>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="text-center py-20 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-gray-900">
          <span className="text-gray-900">All-In-One</span>{" "}
          <span className="text-teal-500">Cloud Software.</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          DevKid is one powerful online software suite that combines all the
          tools needed to run a successful school or office.
        </p>
        <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-8 text-center border border-gray-100 hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-teal-500 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-4 text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        className="text-center py-20 bg-gray-50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-gray-900">What Our Users Say</h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Hear from our satisfied users about their experiences with DevKid.
        </p>
        <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-8 text-center border border-gray-100 hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-20 h-20 mx-auto rounded-full"
              />
              <h3 className="text-xl font-semibold text-gray-900 mt-4">
                {testimonial.name}
              </h3>
              <p className="text-gray-500">{testimonial.role}</p>
              <p className="mt-4 text-gray-600">{testimonial.comment}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action Section */}
      <div className="text-center py-20 bg-teal-500 text-white">
        <h2 className="text-4xl font-bold">Ready to Get Started?</h2>
        <p className="mt-4 text-lg max-w-xl mx-auto">
          Join DevKid today and transform the way you learn or teach.
        </p>
        <button
          onClick={() => navigate("/signup")}
          className="mt-8 bg-white text-teal-500 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition duration-300"
        >
          Sign Up Now
        </button>
      </div>
    </div>
  );
};

export default Home;
