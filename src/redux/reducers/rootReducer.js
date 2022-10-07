import { combineReducers } from "redux";
import auth from "./auth";
import errors from "./errors";
import messages from "./messages";
import boards from "./boards";
//import forms from "./forms";
import user from "./user";

export default combineReducers({
  auth,
  errors,
  messages,
  boards,
  //forms,
  user,
});
