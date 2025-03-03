import axios from "axios";

export const FETCH_COURSES_REQUEST = "FETCH_COURSES_REQUEST";
export const FETCH_COURSES_SUCCESS = "FETCH_COURSES_SUCCESS";
export const FETCH_COURSES_FAILURE = "FETCH_COURSES_FAILURE";

export const fetchCourses = () => async (dispatch) => {
  dispatch({ type: FETCH_COURSES_REQUEST });

  try {
    const response = await axios.get("https://devkid.online/api/courses");
    dispatch({
      type: FETCH_COURSES_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_COURSES_FAILURE,
      payload: error.message,
    });
  }
};
