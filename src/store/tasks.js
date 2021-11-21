const tasks = (state = { tasks: [], id: 0 }, action) => {
  const tasks = state.tasks;
  const id = state.id;
  switch (action.type) {
    case "INIT_TASK":
      return { tasks: action.allTask, id: action.allTask.length };
    case "NEW_TASK":
      return { tasks: [...tasks, action.new], id: id + 1 };
    case "DELETE_TASK":
      return { tasks: tasks.filter((task) => task.id !== action.id), id: id };
    case "SWITCH_TASK":
      return {
        tasks: tasks.map((task) =>
          task.id === action.id ? { ...task, reminder: !task.reminder } : task
        ),
        id: id,
      };
    default:
      return state;
  }
};
export default tasks;
