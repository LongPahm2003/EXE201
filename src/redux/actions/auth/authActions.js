import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-hot-toast";

// ============================LOGIN
export const initAuth = () => (dispatch) => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    const user = JSON.parse(localStorage.getItem("user"));

    if (accessToken && user) {
      const decoded = jwtDecode(accessToken);
      const currentTime = Date.now() / 1000;

      if (decoded.exp < currentTime) {
        console.warn("Access token expired, consider refreshing.");
        dispatch(logout());
        return;
      }

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { user, tokens: { accessToken, refreshToken } },
      });
    }
  } catch (error) {
    console.error("Error initializing auth:", error);
  }
};

export const login = (credentials) => async (dispatch) => {
  try {
    dispatch({ type: "LOGIN_REQUEST" });

    const response = await fetch(`https://devkid.online/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();
    console.log("Login response:", data);

    if (!data.isSuccess || data.statusCode !== 200) {
      throw new Error(data.message || "Login failed");
    }

    const { accessToken, refreshToken } = data.result.data;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    const decoded = jwtDecode(accessToken);
    console.log("Decoded token:", decoded);

    const userData = await fetchUser(decoded.iss, accessToken);
    if (!userData) throw new Error("Failed to fetch user data");

    localStorage.setItem("user", JSON.stringify(userData));

    dispatch({
      type: "LOGIN_SUCCESS",
      payload: { user: userData, tokens: { accessToken, refreshToken } },
    });

    return { type: "LOGIN_SUCCESS" };
  } catch (error) {
    console.error("Authentication error:", error);
    dispatch({ type: "LOGIN_FAILURE", payload: error.message });
    return { type: "LOGIN_FAILURE" };
  }
};

export const fetchUser = async (userId, token) => {
  try {
    const response = await fetch(`https://devkid.online/api/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const userData = await response.json();
    console.log("User data:", userData);

    if (!userData.isSuccess || userData.statusCode !== 200) {
      return null;
    }

    return userData.result.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};

export const logout = () => {
  return async (dispatch) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken");

      if (!refreshToken || !accessToken) {
        console.error("No tokens found");
        return;
      }

      const url = `https://devkid.online/api/auth/logout?token=${encodeURIComponent(refreshToken)}`;

      await axios.post(
        url,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      // Xóa dữ liệu khỏi localStorage
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");

      dispatch({ type: "LOGOUT" });
      console.log("Logout successful!");
    } catch (error) {
      console.error("Logout error:", error.response?.data || error.message);
    }
  };
};

//============================REGISTER
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




// UPADTE USERUSER
export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE";

export const updateUser = (userData) => async (dispatch, getState) => {
  dispatch({ type: UPDATE_USER_REQUEST });

  try {
    const { auth } = getState();
    const accessToken = auth?.tokens?.accessToken;
    
    if (!accessToken) {
      throw new Error("No access token found");
    }

    const decoded = jwtDecode(accessToken);
    const userId = decoded.iss;

    await axios.put(
      `https://devkid.online/api/users/${userId}`,
      userData,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Gọi API để lấy dữ liệu user mới nhất
    const response = await axios.get(`https://devkid.online/api/users/${userId}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    dispatch({ type: UPDATE_USER_SUCCESS, payload: response.data });
    toast.success("Update successfully!", { duration: 3000, position: "top-right" });
  } catch (error) {
    dispatch({ type: UPDATE_USER_FAILURE, payload: error.message });
    toast.error("Failed to update profile. Please try again!", { duration: 3000, position: "top-right" });
  }
};
