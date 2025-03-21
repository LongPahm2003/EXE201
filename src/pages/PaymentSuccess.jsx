import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold text-green-600">
          🎉 Thanh toán thành công!
        </h1>
        <p className="mt-2 text-gray-700">Cảm ơn bạn đã mua khóa học.</p>
        <button
          onClick={() => navigate("/my-courses")}
          className="mt-5 bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600"
        >
          Đi đến khóa học của tôi
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
