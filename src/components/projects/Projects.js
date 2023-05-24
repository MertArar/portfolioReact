import React from "react";
import Title from "../layouts/Title";
import { FaGlobe, FaGithub } from "react-icons/fa";

import { motion } from "framer-motion";

import { fadeIn } from "../../variant";

import Img1 from "../../assets/projects/aryapmock.png";
import Img2 from "../../assets/projects/speakstu.png";
import Img3 from "../../assets/projects/weather-mockup.png";
import Img4 from "../../assets/projects/registermock .png";
import Img6 from "../../assets/projects/mind-mock.png";
import Img7 from "../../assets/projects/game-mock.png";
import Img8 from "../../assets/projects/mertify-mock.PNG";

const Work = () => {
  return (
    <div className="section mb-96 mt-32" id="work">
      <div className="container mx-auto mt-auto mb-96">
        <div className="flex flex-col lg:flex-row gap-x-12">
          <div className="flex-1 flex flex-col gap-y-11 mb-10 lg:mb-0">
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br />
                Work.
              </h2>
              <p className="max-w-sm mb-16 text-justify">
                The projects I have developed are listed as follows. Please
                contact me if you have questions about such projects.
              </p>
              <a href="#contact">
                <button className="btn btn-sm">Contact me</button>
              </a>
            </div>
            {/* image */}
            <div
              className="group relative overflow-hidden border-2
             border-white/50 rounded-xl"
            >
              {/* overlay */}
              <div
                className="group-hover:bg-black/70 w-full h-full absolute
               z-40 transition-all duration-300"
              ></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-sky-400 font-titleFont">
                  Front-End Web Development
                </span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3x1 text-white">Aryap Yapı Tasarım</span>
              </div>
              <a href="https://www.speakstu.com/">
                <div className="btn btn-sm absolute -bottom-full right-12 group-hover:bottom-10 transition-all duration-300 z-50">
                  <div className="flex flex-row gap-6 text-2xl">
                    <span className="projectIcon">
                      <a href="https://github.com/MertArar/Aryap-Corparate-Website">
                        <FaGithub />
                      </a>
                    </span>

                    <span className="projectIcon">
                      <a href="https://aryaptasarim.com/">
                        <FaGlobe />
                      </a>
                    </span>
                  </div>
                </div>
              </a>
            </div>

            <div
              className="group relative overflow-hidden border-2
             border-white/50 rounded-xl"
            >
              {/* overlay */}
              <div
                className="group-hover:bg-black/70 w-full h-full absolute
               z-40 transition-all duration-300"
              ></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img4}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">React Website Development</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3x1 text-white">Register Page</span>
              </div>
              <a href="https://www.speakstu.com/">
                <div className="btn btn-sm absolute -bottom-full right-12 group-hover:bottom-10 transition-all duration-300 z-50">
                  <div className="flex flex-row gap-6 text-2xl">
                    <span className="projectIcon">
                      <a href="https://github.com/MertArar/portfolioReact/blob/master/src/components/projects/Projects.js">
                        <FaGithub />
                      </a>
                    </span>

                    <span className="projectIcon">
                      <a href="https://www.youtube.com/watch?v=OPaLnMw2i_0&t=43s&ab_channel=JavaScriptMastery">
                        <FaGlobe />
                      </a>
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div
              className="group relative overflow-hidden border-2
             border-white/50 rounded-xl"
            >
              {/* overlay */}
              <div
                className="group-hover:bg-black/70 w-full h-full absolute
               z-40 transition-all duration-300"
              ></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img7}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">React Game Development</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3x1 text-white">Tic-Tac-toe</span>
              </div>
              <a href="https://www.speakstu.com/">
                <div className="btn btn-sm absolute -bottom-full right-12 group-hover:bottom-10 transition-all duration-300 z-50">
                  <div className="flex flex-row gap-6 text-2xl">
                    <span className="projectIcon">
                      <a href="https://github.com/MertArar/portfolioReact/blob/master/src/components/projects/Projects.js">
                        <FaGithub />
                      </a>
                    </span>

                    <span className="projectIcon">
                      <a href="https://www.youtube.com/watch?v=OPaLnMw2i_0&t=43s&ab_channel=JavaScriptMastery">
                        <FaGlobe />
                      </a>
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div
              className="group relative overflow-hidden border-2
             border-white/50 rounded-xl"
            >
              {/* overlay */}
              <div
                className="group-hover:bg-black/70 w-full h-full absolute
               z-40 transition-all duration-300"
              ></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img8}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">React Game Development</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3x1 text-white">Tic-Tac-toe</span>
              </div>
              <a href="https://www.speakstu.com/">
                <div className="btn btn-sm absolute -bottom-full right-12 group-hover:bottom-10 transition-all duration-300 z-50">
                  <div className="flex flex-row gap-6 text-2xl">
                    <span className="projectIcon">
                      <a href="https://github.com/MertArar/musicApp">
                        <FaGithub />
                      </a>
                    </span>

                    <span className="projectIcon">
                      <a href="https://mertify.netlify.app/">
                        <FaGlobe />
                      </a>
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-y-10">
            {/* image */}
            <div
              className="group relative overflow-hidden border-2
             border-white/50 rounded-xl"
            >
              {/* overlay */}
              <div
                className="group-hover:bg-black/70 w-full h-full absolute
               z-40 transition-all duration-300"
              ></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">
                  Flutter Mobile App Development
                </span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3x1 text-white">SpeakSTU Mobile App</span>
              </div>
              <a href="https://www.speakstu.com/">
                <div className="btn btn-sm absolute -bottom-full right-12 group-hover:bottom-10 transition-all duration-300 z-50">
                  <div className="flex flex-row gap-6 text-2xl">
                    <span className="projectIcon">
                      <a href="https://github.com/goxostar/speakstu_flutter">
                        <FaGithub />
                      </a>
                    </span>

                    <span className="projectIcon">
                      <a href="https://www.speakstu.com/">
                        <FaGlobe />
                      </a>
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div
              className="group relative overflow-hidden border-2
             border-white/50 rounded-xl"
            >
              {/* overlay */}
              <div
                className="group-hover:bg-black/70 w-full h-full absolute
               z-40 transition-all duration-300"
              ></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">React Website Development</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3x1 text-white">
                  Weather Condition App
                </span>
              </div>
              <a href="https://weather-conditions-mert.netlify.app/">
                <div className="btn btn-sm absolute -bottom-full right-12 group-hover:bottom-10 transition-all duration-300 z-50">
                  <div className="flex flex-row gap-6 text-2xl">
                    <span className="projectIcon">
                      <a href="https://github.com/MertArar/weather-condition">
                        <FaGithub />
                      </a>
                    </span>

                    <span className="projectIcon">
                      <a href="https://weather-conditions-mert.netlify.app/">
                        <FaGlobe />
                      </a>
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div
              className="group relative overflow-hidden border-2
             border-white/50 rounded-xl"
            >
              {/* overlay */}
              <div
                className="group-hover:bg-black/70 w-full h-full absolute
               z-40 transition-all duration-300"
              ></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src=""
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">React Website Development</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3x1 text-white">
                  Multi-Page Corporate Website
                </span>
              </div>
              <a href="https://www.speakstu.com/">
                <div className="btn btn-sm absolute -bottom-full right-12 group-hover:bottom-10 transition-all duration-300 z-50">
                  <div className="flex flex-row gap-6 text-2xl">
                    <span className="projectIcon">
                      <a href="https://github.com/MertArar/portfolioReact/blob/master/src/components/projects/Projects.js">
                        <FaGithub />
                      </a>
                    </span>

                    <span className="projectIcon">
                      <a href="https://www.youtube.com/watch?v=OPaLnMw2i_0&t=43s&ab_channel=JavaScriptMastery">
                        <FaGlobe />
                      </a>
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div
              className="group relative overflow-hidden border-2
             border-white/50 rounded-xl"
            >
              {/* overlay */}
              <div
                className="group-hover:bg-black/70 w-full h-full absolute
               z-40 transition-all duration-300"
              ></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img6}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">React Game Development</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3x1 text-white">Mind Game</span>
              </div>
              <a href="https://www.speakstu.com/">
                <div className="btn btn-sm absolute -bottom-full right-12 group-hover:bottom-10 transition-all duration-300 z-50">
                  <div className="flex flex-row gap-6 text-2xl">
                    <span className="projectIcon">
                      <a href="https://github.com/MertArar/portfolioReact/blob/master/src/components/projects/Projects.js">
                        <FaGithub />
                      </a>
                    </span>

                    <span className="projectIcon">
                      <a href="https://www.youtube.com/watch?v=OPaLnMw2i_0&t=43s&ab_channel=JavaScriptMastery">
                        <FaGlobe />
                      </a>
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div
              className="group relative overflow-hidden border-2
             border-white/50 rounded-xl"
            >
              {/* overlay */}
              <div
                className="group-hover:bg-black/70 w-full h-full absolute
               z-40 transition-all duration-300"
              ></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img6}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">React Game Development</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3x1 text-white">Mind Game</span>
              </div>
              <a href="https://www.speakstu.com/">
                <div className="btn btn-sm absolute -bottom-full right-12 group-hover:bottom-10 transition-all duration-300 z-50">
                  <div className="flex flex-row gap-6 text-2xl">
                    <span className="projectIcon">
                      <a href="https://github.com/MertArar/portfolioReact/blob/master/src/components/projects/Projects.js">
                        <FaGithub />
                      </a>
                    </span>

                    <span className="projectIcon">
                      <a href="https://www.youtube.com/watch?v=OPaLnMw2i_0&t=43s&ab_channel=JavaScriptMastery">
                        <FaGlobe />
                      </a>
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
