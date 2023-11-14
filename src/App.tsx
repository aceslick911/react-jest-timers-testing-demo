import * as React from "react";
import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState("Hello World");
  const [value2, setValue2] = useState("Demo");

  const changeSetVal = () => setValue("How are you?");

  useEffect(() => {
    if (value !== "Hello World") {
      setTimeout(() => {
        setValue2("Updated");
      });
    }
  }, [value]);

  return (
    <div className="App">
      <h1>{value}</h1>
      <h2>{value2}</h2>
      <input type="button" value="Test" onClick={changeSetVal} />
    </div>
  );
}
