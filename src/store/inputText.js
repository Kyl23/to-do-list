const inputText = (state = "", action) => {
  switch (action.type) {
    case "SetText": {
      return action.text;
    }
    case "ClearAll": {
      return "";
    }
    default:
      return state;
  }
};
export default inputText;
