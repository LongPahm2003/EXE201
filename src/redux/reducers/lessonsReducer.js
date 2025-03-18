import {
  FETCH_LESSONS_REQUEST,
  FETCH_LESSONS_SUCCESS,
  FETCH_LESSONS_FAILURE,
} from "../actions/lessonsActions";

const initialState = {
  loading: false,
  lessons: [],
  error: null,
};

const lessonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LESSONS_REQUEST:
      return { ...state, loading: true };
    case FETCH_LESSONS_SUCCESS:
      return { loading: false, lessons: action.payload, error: null };
    case FETCH_LESSONS_FAILURE:
      return { loading: false, lessons: [], error: action.payload };
    default:
      return state;
  }
};

export default lessonsReducer;
