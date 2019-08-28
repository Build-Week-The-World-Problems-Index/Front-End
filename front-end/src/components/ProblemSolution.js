import React from 'react'

const ProblemSolution = (props) => {


  return (
    <div className='problem-solution'>
      <button>{props.solution.name}</button>

    </div>
  )
}

export default ProblemSolution
