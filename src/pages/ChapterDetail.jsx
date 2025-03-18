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

  if (loading) return <p>Đang tải...</p>;
  if (error) return <p>Lỗi: {error}</p>;

  return (
    <div>
      <h2>Danh sách bài học trong chương</h2>
      <ul>
        {lessons.map((lesson) => (
          <li key={lesson.id}>{lesson.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChapterDetail;
