import { useState } from "react";
import PropTypes from "prop-types";
import {
  ButtonContainer,
  DeleteIcon,
  DynamicRemindStatus,
  TextDiv,
} from "../../style/css_element";

function Button_({ task, toggle, delete_ }) {
  const [change, setchange] = useState(0);

  const handle = (id) => {
    toggle(id);
    setchange(!change); //force update
  };
  const changeTask = (newTask) => {
    task.value = newTask;
    setchange(!change); //force update
  };
  return (
    <ButtonContainer>
      <DynamicRemindStatus task={task} onDoubleClick={() => handle(task.id)}>
        <TextDiv
          onChange={(e) => changeTask(e.target.value)}
          value={task.value}
          placeholder="Empty Task"
        />
        <DeleteIcon onClick={() => delete_(task.id)}> x </DeleteIcon>
      </DynamicRemindStatus>
    </ButtonContainer>
  );
}
Button_.prototype = {
  tasks: PropTypes.array.isRequired,
  type: PropTypes.bool.isRequired,
};
export default Button_;
