
import './App.css';
import {reducer} from './reducer';
import { useState,useReducer } from 'react';


function App() {
  
  const [state, dispatch] = useReducer(reducer,{todos:[]});
  const [text,setText]=useState('');
  
  const addTodo=()=>{
    if(text=='')return
    dispatch({todo:text,type:"add"});
    console.log(state);
    setText('');
  }
  
  return (
    <div className="App flex justify-center tasks h-screen">
      
        
        <div className=' mt-5 p-10 a container tasks  '>
          <div className=' flex justify-center pr-13'>
          <h3 className='heading text-white'>Add Tasks</h3>
          </div>
         <div className='flex justify-center mt-5'>
         <input type='text' onChange={(e)=>setText(e.target.value)} value={text} className='border-black text-black border rounded-md h-10'/>
        <button onClick={addTodo} className='bg-blue-600 text-white p-1.5 border-r-full ml-5 add-task'>Add Task</button> 
         </div>
       
        <div className='flex justify-center'>
          <ul>
          {state.todos.map((todo,index)=>{
          return <li key={index} className='text-black todos'>
            <div className='flex justify-around'><div className={todo.complete&&'line-through '}>{todo.text}</div>
            <div className={todo.complete&&'hidden'}>
              <button className=' bg-green-600 text-white p-1.5 border-r-full ml-5 todo-buttons' onClick={()=>dispatch({type:'complete',id:todo.id})}>Complete</button> 
              <button className='bg-red-600 text-white  p-1.5 border-r-full  todo-buttons' onClick={()=>dispatch({type:'delete',id:todo.id})}>delete</button>
            </div> 
              </div>
          </li>
        })}
          </ul>
      
        </div>
  
        </div>
     
    </div>
  );
}

export default App;
