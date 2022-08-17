import React, { useRef } from "react";

const UseRef = () => {
  const inputRef = useRef(null);

  const onClick = () => {
    console.log(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <div>
      <h1>Hello</h1>
      <input type={"text"} placeholder="Ex..." ref={inputRef}></input>
      <button onClick={onClick}>click me</button>
    </div>
  );
};

export default UseRef;
