import axios from "axios";

export const FETCH_COURSES_AD_REQUEST = "FETCH_COURSES_AD_REQUEST";
export const FETCH_COURSES_AD_SUCCESS = "FETCH_COURSES_AD_SUCCESS";
export const FETCH_COURSES_AD_FAILURE = "FETCH_COURSES_AD_FAILURE";

export const fetchAdCourses = () => async (dispatch) => {
  dispatch({ type: FETCH_COURSES_AD_REQUEST });

  try {
    const response = await axios.get("https://devkid.online/api/courses/admin");
    dispatch({
      type: FETCH_COURSES_AD_SUCCESS,   
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_COURSES_AD_FAILURE,
      payload: error.message,
    });
  }
};
