import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import Navbar from "./Navbar"
import Todosec from './Todosec'

function App() {
  const[mode,setMode]=useState('light');
  const toggle=()=>{
    if(mode==='light'){
      setMode('dark');
    }
    else{
      setMode('light');
    }
  }
  return (
    <>
    <Navbar toggle={toggle} mode={mode}/>
    <Todosec mode={mode}/>
    </>
  );
}

export default App
