import { useContext, useCallback, useEffect } from "react";
import Button from "./button";
import { homePgContext } from "../../context/homePgContext";
import { AppPool } from "../../Pool/AppPool";

function List() {
  
  const value = useContext(homePgContext);

  const [tasks, setTasks] = value.taskContext;

  const Toggle = useCallback(
    (id) => {
      tasks.map((task) =>
        task.id === id ? (task.reminder = !task.reminder) : ""
      );
    },
    [tasks]
  );

  const Delete_ = useCallback(
    (id) => {
      setTasks(tasks.filter((task) => task.id !== id));
    },
    [tasks, setTasks]
  );
  const valuePool = useContext(AppPool);
  const [, setPool] = valuePool.PoolContext;
  const [, setFunc] = valuePool.FuncContext;
  useEffect(() => {
    //below is setPool
    setPool(tasks);
    setFunc((setTarget = () => {}, data) => {
      setTarget([data]);
    });
  }, [setPool, setFunc, tasks]);

  return (
    <>
      {tasks.map((task) => (
        <Button key={task.id} task={task} toggle={Toggle} delete_={Delete_} />
      ))}
    </>
  );
}
export default List;
