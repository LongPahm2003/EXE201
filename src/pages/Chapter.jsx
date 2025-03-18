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

  if (loading) return <p>Đang tải...</p>;
  if (error) return <p>Lỗi: {error}</p>;

  return (
    <div>
      <h2>Danh sách chương trong khóa học</h2>
      <ul>
        {chapters.map((chapter) => (
          <li
            key={chapter.id}
            onClick={() => navigate(`/chapters/${chapter.id}`)}
          >
            {chapter.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Chapter;
