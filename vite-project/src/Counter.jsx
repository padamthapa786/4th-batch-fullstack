import React, { useState } from 'react'

const Counter = () => {
    // count: the current value of the state
    //setcount : a func to update the state
    // o is the initial value of the state




  const [count, setCount ] =  useState(0);

  //s
    function increaseCount(){
        setCount(count + 1);
    }
 
    function decreaseCount(){
        setCount(count - 1);
    }

  return (
    <div className=' ml-3'>
        <p className=' mb-3 mt-5'> Clicked {count}  time</p>
        <button className=' bg-green-500 p-3 rounded-md  text-white' onClick={increaseCount}> Click me to increase</button>
        <button className=' bg-red-500 p-3 ml-5 rounded-md  text-white' onClick={decreaseCount}> Click me to decrease</button>

    </div>
  )
}

export default Counter