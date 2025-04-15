import { FETCH_COURSES_AD_FAILURE, FETCH_COURSES_AD_REQUEST, FETCH_COURSES_AD_SUCCESS } from "../actions/auth/courseActionAdmin";
import { ADD_COURSE_FAILURE, ADD_COURSE_REQUEST, ADD_COURSE_SUCCESS,
 
 } from "../actions/courseActions";

const initialState = {
  courses: [],
  loading: false,
  error: null,
};

const courseAdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES_AD_REQUEST:
    case ADD_COURSE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_COURSES_AD_SUCCESS:
      return {
        ...state,
        loading: false,
        courses: action.payload,
        error: null,
      };
    case ADD_COURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        // Có thể cập nhật courses nếu API trả về khóa học mới
        // courses: [...state.courses, action.payload], // Nếu API trả về dữ liệu khóa học
      };
    case FETCH_COURSES_AD_FAILURE:
    case ADD_COURSE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default courseAdminReducer;