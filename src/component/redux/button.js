import PropTypes from "prop-types";
import {
  ButtonContainer,
  DeleteIcon,
  DynamicRemindStatus,
  TextDiv,
} from "../../style/css_element";
import { useDispatch } from "react-redux";

function Button_({ task }) {
  const dispatch = useDispatch();

  return (
    <ButtonContainer>
      <DynamicRemindStatus
        task={task}
        onClick={() => dispatch({ type: "SwitchStatus", id: task.id })}
      >
        <TextDiv>{task.value}</TextDiv>
        <DeleteIcon
          onClick={() => dispatch({ type: "DeleteTask", id: task.id })}
        >
          x
        </DeleteIcon>
      </DynamicRemindStatus>
    </ButtonContainer>
  );
}
Button_.prototype = {
  tasks: PropTypes.array.isRequired,
  type: PropTypes.bool.isRequired,
};
export default Button_;
