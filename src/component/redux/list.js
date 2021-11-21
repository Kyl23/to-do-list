import React from "react";
import PropTypes from "prop-types";

import Button from "./button";
import { useSelector } from "react-redux";

function List() {
  const tasks = useSelector((state) => state.tasks);
  return (
    <>
      {tasks.map((task) => (
        <Button key={task.id} task={task} />
      ))}
    </>
  );
}
List.prototype = {
  setTasks: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
  toggle: PropTypes.func.isRequired,
  delete_: PropTypes.func.isRequired,
};
export default List;
