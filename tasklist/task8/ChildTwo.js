import React from 'react'

const ChildTwo = ({sharedState,updateState}) => {
  return (
    <div>
         <h3>Child Two State: {sharedState}</h3>
         <button onClick={() => updateState('Updated from Child Two')}>Update State</button>
    </div>
  )
}

export default ChildTwo