import {
  FETCH_COURSES_REQUEST,
  FETCH_COURSES_SUCCESS,
  FETCH_COURSES_FAILURE,
  FETCH_COURSE_DETAIL_REQUEST,
  FETCH_COURSE_DETAIL_SUCCESS,
  FETCH_COURSE_DETAIL_FAILURE,
  SET_LOADING,
} from "../actions/courseActions";

const initialState = {
  courses: [],
  loading: false,
  error: null,
  courseDetail: null,
  detailLoading: false,
  
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES_REQUEST:
      return { ...state, loading: true };
    case FETCH_COURSES_SUCCESS:
      return { ...state, loading: false, courses: action.payload };
    case FETCH_COURSES_FAILURE:
      return { ...state, loading: false, error: action.payload };
      case FETCH_COURSE_DETAIL_REQUEST:
        return { ...state, error: null }; // Clear error on new request
      case FETCH_COURSE_DETAIL_SUCCESS:
        return {
          ...state,
          courseDetail: action.payload,
          error: null,
        };
      case FETCH_COURSE_DETAIL_FAILURE:
        return {
          ...state,
          courseDetail: null,
          error: action.payload,
        };
        case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default courseReducer;
