import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./redux/header";
import List from "./redux/list";

function Homepage() {
  const id = useSelector((state) => state.id);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetching = () => {
      if (id === 0) {
        fetch(
          "https://raw.githubusercontent.com/JiaAnTW/json_storage/master/react-tutorial/todolist.json",
          { method: "GET" }
        )
          .then((res) => res.json())
          .then((result) => {
            console.log(result.data.length);
            dispatch({ type: "Value", value: result.data.length + 1 });
            dispatch({ type: "InitTask", allTask: result.data });
          });
      }
    };
    fetching();
  }, [id, dispatch]);
  return (
    <>
      <Header />
      <List />
    </>
  );
}

export default Homepage;
