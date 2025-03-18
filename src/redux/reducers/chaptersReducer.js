import {
  FETCH_CHAPTERS_REQUEST,
  FETCH_CHAPTERS_SUCCESS,
  FETCH_CHAPTERS_FAILURE,
} from "../actions/chaptersActions";

const initialState = {
  chapters: [],
  loading: false,
  error: null,
};

const chaptersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHAPTERS_REQUEST:
      return { ...state, loading: true };
    case FETCH_CHAPTERS_SUCCESS:
      return {
        ...state,
        loading: false,
        chapters: action.payload || [], // Nếu payload null thì gán []
      };
    case FETCH_CHAPTERS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default chaptersReducer;
