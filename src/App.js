import { useState } from "react";
import Header from "./component/header";
import List from './component/list'
function App() {
  const [txt, settxt] = useState("")
  const [tasks, settasks] = useState([])
  const [n_id,setn_id]=useState(1)
  const SetTxt=(value)=>{
    settxt(value)
  }
  const SetTask=(value)=>{
    if(value.length<=0)return;
    let tp={
      id:n_id,
      value:value,
      reminder:false,
    }
    settasks([...tasks,tp])
    setn_id(n_id+1)
  }
  const Toggle=(id)=>{
    tasks.map((task) =>
      task.id === id ? task.reminder=!task.reminder:-1
    )
    settasks(tasks)
    console.log(tasks)
  }
  const Delete_=(id)=>{
      settasks(tasks.filter((task)=>task.id!==id))
  }
  return (
    <div className="App">
        <Header txt={txt} SetTxt={SetTxt} SetTask={SetTask}/>
        <List tasks={tasks} settasks={settasks} Toggle={Toggle} type={tasks.reminder} Delete_={Delete_}/>
    </div>
  );
}

export default App;
