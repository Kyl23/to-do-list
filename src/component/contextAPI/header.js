import Input from "./input";
import PutButton from "./put_to_do";
import { useContext, useEffect } from "react";
import { HeadDiv } from "../../style/css_element";
import { AppPool } from "../../Pool/AppPool";
import { HomePgContext } from "../../context/HomePgContext";
function Header() {
  const poolValue = useContext(AppPool);
  const homeValue = useContext(HomePgContext);
  const [tasks, setTasks] = homeValue.taskContext;
  const [pool, funcPool] = poolValue.PoolContext;
  useEffect(() => {
    if (tasks.length === 0 && pool.length !== 0) setTasks(pool);
  }, [pool, setTasks, funcPool, tasks]);
  return (
    <HeadDiv>
      <Input />
      <PutButton />
    </HeadDiv>
  );
}

export default Header;
