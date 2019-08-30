import React from 'react'
import { connect } from 'react-redux'
import {} from '../actions'
import data from '../data'

const ProblemContributionsList = (props) => {
  // console.log('user problems props', props)
  const solutionMockData = data.slice(0, 4)

  return (
    <div className='problem-contributions'>
      <h4>Problem Contributions</h4>
      <div className='problem-contributions-list'>
        {props.userData.problemsAddedByUser === undefined ? (
          <p>Problems loading...</p>
        ) : (
          <>
            {props.userData.problemsAddedByUser.map((problem) => (
              <div className='bubble-div' key={problem.id}>
                <div className='bubble-top-info'>
                  <button className='problem-bubble'>{problem.title}</button>
                  <div>
                    <p>1,234 votes</p>
                    {/* <p>delete</p> */}
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
)(ProblemContributionsList)
