import React from 'react'
import { connect } from 'react-redux'
import {} from '../actions'
import data from '../data'

const UserSavedProblemsList = (props) => {
  // console.log('user saved probs props', props)
  const solutionMockData = data.slice(0, 4)

  return (
    <div className='saved-problems'>
      <h4>Saved Problems</h4>
      <div className='saved-problems-list'>
        {props.userData.problemsOfInterest === undefined ? (
          <p>problems loading...</p>
        ) : (
          <>
            {props.userData.problemsOfInterest.map((sol) => (
              <div key={sol} className='bubble-div'>
                <div className='bubble-top-info'>
                  <button className='problem-bubble'>{sol}</button>
                  <div>
                    <p>1,234 votes</p>
                    <p>delete</p>
                  </div>
                </div>
                <div className='bubble-bottom-info'>
                  Jack P on August 100th, 3021
                </div>
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
    fetchingProblems: state.problemsReducer.fetchingProblems,
    problem: state.problemsReducer.problem
  }
}
export default connect(
  mapStateToProps,
  {}
)(UserSavedProblemsList)
