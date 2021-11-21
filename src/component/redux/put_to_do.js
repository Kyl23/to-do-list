import React from "react";
import PropTypes from "prop-types";
import { AddButton } from "../../style/css_element";
import { useDispatch, useSelector } from "react-redux";
function Put_To_Do() {
  const text = useSelector((state) => state.input);
  const id = useSelector((state) => state.id);
  const dispatch = useDispatch();
  return (
    <AddButton
      type="button"
      value="新增"
      onClick={() => {
        dispatch({
          type: "NewTask",
          new: {
            id: id,
            value: text,
            reminder: false,
          },
        });
        dispatch({ type: "Add" });
        dispatch({ type: "ClearAll" });
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
