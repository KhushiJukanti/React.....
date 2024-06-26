import UseContextHookdemo from "./UseContext"
import UseEffect from "./UseEffect"
import UseRecucerHookdemo from "./UseReducerHookDemo"
import UseRefHookDemo from "./UseRefHookDemo"
import UseStateHookDemo from "./UseStateHookDemo"

function AllHooks() {
    return (
        <div className="container">
            <h4>All hooks here</h4>

            <h3 style={{ color: 'Cyan' }}>1. -------------------------------useState hook</h3>
            <UseStateHookDemo />


            <h3 style={{ color: 'blue' }}>3. -------------------------------useReducer hook</h3>
            <UseRecucerHookdemo />
            <h3 style={{ color: 'Green' }}>4. -------------------------------useRef hook</h3>
            <UseRefHookDemo />

            <h3 style={{ color: 'red' }}>5. -------------------------------useContext hook</h3>
            <UseContextHookdemo />

            <h3 style={{ color: 'grey' }}>5. -------------------------------useEffect hook</h3>
            <UseEffect />
        </div>


    )
}
export default AllHooks