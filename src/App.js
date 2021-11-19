import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import Homepage from "./component/Homepage";
import Reduxpage from "./component/Reduxpage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ul>
          <li>
            {" "}
            <Link to="/">ContextAPI</Link>
          </li>
          <li>
            <Link to="redux">Redux</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/redux" element={<Reduxpage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
