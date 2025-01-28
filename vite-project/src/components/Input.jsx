import React from "react";

const Input = ({ type, name, id, register }) => {

    
  return (
    <input
      className="border border-black"
      type={type}
      name={name}
      id={id}
      {...register}
    />
  );
};

export default Input;
