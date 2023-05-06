import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { contactImg } from "../../assets";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        src={contactImg}
        alt="contactImg"
        className="w-full h-64 object-cover rounded-lg mb-2"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Mert Arar</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Develeoper
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Lorem ipsum, dolor sit amet consectetur adipicing elit. Facilis ipsam
          autem camque, accusantium dicta odio
        </p>
        <p
          className="text-base text-gray-400 flex items-center gap-2
        "
        >
          Phone: <span className="text-lightText">+90 554 547 08 81</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">mertarar.ma@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
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
    </div>
  );
};

export default ContactLeft;
