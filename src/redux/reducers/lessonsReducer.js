import {
  FETCH_LESSONS_REQUEST,
  FETCH_LESSONS_SUCCESS,
  FETCH_LESSONS_FAILURE,
  FETCH_LESSON_DETAIL_REQUEST,
  FETCH_LESSON_DETAIL_SUCCESS,
  FETCH_LESSON_DETAIL_FAILURE,
} from "../actions/lessonsActions";

const initialState = {
  loading: false,
  lessons: [],
  error: null,
  lessonDetail: null, // Added for lesson detail
  lessonDetailLoading: false, // Added for lesson detail loading state
  lessonDetailError: null, // Added for lesson detail error
};

const lessonsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Existing cases for fetching lessons by chapter
    case FETCH_LESSONS_REQUEST:
      return { ...state, loading: true };
    case FETCH_LESSONS_SUCCESS:
      return { loading: false, lessons: action.payload, error: null };
    case FETCH_LESSONS_FAILURE:
      return { loading: false, lessons: [], error: action.payload };

    // New cases for fetching lesson detail
    case FETCH_LESSON_DETAIL_REQUEST:
      return { ...state, lessonDetailLoading: true };
    case FETCH_LESSON_DETAIL_SUCCESS:
      return { ...state, lessonDetailLoading: false, lessonDetail: action.payload, lessonDetailError: null };
    case FETCH_LESSON_DETAIL_FAILURE:
      return { ...state, lessonDetailLoading: false, lessonDetail: null, lessonDetailError: action.payload };

    default:
      return state;
  }
};

export default lessonsReducer;