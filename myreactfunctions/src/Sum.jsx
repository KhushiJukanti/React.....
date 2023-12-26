import { useState } from "react";

function Sum(){
    const [firstNum,setFirstNum] = useState(0)
    const [secondNum,setSecondNum] = useState(0)
    const [result,setResult] = useState(0)

    function handleFirstNum(e){
        setFirstNum(e.target.value)
    }
    const handleSecondNum = (e)=>{
        setSecondNum(e.target.value)
    }
    const caluculate = ()=>{
        // setResult(+firstNum + +secondNum)
        setResult(Number(firstNum) + Number(secondNum))
    }
    return(
        <div>
            <h2>Sum of two Numbers</h2>
            <label htmlFor="Sum">Enter FirstNum</label>
            <input type="text" value={firstNum} onChange={(e)=>handleFirstNum(e)}/>
            <br />
            <label htmlFor="Sum">Enter SecondNum</label>
            <input type="text" value={secondNum} onChange={(e)=>handleSecondNum(e)}/>
            <br />

            <button onClick={()=>caluculate()}>SUM</button>

            <h4> sum of 2 number={result}</h4>
        </div> 
    )
}

export default Sum