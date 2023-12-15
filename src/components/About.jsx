import React from "react";
import { ThemeContext } from "../App";

const About = () => {
  const theme = React.useContext(ThemeContext);
  return (
    <section className={`h-screen ${theme ? "bg-slate-900 text-white" : ""}`}>
      About
    </section>
  );
};

export default About;
