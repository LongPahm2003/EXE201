import { combineReducers } from 'redux';
import authReducer from './authReducer';
// Import thêm các reducer khác nếu cần

const rootReducer = combineReducers({
  auth: authReducer,
  // Thêm các reducer khác nếu cần
});

export default rootReducer; // Đảm bảo có export mặc định
