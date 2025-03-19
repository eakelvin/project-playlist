import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/project";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
