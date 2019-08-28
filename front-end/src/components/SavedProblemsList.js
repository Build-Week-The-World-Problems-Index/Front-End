import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { } from '../actions'
import data from '../data'
import {Link} from "react-router-dom";

const SavedProblemsList = (props) => {
    const solutionMockData = data.slice(0, 4)
  
    return (
          <div className='saved-problems'>
            <h4>Saved Problems</h4>
            <div className='saved-problems-list'>
              {solutionMockData.map((sol) => (
                <div className="bubble-div">
                  <div className='bubble-top-info'>
                    <button key={sol} className='problem-bubble'>
                      {sol}
                    </button>
                    <div>
                      <p>1,234 votes</p>
                      <a>delete</a>
                    </div>
                  </div>
                  <div className="bubble-bottom-info">Jack P on August 100th, 3021</div>
                </div>
              ))}
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
  )(Dashboard)
  