import {
  ButtonContainer,
  DeleteIcon,
  DynamicRemindStatus,
  TextDiv,
} from "../../style/css_element";
import { useDispatch } from "react-redux";
import { useState } from "react";

function Button_({ task }) {
  const dispatch = useDispatch();
  const [change, setchange] = useState(0);
  const changeTask = (newTask) => {
    task.value = newTask;
    setchange(!change); //force update
  };

  return (
    <ButtonContainer>
      <DynamicRemindStatus
        task={task}
        onDoubleClick={() => dispatch({ type: "SwitchStatus", id: task.id })}
      >
        <TextDiv
          onChange={(e) => changeTask(e.target.value)}
          value={task.value}
          placeholder="Empty Task"
        />
        <DeleteIcon
          onClick={() => dispatch({ type: "DeleteTask", id: task.id })}
        >
          x
        </DeleteIcon>
      </DynamicRemindStatus>
    </ButtonContainer>
  );
}
export default Button_;
