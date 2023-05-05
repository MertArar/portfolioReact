import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Game Developer", "Front-End Developer.", "Software Engineer"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal uppercase">welcome to my world</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">mert arar</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I use animation as a third dimension by which to simplyfy experiences
          and kuiding thro each and every interactions. I'm not adding motion
          just to spruce things up, but doing it in ways that.
        </p>
      </div>
      <Media />
    </div>
  );
};

export default LeftBanner;
