import axios from "axios";

export const FETCH_COURSES_AD_REQUEST = "FETCH_COURSES_AD_REQUEST";
export const FETCH_COURSES_AD_SUCCESS = "FETCH_COURSES_AD_SUCCESS";
export const FETCH_COURSES_AD_FAILURE = "FETCH_COURSES_AD_FAILURE";

export const fetchAdCourses = (accessToken) => async (dispatch) => {
  dispatch({ type: FETCH_COURSES_AD_REQUEST });

  try {
    const response = await axios.get("https://devkid.online/api/courses/admin", {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'accept': '*/*'
      }
    });
    
 
    
    dispatch({
      type: FETCH_COURSES_AD_SUCCESS,   
      payload: response.data,
    });
  } catch (error) {
    console.error('API Error:', error.response || error);
    dispatch({
      type: FETCH_COURSES_AD_FAILURE,
      payload: error.response?.data?.message || error.message,
    });
  }
};