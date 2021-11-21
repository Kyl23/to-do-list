import { useDispatch, useSelector } from "react-redux";
import { TextInput } from "../../style/css_element";

const Input = ({ text, setText }) => {
  const id = useSelector((state) => state.tasks.id);
  const dispatch = useDispatch();
  const setTask = () => {
    dispatch({
      type: "NewTask",
      new: {
        id: id,
        value: text,
        reminder: false,
      },
    });
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
