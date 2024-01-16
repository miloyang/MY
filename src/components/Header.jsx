import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  // set menu
  const [menu] = useState([
    {
      id: 1,
      name: "HOME",
      path: "/",
    },
    {
      id: 2,
      name: "PROJECTS",
      path: "/projects",
    },
    {
      id: 3,
      name: "CONTACT",
      path: "/contact",
    },
    {
      id: 4,
      name: "RESUME",
      path: "/resume",
    },
  ]);

  const [currentMenu, setCurrentMenu] = useState(menu[0]);

  return (
    // rendering the logo div
    <div className="flex items-center w-screen justify-between border-b-[1px] bg-white">
      <div className="w-[110px] h-[110px] bg-white">
        <img src="logo.png" alt="Logo" />
      </div>
      {/* rendering the navbar */}
      <div className="hidden md:flex gap-14">
        {menu.map((item) => (
          <div
            key={item.id}
            className="cursor-pointer hover:underline font-medium"
            onClick={() => setCurrentMenu(item)}
          >
            <Link to={item.path}>{item.name}</Link>
          </div>
        ))}
      </div>

      {/* rendering the logo div */}
      <div className="w-[110px] h-[110px] flex justify-center items-center">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg> */}
        <div className="w-[110px] h-[110px] bg-white">
          <img src="logo.png" alt="Logo" />
        </div>
      </div>
    </div>
  );
}

export default Header;
