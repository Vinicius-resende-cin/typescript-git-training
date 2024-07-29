/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import { useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Tasks from "./components/Tasks";

const selectPage = (page: string) => {
  switch (page) {
    case "home":
      return <Home />;
    case "about":
      return <About />;
    case "tasks":
        return <Tasks/>;
    default:
      return <Home />;
  }
};

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <a href="#" onClick={() => setPage("home")}>
            Home
          </a>
          <a href="#" onClick={() => setPage("about")}>
            About
          </a>
          <a href="#" onClick={() => setPage("tasks")}>
            Tasks
          </a>
        </nav>
      </header>
      {selectPage(page)}
    </div>
  );
}

export default App;
