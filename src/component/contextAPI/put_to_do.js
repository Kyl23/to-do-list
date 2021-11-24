import { useContext, useCallback } from "react";
import { AddButton } from "../../style/css_element";
import { HomePgContext } from "../../context/HomePgContext";
function Put_To_Do({ txt, setTxt }) {
  const value = useContext(HomePgContext);
  const [tasks, setTasks] = value.taskContext;
  const n_id = tasks.id;

  const SetTask = useCallback(
    (value) => {
      if (value.length <= 0) return;
      let tp = {
        id: n_id,
        value: value,
        reminder: false,
      };
      setTasks({ tasks: [...tasks.tasks, tp], id: n_id + 1 });
      setTxt("");
    },
    [n_id, tasks, setTasks, setTxt]
  );

  return (
    <AddButton
      type="button"
      value="新增"
      onClick={() => {
        SetTask(txt);
      }}
    />
  );
}

export default Put_To_Do;
