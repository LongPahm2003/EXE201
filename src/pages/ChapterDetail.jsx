import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLessons } from "../redux/actions/lessonsActions";
import { useParams } from "react-router-dom";

const ChapterDetail = () => {
  const { chapterId } = useParams();
  const dispatch = useDispatch();
  const { lessons, loading, error } = useSelector((state) => state.lessons);

  useEffect(() => {
    if (chapterId) {
      dispatch(fetchLessons(chapterId));
    }
  }, [dispatch, chapterId]);

  if (loading)
    return <p className="text-center text-gray-600 mt-6">Đang tải...</p>;
  if (error)
    return <p className="text-center text-red-500 mt-6">Lỗi: {error}</p>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
        Danh sách bài học trong chương
      </h2>
      <ul className="space-y-4">
        {lessons.map((lesson) => (
          <li
            key={lesson.id}
            className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 hover:bg-green-50 hover:cursor-pointer hover:shadow-md transition duration-200"
          >
            <p className="text-lg text-gray-800 font-medium">
              📖 {lesson.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChapterDetail;
