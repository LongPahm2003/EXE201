import axios from "axios";

export const FETCH_COURSES_REQUEST = "FETCH_COURSES_REQUEST";
export const FETCH_COURSES_SUCCESS = "FETCH_COURSES_SUCCESS";
export const FETCH_COURSES_FAILURE = "FETCH_COURSES_FAILURE";

export const FETCH_COURSE_DETAIL_REQUEST = "FETCH_COURSE_DETAIL_REQUEST";
export const FETCH_COURSE_DETAIL_SUCCESS = "FETCH_COURSE_DETAIL_SUCCESS";
export const FETCH_COURSE_DETAIL_FAILURE = "FETCH_COURSE_DETAIL_FAILURE";
export const SET_LOADING = 'SET_LOADING';

export const fetchCourses = () => async (dispatch) => {
  dispatch({ type: FETCH_COURSES_REQUEST });

  try {
    const response = await axios.get("https://devkid.online/api/courses/summary");
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
// Fetch course detail
export const fetchCourseDetail = (courseId) => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADING, payload: true }); // Start loading
    dispatch({ type: FETCH_COURSE_DETAIL_REQUEST });
    const response = await axios.get(`https://devkid.online/api/courses/${courseId}/summary`);
    dispatch({
      type: FETCH_COURSE_DETAIL_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_COURSE_DETAIL_FAILURE,
      payload: error.message || 'Không thể tải chi tiết khóa học',
    });
  } finally {
    dispatch({ type: SET_LOADING, payload: false }); // Stop loading
  }
};