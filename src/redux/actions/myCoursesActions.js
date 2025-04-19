// actions/myCoursesActions.js
import axios from "axios";

export const fetchMyCourses = () => async (dispatch) => {
  try {
    console.log("Đang lấy danh sách khóa học đã mua...");

    const tokens = JSON.parse(localStorage.getItem("tokens"));
    const accessToken = tokens?.accessToken || "";

    dispatch({ type: "FETCH_COURSES_REQUEST" });

    const response = await axios.get("https://devkid.online/api/courses/bought", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    console.log("Response từ API:", response.data);

    if (response.data?.isSuccess) {
      const courseList = response.data.result.data;
      dispatch({
        type: "FETCH_COURSES_SUCCESS",
        payload: Array.isArray(courseList) ? courseList : [],
      });
    } else {
      throw new Error(response.data.message || "Lỗi không xác định.");
    }
  } catch (error) {
    console.error("Lỗi khi lấy danh sách khóa học:", error.response?.data || error.message);
    dispatch({
      type: "FETCH_COURSES_FAILURE",
      payload: error.message,
    });
  }
};
