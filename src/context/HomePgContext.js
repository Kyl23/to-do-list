import { createContext, useState } from "react";

export const HomePgContext = createContext();

export const DataProvider = (props) => {
  const [tasks, setTasks] = useState({ tasks: [], id: 0 });

  return (
    <HomePgContext.Provider
      value={{
        taskContext: [tasks, setTasks],
      }}
    >
      {props.children}
    </HomePgContext.Provider>
  );
};
