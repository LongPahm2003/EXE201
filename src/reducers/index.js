import { combineReducers } from "redux";
import authReducer from "./authReducer";
import courseReducer from "./courseReducer";
// Import thêm các reducer khác nếu cần

const rootReducer = combineReducers({
  auth: authReducer,
  courses: courseReducer,
  // Thêm các reducer khác nếu cần
});

export default rootReducer; // Đảm bảo có export mặc định
