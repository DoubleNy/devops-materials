import React from "react";
import { Home } from "./components/Home";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeContext>
      <div className="App">
        <Home />
      </div>
    </ThemeContext>
  );
}

export default App;
