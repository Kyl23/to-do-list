import { createContext, useState, useRef } from "react";

export const homePgContext = createContext();

export const DataProvider = (props) => {
  const [txt, setTxt] = useState("");
  const [tasks, setTasks] = useState([]);
  const [n_id, setN_id] = useState(1);
  const AddButtonRef = useRef(0);

  return (
    <homePgContext.Provider
      value={{
        textContext: [txt, setTxt],
        taskContext: [tasks, setTasks],
        idContext: [n_id, setN_id],
        refContext: AddButtonRef,
      }}
    >
      {props.children}
    </homePgContext.Provider>
  );
};
