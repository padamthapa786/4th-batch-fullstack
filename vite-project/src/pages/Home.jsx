import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  //data fetching garda
  useEffect(() => {
    //page mount huda kheri

    fetchApiData();
  }, [count]);
  // run once

  async function fetchApiData() {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/api");
      setData(response.data)
    } catch (error) {
      console.log(error?.message)
      setMessage(error?.message)
    }
    finally{
      setLoading(false)
    }
  }

  function Increments() {
    setCount(count + 1);
  }

  console.log(data)
  return (
    <div>
      <button
        onClick={Increments}
        className=" bg-pink-500 p-3 text-white rounded-md mt-4"
      >
        Increment
      </button>
      <p>{count}</p>
      <p>
        {
          message && message
        }
      </p>
      {
        loading && <p>Loading...</p>
      }
      {
        data.map((item,index)=> (
          <div key={index}>
            <li>{item.name}</li>
            <li>{item.age}</li>
            <li>{item.address}</li>
          </div>
        ))
      }
    </div>
  );
};

export default Home;
