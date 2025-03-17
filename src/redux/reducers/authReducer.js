import {
  UPDATE_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
} from "../actions/auth/authActions";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  tokens: JSON.parse(localStorage.getItem("tokens")) || {
    accessToken: null,
    refreshToken: null,
  },
  loading: false,
  error: null,
  users: [],
};

const authReducer = (state = initialState, action) => {
  console.log("Action:", action);
  console.log("Previous State:", state);
  switch (action.type) {
    case "REGISTER_REQUEST":
    case "LOGIN_REQUEST":
    case "FETCH_USERS_REQUEST":
      return { ...state, loading: true, error: null };

    case "REGISTER_SUCCESS":
    case "LOGIN_SUCCESS": {
      const { user, tokens } = action.payload;

      // Lưu vào localStorage khi đăng nhập thành công
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("tokens", JSON.stringify(tokens));

      const newState = {
        ...state,
        loading: false,
        user,
        tokens,
        error: null,
      };

      console.log("Updated State:", newState);
      return newState;
    }

    case "FETCH_USERS_SUCCESS":
      return { ...state, loading: false, users: action.payload, error: null };

    case "REGISTER_FAILURE":
    case "LOGIN_FAILURE":
    case "FETCH_USERS_FAILURE":
      return { ...state, loading: false, error: action.payload };

    case "LOGOUT":
      // Xóa tất cả thông tin người dùng khi logout
      localStorage.removeItem("user");
      localStorage.removeItem("tokens");

      return {
        ...initialState, // Reset state về ban đầu
        users: state.users, // Giữ lại danh sách users nếu cần
      };

    case UPDATE_USER_REQUEST:
      return { ...state, loading: true, error: null };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload?.result?.data || state.user, // Kiểm tra dữ liệu API
      };

    case UPDATE_USER_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default authReducer;
