import React from "react";
import { motion, AnimatePresence } from "framer-motion";

// Giả sử các hình ảnh được đặt trong thư mục src/assets
const Career = () => {
  // State để kiểm soát animation khi chuyển trang
  const [isExiting, setIsExiting] = React.useState(false);

  // Hàm xử lý khi nhấp vào nút để chuyển trang
  const handleNavigate = () => {
    setIsExiting(true);
    // Giả sử sau 0.5s sẽ chuyển trang (có thể thay bằng logic điều hướng thực tế)
    setTimeout(() => {
      // Ví dụ: window.location.href = "/apply";
      console.log("Chuyển trang...");
    }, 500);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen font-poppins"
          style={{ backgroundColor: "#F5F9F9" }} // Màu nền nhẹ giống trang mẫu
        >
          <header
            className="relative text-center py-16 bg-cover bg-center transition-all duration-300 hover:bg-opacity-90"
            style={{
              backgroundImage: "url('/src/assets/images/kidcoding.jpg')",
              backgroundColor: "#49BBBD", // fallback nếu ảnh lỗi
              height: "500px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay đen nhẹ */}
            <div className="absolute inset-0 bg-black opacity-30 transition-opacity duration-300 hover:opacity-20"></div>

            {/* Content ở trên overlay */}
            <div className="relative z-10">
              <motion.h1
                className="text-4xl md:text-5xl font-bold text-white transition-colors duration-300 hover:text-orange-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Tham gia hành trình dạy lập trình cho trẻ em!
              </motion.h1>
              <motion.p
                className="mt-4 text-lg text-white max-w-2xl mx-auto transition-colors duration-300 hover:text-gray-200"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Chúng tôi đang tìm kiếm những giáo viên đam mê, sáng tạo để
                truyền cảm hứng coding cho thế hệ trẻ.
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNavigate}
                className="mt-6 bg-orange-500 text-white py-3 px-6 rounded-full hover:bg-orange-600 transition"
              >
                Ứng tuyển ngay
              </motion.button>
            </div>
          </header>

          {/* Why Join Us */}
          <section className="py-16" style={{ backgroundColor: "#F5F9F9" }}>
            <div className="max-w-6xl mx-auto px-4">
              <h2
                className="text-3xl font-semibold text-center mb-12"
                style={{ color: "#49BBBD" }}
              >
                Vì sao nên tham gia?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  className="text-center p-6 rounded-lg"
                  style={{ backgroundColor: "#E6F3F3" }} // Màu nền nhẹ tương tự trang mẫu
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src="/src/assets/images/programming.png"
                    alt="Programming"
                    className="w-24 mx-auto mb-4"
                  />
                  <h3
                    className="text-xl font-semibold"
                    style={{ color: "#49BBBD" }}
                  >
                    Tạo tác động thực sự
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Giúp trẻ em khám phá thế giới lập trình qua các dự án thú vị
                    như làm game, ứng dụng.
                  </p>
                </motion.div>
                <motion.div
                  className="text-center p-6 rounded-lg"
                  style={{ backgroundColor: "#E6F3F3" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <img
                    src="/src/assets/images/developer.png"
                    alt="Teaching"
                    className="w-24 mx-auto mb-4"
                  />
                  <h3
                    className="text-xl font-semibold"
                    style={{ color: "#49BBBD" }}
                  >
                    Môi trường sáng tạo
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Làm việc cùng đội ngũ giáo viên trẻ, năng động và đam mê
                    giáo dục.
                  </p>
                </motion.div>
                <motion.div
                  className="text-center p-6 rounded-lg"
                  style={{ backgroundColor: "#E6F3F3" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <img
                    src="/src/assets/images/upward.png"
                    alt="Growth"
                    className="w-24 mx-auto mb-4"
                  />
                  <h3
                    className="text-xl font-semibold"
                    style={{ color: "#49BBBD" }}
                  >
                    Phát triển bản thân
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Được đào tạo kỹ năng giảng dạy và cập nhật công nghệ mới
                    nhất.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Job Openings */}
          <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
              <h2
                className="text-3xl font-semibold text-center mb-12"
                style={{ color: "#49BBBD" }}
              >
                Cơ hội nghề nghiệp
              </h2>
              <div className="space-y-6">
                <motion.div
                  className="p-6 bg-white rounded-lg shadow-md flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src="/src/assets/images/coding.png"
                    alt="Scratch"
                    className="w-12 mr-4"
                  />
                  <div>
                    <h3
                      className="text-xl font-semibold"
                      style={{ color: "#49BBBD" }}
                    >
                      Giáo viên lập trình Scratch
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Dạy trẻ từ 8-12 tuổi sử dụng Scratch để tạo game và hoạt
                      hình. Yêu cầu: Kỹ năng giao tiếp tốt, yêu thích trẻ em.
                    </p>
                    <button
                      onClick={handleNavigate}
                      className="mt-4 text-orange-500 font-semibold hover:underline"
                    >
                      Ứng tuyển
                    </button>
                  </div>
                </motion.div>
                <motion.div
                  className="p-6 bg-white rounded-lg shadow-md flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <img
                    src="/src/assets/images/email.png"
                    alt="Python"
                    className="w-12 mr-4"
                  />
                  <div>
                    <h3
                      className="text-xl font-semibold"
                      style={{ color: "#49BBBD" }}
                    >
                      Giáo viên Python cơ bản
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Hướng dẫn học sinh 12-16 tuổi học Python qua các dự án
                      thực tế. Yêu cầu: Có kinh nghiệm lập trình Python.
                    </p>
                    <button
                      onClick={handleNavigate}
                      className="mt-4 text-orange-500 font-semibold hover:underline"
                    >
                      Ứng tuyển
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section
            className="py-16 text-center text-white relative"
            style={{ backgroundColor: "#49BBBD" }}
          >
            <motion.img
              className="w-40 absolute bottom-0 left-10 hidden md:block"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            />
            <h2 className="text-3xl font-semibold">
              Sẵn sàng truyền cảm hứng cho thế hệ coder nhí?
            </h2>
            <p className="mt-4 max-w-xl mx-auto">
              Hãy cùng chúng tôi xây dựng tương lai công nghệ cho trẻ em Việt
              Nam!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNavigate}
              className="mt-6 bg-orange-500 text-white py-3 px-6 rounded-full hover:bg-orange-600 transition"
            >
              Liên hệ ngay
            </motion.button>
          </section>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Career;
