import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faYoutube,
  faInstagram,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const CourseDetail = () => {
  // Dữ liệu mẫu - bạn có thể thay thế bằng dữ liệu API thực tế sau
  const course = {
    title: "Khóa học Scratch cho người mới bắt đầu",
    description: "Học lập trình qua việc tạo game và hoạt ảnh",
    imageUrl: "/src/assets/images/course3.jpg",
    price: 1190000,
    originalPrice: 2380000,
    discount: "Giảm 50%",
    timeLeft: "Còn 11 giờ với mức giá này",
    features: [
      "Đảm bảo hoàn tiền",
      "Truy cập trên mọi thiết bị",
      "Chứng chỉ hoàn thành",
      "33 Bài học",
    ],
  };

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

  return (
    <div>
      {/* Hero Section với ảnh khóa học */}
      <div className="relative h-[300px] w-full">
        <img
          src={course.imageUrl}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-2">
              {course.title}
            </h1>
            <p className="text-white/90">{course.description}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Tabs Tổng quan */}
        <div className="flex gap-4 mb-8">
          {["Tổng quan", "Nội dung", "Đánh giá", "Thảo luận"].map(
            (tab, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full ${
                  index === 3 ? "bg-teal-500 text-white" : "bg-gray-200"
                }`}
              >
                {tab}
              </button>
            )
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cột trái - Thông tin khóa học và Feedback */}
          <div className="md:col-span-2">
            {/* Phần Feedback */}
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-6">Nhận xét từ học viên</h3>
              <div className="space-y-6">
                {feedbacks.map((feedback) => (
                  <div
                    key={feedback.id}
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
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cột phải - Chi tiết khóa học */}
          <div className="md:col-span-1">
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

              <button className="w-full bg-teal-500 text-white py-3 rounded-lg font-semibold mb-6 hover:bg-teal-600">
                Mua Ngay
              </button>

              <div className="mb-6">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
