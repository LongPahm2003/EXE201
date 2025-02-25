const initialState = {
  user: null,
  loading: false,
  error: null,
  users: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_REQUEST':
    case 'LOGIN_REQUEST':
    case 'FETCH_USERS_REQUEST':
      return { ...state, loading: true, error: null };
    case 'REGISTER_SUCCESS':
    case 'LOGIN_SUCCESS':
      return { ...state, loading: false, user: action.payload };
    case 'FETCH_USERS_SUCCESS':
      return { ...state, loading: false, users: action.payload };
    case 'REGISTER_FAILURE':
    case 'LOGIN_FAILURE':
    case 'FETCH_USERS_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default authReducer;
