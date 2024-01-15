import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

function About() {
  return (
    <div className="mt-12 px-44 text-center flex flex-col items-center">
      <h2 className="text-[40px]">
        I'm an aspiring Full Stack Developer based in Sydney, Australia
      </h2>
      <RiDoubleQuotesL className="bg-gray-500 p-3 text-[44px] rounded-full text-white mt-6" />
      <h2 className="my-5 text-gray-400 text-[18px]">
        Tech enthusiast undergoing Full Stack Web Development bootcamp, merging
        problem-solving prowess with a passion for project management and client
        services, aspiring to be the ideal candidate through a blend of
        technical expertise and rapid learning abilities.
      </h2>
      <RiDoubleQuotesR className="bg-gray-500 p-3 text-[44px] rounded-full text-white mt-6" />
    </div>
  );
}

export default About;
