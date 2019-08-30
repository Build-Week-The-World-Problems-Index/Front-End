import React, { useState } from 'react'
import { connect } from 'react-redux'
import { deleteSolution, fetchSingleProblem } from '../actions'

const UserSolutionContributionsList = (props) => {
  // console.log('solution contribs props', props.userData.solutionsAddedByUser)
  // console.log('sols', solutions, Array.isArray(solutions))

  const handleClickDelete = (id) => {
    // console.log('clicked delete')
    props.deleteSolution(id)
  }
  const handleClickProblem = (id) => {
    // console.log('clicked fetch problem')
    props.fetchSingleProblem(id)
  }

  return (
    <div className='solution-contributions'>
      <h4>Solution Contributions</h4>
      <div className='solution-contributions-list'>
        {props.userData.solutionsAddedByUser === undefined ? (
          <p>solutions loading...</p>
        ) : (
          <>
            {props.userData.solutionsAddedByUser.map((solution) => (
              <div key={solution.id} className='bubble-div'>
                <div className='bubble-top-info'>
                  <button
                    onClick={() => handleClickProblem(solution.id)}
                    className='problem-bubble'
                  >
                    {solution.name}
                  </button>
                  <div>
                    <p>1,234 votes</p>
                    <p
                      onClick={() => handleClickDelete(solution.id)}
                      className='delete'
                    >
                      delete
                    </p>
                  </div>
                </div>
                <div className='bubble-bottom-info'>TBD</div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    fetchingData: state.userDataReducer.fetchingData,
    fetchSingleProblem: state.problemsReducer.fetchSingleProblem
  }
}
export default connect(
  mapStateToProps,
  { deleteSolution, fetchSingleProblem }
)(UserSolutionContributionsList)
