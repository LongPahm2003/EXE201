import axios from "axios";

// Lấy chi tiết một bài quiz
export const fetchStudentQuizDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_STUDENT_QUIZ_DETAIL_REQUEST" });
    const response = await axios.get(`/api/student-quiz/${id}`);
    dispatch({
      type: "FETCH_STUDENT_QUIZ_DETAIL_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "FETCH_STUDENT_QUIZ_DETAIL_FAIL",
      payload: error.response?.data?.message || error.message,
    });
  }
};

// Nộp bài quiz
export const submitStudentQuiz = (quizData) => async (dispatch) => {
  try {
    dispatch({ type: "SUBMIT_STUDENT_QUIZ_REQUEST" });
    const response = await axios.post("/api/student-quiz/submit", quizData);
    dispatch({
      type: "SUBMIT_STUDENT_QUIZ_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "SUBMIT_STUDENT_QUIZ_FAIL",
      payload: error.response?.data?.message || error.message,
    });
  }
};