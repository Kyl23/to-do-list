import { useContext, useCallback } from "react";
import PropTypes from "prop-types";
import { TextInput } from "../../style/css_element";
import { HomePgContext } from "../../context/HomePgContext";

const Input = ({ txt, setTxt }) => {
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
    <TextInput
      type="text"
      placeholder="新增任務"
      value={txt}
      onChange={(e) => setTxt(e.target.value)}
      onKeyDown={(e) => (e.key === "Enter" ? SetTask(e.target.value) : "")}
    />
  );
};
Input.prototype = {
  txt: PropTypes.string.isRequired,
  setTxt: PropTypes.func.isRequired,
};
export default Input;
