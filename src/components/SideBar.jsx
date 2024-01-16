import React from "react";
import { IoLogoLinkedin, IoLogoInstagram, IoLogoGithub } from "react-icons/io5";

function SideBar() {
  return (
    <div>
      <div className="w-[110px] h-screen border-r-[1px] fixed flex flex-col justify-around items-center bg-white">
        <h2 className="-rotate-90 text-[20px] tracking-widest">WELCOME!</h2>
        <div className="flex flex-col gap-10 mb-10 text-[35px]">
          <a href="https://github.com/miloyang">
            <IoLogoGithub className="cursor-pointer hover:scale-110 transition-all ease-in-out" />
          </a>
          <a href="https://www.linkedin.com/in/miloyang">
            <IoLogoLinkedin className="cursor-pointer hover:scale-110 transition-all ease-in-out" />
          </a>
          <a href="https://www.instagram.com/theawkwardninja">
            <IoLogoInstagram className="cursor-pointer hover:scale-110 transition-all ease-in-out" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
