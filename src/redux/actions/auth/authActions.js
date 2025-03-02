import { jwtDecode } from "jwt-decode";

//  LOGIN
export const login = (credentials) => async (dispatch) => {
  try {
    dispatch({ type: 'LOGIN_REQUEST' });
    const response = await fetch('https://devkid.online/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials)
    });

    const data = await response.json();
    console.log("Login response:", data); 

    if (data.isSuccess && data.statusCode === 200) {
   
      localStorage.setItem('accessToken', data.result.data.accessToken);
      localStorage.setItem('refreshToken', data.result.data.refreshToken);

     
      const decoded = jwtDecode(data.result.data.accessToken);
      console.log("Decoded token:", decoded); 

      try {
        // Lấy userId từ trường iss trong decoded token
        const userId = decoded.iss;  

      
        const userResponse = await fetch(`https://devkid.online/api/users/${userId}`, {
          headers: {
            'Authorization': `Bearer ${data.result.data.accessToken}`,
            'Accept': 'application/json'
          }
        });

        if (!userResponse.ok) {
          throw new Error('Failed to fetch user data');
        }

        const userData = await userResponse.json();
        console.log("User data:", userData); // Log để xem user data

        if (userData.isSuccess && userData.statusCode === 200) {
          dispatch({
            type: 'LOGIN_SUCCESS',
            payload: {
              user: userData.result.data,
              tokens: {
                accessToken: data.result.data.accessToken,
                refreshToken: data.result.data.refreshToken
              }
            }
          });

          return { type: 'LOGIN_SUCCESS' };
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        dispatch({
          type: 'LOGIN_FAILURE',
          payload: 'Failed to fetch user data'
        });
        return { type: 'LOGIN_FAILURE' };
      }
    } else {
      throw new Error(data.message || 'Login failed');
    }
  } catch (error) {
    console.error('Login error:', error);
    dispatch({
      type: 'LOGIN_FAILURE',
      payload: error.message
    });
    return { type: 'LOGIN_FAILURE' };
  }
};

// REGISTER
export const register = (formData) => async (dispatch) => {
  dispatch({ type: "REGISTER_REQUEST" });
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
      dispatch({ type: "REGISTER_SUCCESS", payload: data });
    } else {
      dispatch({ type: "REGISTER_FAILURE", payload: data });
    }
  } catch (error) {
    dispatch({ type: "REGISTER_FAILURE", payload: error.message });
  }
};
// GET USERS
export const fetchUsers = () => async (dispatch) => {
  dispatch({ type: "FETCH_USERS_REQUEST" });
  try {
    const response = await fetch("https://devkid.online/api/users");
    const data = await response.json();
    if (response.ok) {
      dispatch({ type: "FETCH_USERS_SUCCESS", payload: data });
    } else {
      dispatch({ type: "FETCH_USERS_FAILURE", payload: data });
    }
  } catch (error) {
    dispatch({ type: "FETCH_USERS_FAILURE", payload: error.message });
  }
};
