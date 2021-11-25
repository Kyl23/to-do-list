import { useDispatch, useSelector } from "react-redux";
import { action } from "../../Action/actionType";
import { TextInput } from "../../style/css_element";

const Input = ({ text, setText }) => {
  const id = useSelector((state) => state.tasks.id);
  const dispatch = useDispatch();
  const setTask = () => {
    setText("");
    dispatch(action.NEW_TASK(id, text));
  };
  return (
    <TextInput
      type="text"
      placeholder="新增任務"
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={(e) => (e.key === "Enter" ? setTask() : "")}
    />
  );
};
export default Input;
