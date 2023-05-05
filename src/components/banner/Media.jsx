import React from "react";
import { FaLinkedinIn, FaReact, FaUnity } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href="https://github.com/MertArar">
              <AiFillGithub />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/mert-arar-6788771bb/">
              <FaLinkedinIn />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="https://www.instagram.com/mertararr/">
              <BsInstagram />
            </a>
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          best skill on
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href="https://unity.com/">
              <FaUnity />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="https://react.dev/">
              <FaReact />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="https://nextjs.org/">
              <SiNextdotjs />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="https://tailwindcss.com/">
              <SiTailwindcss />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
