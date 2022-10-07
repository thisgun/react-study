import {
  BOARD_LOADING,
  GET_BOARDS,
  GET_DETAIL_POST,
  GET_ERRORS,
  CREATE_BOARD,
  LIKE_BOARD,
  EDIT_BOARD,
  DELETE_BOARD,
  SAVE_BOARD,
} from "./types";

import axiosInstance from "../../utils/axios";
import { tokenConfig } from "./auth";

export const getBoards = (id) => (dispatch, getState) => {
  dispatch({ type: BOARD_LOADING });

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  console.log( "aaabbbb" + id );

  axiosInstance
    .get(`/api/board/${id}`, null, config)
    .then((res) => {

      console.log( res );

      dispatch({
        type: GET_BOARDS,
        payload: res.data,
      });
    })
    .catch((err) => {

        console.log( err );

      dispatch({
        type: GET_ERRORS,
        payload: err.response,
      });
    });
};

export const getDetailPost = (post_id) => (dispatch, getState) => {
  dispatch({ type: BOARD_LOADING });

  axiosInstance
    .get(`/api/post/${post_id}`, tokenConfig(getState))
    .then((res) => {

      console.log(GET_DETAIL_POST);

      dispatch({
        type: GET_DETAIL_POST,
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

export const createBoard = (formData) => (dispatch, getState) => {
  dispatch({ type: BOARD_LOADING });

  axiosInstance
    .post("/board/create/", formData, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: CREATE_BOARD,
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

export const editBoard = (id, formData) => (dispatch, getState) => {
  dispatch({ type: BOARD_LOADING });

  axiosInstance
    .patch(`/board/${id}/`, formData, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: EDIT_BOARD,
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

export const deletePost = (id) => (dispatch, getState) => {
  dispatch({ type: BOARD_LOADING });

  axiosInstance
    .delete(`/api/board/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: DELETE_BOARD,
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

export const likePost = (id) => (dispatch, getState) => {
  dispatch({ type: BOARD_LOADING });

  axiosInstance
    .post(`/board/${id}/like/`, null, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: LIKE_BOARD,
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

export const savePost = (user_id, id) => (dispatch, getState) => {
  dispatch({ type: BOARD_LOADING });

  const body = JSON.stringify({ id });

  axiosInstance
    .post(`/user/profile/${user_id}/bookmarks/`, body, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: SAVE_BOARD,
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
