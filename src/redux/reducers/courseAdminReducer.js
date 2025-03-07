import { FETCH_COURSES_AD_FAILURE, FETCH_COURSES_AD_REQUEST, FETCH_COURSES_AD_SUCCESS } from "../actions/auth/courseActionAdmin";

  const initialState = {
    courses: [],
    loading: false,
    error: null,
  };
  
  const courseAdminReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_COURSES_AD_REQUEST:
        return { ...state, loading: true };
      case FETCH_COURSES_AD_SUCCESS:
        return { ...state, loading: false, courses: action.payload };
      case FETCH_COURSES_AD_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default courseAdminReducer;
  