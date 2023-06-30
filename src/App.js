import NavBar from "./Components/NavBar";
import Page from "./Components/Page";
import './App.css';
import { useState } from "react";

function App() {
  const [page, setPage] = useState(0);
  const [x, setX] = useState(0);

  return (
    <div className="background">
      <NavBar></NavBar>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
        <Page />
      </div>
    </div>
  );
}

export default App;
