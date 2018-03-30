import { combineReducers } from "redux";
import counterReducer from "./counterDuck";

export default combineReducers({
  counter: counterReducer,
});
