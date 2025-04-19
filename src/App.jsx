import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Admin from "./pages/Admin";
import Profile from "./pages/Profile";
import Blog from "./pages/Blog";
import Checkout from "./pages/Checkout";
import AboutUs from "./pages/AboutUs";
import Cart from "./pages/Cart";
import Career from "./pages/Career";
import CourseDetail from "./pages/CourseDetail";
import MyCourses from "./pages/MyCourses";
import Chapter from "./pages/Chapter";
import ChapterDetail from "./pages/ChapterDetail";
import PaymentSuccess from "./pages/PaymentSuccess";
import LessonDetail from "./pages/LessonDetail";
import QuizDetail from "./pages/QuizDetail";

function App() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/career" element={<Career />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/mycourses" element={<MyCourses />} />
        <Route path="/courses/:courseId" element={<Chapter />} />
        <Route path="/chapters/:chapterId" element={<ChapterDetail />} />
        <Route path="/lesson/:lessonId" element={<LessonDetail />} />
        <Route path="/quiz/:id" element={<QuizDetail />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
      </Route>

      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
