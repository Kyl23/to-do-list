import tasksReducer from "../store/tasks";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  tasks: tasksReducer,
});
export default allReducers;
