const initialState = {
  loading: false,
  courses: [], // Danh sách khóa học
  error: null,
};

const myCoursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_COURSES_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_COURSES_SUCCESS":
      return { ...state, loading: false, courses: action.payload };
    case "FETCH_COURSES_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default myCoursesReducer;
