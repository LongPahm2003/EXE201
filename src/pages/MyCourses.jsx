import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyCourses } from "../redux/actions/myCoursesActions";
import { Spin, Card, message } from "antd";
import { useNavigate } from "react-router-dom";

const MyCourses = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, courses, error } = useSelector((state) => state.myCourses);

  useEffect(() => {
    dispatch(fetchMyCourses());
  }, [dispatch]);

  useEffect(() => {
    if (error) message.error(error);
  }, [error]);

  // Điều hướng đến trang courses/:courseId khi bấm vào khóa học
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
          {courses.map((course) => (
            <Card
              key={course.id}
              title={course.name}
              cover={<img alt={course.name} src={course.imageUrl} />}
              bordered={true}
              className="cursor-pointer"
              onClick={() => handleCourseClick(course.id)} // Bấm vào để điều hướng
            >
              <p>{course.description}</p>
              <p className="font-bold text-red-500">
                {course.price.toLocaleString()} VND
              </p>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCourses;
