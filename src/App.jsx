import React, { createContext, useState, useEffect } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Header from "./components/Header";
import MainBody from "./components/MainBody";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
// import ThemeContextProvider from "./ThemeContextProvider";
export const ThemeContext = createContext();
export const ThemeToggle = createContext();

function App() {
  const [theme, setTheme] = useState(true);

  useEffect(() => {
    theme
      ? document.body.classList.add("bg-slate-900", "text-white")
      : document.body.classList.remove("bg-slate-900", "text-white");
  }, [theme]);

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={theme}>
        <ThemeToggle.Provider value={setTheme}>
          <Header />
          <Routes>
            <Route index element={<MainBody />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </ThemeToggle.Provider>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
