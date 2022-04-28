import { URL_SIGN_IN, URL_SIGN_UP, URL_LOGOUT } from "../utils/urlConstants";
import { userContants } from "../utils/constants";
import { fetchData } from "./fetch";
import storage from "redux-persist/lib/storage";

export const signIn = (userData) => async (dispatch) => {
  const res = await fetchData({
    url: URL_SIGN_IN,
    method: "post",
    body: { ...userData },
  });
  const { token, user } = res;
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
  dispatch({
    type: userContants.SIGN_IN_SUCCESS,
    payload: { token, user },
  });
};

export const signUp = (newUser) => async (dispatch) => {
  const res = await fetchData({
    url: URL_SIGN_UP,
    method: "post",
    body: { ...newUser },
  });
  if (res.status === 201) {
    const { message } = res;
    dispatch({
      type: userContants.SIGN_UP_SUCCESS,
      payload: { message },
    });
  } else {
    if (res.status === 400) {
      dispatch({
        type: userContants.SIGN_UP_FAIL,
        payload: { error: "SingUp Failed" },
      });
    }
  }
};

export const isUserLoggedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: userContants.SIGN_IN_SUCCESS,
        payload: { token, user },
      });
    } else {
      dispatch({
        type: userContants.SIGN_IN_FAIL,
        payload: { error: "Login Failed" },
      });
    }
  };
};

export const logOut = () => async (dispatch) => {
  await fetchData({ url: URL_LOGOUT, method: "post" });
  localStorage.clear();
  storage.removeItem('token')
  storage.removeItem('persist:root')
  window.location.reload()
  dispatch({
    type: userContants.LOGOUT_SUCCESS,
  });
};
