import axios from "axios";

export const FETCH_CHAPTERS_REQUEST = "FETCH_CHAPTERS_REQUEST";
export const FETCH_CHAPTERS_SUCCESS = "FETCH_CHAPTERS_SUCCESS";
export const FETCH_CHAPTERS_FAILURE = "FETCH_CHAPTERS_FAILURE";

export const fetchChapters = (courseId) => async (dispatch) => {
  dispatch({ type: FETCH_CHAPTERS_REQUEST });

  try {
    const tokens = JSON.parse(localStorage.getItem("tokens"));
    const accessToken = tokens?.accessToken || "";

    const response = await axios.get(
      `https://devkid.online/api/chapters/course/${courseId}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    dispatch({
      type: FETCH_CHAPTERS_SUCCESS,
      payload: response.data.result.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_CHAPTERS_FAILURE,
      payload: error.message,
    });
  }
};
