import React,{useState} from 'react'

function Count2() {
    const[count,setCount]=useState(0)
  return (
    <div>
        <h1>diplay-{count}</h1>
        <button onClick={()=>setCount(count+1)}>increment</button>
        <button onClick={()=>setCount(count-1)}>decrement</button>
    </div>
  )
}

export default Count2