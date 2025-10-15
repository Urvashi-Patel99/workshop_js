import React from 'react';

export const Cart =({cart})=>{
  return(
    <>
    {cart?.map((item)=>(
      <div key ={item.id}>
        <p>{item.title}</p>
        
      </div>
    ))}
    </>
  )
}