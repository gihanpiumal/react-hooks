import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    setData("I am Gihan");
    console.log("this works");
  }, [count]);

  return (
    <div>
      UseEffect
      <h1>{data}</h1>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click
      </button>
    </div>
  );
};

export default UseEffect;
