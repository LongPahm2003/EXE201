import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChapters } from "../redux/actions/chaptersActions";
import { useParams, useNavigate } from "react-router-dom";

const Chapter = () => {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { chapters, loading, error } = useSelector((state) => state.chapters);

  useEffect(() => {
    if (courseId) {
      dispatch(fetchChapters(courseId));
    }
  }, [dispatch, courseId]);

  if (loading)
    return <p className="text-center text-gray-600 mt-6">Đang tải...</p>;
  if (error)
    return <p className="text-center text-red-500 mt-6">Lỗi: {error}</p>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
        Danh sách chương trong khóa học
      </h2>
      <ul className="space-y-4">
        {chapters.map((chapter) => (
          <li
            key={chapter.id}
            onClick={() => navigate(`/chapters/${chapter.id}`)}
            className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 hover:bg-blue-50 hover:cursor-pointer hover:shadow-md transition duration-200"
          >
            <p className="text-lg text-gray-800 font-medium">{chapter.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Chapter;
