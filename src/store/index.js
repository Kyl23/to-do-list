import inputReducer from "../store/inputText";
import tasksReducer from "../store/tasks";
import idReducer from "../store/nowId";
import buttonReducer from "../store/addButton";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  input: inputReducer,
  tasks: tasksReducer,
  id: idReducer,
  button: buttonReducer,
});
export default allReducers;
