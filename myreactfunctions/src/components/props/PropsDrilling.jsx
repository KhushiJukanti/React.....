const GrandparentCmponent = ()=>{ 
    const data="Hello From Grand Parent"
    return(
        <div>
            <h4>{data}</h4>
            <ParentComponents data={data}/>
        </div>
    )
}
export default GrandparentCmponent

const ParentComponents = (props)=>{
    return(
        <div>
            <h3>{props.data}</h3>
            <ChildComponent data={props.data}/>
        </div>
    )
}

const ChildComponent = (props)=>{
    return(
        <div>
            <h2>{props.data}</h2>
        </div>
    )
}

