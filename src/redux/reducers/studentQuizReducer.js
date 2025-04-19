const initialState = {
    quizDetail: null,
    loading: false,
    error: null,
    submitSuccess: false,
  };
  
  export const studentQuizReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_STUDENT_QUIZ_DETAIL_REQUEST":
      case "SUBMIT_STUDENT_QUIZ_REQUEST":
        return { ...state, loading: true, error: null };
      case "FETCH_STUDENT_QUIZ_DETAIL_SUCCESS":
        return { ...state, loading: false, quizDetail: action.payload };
      case "SUBMIT_STUDENT_QUIZ_SUCCESS":
        return { ...state, loading: false, submitSuccess: true };
      case "FETCH_STUDENT_QUIZ_DETAIL_FAIL":
      case "SUBMIT_STUDENT_QUIZ_FAIL":
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };