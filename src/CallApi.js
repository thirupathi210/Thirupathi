import React,{useState,useEffect} from 'react';

function CallApi(){
const[data,setData]=useState(null);
const[error,setError]=useState(null);
useEffect(()=>{
    const fetchdata=async()=>{
    const response=await fetch('https://dummyjson.com/carts');
    
    try{
    if(!response.ok){
        throw new Error('elent is not display');
    }
    const jsondata=await response.json();
    setData(jsondata)
}catch(error){
    setError(error.message)
}
   }
   fetchdata();
   
},[])
    return(
        <div>
            <h1>Welcome....</h1>
            {error && <p>Error:{error}</p>}
            {data ?(
                <div>
                    <p>{data.id}</p>
                    <p>{data.title}</p>
                </div>
            ):(
                <p>Loding.....</p>
            )}
        </div>
    )
}

export default CallApi;