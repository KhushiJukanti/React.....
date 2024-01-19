import { useEffect, useRef } from "react";

function UseRefHookDemo(){
    const inputRef = useRef ("khushi")
    const ageRef = useRef(null)
    console.log(inputRef)
    const showName = ()=>{
        console.log(inputRef.current.value)
    }

    useEffect(()=>{
        ageRef.current.focus()
    })

    return(
        <div>
            <h4>UseRef Demo</h4>
            {/* <input type="text" ref={inputRef} value={inputRef.current}/>
            <h1>{inputRef.current.value}</h1>
            <button onClick={()=>showName()}>showName</button> */}

            <input type="text" placeholder="enter age" ref={ageRef}/>
        </div>
        
    )
}
export default UseRefHookDemo