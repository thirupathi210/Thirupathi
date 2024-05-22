import React,{useState,useEffect} from 'react';
import  './UseApi.css'
const UserApi = () => {
    const[data,setData]=useState([])
     
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(result=>setData(result)).catch(error=>console.log(error));
    },[]);
  return (
    <div>
        <table style={{border:'1px solid red'}}>
            <tr style={{border:'1px solid red'}}>
                <th >ID</th>
                <th>name</th>
                <th>username</th>
                <th>email</th>
            </tr>
            {
                
                data.map((item,index)=>(
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                    </tr>
                ))
            }
        </table>
    </div>
  )
}

export default UserApi;