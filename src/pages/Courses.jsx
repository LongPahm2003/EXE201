import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCourseDetail,
  fetchCourses,
} from "../redux/actions/courseActions";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const Courses = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loading = useSelector((state) => state.courses?.loading || false);
  const error = useSelector((state) => state.courses?.error || null);
  const coursesData = useSelector(
    (state) => state.courses?.courses?.result?.data || []
  );

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const handleViewDetails = (courseId) => {
    dispatch(fetchCourseDetail(courseId)); // Dispatch the fetchCourseDetail action
    navigate(`/course/${courseId}`); // Navigate to the course detail page
  };

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      scale: 1.03,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-64">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gray-600 text-lg"
        >
          Đang tải khóa học...
        </motion.p>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-64">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-500 text-lg"
        >
          Lỗi: {error}
        </motion.p>
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center"
      >
        Khóa học nổi bật
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {coursesData.map((course) => (
          <motion.div
            key={course.id}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="bg-white rounded-2xl shadow-lg overflow-hidden 
                      hover:shadow-xl transition-shadow duration-300 
                      border border-gray-100"
          >
            <div className="relative">
              <img
                src={course.imageUrl}
                alt={course.name}
                className="w-full h-56 object-cover transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                {course.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {course.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-blue-600 font-bold text-lg">
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(course.price)}
                </span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleViewDetails(course.id)} // Add onClick handler
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg 
                           hover:bg-blue-700 transition-colors duration-200"
                >
                  Xem chi tiết
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Courses;
