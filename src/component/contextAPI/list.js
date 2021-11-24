import { useContext, useCallback } from "react";
import Button from "./button";
import { HomePgContext } from "../../context/HomePgContext";

function List() {
  const value = useContext(HomePgContext);
  const [tasks, setTasks] = value.taskContext;

  const Toggle = useCallback(
    (id) => {
      tasks.tasks.map((task) =>
        task.id === id ? (task.reminder = !task.reminder) : ""
      );
    },
    [tasks]
  );

  const Delete_ = useCallback(
    (id) => {
      setTasks({
        tasks: tasks.tasks.filter((task) => task.id !== id),
        id: tasks.id,
      });
    },
    [tasks, setTasks]
  );

  return (
    <>
      {tasks.tasks.map((task) => (
        <Button key={task.id} task={task} toggle={Toggle} delete_={Delete_} />
      ))}
    </>
  );
}
export default List;
