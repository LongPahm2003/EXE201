import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faYoutube,
  faInstagram,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseDetail } from "../redux/actions/courseActions";
import { motion } from "framer-motion";

const CourseDetail = () => {
  const { id } = useParams(); // Get the course ID from the URL
  const dispatch = useDispatch();

  // Select data from Redux store
  const courseDetail = useSelector(
    (state) => state.courses?.courseDetail?.result?.data || null
  );
  const loading = useSelector((state) => state.courses?.loading || false); // Use centralized loading
  const error = useSelector((state) => state.courses?.error || null);

  // Fetch course details when the component mounts
  useEffect(() => {
    if (id) {
      dispatch(fetchCourseDetail(id));
    }
  }, [dispatch, id]);

  // Dummy feedbacks (since the API might not provide this)
  const feedbacks = [
    {
      id: 1,
      author: "Lina",
      avatar: "/src/assets/images/avatar1.jpg",
      time: "3 tháng trước",
      comment:
        "Khóa học rất hay và dễ hiểu. Giảng viên nhiệt tình, tài liệu đầy đủ...",
    },
    {
      id: 2,
      author: "Lisa",
      avatar: "/src/assets/images/avatar1.jpg",
      time: "3 tháng trước",
      comment:
        "Nội dung được trình bày rõ ràng, dễ hiểu. Rất phù hợp cho người mới bắt đầu...",
    },
  ];

  // Enhanced loading state with animation
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="text-4xl text-teal-500"
        >
          Đang tải chi tiết khóa học...
        </motion.div>
      </div>
    );
  }

  // Error state with animation
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-red-500 text-2xl font-semibold"
        >
          Lỗi: {error}
        </motion.p>
      </div>
    );
  }

  // If no course data is found
  if (!courseDetail) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-gray-600 text-2xl font-semibold"
        >
          Không tìm thấy khóa học.
        </motion.p>
      </div>
    );
  }

  // Map API data to your UI structure
  const course = {
    title: courseDetail.name || "Khóa học không có tiêu đề",
    description: courseDetail.description || "Không có mô tả",
    imageUrl: courseDetail.imageUrl || "/src/assets/images/course3.jpg",
    price: courseDetail.price || 0,
    originalPrice: courseDetail.price * 2 || 2380000,
    discount: courseDetail.discount || "Giảm 50%",
    timeLeft: courseDetail.timeLeft || "Còn 11 giờ với mức giá này",
    features: courseDetail.features || [
      "Kiến thức lập trình cơ bản",
      "Đảm bảo hoàn tiền",
      "Truy cập trên mọi thiết bị",
      "Chứng chỉ hoàn thành",
    ],
  };

  // Animation variants
  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  const feedbackVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
    hover: { scale: 1.02, transition: { duration: 0.3 } },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section với ảnh khóa học */}
      <motion.div
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        className="relative h-[300px] w-full"
      >
        <img
          src={course.imageUrl}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent"
        >
          <div className="max-w-7xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-3xl font-bold text-white mb-2"
            >
              {course.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-white/90"
            >
              {course.description}
            </motion.p>
          </div>
        </motion.div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Tabs Tổng quan */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex gap-4 mb-8"
        >
          {["Tổng quan", "Nội dung", "Đánh giá", "Thảo luận"].map(
            (tab, index) => (
              <motion.button
                key={index}
                custom={index}
                variants={tabVariants}
                className={`px-4 py-2 rounded-full ${
                  index === 3 ? "bg-teal-500 text-white" : "bg-gray-200"
                }`}
              >
                {tab}
              </motion.button>
            )
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cột trái - Thông tin khóa học và Feedback */}
          <motion.div
            variants={feedbackVariants}
            initial="hidden"
            animate="visible"
            className="md:col-span-2"
          >
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-6">Nhận xét từ học viên</h3>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
                className="space-y-6"
              >
                {feedbacks.map((feedback) => (
                  <motion.div
                    key={feedback.id}
                    variants={feedbackVariants}
                    className="pb-6 border-b border-gray-200 last:border-0"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <img
                        src={feedback.avatar}
                        alt={feedback.author}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <div className="font-semibold">{feedback.author}</div>
                      </div>
                      <span className="text-sm text-gray-500 ml-auto">
                        {feedback.time}
                      </span>
                    </div>
                    <p className="text-gray-600">{feedback.comment}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Cột phải - Chi tiết khóa học */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="md:col-span-1"
          >
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
              <div className="mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold">
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(course.price)}
                  </span>
                  <span className="text-gray-500 line-through">
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(course.originalPrice)}
                  </span>
                  <span className="text-teal-600">{course.discount}</span>
                </div>
                <p className="text-red-500 text-sm">{course.timeLeft}</p>
              </div>

              <Link
                to="/checkout"
                className="w-full bg-teal-500 text-white py-3 px-4 rounded-lg font-semibold mb-6 hover:bg-teal-600"
              >
                Mua Ngay
              </Link>

              <div className="mb-6 mt-6">
                <h3 className="font-semibold mb-4">Khóa học bao gồm</h3>
                <ul className="space-y-3">
                  {course.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <svg
                        className="w-5 h-5 text-teal-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-4">
                  Đào tạo cho nhóm trên 5 người?
                </h3>
                <p className="text-gray-600 text-sm">
                  Liên hệ với chúng tôi để nhận được ưu đãi đặc biệt cho nhóm
                  của bạn...
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Chia sẻ khóa học</h3>
                <div className="flex gap-4">
                  <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 text-[#1877f2]">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 text-[#ff0000]">
                    <FontAwesomeIcon icon={faYoutube} />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 text-[#E4405F]">
                    <FontAwesomeIcon icon={faInstagram} />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 text-[#0088cc]">
                    <FontAwesomeIcon icon={faTelegram} />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 text-[#25D366]">
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
