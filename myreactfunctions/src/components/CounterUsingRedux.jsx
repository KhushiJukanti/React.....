import { UseSelector,useDispatch, useSelector } from "react-redux";

function CounterUsingRedux(){
    const countState = useSelector((state)=>state.counter)
    const dispatch = useDispatch();

    const increment = ()=>{
        dispatch({type:"increment"})
    }

    return(
        <div className="container">
            <h1>Counter example using react redux</h1>
            <h4>count is: {countState.count}</h4>
            <button className="btn btn-success" onClick={()=>increment()}>Increment</button>
        </div>
    )
}

export default CounterUsingRedux