//  LOGIN
export const login = (formData) => async (dispatch) => {
    dispatch({ type: 'LOGIN_REQUEST' });
    try {
      const response = await fetch("https://devkid.online/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        // Lưu token vào local storage
        localStorage.setItem('accessToken', data.result.data.accessToken);
        localStorage.setItem('refreshToken', data.result.data.refreshToken);
        
        dispatch({ type: 'LOGIN_SUCCESS', payload: data });
        return { type: 'LOGIN_SUCCESS' }; 
      } else {
        dispatch({ type: 'LOGIN_FAILURE', payload: data.message || "Sai tài khoản hoặc mật khẩu." });
        return { type: 'LOGIN_FAILURE', message: data.message || "Sai tài khoản hoặc mật khẩu." }; 
      }
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
      return { type: 'LOGIN_FAILURE', message: error.message }; 
    }
  };

  
// REGISTER
export const register = (formData) => async (dispatch) => {
  dispatch({ type: 'REGISTER_REQUEST' });
  try {
    const response = await fetch("https://devkid.online/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (response.ok) {
      dispatch({ type: 'REGISTER_SUCCESS', payload: data });
    } else {
      dispatch({ type: 'REGISTER_FAILURE', payload: data });
    }
  } catch (error) {
    dispatch({ type: 'REGISTER_FAILURE', payload: error.message });
  }
};
// GET USERS
export const fetchUsers = () => async (dispatch) => {
  dispatch({ type: 'FETCH_USERS_REQUEST' });
  try {
    const response = await fetch("https://devkid.online/api/users");
    const data = await response.json();
    if (response.ok) {
      dispatch({ type: 'FETCH_USERS_SUCCESS', payload: data });
    } else {
      dispatch({ type: 'FETCH_USERS_FAILURE', payload: data });
    }
  } catch (error) {
    dispatch({ type: 'FETCH_USERS_FAILURE', payload: error.message });
  }
};