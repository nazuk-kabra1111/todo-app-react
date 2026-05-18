// import React, { PureComponent } from 'react'
// import { useState } from "react";

import { useState } from "react"

export default function Todosec(props) {
    const[todo,setTodo]=useState("");
    const[todos,setTodos]=useState([]);
    const[filter,setFilter]=useState("All");

    const handleAdd=()=>{
      if(todo===""){
        return;
      }
      setTodos([...todos,{todo:todo,
        isCompleted:false}]);
      setTodo("");
      
    }
    const handleEdit=(ind2)=>{
      setTodo(todos[ind2].todo);
      let newTodos2=todos.filter((item,index)=>{
        return index!==ind2;
      })
      setTodos(newTodos2);
    }
    const handleDel=(ind1)=>{
      let newTodos1=todos.filter((item,index)=>{
        return index!==ind1;
      })
      setTodos(newTodos1);
    }
    const handleChange=(e)=>{
      setTodo(e.target.value);
    }
    const handleCheckbox=(index)=>{
      let newTodos=[...todos];
      newTodos[index].isCompleted=!newTodos[index].isCompleted;
      setTodos(newTodos);
    }
    const allTodos=todos.filter((item) => {
      return item;
    })
    const activeTodos=todos.filter((item) => {
       return item.isCompleted===false;
    })
    const completedTodos=todos.filter((item) => {
      return item.isCompleted===true;
    })
    const handleAll=()=>{
      setFilter("All");
    }
    const handleActive=()=>{
      setFilter("Active");
    }
    const handleCompleted=()=>{
      setFilter("Completed");
    }
    return (
      <div className={`${props.mode==='light'?'bg-zinc-200':'bg-zinc-800'} ${props.mode==='light'?'text-black':'text-white'} w-full min-h-screen flex justify-center`}>
        <div className="mt-10 mb-7 flex flex-col justify-center items-center p-4 w-full max-w-2xl">
           <div className="m-0 p-0 border-2 border-transparent hover:border-purple-950 rounded-xl w-full">
             <input onChange={handleChange} value={todo} className={`h-14 w-4/5 ${props.mode==='light'?'bg-white':'bg-zinc-700'} rounded-tl-xl rounded-bl-xl px-4 outline-none`} placeholder="Add a ToDo" />
             <button onClick={handleAdd} className={`h-14 w-1/5 ${props.mode==='light'?'bg-white':'bg-zinc-700'} rounded-tr-xl rounded-br-xl hover:bg-purple-200`}>
                {props.mode==='light'?'➕':'➕'}
             </button>
           </div>
            <div className={` w-full ${props.mode==='light'?'bg-white':'bg-zinc-700'} flex justify-evenly space-x-1 m-0 rounded-xl mb-4 mt-4 p-2 items-center`}>
                <button  onClick={handleAll} className=" w-10 md:w-30 h-10 hover:bg-purple-700 rounded-2xl">All</button>
                <button onClick={handleActive} className=" w-10 md:w-30 h-10 hover:bg-purple-700 rounded-2xl">Active</button>
                <button onClick={handleCompleted} className=" w-10 md:w-30 h-10 hover:bg-purple-700 rounded-2xl">Completed</button>
            </div>
            <div className={`spacing-x-4 flex flex-col justify-start w-full ${props.mode==='light'?'bg-white':'bg-zinc-700'} mb-10 rounded-xl`}>
              {(filter==="All"?allTodos: filter==="Active"?activeTodos:completedTodos).map((item,index)=>(
                  <div className="flex justify-between" key={index}>
                    <div className="ml-5 mt-4 mb-5 flex items-center gap-2">
                    <input type="checkbox" checked={item.isCompleted} class="checkbox" onChange={()=>{handleCheckbox(index)}}/>
                      <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
                    </div>
                      <div className="flex mb-5">
                        <button onClick={()=>{handleEdit(index)}}className="bg-purple-600  hover:bg-purple-300 w-4 md:w-15 h-7 ml-5 mt-4 rounded-xl text-center">Edit</button>
                      <button onClick={()=>{handleDel(index)}} className="bg-purple-600 hover:bg-purple-300 w-4 md:w-15 h-7 ml-2 mr-5 mt-4 rounded-xl text-center">Delete</button>
                      </div>
                  </div>
              ))}
              

            </div>
        </div>
      </div>
    )
}
