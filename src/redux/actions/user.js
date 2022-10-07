import {
  CHANGE_AVATAR,
  CHANGE_PASSWORD,
  EDIT_USER,
  GET_AVATAR,
  GET_ERRORS,
  GET_SAVED_POSTS,
  GET_USER_POSTS,
  BOARD_LOADING,
  USER_LOADED,
  USER_LOADING,
} from "./types";
import axiosInstance from "../../utils/axios";
import { tokenConfig } from "./auth";

export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  axiosInstance
    .get(`/api/user/profile/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response,
      });
    });
};

export const editUser = (username, email) => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  const body = JSON.stringify({ username, email });

  axiosInstance
    .put(`/api/user/profile/`, body, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: EDIT_USER,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response,
      });
    });
};

export const changePassword =
  (old_password, new_password) => (dispatch, getState) => {
    dispatch({ type: USER_LOADING });

    const body = JSON.stringify({ old_password, new_password });

    axiosInstance
      .put("/api/user/password/change/", body, tokenConfig(getState))
      .then((res) => {
        dispatch({
          type: CHANGE_PASSWORD,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_ERRORS,
          payload: err.response,
        });
      });
  };

export const getSavedPosts = (user_id) => (dispatch, getState) => {
  dispatch({ type: BOARD_LOADING });

  axiosInstance
    .get(`/api/user/profile/${user_id}/bookmarks/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_SAVED_POSTS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response,
      });
    });
};

export const getUserPosts = (username) => (dispatch, getState) => {
  dispatch({ type: BOARD_LOADING });

  axiosInstance
    .get(`/api/user/post/?author__username=${username}`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_USER_POSTS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response,
      });
    });
};

export const getAvatar = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  axiosInstance
    .get("/api/user/profile/avatar/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_AVATAR,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response,
      });
    });
};

export const changeAvatar = (avatar) => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  axiosInstance
    .put("/api/user/profile/avatar/", avatar, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: CHANGE_AVATAR,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response,
      });
    });
};
