const tasks = (state = [], action) => {
  switch (action.type) {
    case "InitTask":
      return action.allTask;
    case "NewTask":
      return [...state, action.new];
    case "DeleteTask":
      return state.filter((task) => task.id !== action.id);
    case "SwitchStatus":
      return state.map((task) =>
        task.id === action.id ? { ...task, reminder: !task.reminder } : task
      );
    default:
      return state;
  }
};
export default tasks;
