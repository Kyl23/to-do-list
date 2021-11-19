import { createContext, useState } from "react";

export const AppPool = createContext();
export const PoolData = (props) => {
  const [pool, setPool] = useState([]);
  const [func, setFunc] = useState();
  return (
    <AppPool.Provider
      value={{ PoolContext: [pool, setPool], FuncContext: [func, setFunc] }}
    >
      {props.children}
    </AppPool.Provider>
  );
};
