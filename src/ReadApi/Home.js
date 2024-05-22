import React,{useState} from 'react'
import Second from '../Second';
function Home() {
  const[task,setTask]=useState('');
  const[todos,setTodos]=useState([]);
  const changeHandler=(e)=>{
    setTask(e.target.value)
  }
  const handler=(e)=>{
    e.preventDefault();
    const newtodo=[...todos,task];
    setTodos(newtodo);
    setTask('');
  }
  const deleteHandler=(indexvalue)=>{
const newtodo=todos.filter((item,index)=>index !==indexvalue);
setTodos(newtodo)
  }

  return (
    <div>
        <h1>Home</h1> 
        <form onSubmit={handler}>
          <input type='text' value={task} onChange={changeHandler} />
          <button>add</button>
        </form>
        <Second todos={todos} deleteHandler={deleteHandler}/>
    </div>
  )
}

export default Home;