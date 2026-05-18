// import React, { PureComponent } from 'react'
import todoIcon from './assets/todo-icon.jpg'
// import sunny from './assets/sunny.png'
// import night from './assets/night.png'

export default function Navbar(props) {
    return (
      <>
      <nav className={`flex justify-center ${props.mode==='light'?'bg-zinc-300':'bg-zinc-700'}`}>
        <div className={`heading1  h-20 w-full flex justify-center items-center`}>
            <img src={todoIcon} alt="logo" className="h-10 w-10 mt-0.75 rounded-full"/>
            <h2 className="text-purple-600 font-bold text-3xl ml-7">TaskHive</h2>
        </div>
        <button onClick={props.toggle} className={`h-10 w-10 rounded-full ${props.mode === 'light' ? 'bg-zinc-950' : 'bg-purple-600'} flex justify-center items-center mt-4 pb-1.5 mr-90`}>
            {props.mode==='light'?'🌙':'☀️'}
        </button>
      </nav>
      </>
    );
}
