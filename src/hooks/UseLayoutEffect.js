import React, {useEffect, useLayoutEffect, useRef} from 'react'

const UseLayoutEffect = () => {
    const inputRef = useRef(null)

    useLayoutEffect (()=>{
        console.log(inputRef.current.value);
    },[])

    useEffect (()=>{
        inputRef.current.value = "HELLO"
    },[])

  return (
    <div>
        <input ref={inputRef} value="gihan"></input>
    </div>
  )
}

export default UseLayoutEffect