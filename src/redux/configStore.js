import { persistReducer } from "redux-persist";
import { createStore, combineReducers, applyMiddleware } from "redux";
// import { createLogger } from 'redux-logger';
// local storage 사용
import storage from "redux-persist/lib/storage";
import ReduxThunk from "redux-thunk";

import rootReducer from "./reducers/rootReducer";

const persistConfig = {
  key: "root",
  //local storage에 저장
  storage: storage,
};

// https://redux-advanced.vlpt.us/2/01.html

// const logger = createLogger();

const store = createStore(
  persistReducer(persistConfig, rootReducer),
  //rootReducer,
  applyMiddleware(ReduxThunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
