import { useState, useCallback, useRef } from "react";
import Header from "./component/header";
import List from "./component/list";
function App() {
  const [txt, setTxt] = useState("");
  const [tasks, setTasks] = useState([]);
  const [n_id, setN_id] = useState(1);
  const AddButtonRef = useRef(0);
  const SetTxt = useCallback((value) => {
    setTxt(value);
  }, []);

  const SetTask = useCallback(
    (value) => {
      if (value.length <= 0) return;
      let tp = {
        id: n_id,
        value: value,
        reminder: false,
      };
      setTasks([...tasks, tp]);
      setN_id(n_id + 1);
    },
    [n_id, tasks]
  );

  const Toggle = useCallback(
    (id) => {
      tasks.map((task) =>
        task.id === id ? (task.reminder = !task.reminder) : ""
      );
    },
    [tasks]
  );

  const Delete_ = useCallback(
    (id) => {
      setTasks(tasks.filter((task) => task.id !== id));
    },
    [tasks]
  );

  return (
    <div className="App">
      <Header
        txt={txt}
        setTxt={SetTxt}
        setTask={SetTask}
        addButtonRef={AddButtonRef}
      />
      <List
        tasks={tasks}
        type={tasks.reminder}
        toggle={Toggle}
        delete_={Delete_}
      />
    </div>
  );
}

export default App;
