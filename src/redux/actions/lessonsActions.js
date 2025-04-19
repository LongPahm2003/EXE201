import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const FETCH_LESSONS_REQUEST = "FETCH_LESSONS_REQUEST";
export const FETCH_LESSONS_SUCCESS = "FETCH_LESSONS_SUCCESS";
export const FETCH_LESSONS_FAILURE = "FETCH_LESSONS_FAILURE";

export const FETCH_LESSON_DETAIL_REQUEST = "FETCH_LESSON_DETAIL_REQUEST";
export const FETCH_LESSON_DETAIL_SUCCESS = "FETCH_LESSON_DETAIL_SUCCESS";
export const FETCH_LESSON_DETAIL_FAILURE = "FETCH_LESSON_DETAIL_FAILURE";
// goi khoa hoc
export const fetchLessons = (chapterId) => async (dispatch) => {
  dispatch({ type: FETCH_LESSONS_REQUEST });

  try {
    const tokens = JSON.parse(localStorage.getItem("tokens"));
    const accessToken = tokens?.accessToken || "";

    const response = await axios.get(
      `https://devkid.online/api/lessons/chapter/${chapterId}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    dispatch({
      type: FETCH_LESSONS_SUCCESS,
      payload: response.data.result.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_LESSONS_FAILURE,
      payload: error.message,
    });
  }
};

// goi chi tiet bai hoc
export const fetchLessonDetail = (lessonId) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_LESSON_DETAIL_REQUEST });

    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const accessToken = tokens?.accessToken || "";
      const response = await axios.get(
        `https://devkid.online/api/materials/lesson/${lessonId}`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      dispatch({
        type: FETCH_LESSON_DETAIL_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_LESSONS_FAILURE,
        payload: error.message || 'Something went wrong',
      });
    }
  };
};
