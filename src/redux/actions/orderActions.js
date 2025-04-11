import axios from "axios";

export const fetchOrders = (token) => async (dispatch) => {
  dispatch({ type: "FETCH_ORDERS_REQUEST" });

  try {
    const res = await axios.get("https://devkid.online/api/orders", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({
      type: "FETCH_ORDERS_SUCCESS",
      payload: res.data.result.data,
    });
  } catch (error) {
    dispatch({
      type: "FETCH_ORDERS_FAILURE",
      payload: error.response?.data?.message || error.message,
    });
  }
};
