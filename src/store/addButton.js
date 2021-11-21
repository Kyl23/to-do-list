const Button = (state = {}, action) => {
  switch (action.type) {
    case "BindButton": {
      return action.button;
    }
    default:
      return state;
  }
};
export default Button;
