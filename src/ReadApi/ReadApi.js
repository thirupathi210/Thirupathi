
import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Read from './Read';
import Update   from './Update';
const ReadApi = () => {
  return (
    <div>
        <h1>welcome</h1>
       <Home/>
       <Read/>
       <Update/> 
    </div>
  )
}

export default ReadApi;