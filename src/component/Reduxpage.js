import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./redux/header";
import List from "./redux/list";
import { ActionType } from "../Action/ActionType";

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
        dispatch(ActionType.INIT_TASK(result.data));
      });
  };
};

function Homepage() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetching = async () => {
      if (tasks.id === 0) {
        dispatch(getFromServer());
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
