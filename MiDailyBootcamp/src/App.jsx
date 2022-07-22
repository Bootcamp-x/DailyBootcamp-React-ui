import { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Document from "./components/Document";
import Feed from "./components/Feed";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Main />
      <Document />

    </div>
  );
}

export default App;
