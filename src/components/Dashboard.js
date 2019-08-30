import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUser, deleteSolution } from '../actions'
import UserSavedProblemsList from './UserSavedProblemsList'
import UserProblemContributionsList from './UserProblemContributionsList'
import UserSolutionContributionsList from './UserSolutionContributionsList'
import UserProblemForm from './UserProblemForm'

const Dashboard = (props) => {
  // console.log('dash props', props)

  useEffect(() => {
    const userId = props.user.user.id
    // console.log('userID', props.user.user.id)
    props.fetchUser(props.user.user.id)
  }, [])

  return (
    <>
      <div className='dashboard'>
        <div className='dashboard-header'>
          <div className='title'>
            <h1>{props.user.message}</h1>
          </div>
          <div className='logout'>
            <button>Log Out</button>
          </div>
        </div>
        <div className='dashboard-content'>
          {props.userData === undefined ? (
            <p>Loading...</p>
          ) : (
            <>
              <UserSavedProblemsList userData={props.userData} />
              <UserProblemContributionsList userData={props.userData} />
              <UserSolutionContributionsList userData={props.userData} />
            </>
          )}
        </div>
        <UserProblemForm />
      </div>
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    fetchingData: state.userDataReducer.fetchingData,
    userData: state.userDataReducer.userData,
    user: state.userReducer.user
  }
}
export default connect(
  mapStateToProps,
  { fetchUser, deleteSolution }
)(Dashboard)
