import { useState } from "react";
import ChildIncome from "./ChildIncome";

function ParentIncome(){
    const[parentIncome,setParentIncome] = useState(10000)

    return(
        <div style={{width:"600px", height:"400px",background:"#ddd"}}>
            <h4>Parent Income{parentIncome}</h4>
            <ChildIncome updateIncomeToParent={(amount)=>setParentIncome(+parentIncome + +amount)}/>
        </div>
    )
}

export default ParentIncome