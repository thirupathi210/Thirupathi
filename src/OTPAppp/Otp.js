import React,{useState} from 'react';
import firebase from './firebase';

function Otp(){
    const[num,setNum]=useState([])
    const handle=(e)=>{
    const{name,value}=e.target
    setNum({[name]:value})
  }
function top() { 
const[num,setNum]=useState([])
const handle=(e)=>{
  const{name,value}=e.target
  setNum({[name]:value})
}
}
const configureCaptcha=()=>{
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
        'size': 'invisible',
        
        'callback': (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
        }
      });
}

  return (
    <div className="App">
         <h2>Login-form</h2>
     <form>
       <div id='sign-in-button'></div>
        <input type='number' placeholder='Enter num'  name='number' required onChange={handle}/>
        <button>Enter</button>
     </form>
     <h2>Enter-Otp</h2>
     <form>
     <input type='number' placeholder='Enter OTP' name='number' required/>
        <button>Submit</button>
     </form>
    </div>
  );
}

export default Otp;
 