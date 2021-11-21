const id = (state = 0, action) => {
  switch (action.type) {
    case "Add":
      return state + 1;
    case "Value":
      return state + action.value;
    default:
      return state;
  }
};
export default id;
