import { createContext, useState } from "react";

export const AppPool = createContext();
export const PoolData = (props) => {
  const [pool, setPool] = useState([]);
  const [func, setFunc] = useState();
  const [isLegal,setLegal]=useState(true);
  return (
    <AppPool.Provider
      value={{ PoolContext: [pool, setPool], FuncContext: [func, setFunc],ActiveContext:[isLegal,setLegal] }}
    >
      {props.children}
    </AppPool.Provider>
  );
};
