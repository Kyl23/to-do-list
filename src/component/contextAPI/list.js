import { useContext, useCallback } from "react";
import Button from "./button";
import { homePgContent } from "../../context/homePgContext";

function List() {
  const value = useContext(homePgContent);

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
    [tasks,setTasks]
  );

  return (
    <>
      {tasks.map((task) => (
        <Button key={task.id} task={task} toggle={Toggle} delete_={Delete_} />
      ))}
    </>
  );
}
export default List;
