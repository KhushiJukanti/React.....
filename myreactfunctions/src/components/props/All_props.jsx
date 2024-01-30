import React from 'react'
import PropsDestructuring from './PropsDestructuring'
import Props from './Props'
import GrandparentCmponent from './PropsDrilling'

function All_props() {
  return (
    <div className='container'>
        <h1 style={{color:"Blue"}}>Props............................................</h1>
        <Props/>
        <h1 style={{color:"red"}}>Props Drilling............................................</h1>
        <GrandparentCmponent/>
        <h1 style={{color:"red"}}>Props Destructuring............................................</h1>
        <PropsDestructuring/>
    </div>
  )
}

export default All_props
