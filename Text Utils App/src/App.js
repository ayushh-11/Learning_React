import React from "react";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import Alert from "./components/Alert";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import AboutUs from "./components/AboutUs";

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [text, setText] = useState("dark");
  const [navStyle, setNavStyle] = useState(
    "navbar navbar-expand-lg navbar-light bg-light"
  );
  const [alert, setAlert] = useState(null);

  let showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000)
  }

  const lightMode = {
    color: "black",
    backgroundColor: "#827f8a",
  };
  const darkmode = {
    color: "white",
    backgroundColor: "#2c2a33",
  };
  const [style, setStyle] = useState(lightMode);

  var toggleMode = () => {
    setIsDark(!isDark);
    if (isDark) {
      setStyle(darkmode);
      setText("light");
      setNavStyle("navbar navbar-expand-lg navbar-dark bg-dark");
      showAlert("Dark mode is enabled.", "success");
    } else {
      setStyle(lightMode);
      setText("dark");
      setNavStyle("navbar navbar-expand-lg navbar-light bg-light");
      showAlert("Light mode is enabled.", "success");
    }
  };

  return (
    <Router>
      <div style={style}>
        <Navbar
          style={navStyle}
          title="Text-Utils"
          modeText={text}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<TextArea title="Enter text to analyze..." showAlert={showAlert} />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}
