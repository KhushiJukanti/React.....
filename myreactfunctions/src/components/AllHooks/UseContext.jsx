import { useState,createContext, useContext } from "react"

const AgeContext = createContext()

function UseContextHookdemo(){

    const [age,setAge] = useState(10)
    return(
        <div>
            <h4>Hi useContext hook demo</h4>
            <AgeContext.Provider value={age}>
                <Component1/>
            </AgeContext.Provider>

        </div>
    )
}
export default UseContextHookdemo

function Component1(){
    return(
        <div>
            <h4>Hi iam component1</h4>
            <Component2/>
        </div>
    )
}

function Component2(){
    return(
        <div>
            <h4>Hi iam component2</h4>
            <Component3/>
        </div>
    )
}

function Component3(){
    const age = useContext(AgeContext)
    return(
        
            <h4>Hi iam component3 my age is {age}</h4>
        
    )
}

