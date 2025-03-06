import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import CourseDetail from "./pages/CourseDetail";
import Blog from "./pages/Blog";

import Checkout from "./pages/Checkout";
import AboutUs from "./pages/AboutUs";
import Cart from "./pages/Cart";
import { initAuth } from "./redux/actions/auth/authActions";
import Admin from "./pages/Admin";
import Profile from "./pages/Profile";

function App() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(initAuth());
  }, [dispatch]);
  // useEffect(() => {
  //   if (user) {
  //     navigate("/");
  //   }
  // }, [user, navigate]);

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
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="/admin" element={<Admin />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
