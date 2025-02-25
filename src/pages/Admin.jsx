import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../actions/authActions"; // Import action fetchUsers

const Admin = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.auth); // Lấy danh sách người dùng từ Redux store
  const user = JSON.parse(localStorage.getItem("user")); // Lấy thông tin người dùng từ local storage

  useEffect(() => {
    dispatch(fetchUsers()); // Gọi action để lấy danh sách người dùng
  }, [dispatch]);

  return (
    <div>
      <h1>Admin Page</h1>
      {user && <p>Welcome, {user.fullName}!</p>} {/* Hiển thị tên người dùng */}
      <h2 className="mt-4">Danh sách người dùng</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Họ và tên</th>
            <th className="border border-gray-300 px-4 py-2">Số điện thoại</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border border-gray-300 px-4 py-2">{user.email}</td>
              <td className="border border-gray-300 px-4 py-2">
                {user.fullName}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {user.phoneNumber}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
