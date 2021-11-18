import PropTypes from "prop-types";
import { TextInput } from "../../style/css_element";

const Input = ({ txt, setTxt, addButtonRef }) => {
  return (
    <TextInput
      type="text"
      placeholder="新增任務"
      value={txt}
      onChange={(e) => setTxt(e.target.value)}
      onKeyDown={(e) => (e.key === "Enter" ? addButtonRef.current.click() : "")}
    />
  );
};
Input.prototype = {
  txt: PropTypes.string.isRequired,
  setTxt: PropTypes.func.isRequired,
};
export default Input;
