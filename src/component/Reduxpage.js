import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./redux/header";
import List from "./redux/list";
import { action } from "../Action/actionType";

const getFromServer = () => {
  return (dispatch) => {
    fetch(
      "https://raw.githubusercontent.com/JiaAnTW/json_storage/master/react-tutorial/todolist.json",
      { method: "GET" }
    )
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        dispatch(action.INIT_TASK(result.data));
      });
  };
};

function Homepage() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  useEffect(() => {
      if (tasks.id === 0) {
        dispatch(getFromServer());
      }
  }, [tasks, dispatch]);
  return (
    <>
      <Header />
      <List />
    </>
  );
}

export default Homepage;
