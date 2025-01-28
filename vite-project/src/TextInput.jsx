import React, { useState } from 'react'

const TextInput = () => {
   const [text, setText]  = useState('');

   function handleChange(e){
       setText(e.target.value);
   }



  return (
    <div className=' ml-4 mt-4'>
        <input onChange={handleChange} className='  pl-4 border border-red-200 rounded-md' type="text" />
        <p> You Typed : {text} </p>
    </div>
  )
}

export default TextInput