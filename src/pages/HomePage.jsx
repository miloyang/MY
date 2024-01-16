import React from "react";
import Introduction from "../components/Introduction";
import About from "../components/About";
import ProfilePic from "../components/ProfilePic";

function HomePage() {
  return (
    <div>
      <div className="ml-[110px] grid grid-cols-1 md:grid-cols-3 w-screen">
        <div className="col-span-2">
          <Introduction />
          <About />
        </div>
        <div className="hidden md:block">
          <ProfilePic />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
