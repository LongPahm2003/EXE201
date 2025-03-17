import React, { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { processPayment } from "../redux/actions/paymentActions";
import { useSelector } from "react-redux";

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const tokens = user?.tokens; // Kiểm tra token

  const TestComponent = () => {
    const authState = useSelector((state) => state.auth);
    console.log("Auth State:", authState);
    return null;
  };

  console.log("Token:", tokens);
  console.log("Tokens from localStorage:", localStorage.getItem("tokens"));

  const course = location.state?.course;
  const totalPrice = useMemo(() => Number(course?.price || 0), [course]);

  const handlePayment = async () => {
    setLoading(true);
    await dispatch(processPayment(course.id, totalPrice, user.id));
    setLoading(false);
  };

  return (
    <div className="flex flex-col md:flex-row my-10 mx-6 md:mx-20 gap-10">
      <div className="rounded-lg border-2 shadow-lg p-10 w-full md:w-[800px]">
        <h1 className="text-2xl font-bold">Thanh Toán</h1>
        <h2 className="text-gray-700 font-semibold my-4">
          Phương thức thanh toán
        </h2>
        <img
          src="/src/assets/images/vnpay-logo-vinadesign-25-12-57-55.jpg"
          className="w-32 h-20 rounded-lg border-[1px] border-gray-300"
        />
        <button
          onClick={handlePayment}
          className="mt-10 w-full bg-teal-500 text-white py-3 px-4 rounded-lg font-semibold mb-6 hover:bg-teal-600 disabled:bg-gray-400"
          disabled={loading}
        >
          {loading ? "Đang xử lý..." : "Thanh toán"}
        </button>
      </div>
      <div className="rounded-lg border-2 bg-[#EAF5FF] p-4 w-full md:w-[500px]">
        <h1 className="text-xl font-semibold">Tổng đơn hàng</h1>
        <div className="mt-5 space-y-4">
          {course ? (
            <div className="flex space-x-4 border-b pb-4">
              <img
                src={course.imageUrl}
                alt={course.name}
                className="w-24 h-16 rounded-lg object-cover"
              />
              <div>
                <div className="text-sm font-semibold">{course.name}</div>
                <div className="text-xs mt-2 text-gray-400">
                  {course.description}
                </div>
                <div className="font-semibold">{course.price} VNĐ</div>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-500">Không có khóa học nào</p>
          )}
        </div>
        <div className="border-[0.5px] w-full border-black mt-5"></div>
        <div className="mt-2 flex justify-between text-black font-semibold">
          <div>Tổng</div>
          <div>{totalPrice} VNĐ</div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
