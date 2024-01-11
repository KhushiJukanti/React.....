import { useReducer } from "react"

const initialState = {
    count:0
}
function countReducer(state,action){
    if(action==="increment"){
        return {count: state.count+1}
    }else if(action==="decrement"){
        return{count:state.count-1}
    }else{
        return{count:0}
    }
    

}
function UseRecucerHookdemo(){
    const [state,dispatch] = useReducer(countReducer,initialState)

    const increment = () =>{
        dispatch("increment")
    }
    return(
        <div>
            <h4>Use Reducer Hook Demo</h4>
            <h4>Count value is{state.count}</h4>
            <button onClick={()=>increment()}>Increment</button>
            <button onClick={()=>dispatch("decrement")}>Decrement</button>
        </div>
    )
}
export default UseRecucerHookdemo