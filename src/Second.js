import React from 'react';

const Second=({todos,deleteHandler})=>{
    return (
        <div>
          {todos.map((todo,index)=>(
          <div>
            <h2 key={index}>{todo} &nbsp;<button onClick={()=>deleteHandler(index)}>Delete</button></h2>
        </div>
         ) )} 
         <div>element data change</div>
        </div>
    )
}
export default Second;
