import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../actions/courseActions"; // Import action

const Courses = () => {
  const dispatch = useDispatch();
  const { courses, loading, error } = useSelector(
    (state) => state.courseReducer
  );

  useEffect(() => {
    dispatch(fetchCourses()); // Gọi API khi component mount
  }, [dispatch]);

  if (loading) return <p>Đang tải khóa học...</p>;
  if (error) return <p>Lỗi: {error}</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Khóa học</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg"
          >
            <img
              src={course.imageUrl}
              alt={course.name}
              className="w-full h-40 object-cover rounded-xl"
            />
            <h3 className="font-medium text-gray-900 my-2">{course.name}</h3>
            <p className="text-gray-600 text-sm">{course.description}</p>
            <span className="text-blue-500 font-semibold">
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(course.price)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
