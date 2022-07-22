import "./app.css";
import { useState } from "react";
import logo from "./assets/bonny2.png";

export const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <img src={logo} alt="Logo" />
      <h1>Hello</h1>
      <h1>This is my custom react project with typescript </h1>
      <h2>Mode : {process.env.mode}</h2>

      <button onClick={() => setCounter(counter + 1)}>click me {counter}</button>
    </div>
  );
};
