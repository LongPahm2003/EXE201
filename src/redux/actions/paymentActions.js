import axios from "axios";

export const processPayment =
  (courseId, amount, userId) => async (dispatch) => {
    try {
      // Gửi yêu cầu tạo đơn hàng để lấy URL QR từ PayOS
      const response = await axios.post(
        "https://devkid.online/api/orders/payment-url",
        {
          userId,
          courseId,
          amount,
        }
      );

      if (response.status === 200 && response.data.payUrl) {
        // Redirect người dùng đến trang quét QR của PayOS
        window.location.href = response.data.payUrl;
      } else {
        throw new Error("Không thể tạo đơn hàng.");
      }
    } catch (error) {
      console.error("Lỗi thanh toán:", error);
      dispatch({ type: "PAYMENT_FAILURE", payload: error });
    }
  };
