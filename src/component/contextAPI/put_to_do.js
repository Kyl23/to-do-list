import { useContext, useCallback } from "react";
import PropsTypes from "prop-types"
import { AddButton } from "../../style/css_element";
import { HomePgContext } from "../../context/HomePgContext";
import { action } from "../../Action/actionType";
function Put_To_Do({ txt, setTxt }) {
  const [,dispatch] = useContext(HomePgContext);

  const SetTask = useCallback(
    (value) => {
      dispatch(action.NEW_TASK(value));
      setTxt("");
    },
    [dispatch, setTxt]
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
Put_To_Do.prototype = {
  text: PropsTypes.string.isRequired,
  setText: PropsTypes.func.isRequired,
};
export default Put_To_Do;
