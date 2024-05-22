import React,{useState} from 'react'

function AvailableBuses({buses}) {
    const[conform,setConform]=useState(false);
const Buck=()=>{
    setConform(true)
}
  return (
    <div>
        {conform ?(
            <p>your booking is conform</p>
        ):(
            <div>
<h1>Avilabule-buses</h1>
{buses.map((bus,index)=>(
    <div key={index}>
        <p>bus Number:{bus.Number}</p>
        <p>bus Sets:{bus.sets}</p>
        <button onClick={Buck}>conform</button>
    </div>
))}
</div>
)}
    </div>
  )
}

export default AvailableBuses