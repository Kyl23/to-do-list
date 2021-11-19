import React from "react";
import PropTypes from "prop-types";
import { AddButton } from "../../style/css_element";
function Put_To_Do({ txt, setTxt, setTask, addButtonRef }) {
  return (
    <AddButton
      ref={addButtonRef}
      type="button"
      value="新增"
      onClick={() => {
        setTask(txt);
        setTxt("");
      }}
    />
  );
}
Put_To_Do.prototype = {
  setTasks: PropTypes.func.isRequired,
  txt: PropTypes.string.isRequired,
  setTxt: PropTypes.func.isRequired,
};
export default Put_To_Do;