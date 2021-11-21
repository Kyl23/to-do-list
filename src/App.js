import { useContext } from "react";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import Homepage from "./component/Homepage";
import Reduxpage from "./component/Reduxpage";
import { AppPool } from "./Pool/AppPool";

function App() {
  const poolValue = useContext(AppPool);
  const [, setLegal] = poolValue.ActiveContext;
  const SetLegal = () => setLegal(false);
  return (
    <BrowserRouter>
      <div className="App">
        <ul>
          <li>
            {" "}
            <Link to="/">ContextAPI</Link>
          </li>
          <li onClick={SetLegal}>
            <Link to="redux">Redux</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/to-do-list/" element={<Homepage />} />
          <Route path="/to-do-list/redux" element={<Reduxpage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
