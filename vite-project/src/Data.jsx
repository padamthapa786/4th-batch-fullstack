import React, { useState } from "react";

const Data = () => {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  function handleDelete() {
    const removeData = data.filter((value, index) => index != data.length - 1);
    const addData = 
    setData(addData);
  }

  function adddatas() {
    const addData = [...data,  data.length + 1];
    setData(addData)
  }

  return (
    <div>
      {data.map((value, index) => {
        return <p>{value}</p>;
      })}
      <button onClick={adddatas}> Delete</button>
    </div>
  );
};

export default Data;
