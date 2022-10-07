/* eslint-disable import/no-anonymous-default-export */
import {
  BOARD_LOADING,
  GET_BOARDS,
  GET_DETAIL_POST,
  CLEAR_BOARD,
  CREATE_BOARD,
  LIKE_BOARD,
  EDIT_BOARD,
  DELETE_BOARD,
  SAVE_BOARD,
} from "../actions/types";

const initialState = {
  is_loading: false,
  boards: null,
  post_detail: null,
  likedBoard: null,
};

export default function (state = initialState, action) {
    console.log( action.type );
    console.log( state );

  switch (action.type) {
    case BOARD_LOADING:
      return {
        ...state,
        is_loading: true,
      };
    case GET_BOARDS:
      return {
        ...state,
        is_loading: false,
        boards: action.payload,
      };
    case GET_DETAIL_POST:
      return {
        ...state,
        is_loading: false,
        post_detail: action.payload,
      };
    case CLEAR_BOARD:
      return {
        ...state,
        is_loading: false,
        boards: null,
      };
    case CREATE_BOARD:
      return {
        ...state,
        is_loading: false,
      };
    case EDIT_BOARD:
      return {
        ...state,
        is_loading: false,
      };
    case LIKE_BOARD:
      return {
        ...state,
        is_loading: false,
        likedBoard: action.payload,
      };
    case DELETE_BOARD:
      return {
        ...state,
        is_loading: false,
      };
    case SAVE_BOARD:
      return {
        ...state,
        is_loading: false,
      };
    default:
      return state;
  }
}
