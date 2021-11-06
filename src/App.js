import { useState } from "react";
import Header from "./component/header";
import List from './component/list'
function App() {
  const [txt, setTxt] = useState("")
  const [tasks, setTasks] = useState([])
  const [n_id,setN_id]=useState(1)
  const SetTxt=(value)=>{
    setTxt(value)
  }
  const SetTask=(value)=>{
    if(value.length<=0)return;
    let tp={
      id:n_id,
      value:value,
      reminder:false,
    }
    setTasks([...tasks,tp])
    setN_id(n_id+1)
  }
  const Toggle=(id)=>{
    tasks.map((task) =>
      task.id === id ? task.reminder=!task.reminder:-1
    )
    setTasks(tasks)
    console.log(tasks)
  }
  const Delete_=(id)=>{
      setTasks(tasks.filter((task)=>task.id!==id))
  }
  return (
    <div className="App">
        <Header 
          txt={txt}
          setTxt={SetTxt}
          setTask={SetTask}
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
