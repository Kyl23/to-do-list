import React from "react";

import Button from "./button";
import { useSelector } from "react-redux";

function List() {
  const tasks = useSelector((state) => state.tasks.tasks);
  return (
    <>
      {tasks.map((task) => (
        <Button key={task.id} task={task} />
      ))}
    </>
  );
}
export default List;
