import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-screen">
      <Header />
      <SideBar />
      <Outlet />
    </div>
  );
}

export default App;
