import React from "react";
import { AddButton } from "../../style/css_element";
import { useDispatch, useSelector } from "react-redux";
import { ActionType } from "../../Action/ActionType";
function Put_To_Do({ text, setText }) {
  const id = useSelector((state) => state.tasks.id);
  const dispatch = useDispatch();
  return (
    <AddButton
      type="button"
      value="新增"
      onClick={() => {
        dispatch(ActionType.NEW_TASK(id, text));
        setText("");
      }}
    />
  );
}
export default Put_To_Do;
