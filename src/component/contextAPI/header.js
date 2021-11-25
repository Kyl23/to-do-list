import Input from "./input";
import PutButton from "./put_to_do";
import { useState, useContext, useEffect, useCallback } from "react";
import { HeadDiv } from "../../style/css_element";
import { HomePgContext } from "../../context/HomePgContext";
import { action } from "../../Action/actionType";

const getTasksFromServer = async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/JiaAnTW/json_storage/master/react-tutorial/todolist.json",
    { method: "GET" }
  );
  const data = await response.text();
  const result = await JSON.parse(data).data;

  return result;
};

function Header() {
  const [homeValue, dispatch] = useContext(HomePgContext);

  const n_id = homeValue.id;

  const [originTasks, setoriginTasks] = useState([]);
  const SetOriginTasks = useCallback((tasks) => {
    setoriginTasks(tasks);
  }, []);

  useEffect(() => {
    //fetch one time only
    const fetching = async () => {
      const data = await getTasksFromServer();
      SetOriginTasks(data);
    };
    fetching();
  }, [SetOriginTasks]);
  useEffect(() => {
    if (n_id === 0 && originTasks.length !== 0) {
      dispatch(action.INIT_TASK(originTasks));
    }
  }, [originTasks, n_id, dispatch]);

  const [input, setInput] = useState("");
  return (
    <HeadDiv>
      <Input txt={input} setTxt={setInput} />
      <PutButton txt={input} setTxt={setInput} />
    </HeadDiv>
  );
}

export default Header;
