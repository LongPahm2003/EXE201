import React, { useMemo } from "react";

const Checkout = () => {
  const course = [
    {
      name: "aabc course",
      imageURL:
        "/src/assets/images/How-to-Create-an-Online-Course-For-Free--Complete-Guide--6.jpg",
      description: "abc description",
      price: "25",
    },
  ];

  const totalPrice = useMemo(() => {
    return course
      .reduce((total, item) => total + item.price, 0)
      .toString()
      .replace(/^0+/, "");
  }, [course]);
  return (
    <div className="md:flex my-10 mx-20 lg:space-x-24 md:space-x-10">
      <div className="rounded-lg border-2 shadow-lg p-10 w-[800px]">
        <h1 className="text-2xl font-bold">Thanh Toán</h1>
        <h2 className="text-gray-700 font-semibold my-4">
          Phương thức thanh toán
        </h2>
        <img
          src="/src/assets/images/vnpay-logo-vinadesign-25-12-57-55.jpg"
          className="w-32 h-20 rounded-lg border-[1px] border-gray-300"
        />
        <div className="mt-10 text-gray-700 font-semibold space-y-4">
          <div>
            <h1>Tên thẻ</h1>
            <input
              type="name"
              placeholder="Nhập Tên Thẻ"
              className="rounded-lg border-gray-400 w-full border-[1.5px] px-2 py-2 mt-2 font-normal"
            />
          </div>
          <div>
            <h1>Số thẻ</h1>
            <input
              type="numb"
              placeholder="Nhập Số Thẻ"
              className="rounded-lg border-gray-400 w-full border-[1.5px] px-2 py-2 mt-2 font-normal focus:border-gray-500"
            />
          </div>
          <div className="grid grid-cols-2 space-x-10">
            <div>
              <div>Ngày hết hạn( MM/YY )</div>
              <input
                type="numb"
                placeholder="Nhập Ngày hết hạn( MM/YY )"
                className="rounded-lg border-gray-400 w-full border-[1.5px] px-2 py-2 mt-2 font-normal focus:border-gray-500"
              />
            </div>
            <div>
              <div>CVC</div>
              <input
                type="numb"
                placeholder="Nhập CVC"
                className="rounded-lg border-gray-400 w-full border-[1.5px] px-2 py-2 mt-2 font-normal focus:border-gray-500"
              />
            </div>
          </div>
        </div>
        <button className="mt-10 w-full bg-teal-500 text-white py-3 px-4 rounded-lg font-semibold mb-6 hover:bg-teal-600">
          Thanh toán
        </button>
      </div>
      <div className="rounded-lg border-2 bg-[#EAF5FF] p-4 w-[500px]">
        <h1 className="text-xl font-semibold">Tổng đơn hàng</h1>
        <div className="mt-10">
          {course.map((item, index) => (
            <div key={index} className="flex space-x-4">
              <img
                src={item.imageURL}
                alt={item.name}
                className="w-24 h-16 rounded-lg object-cover"
              />
              <div>
                <div className="text-sm">{item.name}</div>
                <div className="text-xs mt-2 text-gray-400">
                  {item.description}
                </div>
                <div>${item.price}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="border-[0.5px] w-full border-black mt-10"></div>
        <div className="mt-2 flex relative">
          <div>Tạm tính</div>
          <div className="absolute right-0">${totalPrice}</div>
        </div>
        <div className="border-[0.5px] w-full border-black mt-4"></div>
        <div className="mt-2 flex relative">
          <div>Mã giảm giá</div>
          <div className="absolute right-0">0 %</div>
        </div>
        <div className="border-[0.5px] w-full border-black mt-4"></div>
        <div className="mt-2 flex relative">
          <div>Thuế</div>
          <div className="absolute right-0">0</div>
        </div>
        <div className="border-[0.5px] w-full border-black mt-4"></div>
        <div className="mt-2 flex relative text-black font-semibold">
          <div>Tổng</div>
          <div className="absolute right-0">${totalPrice}</div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
