import React from "react";
import { useParams, useNavigate } from "react-router-dom";

// Dữ liệu tĩnh giả lập cho lessonDetail với video YouTube
const lessonDetailStatic = {
  name: "Fun Coding Adventures for Kids",
  description: "Explore coding through exciting animated stories for children.",
  materials: [
    {
      type: "VIDEO",
      title: "Learn to Code with Scratch for Kids",
      url: "https://www.youtube.com/embed/_j4Lj-BT00g?si=npUXR69WSHmBGAI-",
    },
    {
      type: "PDF",
      title: "Coding Adventure Guide",
      url: "https://www.w3schools.com/js/js_examples.asp",
    },
    {
      type: "TEXT",
      title: "Coding Fun for Kids",
      content:
        "Join animated characters on a journey to learn coding basics in a fun way!",
    },
  ],
  quizId: "1",
};

const LessonDetail = () => {
  const { lessonId } = useParams();
  const navigate = useNavigate();

  const lessonDetail = lessonDetailStatic;
  const lessonDetailLoading = false;
  const lessonDetailError = null;

  const handleStartQuiz = () => {
    if (lessonDetail?.quizId) {
      navigate(`/quiz/${lessonDetail.quizId}`);
    } else {
      alert("Bài học này hiện không có bài kiểm tra.");
    }
  };

  if (lessonDetailLoading) return <p>Loading...</p>;
  if (lessonDetailError) return <p>Error: {lessonDetailError}</p>;
  if (!lessonDetail) return null;

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 animate-fade-in">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          {lessonDetail.name}
        </h1>
        <p className="text-gray-600 text-center mb-6">
          {lessonDetail.description}
        </p>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
            Tài liệu
          </h2>
          <div className="space-y-6">
            {lessonDetail.materials.map((material, index) => (
              <div
                key={index}
                className="p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {material.title}
                </h3>
                {material.type === "VIDEO" && (
                  <div className="relative">
                    <iframe
                      width="100%"
                      height="315"
                      src={material.url}
                      title={material.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg"
                    ></iframe>
                    <p className="text-gray-500 text-sm mt-2">
                      Video này hướng dẫn trẻ em lập trình với Scratch.
                    </p>
                  </div>
                )}
                {material.type === "PDF" && (
                  <a
                    href={material.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline transition-colors"
                  >
                    Xem tài liệu PDF
                  </a>
                )}
                {material.type === "TEXT" && (
                  <p className="text-gray-700">{material.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={handleStartQuiz}
            className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300 animate-bounce-once"
          >
            Làm bài kiểm tra
          </button>
        </div>
      </div>
    </div>
  );
};

export default LessonDetail;
