'use client';

import { useState } from 'react';

export default function Home() {


  function addTodo(){
    console.log('add called');
    let arr = [...todo , task]
    setTodo([...arr]);
  }
  
  function removeTask(indexGiven){
    setTodo([...todo].filter((todotask , index )=>index != indexGiven));
  }


  let [task , setTask] = useState('');
  let [todo , setTodo ] = useState([]);
  return (
    <main >
     <div className='top'>
      <input onChange={(e)=>{setTask(e.target.value)}}/>
      <button onClick={()=>{addTodo()}}>add</button>
     </div>

     {todo.map((task , index)=>{

      return(
      <div key={index} className='flex'>
      <p>{task}</p>
      <button onClick={()=>{removeTask(index)}}>delete</button>
      </div>
      )
     })}


    </main>
  )
}
