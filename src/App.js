import { Route, Routes, BrowserRouter } from "react-router-dom";
import Homepage from "./component/Homepage";
import NavigateBar from "./component/navigateBar";
import Reduxpage from "./component/Reduxpage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavigateBar />
        <Routes>
          <Route path="/to-do-list/" element={<Homepage />} />
          <Route path="/to-do-list/redux" element={<Reduxpage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
