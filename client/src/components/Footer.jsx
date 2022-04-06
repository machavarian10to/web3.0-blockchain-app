import React from "react";

const Footer = () => (
  <div id="Info" className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <a href="#Home">
          <p className="text-white text-2xl text-center mx-2 cursor-pointer">Home</p>
        </a>
        <a href="#Services">
          <p className="text-white text-2xl text-center mx-2 cursor-pointer">Services</p>
        </a>
        <a href="#Transactions">
          <p className="text-white text-2xl text-center mx-2 cursor-pointer">Transactions</p>
        </a>
        <a href="#Contact">
          <p className="text-white text-2xl text-center mx-2 cursor-pointer">Info</p>
        </a>
      </div>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-evenly items-center mt-3">
      <p className="text-white text-left text-s">Made By Otar Matchavariani</p>
      <p className="text-white text-right text-s"> &copy;2022 All rights reserved</p>
    </div>
  </div>
);

export default Footer;