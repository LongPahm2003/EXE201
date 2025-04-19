// reducers/myCoursesReducer.js
const initialState = {
  loading: false,
  courses: [],
  error: null,
};

const myCoursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_COURSES_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_COURSES_SUCCESS":
      return { ...state, loading: false, courses: action.payload };
    case "FETCH_COURSES_FAILURE":
      return { ...state, loading: false, error: action.payload, courses: [] };
    default:
      return state;
  }
};

export default myCoursesReducer;
