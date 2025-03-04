import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import CourseDetail from "./pages/CourseDetail";
import Blog from "./pages/Blog";
import Admin from "./pages/Admin";
import Checkout from "./pages/Checkout";
import AboutUs from "./pages/AboutUs";
import Cart from "./pages/Cart";
import { initAuth } from "./redux/actions/auth/authActions";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(initAuth()); // Khởi tạo Redux từ localStorage
  }, [dispatch]);
  useEffect(() => {
    if (user) {
      const currentPath = window.location.pathname;
      if (currentPath === "/signin" || currentPath === "/signup") {
        navigate("/");
      }
    }
  }, [user, navigate]);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/coursedetail" element={<CourseDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={<Admin />} />
      </Route>
    </Routes>
  );
}

export default App;
