const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  tokens: JSON.parse(localStorage.getItem("tokens")) || null,
  loading: false,
  error: null,
  users: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INIT_AUTH":
      return {
        ...state,
        user: JSON.parse(localStorage.getItem("user")) || null,
        tokens: JSON.parse(localStorage.getItem("tokens")) || null,
      };

    case "REGISTER_REQUEST":
    case "LOGIN_REQUEST":
    case "FETCH_USERS_REQUEST":
      return { ...state, loading: true, error: null };

    case "REGISTER_SUCCESS":
    case "LOGIN_SUCCESS":
      console.log("Reducer receiving LOGIN_SUCCESS with payload:", action.payload);

      const newTokens = {
        accessToken: action.payload.tokens.accessToken,
        refreshToken: action.payload.tokens.refreshToken,
      };

      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("tokens", JSON.stringify(newTokens));

      return {
        ...state,
        loading: false,
        user: action.payload.user,
        tokens: newTokens,
      };

    case "FETCH_USERS_SUCCESS":
      return { ...state, loading: false, users: action.payload };

    case "REGISTER_FAILURE":
    case "LOGIN_FAILURE":
    case "FETCH_USERS_FAILURE":
      return { ...state, loading: false, error: action.payload };

    case "LOGOUT":
      localStorage.removeItem("user");
      localStorage.removeItem("tokens");

      return {
        ...state,
        user: null,
        tokens: null,
        loading: false,
      };

    default:
      return state;
  }
};

export default authReducer;
