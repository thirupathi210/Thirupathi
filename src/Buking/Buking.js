import React,{useState} from 'react';

import BookingForm from './BookingForm';
import AvailableBuses from './AvailableBuses';
function Buking() {
  const[buses,setBuses]=useState([]);
  const handleSerch=(serchDetails)=>{
console.log(serchDetails);
setBuses([
  {Number:1234,sets:23},
  {Number:2345,sets:25},
])
  }
  return (
    <div>
      <h1>buking-site</h1>
      <BookingForm onSerch={handleSerch}/>
      <AvailableBuses buses={buses}/>
    </div>
  )
}

export default Buking;