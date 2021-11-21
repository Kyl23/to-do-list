import { useDispatch, useSelector } from "react-redux";
import { TextInput } from "../../style/css_element";

const Input = () => {
  const input = useSelector((state) => state.input);
  const id = useSelector((state) => state.id);
  const dispatch = useDispatch();
  const setTask = () => {
    dispatch({
      type: "NewTask",
      new: {
        id: id,
        value: input,
        reminder: false,
      },
    });
    dispatch({ type: "Add" });
    dispatch({ type: "ClearAll" });
  };
  return (
    <TextInput
      type="text"
      placeholder="新增任務"
      value={input}
      onChange={(e) => dispatch({ type: "SetText", text: e.target.value })}
      onKeyDown={(e) => (e.key === "Enter" ? setTask() : "")}
    />
  );
};
export default Input;
