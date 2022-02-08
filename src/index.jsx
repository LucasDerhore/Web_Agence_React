import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Navbar from "./components/Navbar";
import "./index.css";
import { createContext } from "react";

const themes = {
  dark: "",
  light: "white-content",
};

const ThemeContexte = createContext({
  theme: themes.dark,
  changeTheme: () => {},
});

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/works" element={<Works />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
