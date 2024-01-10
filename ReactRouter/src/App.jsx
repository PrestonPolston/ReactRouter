import { Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/navBar";
import HomePage from "./components/home";
import Red from "./components/red";
import Blue from "./components/blue";
import MoreColors from "./components/moreColors";

function App() {
  return (
    <>
      <div id="container">
        <div id="navbar">
          {/* <MoreColors /> */}
          <NavBar />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/red" element={<Red />} />
          <Route path="/blue" element={<Blue />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
