import { useRef } from "react";

function UseRefHookDemo() {
    const inputRef = useRef(null);

    const handleFocus = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div>
            <h1>Focus input example</h1>
            <input type="text" ref={inputRef} placeholder="click the buttton to focus me" />
            <button onClick={handleFocus}>Focus Input</button>
        </div>
    )
    // const inputRef = useRef ("khushi")
    // const ageRef = useRef(null)
    // console.log(inputRef)
    // const showName = ()=>{
    //     console.log(inputRef.current.value)
    // }

    // useEffect(()=>{
    //     ageRef.current.focus()
    // })

    // return(
    //     <div>
    //         <h4>UseRef Demo</h4>
    //         {/* <input type="text" ref={inputRef} value={inputRef.current}/>
    //         <h1>{inputRef.current.value}</h1>
    //         <button onClick={()=>showName()}>showName</button> */}

    //         <input type="text" placeholder="enter age" ref={ageRef}/>
    //     </div>

    // )
}
export default UseRefHookDemo