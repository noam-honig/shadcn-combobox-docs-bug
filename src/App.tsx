import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ComboboxDemo } from "./components/combobox-demo.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ComboboxDemo />
    </>
  );
}

export default App;
