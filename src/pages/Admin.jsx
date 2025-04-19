import { useEffect, useState } from "react";
import { Bell, Search, Plus, Filter } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdCourses } from "../redux/actions/auth/courseActionAdmin";
import { useNavigate } from "react-router";
import { Image, Modal, Form, Input, Button, Upload, message } from "antd";
import { fetchOrders } from "../redux/actions/orderActions";
import { addCourse } from "../redux/actions/courseActions";

// Dữ liệu giả lập cho danh sách khóa học (ánh xạ quizId với tên khóa học)
const courseData = {
  1: "Java", // quizId: 1 ánh xạ với tên khóa học
};

const Admin = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [isModalOpen, setIsModalOpen] = useState(false); // State để mở/đóng modal
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user || null);
  const accessToken = useSelector(
    (state) => state.auth.token || localStorage.getItem("accessToken")
  );
  const loading = useSelector((state) => state.adminCourse?.loading || false);
  const error = useSelector((state) => state.adminCourse?.error || null);
  const coursesAdData = useSelector(
    (state) => state.adminCourse?.courses?.result?.data || []
  );
  const orders = useSelector((state) => state.order.orders);
  const loadingOrders = useSelector((state) => state.order.loading);
  const errorOrders = useSelector((state) => state.order.error);

  const [form] = Form.useForm(); // Form instance từ Ant Design
  const [gradingSubmission, setGradingSubmission] = useState(null);
  const [score, setScore] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (!user || !accessToken) {
      navigate("/login");
      return;
    }

    const fetchData = async () => {
      try {
        await dispatch(fetchAdCourses(accessToken));
        await dispatch(fetchOrders(accessToken));
        console.log("Fetch data completed");
      } catch (err) {
        console.error("Fetch data error:", err);
      }
    };

    fetchData();
  }, [dispatch, user, accessToken, navigate]);

  // Cập nhật preview khi nhập URL
  useEffect(() => {
    const url = form.getFieldValue("imageUrl");
    setImageUrl(url);
  }, [form]);

  // Mở modal
  const showModal = () => {
    setIsModalOpen(true);
  };

  // Đóng modal
  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields(); // Xóa dữ liệu form khi đóng
  };

  // Xử lý khi submit form
  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      const { name, description, price, image } = values;

      // Chuyển image thành base64 nếu có
      let imageUrl = "";
      if (image && image.file) {
        const file = image.file;
        imageUrl = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.readAsDataURL(file);
        });
      }

      // Chuẩn bị dữ liệu khóa học
      const courseData = {
        name,
        description,
        price: parseFloat(price),
        imageUrl,
      };

      // Dispatch action addCourse
      const response = await dispatch(addCourse(courseData, accessToken));

      // Kiểm tra kết quả từ action
      if (response && response.isSuccess) {
        message.success("Course added successfully!");
        setIsModalOpen(false);
        form.resetFields();
        // Refresh danh sách khóa học
        dispatch(fetchAdCourses(accessToken));
      } else {
        message.error("Failed to add course.");
      }
    } catch (error) {
      console.error("Error adding course:", error);
      message.error("Error adding course: " + error.message);
    }
  };

  const handleGradeSubmission = (submission) => {
    setGradingSubmission(submission);
    setScore("");
  };

  const handleSubmitGrade = () => {
    if (!score || isNaN(score) || score < 0 || score > 100) {
      message.error("Please enter a valid score between 0 and 100.");
      return;
    }

    const quizResult = {
      studentId: gradingSubmission.studentId,
      quizId: gradingSubmission.quizId,
      courseName: courseData[gradingSubmission.quizId] || "Unknown Course",
      answers: gradingSubmission.answers,
      score: parseFloat(score),
      status: "graded",
      gradedAt: new Date().toISOString(),
      timestamp: gradingSubmission.timestamp,
    };

    const existingResults =
      JSON.parse(localStorage.getItem("quizResults")) || [];
    const updatedResults = [...existingResults, quizResult];
    localStorage.setItem("quizResults", JSON.stringify(updatedResults));

    const submissions =
      JSON.parse(localStorage.getItem("quizSubmissions")) || [];
    const updatedSubmissions = submissions.filter(
      (sub) =>
        sub.studentId !== gradingSubmission.studentId ||
        sub.quizId !== gradingSubmission.quizId ||
        sub.timestamp !== gradingSubmission.timestamp
    );
    localStorage.setItem("quizSubmissions", JSON.stringify(updatedSubmissions));

    setGradingSubmission(null);
    setScore("");
    message.success("Quiz graded successfully!");
  };

  const menuItems = [
    "Dashboard",
    "Courses",
    "Students",
    "Instructors",
    "Sales & Revenue",
    "Reports",
    "Payment History",
    "Quiz",
    "Settings",
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "Courses":
        return (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
              <h3 className="text-2xl font-bold text-gray-800">All Courses</h3>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                  <Filter size={16} className="text-gray-600" />
                  <span className="text-gray-700">Filter</span>
                </button>
                <button
                  onClick={showModal}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Plus size={16} />
                  <span>Add Course</span>
                </button>
              </div>
            </div>

            {loading ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
              </div>
            ) : error ? (
              <div
                className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <strong className="font-bold">Error: </strong>
                <span className="block sm:inline">
                  {typeof error === "string" ? error : JSON.stringify(error)}
                </span>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[10%] sm:w-[8%]">
                        Image
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[15%] sm:w-[20%]">
                        Course
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[40%] sm:w-[45%]">
                        Description
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[15%] sm:w-[12%]">
                        Price
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[20%] sm:w-[15%]">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {coursesAdData && coursesAdData.length > 0 ? (
                      coursesAdData.map((course) => (
                        <tr
                          key={course.id || course._id}
                          className="hover:bg-gray-50 transition-colors"
                        >
                          <td className="px-4 py-4 whitespace-nowrap w-[10%] sm:w-[8%]">
                            <Image
                              src={course.imageUrl}
                              alt={course.name}
                              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                            />
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap w-[15%] sm:w-[20%]">
                            <div className="font-medium text-gray-900 text-sm sm:text-base">
                              {course.name || course.title || "Untitled"}
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 w-[40%] sm:w-[45%]">
                            <div className="line-clamp-2">
                              {course.description || "Unknown"}
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 w-[15%] sm:w-[12%]">
                            {course.price || 0}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap w-[20%] sm:w-[15%]">
                            <span
                              className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                course.status === "Active" || course.isPublished
                                  ? "bg-green-100 text-green-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {course.status ||
                                (course.isPublished ? "Active" : "Draft")}
                            </span>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="5"
                          className="px-4 py-4 text-center text-gray-500"
                        >
                          No courses found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}

            {/* Modal để thêm khóa học */}
            <Modal
              title="Add New Course"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              okText="Add Course"
              cancelText="Cancel"
            >
              <Form form={form} layout="vertical">
                <Form.Item
                  name="name"
                  label="Course Name"
                  rules={[
                    { required: true, message: "Please enter course name" },
                  ]}
                >
                  <Input placeholder="Enter course name" />
                </Form.Item>

                <Form.Item
                  name="description"
                  label="Description"
                  rules={[
                    { required: true, message: "Please enter description" },
                  ]}
                >
                  <Input.TextArea
                    placeholder="Enter course description"
                    rows={4}
                  />
                </Form.Item>

                <Form.Item
                  name="price"
                  label="Price"
                  rules={[{ required: true, message: "Please enter price" }]}
                >
                  <Input type="number" placeholder="Enter price" />
                </Form.Item>

                <Form.Item
                  name="image"
                  label="Course Image"
                  valuePropName="file"
                  getValueFromEvent={(e) => ({ file: e.file })}
                >
                  <Upload
                    beforeUpload={() => false} // Không tự động upload
                    accept="image/*"
                    listType="picture"
                    maxCount={1}
                  >
                    <Button>Upload Image</Button>
                  </Upload>
                </Form.Item>
              </Form>
            </Modal>
          </div>
        );
      case "Payment History":
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">
              Payment History
            </h3>
            {loadingOrders ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
              </div>
            ) : errorOrders ? (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                <strong>Error:</strong> {errorOrders}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[25%] sm:w-[20%]">
                        Order ID
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[20%] sm:w-[20%]">
                        Amount
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[20%] sm:w-[20%]">
                        Status
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[35%] sm:w-[40%]">
                        Created
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {orders.length > 0 ? (
                      orders.map((order) => (
                        <tr key={order.id}>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700 w-[25%] sm:w-[20%]">
                            {order.studentId}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700 w-[20%] sm:w-[20%]">
                            {order.price}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm w-[20%] sm:w-[20%]">
                            <span
                              className={`px-2 py-1 text-xs font-semibold rounded-full ${
                                order.status === "completed"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {order.status}
                            </span>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 w-[35%] sm:w-[40%]">
                            {new Date(order.createAt).toLocaleString("vi-VN", {
                              day: "2-digit",
                              month: "2-digit",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="4"
                          className="px-4 py-4 text-center text-gray-500"
                        >
                          No orders found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        );
      case "Quiz":
        const quizSubmissions =
          JSON.parse(localStorage.getItem("quizSubmissions")) || [];
        const groupedSubmissions = quizSubmissions.reduce((acc, submission) => {
          const key = `${submission.studentId}-${submission.quizId}-${submission.timestamp}`;
          if (!acc[key]) {
            acc[key] = {
              studentId: submission.studentId,
              quizId: submission.quizId,
              timestamp: submission.timestamp,
              status: submission.status,
              answers: [],
            };
          }
          acc[key].answers.push({
            questionText: submission.questionText,
            selectedAnswer: submission.selectedAnswer,
            correctAnswer: submission.correctAnswer,
          });
          return acc;
        }, {});

        const submissionList = Object.values(groupedSubmissions);

        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">
              Quiz Submissions
            </h3>
            {submissionList.length > 0 ? (
              <div className="bg-white rounded-lg shadow overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[25%] sm:w-[20%]">
                        Course Name
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[20%] sm:w-[15%]">
                        Status
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[35%] sm:w-[40%]">
                        Submitted At
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[20%] sm:w-[25%]">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {submissionList.map((submission, index) => (
                      <tr
                        key={index}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-4 py-4 text-sm text-gray-700 w-[25%] sm:w-[20%]">
                          {courseData[submission.quizId] || "Unknown Course"}
                        </td>
                        <td className="px-4 py-4 text-sm w-[20%] sm:w-[15%]">
                          <span
                            className={`px-2 py-1 text-xs font-semibold rounded-full ${
                              submission.status === "pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-green-100 text-green-800"
                            }`}
                          >
                            {submission.status}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 w-[35%] sm:w-[40%]">
                          {new Date(submission.timestamp).toLocaleString(
                            "vi-VN",
                            {
                              day: "2-digit",
                              month: "2-digit",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            }
                          )}
                        </td>
                        <td className="px-4 py-4 text-sm w-[20%] sm:w-[25%]">
                          {submission.status === "pending" && (
                            <button
                              onClick={() => handleGradeSubmission(submission)}
                              className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600 transition-colors"
                            >
                              Grade
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-gray-500 text-center">
                No quiz submissions available.
              </p>
            )}

            <Modal
              title="Grade Quiz Submission"
              open={!!gradingSubmission}
              onOk={handleSubmitGrade}
              onCancel={() => setGradingSubmission(null)}
              okText="Submit Grade"
              cancelText="Cancel"
              width={800}
            >
              {gradingSubmission && (
                <div>
                  <p>
                    <strong>Course Name:</strong>{" "}
                    {courseData[gradingSubmission.quizId] || "Unknown Course"}
                  </p>
                  <p>
                    <strong>Submitted At:</strong>{" "}
                    {new Date(gradingSubmission.timestamp).toLocaleString(
                      "vi-VN",
                      {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      }
                    )}
                  </p>
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold">Answers:</h4>
                    <div className="space-y-4 mt-2 max-h-96 overflow-y-auto">
                      {gradingSubmission.answers.map((answer, index) => (
                        <div key={index} className="p-3 bg-gray-50 rounded-lg">
                          <p>
                            <strong>Question {index + 1}:</strong>{" "}
                            {answer.questionText}
                          </p>
                          <p>
                            <strong>Selected Answer:</strong>{" "}
                            {answer.selectedAnswer}
                          </p>
                          <p>
                            <strong>Correct Answer:</strong>{" "}
                            {answer.correctAnswer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Total Score (0-100, each question is 10 points):
                    </label>
                    <input
                      type="number"
                      value={score}
                      onChange={(e) => setScore(e.target.value)}
                      min="0"
                      max="100"
                      step="10"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              )}
            </Modal>
          </div>
        );
      default:
        return (
          <>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {activeTab}
            </h3>
            <p className="text-gray-600">
              Content for {activeTab} will be displayed here.
            </p>
          </>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white p-5 shadow-md">
        <h2 className="text-2xl font-bold text-gray-800">DevKid</h2>
        <ul className="mt-6 space-y-2">
          {menuItems.map((item) => (
            <li
              key={item}
              className={`cursor-pointer p-2 rounded-lg transition-colors ${
                activeTab === item
                  ? "text-blue-600 font-semibold bg-blue-50"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab(item)}
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex items-center space-x-3">
          <img
            src={user?.avatarUrl || "https://via.placeholder.com/40"}
            alt="Admin"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-gray-700">{user?.name || "Admin"}</span>
        </div>
      </aside>

      <main className="flex-1 p-4 sm:p-6">
        <header className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-3">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-2.5 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="text-gray-500 hover:text-gray-700 cursor-pointer" />
            <span className="text-gray-700">{user?.name || "Admin"}</span>
          </div>
        </header>

        <div className="bg-white p-4 sm:p-6 shadow rounded-lg">
          {renderTabContent()}
        </div>
      </main>
    </div>
  );
};

export default Admin;
