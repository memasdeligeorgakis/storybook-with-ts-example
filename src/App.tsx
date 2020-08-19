import React from "react";
import logo from "./logo.svg";
import "./App.css";

enum Themes {
  porsche = "porsche",
  milesAndMore = "milesAndMore",
  default = "default",
}

// http://localhost:6006/?path=/story/example-button--primary&theme=porsche
const getThemeNameFromUrl = (urlParameters: string): string => {
  for (const parameter of urlParameters.split("&")) {
    const key = parameter.split("=")[0];
    const value = parameter.split("=")[1];
    if (key === "theme") return value;
  }
  return "default";
};

// We will have this globally available
export const ThemeContext = React.createContext(
  getThemeNameFromUrl(window.location.search)
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
