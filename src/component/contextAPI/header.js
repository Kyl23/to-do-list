import Input from "./input";
import PutButton from "./put_to_do";
import { useState, useContext, useEffect } from "react";
import { HeadDiv } from "../../style/css_element";
import { AppPool } from "../../Pool/AppPool";
import { HomePgContext } from "../../context/HomePgContext";
function Header() {
  const poolValue = useContext(AppPool);
  const homeValue = useContext(HomePgContext);
  const [, setTasks] = homeValue.taskContext;
  const [pool] = poolValue.PoolContext;
  const [isLegal] = poolValue.ActiveContext;
  const [id, setId] = homeValue.idContext;
  const getTasksFromServer = async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/JiaAnTW/json_storage/master/react-tutorial/todolist.json",
      { method: "GET" }
    );
    const data = await response.text();
    const result = await JSON.parse(data).data;

    return result;
  };

  const [Holder, setHolder] = useState([]);
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await getTasksFromServer();
      if (id === 0 && isLegal) setHolder(tasksFromServer);
      else if (id === 0 && pool.length !== 0) {
        setId(pool.length + 1);
        setTasks(pool);
      }
    };
    getTasks();
  }, [id, pool, setTasks, isLegal, setId]);
  useEffect(() => {
    setId(Holder.length + 1);
    setTasks(Holder);
  }, [Holder, setId, setTasks]);

  return (
    <HeadDiv>
      <Input />
      <PutButton />
    </HeadDiv>
  );
}

export default Header;
