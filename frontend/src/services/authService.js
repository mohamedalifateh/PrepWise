import api from "../api/api";

/**
 * Register a new user
 */
export const signup = async (userData) => {
  try {
    const response = await api.post("/users", userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

/**
 * Login user
 * FastAPI OAuth2PasswordRequestForm expects:
 * username=<email>
 * password=<password>
 */
export const login = async (email, password) => {
  try {
    const formData = new URLSearchParams();

    formData.append("username", email);
    formData.append("password", password);

    const response = await api.post("/users/token", formData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    const token = response.data.access_token;

    localStorage.setItem("token", token);

    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

/**
 * Get current logged-in user
 */
export const getCurrentUser = async () => {
  try {
    const response = await api.get("/users/me", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

/**
 * Logout
 */
export const logout = () => {
  localStorage.removeItem("token");
};

/**
 * Check Login
 */
export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};