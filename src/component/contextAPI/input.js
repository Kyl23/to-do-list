import { useContext } from "react";
import PropTypes from "prop-types";
import { TextInput } from "../../style/css_element";
import { homePgContent } from "../../context/homePgContext";

const Input = () => {
  const value = useContext(homePgContent);
  const [txt, setTxt] = value.textContext;
  const addButtonRef = value.refContext;
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
