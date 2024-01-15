import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import ProfilePic from './components/ProfilePic';
import About from './components/About';
import Introduction from './components/Introduction';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-screen'>
     <Header/>
     <SideBar/>
     <div className='ml-[110px] grid grid-cols-1 md:grid-cols-3 w-screen'>
      <div className='col-span-2'>
        <Introduction/>
        <About/>
      </div>
      <div className='hidden md:block'>
        <ProfilePic/>
      </div>
     </div>
    </div>
  )
}

export default App
