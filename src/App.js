import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Forst from './Forst';
//add commit
// import Forst from './Forst';
import Second from './Second';
// import Food from './Food/Food';
import Buking from './Buking/Buking';
import CurrencyConverter from './CurrencyConverter';
import Shaping from './shaping/Shaping';
// import Otp from './OTPAppp/Otp';
import UserApi from './UserApi';
import CallApi from './CallApi';
import ReadApi from './ReadApi/ReadApi';
import Home from './ReadApi/Home';
import Read from './ReadApi/Read';
import Update from './ReadApi/Update';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <h2>Welcome</h2>
        <h1>Welcome coding programming</h1> */}
        {/* <p><Link to='/forst'>Go to First Page</Link></p> */}
        {/* Routes definition */}
        <Routes>
          <Route path='/forst' element={<Forst/>}/>
          <Route path='/second' element={<Second/>}/>
          {/* <Route path='/food-recipe' element={<Food/>}/> */}
          <Route path='/buking' element={<Buking/>}/>
          <Route path='/currency' element={<CurrencyConverter/>}/>
          <Route path='/Shaping' element={<Shaping/>}/>
          {/* <Route path='/otp' element={<Otp/>}/> */}
          <Route path='/Api' element={<UserApi/>}/>
          <Route path='/calls' element={<CallApi/>}/>
          <Route path='/ReadApi' element={<ReadApi/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/Read' element={<Read/>}/>
          <Route path='/update' element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
