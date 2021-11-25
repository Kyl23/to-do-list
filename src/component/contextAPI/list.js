import { useContext, useCallback } from "react";
import Button from "./button";
import { HomePgContext } from "../../context/HomePgContext";
import { action } from "../../Action/actionType";

function List() {
  const [tasks, dispatch] = useContext(HomePgContext);

  const Toggle = useCallback(
    (id) => {
      dispatch(action.SWITCH_TASK(id))
    },
    [dispatch]
  );

  const Delete_ = useCallback(
    (id) => {
      dispatch(action.DELETE_TASK(id));
    },
    [dispatch]
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
