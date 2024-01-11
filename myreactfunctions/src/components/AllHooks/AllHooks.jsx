import UseRecucerHookdemo from "./UseReducerHookDemo"
import UseRefHookDemo from "./UseRefHookDemo"

function AllHooks(){
    return(
        <div className="container">
            <h4>All hooks here</h4>

            <h3 style={{color:'blue'}}>3. -------------------------------useReducer hook</h3>
            <UseRecucerHookdemo/>
            <h3 style={{color:'Green'}}>4. -------------------------------useRef hook</h3>
            <UseRefHookDemo/>
        </div>
        
        
    )
}
export default AllHooks