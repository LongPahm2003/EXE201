import axios from "axios";

export const FETCH_COURSES_REQUEST = "FETCH_COURSES_REQUEST";
export const FETCH_COURSES_SUCCESS = "FETCH_COURSES_SUCCESS";
export const FETCH_COURSES_FAILURE = "FETCH_COURSES_FAILURE";

export const FETCH_COURSE_DETAIL_REQUEST = "FETCH_COURSE_DETAIL_REQUEST";
export const FETCH_COURSE_DETAIL_SUCCESS = "FETCH_COURSE_DETAIL_SUCCESS";
export const FETCH_COURSE_DETAIL_FAILURE = "FETCH_COURSE_DETAIL_FAILURE";

export const FETCH_COURSES_AD_REQUEST = "FETCH_COURSES_AD_REQUEST"; 
export const FETCH_COURSES_AD_SUCCESS = "FETCH_COURSES_AD_SUCCESS"; 
export const FETCH_COURSES_AD_FAILURE = "FETCH_COURSES_AD_FAILURE"; 

export const DELETE_COURSE_REQUEST = "DELETE_COURSE_REQUEST";
export const DELETE_COURSE_SUCCESS = "DELETE_COURSE_SUCCESS"; 
export const DELETE_COURSE_FAILURE = "DELETE_COURSE_FAILURE";

export const ADD_COURSE_REQUEST = "ADD_COURSE_REQUEST";
export const ADD_COURSE_SUCCESS = "ADD_COURSE_SUCCESS";
export const ADD_COURSE_FAILURE = "ADD_COURSE_FAILURE";

export const SET_LOADING = "SET_LOADING";

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
      payload: error.message || "Không thể tải chi tiết khóa học",
    });
  } finally {
    dispatch({ type: SET_LOADING, payload: false }); // Stop loading
  }
};

// Add new course
export const addCourse = (courseData, accessToken) => async (dispatch) => {
  dispatch({ type: ADD_COURSE_REQUEST });

  try {
    const response = await axios.post(
      "https://devkid.online/api/courses",
      courseData,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json;odata.metadata=minimal;odata.streaming=true",
        },
      }
    );
    dispatch({
      type: ADD_COURSE_SUCCESS,
      payload: response.data,
    });
    return response.data;
  } catch (error) {
    dispatch({
      type: ADD_COURSE_FAILURE,
      payload: error.message,
    });
    throw error;
  }
};

// Delete course
// Delete course
export const deleteCourse = (courseId, accessToken) => async (dispatch) => {
  dispatch({ type: DELETE_COURSE_REQUEST });

  try {
    const response = await axios.delete(`https://devkid.online/api/courses/${courseId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    dispatch({
      type: DELETE_COURSE_SUCCESS,
      payload: courseId, // Trả về courseId để reducer biết khóa học nào đã bị xóa
    });
    return response.data;
  } catch (error) {
    dispatch({
      type: DELETE_COURSE_FAILURE,
      payload: error.message,
    });
    throw error;
  }
};

// fetch admin course
export const fetchAdCourses = (accessToken) => async (dispatch) => {
  dispatch({ type: FETCH_COURSES_AD_REQUEST });

  try {
    const response = await axios.get("https://devkid.online/api/courses", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
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