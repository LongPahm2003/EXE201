import React from "react";

const Courses = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Welcome Banner Section */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">
            Welcome back, ready for your next lesson?
          </h1>
          <button className="text-blue-500 hover:text-blue-700">
            View history
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-black">
          {currentLessons.map((lesson, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm p-4 hover:shadow-md transition-shadow"
            >
              <img
                src={lesson.imageUrl}
                alt={lesson.title}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
              <h3 className="font-medium text-gray-900 mb-2">{lesson.title}</h3>

              <div className="flex items-center space-x-2 mb-2">
                <img
                  src={lesson.instructor.avatar}
                  alt={lesson.instructor.name}
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-sm text-gray-600">
                  {lesson.instructor.name}
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-gray-100 rounded-full h-1.5 mb-1">
                <div
                  className="bg-teal-400 h-1.5 rounded-full"
                  style={{ width: `${lesson.progress}%` }}
                ></div>
              </div>
              <div className="text-right text-xs text-gray-500">
                Lesson {lesson.currentLesson} of {lesson.totalLessons}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Chọn danh mục yêu thích</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <img
                src={category.imageUrl}
                alt={category.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium text-lg mb-2">{category.name}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <img
                    src={category.avatar}
                    alt="Teacher"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-gray-600 text-sm">Maria Ozawa</span>
                </div>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Courses Section */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Khóa học đề xuất cho bạn</h2>
          <button className="text-blue-500 hover:text-blue-700">
            Xem tất cả
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendedCourses.map((course, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={course.imageUrl}
                  alt={course.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="text-white font-semibold">{course.name}</h3>
                </div>
              </div>

              <div className="p-4">
                <p className="text-sm text-gray-600 mb-4">
                  {course.description}
                </p>

                {/* Progress Section */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Tiến độ</span>
                    <span className="text-blue-600 font-medium">
                      Lesson 5 of 7
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <img
                      src={course.avatar}
                      alt="Instructor"
                      className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                    />
                    <span className="text-sm text-gray-600">Thầy Trí</span>
                  </div>
                  <span className="text-blue-500 font-semibold">
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(course.price)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Sample data
const categories = [
  {
    name: "Scratch",
    description: "Lập trình trực quan cho người mới bắt đầu",
    avatar: "/src/assets/images/teacher2.jpg",
    imageUrl: "/src/assets/images/course2.jpg",
  },
  {
    name: "Python",
    description: "Ngôn ngữ lập trình phổ biến và dễ học",
    avatar: "/src/assets/images/teacher2.jpg",
    imageUrl: "/src/assets/images/course2.jpg",
  },
  {
    name: "Web",
    description: "HTML, CSS và JavaScript cơ bản",
    avatar: "/src/assets/images/teacher2.jpg",
    imageUrl: "/src/assets/images/course2.jpg",
  },
  {
    name: "Game",
    description: "Phát triển game 2D đơn giản",
    avatar: "/src/assets/images/teacher2.jpg",
    imageUrl: "/src/assets/images/course2.jpg",
  },
];

const recommendedCourses = [
  {
    name: "Khóa học Scratch cho người mới bắt đầu",
    description: "Học lập trình qua việc tạo game và hoạt ảnh",
    imageUrl: "/src/assets/images/course3.jpg",
    avatar: "/src/assets/images/teacher3.jpg",
    price: 599000,
  },
  // Thêm các khóa học khác tương tự
];

// Sample data for current lessons
const currentLessons = [
  {
    title: "AWS Certified Solutions Architect",
    imageUrl: "/src/assets/images/course1.jpg",
    instructor: {
      name: "Hà LinhLinh",
      avatar: "/src/assets/images/teacher.jpg",
    },
    progress: 71, // 5/7 ≈ 71%
    currentLesson: 5,
    totalLessons: 7,
  },
  {
    title: "AWS Certified Solutions Architect",
    imageUrl: "/src/assets/images/course1.jpg",
    instructor: {
      name: "Hà LinhLinh",
      avatar: "/src/assets/images/teacher.jpg",
    },
    progress: 71,
    currentLesson: 5,
    totalLessons: 7,
  },
  {
    title: "AWS Certified Solutions Architect",
    imageUrl: "/src/assets/images/course1.jpg",
    instructor: {
      name: "Hà LinhLinh",
      avatar: "/src/assets/images/teacher.jpg",
    },
    progress: 71,
    currentLesson: 5,
    totalLessons: 7,
  },
];

export default Courses;
