import React,{ useEffect, useState} from 'react';
const CartList = ({cart}) => {
const[CART,setCART]=useState([]);
  useEffect(()=>{
setCART(cart)
  },[cart])
const data=()=>{
  return('welcome in india caritem index of item in that quanity math');
}

  return (
    <div>
      {CART?.map((cartItem,cartindex)=>{
        return(
          <div key={cartindex}>
            <img src={cartItem.url} width={40}/>
            <span>{cartItem.name}</span>
            <button onClick={()=>{
              const _CART=CART.map((item,index)=>{
                return cartindex ===index ? {...item,quantity:item.quantity>0 ? item.quantity-1:0}:item
              })
              setCART(_CART)
            }}>-</button>
            <span>{cartItem.quantity}</span>
            <button onClick={()=>{
              const _CART=CART.map((item,index)=>{
                return cartindex ===index ? {...item,quantity:item.quantity+1}:item
              })
              setCART(_CART)
            }}>+</button>
            <span>{cartItem.price*cartItem.quantity}</span>
          </div>
        )     
      })}

      <p>total <span></span>
        {CART.reduce((total,item)=>total+item.price*item.quantity,0)}
        </p>
    </div>
    
  )
} 
export default CartList;