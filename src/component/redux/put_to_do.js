import React from "react";
import PropsTypes from "prop-types";
import { AddButton } from "../../style/css_element";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../../Action/actionType";
function Put_To_Do({ text, setText }) {
  const id = useSelector((state) => state.tasks.id);
  const dispatch = useDispatch();
  return (
    <AddButton
      type="button"
      value="新增"
      onClick={() => {
        dispatch(action.NEW_TASK(id, text));
        setText("");
      }}
    />
  );
}
Put_To_Do.prototype = {
  text: PropsTypes.string.isRequired,
  setText: PropsTypes.func.isRequired,
};
export default Put_To_Do;
