import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCRMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };

    default:
      return state;
  }
};

const UseReducers = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCRMENT" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        Click here
      </button>
      {state.showText && <h2>TEXT</h2>}
    </div>
  );
};

export default UseReducers;
