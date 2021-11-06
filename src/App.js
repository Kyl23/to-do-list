import { useState } from "react";
import Input from "./component/input";
import Put_Button from "./component/put_to_do"
import List from './component/list'
function App() {
  const [txt, settxt] = useState("")
  const [task, settask] = useState([])
  const [n_id,setn_id]=useState(1)
  const SetTxt=(value)=>{
    settxt(value)
  }
  const SetTask=(value)=>{
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
      t.id === id ? t.reminder=!t.reminder:t.reminder=t.reminder
    )
    console.log(task)
  }
  const Delete_=(id)=>{
      settask(task.filter((t)=>t.id!==id))
  }
  return (
    <div className="App">
        <Input txt={txt} settxt={SetTxt}/>
        <Put_Button txt={txt} settxt={SetTxt} settask={SetTask}/>
        <List task={task} settask={settask} toggle={Toggle} delete_={Delete_}/>
    </div>
  );
}

export default App;
