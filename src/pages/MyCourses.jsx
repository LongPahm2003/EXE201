// MyCourses.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyCourses } from "../redux/actions/myCoursesActions";
import { Spin, Card, message } from "antd";
import { useNavigate } from "react-router-dom";

const MyCourses = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    loading,
    courses = [],
    error,
  } = useSelector((state) => state.myCourses);

  useEffect(() => {
    dispatch(fetchMyCourses());
  }, [dispatch]);

  useEffect(() => {
    if (error) message.error(error);
  }, [error]);

  const handleCourseClick = (courseId) => {
    navigate(`/courses/${courseId}`);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Khóa học của tôi</h2>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <Spin size="large" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Array.isArray(courses) && courses.length > 0 ? (
            courses.map((course) => (
              <Card
                key={course.id}
                title={course.name || "Tên khóa học"}
                cover={
                  <img
                    alt={course.name || "Khóa học"}
                    src={course.imageUrl || "/default-course.jpg"}
                    className="h-48 object-cover"
                  />
                }
                bordered={true}
                className="cursor-pointer"
                onClick={() => handleCourseClick(course.id)}
              >
                <p>{course.description || "Không có mô tả"}</p>
                <p className="font-bold text-red-500">
                  {(course.price || 0).toLocaleString()} VND
                </p>
              </Card>
            ))
          ) : (
            <p>Bạn chưa mua khóa học nào.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default MyCourses;
