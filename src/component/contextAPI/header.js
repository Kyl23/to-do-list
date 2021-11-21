import Input from "./input";
import PutButton from "./put_to_do";
import { useState, useContext, useEffect, useCallback } from "react";
import { HeadDiv } from "../../style/css_element";
import { HomePgContext } from "../../context/HomePgContext";

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
  const homeValue = useContext(HomePgContext);
  const [, setTasks] = homeValue.taskContext;
  const [n_id, setN_id] = homeValue.idContext;

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
    if (n_id === 0 && originTasks.length!==0) {
      setTasks(originTasks);
      setN_id(originTasks.length + 1);
    }
  }, [originTasks, n_id, setTasks,setN_id]);
  return (
    <HeadDiv>
      <Input />
      <PutButton />
    </HeadDiv>
  );
}

export default Header;
