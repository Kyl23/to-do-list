import { useState } from "react";
import Header from "./component/header";
import List from './component/list'
function App() {
  const [txt, settxt] = useState("")
  const [task, settask] = useState([])
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
    settask([...task,tp])
    setn_id(n_id+1)
  }
  const Toggle=(id)=>{
    task.map((t) =>
      t.id === id ? t.reminder=!t.reminder:-1
    )
    settask(task)
    console.log(task)
  }
  const Delete_=(id)=>{
      settask(task.filter((t)=>t.id!==id))
  }
  return (
    <div className="App">
        <Header txt={txt} SetTxt={SetTxt} SetTask={SetTask}/>
        <List task={task} settask={settask} toggle={Toggle} type={task.reminder} delete_={Delete_}/>
    </div>
  );
}

export default App;
