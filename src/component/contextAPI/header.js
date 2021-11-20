import Input from "./input";
import PutButton from "./put_to_do";
import {  useContext, useEffect } from "react";
import { HeadDiv } from "../../style/css_element";
import { AppPool } from "../../Pool/AppPool";
import { HomePgContext } from "../../context/HomePgContext";
function Header() {
  const poolValue = useContext(AppPool);
  const homeValue = useContext(HomePgContext);
  const [, setTasks] = homeValue.taskContext;
  const [pool,] = poolValue.PoolContext;

  const [id, setId] = homeValue.idContext;
  const getTasksFromServer = async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/JiaAnTW/json_storage/master/react-tutorial/todolist.json",
      { method: "GET" }
    )
     const data=await response.text();
     const result=await JSON.parse(data).data

     return result;
  };
  
  const determineAction =(data) => {
    if (id === 0 && pool.length !== 0) 
      setTasks(pool);
    else {
      setId(data.length+1)
      setTasks(data)
    }
  }

  useEffect(() => {
    const getTasks=async ()=>{
      const tasksFromServer= await getTasksFromServer();
     
      determineAction(tasksFromServer)
    }
    getTasks();
  }, []);


  return (
    <HeadDiv>
      <Input />
      <PutButton />
    </HeadDiv>
  );
}

export default Header;
