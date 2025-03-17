import axios from "axios";

export const processPayment = (courseId) => async (dispatch) => {
  try {
    console.log("Gửi request với courseId:", courseId);

    const tokens = JSON.parse(localStorage.getItem("tokens"));
    const accessToken = tokens?.accessToken || "";

    const response = await axios.post(
      `https://devkid.online/api/orders/payment-url?courseId=${courseId}`,
      {}, // Không cần body
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    console.log("Response:", response.data);

    if (response.status === 200 && response.data?.result?.data) {
      console.log("Redirecting to:", response.data.result.data);
      window.location.href = response.data.result.data;
    } else {
      throw new Error("Không thể tạo đơn hàng.");
    }

  } catch (error) {
    console.error("Lỗi thanh toán:", error.response?.data || error.message);
    dispatch({ type: "PAYMENT_FAILURE", payload: error.message });
  }
};
