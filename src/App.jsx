import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
// import ProfilePic from './components/ProfilePic';
// import About from './components/About';
// import Introduction from './components/Introduction';
import HomePage from './pages/HomePage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-screen'>
     <Header/>
     <SideBar/>
     <Outlet/>
    </div>
  )
}

export default App
