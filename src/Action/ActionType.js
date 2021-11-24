const NEW_TASK = (id, text) => {
  return {
    type: "NEW_TASK",
    new: {
      id: id,
      value: text,
      reminder: false,
    },
  };
};
const INIT_TASK = (data) => {
  return {
    type: "INIT_TASK",
    allTask: data,
  };
};
const DELETE_TASK = (id) => {
  return { type: "DELETE_TASK", id: id };
};
const SWITCH_TASK = (id) => {
  return { type: "SWITCH_TASK", id: id };
};
export const ActionType = {
  INIT_TASK: INIT_TASK,
  NEW_TASK: NEW_TASK,
  DELETE_TASK: DELETE_TASK,
  SWITCH_TASK: SWITCH_TASK,
};
