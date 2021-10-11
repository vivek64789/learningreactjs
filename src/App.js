import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";

import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

let title = { name: "Text Utils", url: "/" };
let home = { name: "Home", url: "/home" };
let about = { name: "About", url: "/about" };
let contact = { name: "Contact", url: "/contact" };

function App() {
  const [darkMode, setDarkMode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (msg, typ) => {
    setalert({ message: msg, type: typ });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  const toggleDarkMode = () => {
    if (darkMode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "#212529";
      showAlert("Dark Mode Activated", "success");
    } else {
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Activated", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          showAlert={showAlert}
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
          title={title}
          home={home}
          about={about}
          contact={contact}
        />
        <Alert alert={alert} />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/about">
            <About darkMode={darkMode} />
          </Route>
          <Route exact path="/">
            <TextForm
              showAlert={showAlert}
              darkMode={darkMode}
              heading="Enter your text"
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
