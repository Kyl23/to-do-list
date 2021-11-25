const NEW_TASK = (id, text) => {
  return {
    type: actionType.NEW_TASK,
    new: {
      id: id,
      value: text,
      reminder: false,
    },
  };
};
const INIT_TASK = (data) => {
  return {
    type: actionType.INIT_TASK,
    allTask: data,
  };
};
const DELETE_TASK = (id) => {
  return { type: actionType.DELETE_TASK, id: id };
};
const SWITCH_TASK = (id) => {
  return { type: actionType.SWITCH_TASK, id: id };
};
export const action = {
  INIT_TASK: INIT_TASK,
  NEW_TASK: NEW_TASK,
  DELETE_TASK: DELETE_TASK,
  SWITCH_TASK: SWITCH_TASK,
};

export const actionType = {
  INIT_TASK: "INIT_TASK",
  NEW_TASK: "NEW_TASK",
  DELETE_TASK: "DELETE_TASK",
  SWITCH_TASK: "SWITCH_TASK",
};
