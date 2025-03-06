const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  tokens: JSON.parse(localStorage.getItem("tokens")) || null,
  loading: false,
  error: null,
  users: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_REQUEST":
    case "LOGIN_REQUEST":
    case "FETCH_USERS_REQUEST":
      return { ...state, loading: true, error: null };

    case "REGISTER_SUCCESS":
    case "LOGIN_SUCCESS":
      const { user, tokens } = action.payload;

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("tokens", JSON.stringify(tokens));

      return { ...state, loading: false, user, tokens };

    case "FETCH_USERS_SUCCESS":
      return { ...state, loading: false, users: action.payload };

    case "REGISTER_FAILURE":
    case "LOGIN_FAILURE":
    case "FETCH_USERS_FAILURE":
      return { ...state, loading: false, error: action.payload };

    case "LOGOUT":
      localStorage.removeItem("user");
      localStorage.removeItem("tokens");

      return { ...state, user: null, tokens: null, loading: false };

    default:
      return state;
  }
};

export default authReducer;
