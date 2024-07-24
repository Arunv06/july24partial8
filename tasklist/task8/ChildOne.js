import React from 'react'

const ChildOne = ({sharedState, updateState}) => {
  return (
    <div>
        <h3>Child One State : {sharedState} </h3>
        <button onClick={() => updateState('Updated from Child One')}>Update State</button>

    </div>
  )
}

export default ChildOne