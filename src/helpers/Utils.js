export const setToken = (token) => {
  try {
    if (token) {
      localStorage.setItem("token", JSON.stringify(token));
    } else {
      localStorage.removeItem("token");
    }
  } catch (error) {
    console.log(">>>>: src/helpers/Utils.js : setToken -> error", error);
  }
};

export const getToken = () => {
  let token = null;
  try {
    token =
      localStorage.getItem("token") != null
        ? JSON.parse(localStorage.getItem("token"))
        : null;
  } catch (error) {
    console.log(">>>>: src/helpers/Utils.js  : getToken -> error", error);
    token = null;
  }
  return token;
};

export const clearToken = async () => {
  try {
    await localStorage.removeItem("token");
  } catch (error) {
    console.log(">>>>: src/helpers/Utils.js  : clearToken -> error", error);
  }
};

export const setUserId = (id) => {
  try {
    if (id) {
      localStorage.setItem("user-id", JSON.stringify(id));
    } else {
      localStorage.removeItem("user-id");
    }
  } catch (error) {
    console.log(">>>>: src/helpers/Utils.js : setToken -> error", error);
  }
};

export const getUserId = () => {
  let token = null;
  try {
    token =
      localStorage.getItem("user-id") != null
        ? JSON.parse(localStorage.getItem("user-id"))
        : null;
  } catch (error) {
    console.log(">>>>: src/helpers/Utils.js  : getToken -> error", error);
    token = null;
  }
  return token;
};

export const clearUserId = async () => {
  try {
    await localStorage.removeItem("user-id");
  } catch (error) {
    console.log(">>>>: src/helpers/Utils.js  : clearToken -> error", error);
  }
};

export const setRole = (role) => {
  try {
    if (role) {
      localStorage.setItem("role", JSON.stringify(role));
    } else {
      localStorage.removeItem("role");
    }
  } catch (error) {
    console.log(">>>>: src/helpers/Utils.js : setToken -> error", error);
  }
};

export const getRole = () => {
  let token = null;
  try {
    token =
      localStorage.getItem("role") != null
        ? JSON.parse(localStorage.getItem("role"))
        : null;
  } catch (error) {
    console.log(">>>>: src/helpers/Utils.js  : getToken -> error", error);
    token = null;
  }
  return token;
};

export const clearRole = async () => {
  try {
    await localStorage.removeItem("role");
  } catch (error) {
    console.log(">>>>: src/helpers/Utils.js  : clearToken -> error", error);
  }
};
