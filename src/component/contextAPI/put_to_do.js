import { useContext, useCallback } from "react";
import { AddButton } from "../../style/css_element";
import { homePgContent } from "../../context/homePgContext";

function Put_To_Do() {
  const value = useContext(homePgContent);
  const [txt, setTxt] = value.textContext;
  const addButtonRef = value.refContext;
  const [n_id, setN_id] = value.idContext;
  const [tasks, setTasks] = value.taskContext;

  const SetTask = useCallback(
    (value) => {
      if (value.length <= 0) return;
      let tp = {
        id: n_id,
        value: value,
        reminder: false,
      };
      setTasks([...tasks, tp]);
      setN_id(n_id + 1);
    },
    [n_id, tasks,setTasks,setN_id]
  );

  return (
    <AddButton
      ref={addButtonRef}
      type="button"
      value="新增"
      onClick={() => {
        SetTask(txt);
        setTxt("");
      }}
    />
  );
}

export default Put_To_Do;
