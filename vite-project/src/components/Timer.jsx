import React from "react";
import { useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);

  function Increments() {
    setCount(count + 1);
  }

  return (
    <div className=" flex items-center  justify-center mt-4">
      <div>
        <p> Timer below</p>
        <button onClick={Increments} className=" bg-pink-500 p-3 text-white rounded-md mt-4">Increment</button>
        <p>{count}</p>
      </div>
    </div>
  );
};

export default Timer;
