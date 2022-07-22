import { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
