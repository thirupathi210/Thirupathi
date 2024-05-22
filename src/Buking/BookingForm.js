import React,{useState} from 'react'

function BookingForm({onSerch}) {
  const[form,setForm]=useState('');
  const[to,setTo]=useState('');
  const[date,setDate]=useState('');
  const handle=(e)=>{
    e.preventDefault()
    (form,to,date['63.4666666@66','63.545@545','63.045@45','loot 99@265'])
  }

  return (
    <div>
      <form onSubmit={handle}> 
        <input type='text' placeholder='from' value={form} onChange={(e)=>setForm(e.target.value)}/>
        <input type='text' placeholder='to' value={to} onChange={(e)=>setTo(e.target.value)}/>
        <input type='date' placeholder='date' value={date} onChange={(e)=>setDate(e.target.value)}/>
        <button>Serch</button>
      </form>
    </div>
  )
}

export default BookingForm;