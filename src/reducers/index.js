import { combineReducers } from "redux";
import emailReducer from "./setEmailReducer";
import passwordReducer from "./setPasswordreducer";

export default combineReducers({
  email: emailReducer,
  password: passwordReducer,
});
