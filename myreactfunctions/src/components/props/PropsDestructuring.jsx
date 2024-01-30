import React from "react";

const CarExample = {
    model: "RangRover",
    year: 2022,
    dealer: "TATA",
    color: "Red"
}

const PropsDestructuring =()=>{
    return(
        <div className="container">
            <Child car={CarExample}/>
            
        </div>
    )
}

export default PropsDestructuring



const Child=(props)=>{
    const{model, year, dealer, color} = props.car
    console.log(props)
    return(
        <section>
            <div>{model}</div>
            <div>{year}</div>
            <div>{dealer}</div>
            <div>{color}</div>
        </section>
    )
}