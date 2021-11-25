import { useContext, useCallback } from "react";
import PropTypes from "prop-types";
import { TextInput } from "../../style/css_element";
import { HomePgContext } from "../../context/HomePgContext";
import { action } from "../../Action/actionType";

const Input = ({ txt, setTxt }) => {
  const [tasks, dispatch] = useContext(HomePgContext);
  const SetTask = useCallback(
    (value) => {
      if (value.length <= 0) return;
      dispatch(action.NEW_TASK(tasks.id,value));
      setTxt("");
    },
    [tasks,dispatch, setTxt]
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
