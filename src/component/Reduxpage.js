import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./redux/header";
import List from "./redux/list";
import { ActionType } from "../Action/ActionType";
function Homepage() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetching = () => {
      if (tasks.id === 0) {
        fetch(
          "https://raw.githubusercontent.com/JiaAnTW/json_storage/master/react-tutorial/todolist.json",
          { method: "GET" }
        )
          .then((res) => res.json())
          .then((result) => {
            dispatch({ type: ActionType.INIT_TASK, allTask: result.data });
          });
      }
    };
    fetching();
  }, [tasks, dispatch]);
  return (
    <>
      <Header />
      <List />
    </>
  );
}

export default Homepage;
