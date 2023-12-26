import { useState } from "react";

function ChildIncome(props){
    const[childIncome,setChildIncome] = useState(5000)
    const[amount,setAmount] = useState(0)

    const sendtoParent = ()=>{
        setChildIncome(childIncome-amount)
        props.updateIncomeToParent(amount)
    }

    
    return(
        <div style={{width:"300px",height:"200px",background:"darkcyan", marginLeft:"20vh"}}>
            <h4>Child Income{childIncome}</h4>
            <input type="text" value={amount} placeholder="Enter amount for send to parent " onChange={(e)=>setAmount(e.target.value)} />
            <button onClick={()=>sendtoParent()}>Send to parent</button>
        </div>
    )
}

export default ChildIncome