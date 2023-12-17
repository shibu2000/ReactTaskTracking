import React from "react";
import { ThemeContext } from "../App";

const About = () => {
  const theme = React.useContext(ThemeContext);
  return (
    <>
      <section
        className="absolute top-2/4 left-2/4 text-center w-full uppercase"
        style={{ transform: "translate(-50%,-50%)" }}
      >
        <h1 className="text-6xl py-5 text-orange-600">Hi ... ! 😉</h1>
        <p className="mb-3">
          <span className="font-mono text-2xl">welcome</span> to my page, hope
          you are <span className="font-mono text-2xl">good</span>.
        </p>
        <p>
          I'm{" "}
          <span className="font-mono text-4xl text-orange-600">
            Shibu Dhara
          </span>
          , passionately <span className="font-mono text-4xl">developer</span>,
          love to{" "}
          <span className="font-mono text-4xl text-green-600">code</span>
        </p>
        <h1 className="text-6xl py-5 text-green-600">💚 Thank You 💚</h1>
      </section>
      <div className="absolute bottom-0 p-1 w-full text-center font-mono bg-gray-500 text-black font-bold">
        <p>passiontocode.contact@gmail.com</p>
      </div>
    </>
  );
};

export default About;
