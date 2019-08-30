import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addVote, removeVote } from '../actions'

const ProblemSolutionList = (props) => {
  console.log('sol list props', props)

  const voted = (solutionId) => {
    const userId = props.user.user.id.toString()
    const problemId = props.problem._id.toString()
    // console.log('clicked vote',solutionId, userId, problemId)
    props.addVote(solutionId, userId, problemId)
    // props.problem.problemSolutions.forEach(solution => solution._id === props.solution._id  && (solution.votes.filter(vote => )))
    // console.log('voted', props)
  }
  const handleClickDelete = (id) => {
    // console.log('clicked delete')
    props.deleteSolution(id)
  }

  if (props.solutions) {
    return (
      <div className='problem-solutions'>
        {props.solutions.map((solution) => (
          <div key={solution._id} className='problem-solution'>
              <div className='bubble-top-info'>
                <button
                  onClick={() => voted(solution.id)}
                  className='problem-bubble'
                >
                  {solution.name}
                </button>
                <div className='problem-side-content'>
                  <p>{solution.votes.length} votes</p>
                  <p
                    onClick={() => handleClickDelete(solution.id)}
                    className='delete'
                  >
                    delete
                  </p>
                </div>
              </div>
              <div className='bubble-bottom-info'>Problem:</div>
          </div>
        ))}
      </div>
    )
  } else return null
}

const mapStateToProps = (state) => {
  return {
    fetchingProblems: state.problemsReducer.fetchingProblems,
    problem: state.problemsReducer.problem,
    user: state.userReducer.user
  }
}
export default connect(
  mapStateToProps,
  { addVote, removeVote }
)(ProblemSolutionList)
