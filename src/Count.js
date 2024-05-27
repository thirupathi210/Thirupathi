import React,{useState} from 'react'

function Count(){
    const[counts,setCounts]=useState(0)
    return(
        <div>
        <h1>welcome-man{count}  </h1>
        <button onClick={()=>setCounts(counts+1)}>increment</button>
        <buton onClick={()=>setCounts(counts-1)}>decrement</buton>
        </div>
    )
}
export default Count;