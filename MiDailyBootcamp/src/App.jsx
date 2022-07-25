import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";

function App() {
  return (
    <ChakraProvider>
      <div>
        <Navbar />
        <Main />
      </div>
    </ChakraProvider>
  );
}

export default App;
