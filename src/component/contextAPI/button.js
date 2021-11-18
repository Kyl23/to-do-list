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
    setchange(change === 0 ? 1 : 0); //force update
  };
  return (
    <ButtonContainer>
      <DynamicRemindStatus task={task} onClick={() => handle(task.id)}>
        <TextDiv>{task.value}</TextDiv>
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
