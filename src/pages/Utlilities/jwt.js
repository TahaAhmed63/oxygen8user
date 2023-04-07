import axios from "axios";
const setSession = (token,user) => {
  if (token) {
    // localStorage.setItem("user", user);
    localStorage.setItem("accesstoken", token);
    axios.defaults.headers.common.Authorization = `Bearer${token}`;
  } else {
    localStorage.removeItem("accesstoken");
    // localStorage.removeItem("user");
    delete axios.defaults.headers.common.Authorization;
  }
};
export {setSession};