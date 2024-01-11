import { useRef } from "react";

function UseRefHookDemo(){
    const inputref = useRef (null)
    console.log(inputref)

    return(
        <div>UseRef Demo</div>
    )
}
export default UseRefHookDemo