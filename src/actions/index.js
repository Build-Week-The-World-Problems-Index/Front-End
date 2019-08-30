import axios from 'axios'

export const SIGNUP_FETCHING = 'SIGNUP_FETCHING'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE'

export const signup = (user) => (dispatch) => {
  console.log('SIGNUP user: ', user)
  dispatch({ type: SIGNUP_FETCHING })
  return axios
    .post(
      'https://the-world-problems-index.herokuapp.com/api/auth/register',
      user
    )
    .then((res) => {
      console.log('token response: ', res)
      localStorage.setItem('auth-token', res.data.token)
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data })
    })
    .catch((err) => {
      console.log('token err: ', err)
      dispatch({ type: SIGNUP_FAILURE, payload: err })
    })
}

export const LOGIN_FETCHING = 'LOGIN_FETCHING'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const login = (user) => (dispatch) => {
  console.log('LOGIN user: ', user)
  dispatch({ type: LOGIN_FETCHING })
  return axios
    .post('https://the-world-problems-index.herokuapp.com/api/auth/login', user)
    .then((res) => {
      console.log('token response: ', res)
      localStorage.setItem('auth-token', res.data.token)
      dispatch({ type: LOGIN_SUCCESS, payload: res.data })
    })
    .catch((err) => {
      console.log('token err: ', err)
      dispatch({ type: LOGIN_FAILURE, payload: err })
    })
}

export const USER_FETCHING = 'USER_FETCHING'
export const USER_SUCCESS = 'USER_SUCCESS'
export const USER_FAILURE = 'USER_FAILURE'

export const fetchUser = (id) => (dispatch) => {
  console.log('FETCH user: ', id)
  dispatch({ type: USER_FETCHING })
  return axios
    .get(`https://the-world-problems-index.herokuapp.com/api/auth/user/${id}`)
    .then((res) => {
      console.log('FETCHED USER response: ', res)
      // localStorage.getItem('auth-token', res.data.token)
      dispatch({ type: USER_SUCCESS, payload: res.data })
    })
    .catch((err) => {
      console.log('token err: ', err)
      dispatch({ type: USER_FAILURE, payload: err })
    })
}

export const PROBLEMS_FETCHING = 'PROBLEMS_FETCHING'
export const PROBLEMS_SUCCESS = 'PROBLEMS_SUCCESS'
export const PROBLEMS_FAILURE = 'PROBLEMS_FAILURE'

export const fetchProblems = () => (dispatch) => {
  dispatch({ type: PROBLEMS_FETCHING })
  return axios
    .get('https://the-world-problems-index.herokuapp.com/api/problems')
    .then((res) => {
      console.log('PROBLEM LIST res: ', res)
      dispatch({ type: PROBLEMS_SUCCESS, payload: res.data })
    })
    .catch((err) => {
      console.log('err: ', err)
      dispatch({ type: PROBLEMS_FAILURE, payload: err })
    })
}

export const SINGLE_PROBLEM_FETCHING = 'SINGLE_PROBLEM_FETCHING'
export const SINGLE_PROBLEM_SUCCESS = 'SINGLE_PROBLEM_SUCCESS'
export const SINGLE_PROBLEM_FAILURE = 'SINGLE_PROBLEM_FAILURE'

export const fetchSingleProblem = (id) => (dispatch) => {
  dispatch({ type: SINGLE_PROBLEM_FETCHING })
  return axios
    .get(`https://the-world-problems-index.herokuapp.com/api/problems/${id}`)
    .then((res) => {
      console.log('SINGLE PROBLEM res: ', res)
      dispatch({ type: SINGLE_PROBLEM_SUCCESS, payload: res.data })
    })
    .catch((err) => {
      console.log('err: ', err)
      dispatch({ type: SINGLE_PROBLEM_FAILURE, payload: err })
    })
}

export const SUBMIT_PROBLEM_START = 'SUBMIT_PROBLEM_START'
export const SUBMIT_PROBLEM_SUCCESS = 'SUBMIT_PROBLEM_SUCCESS'
export const SUBMIT_PROBLEM_FAILURE = 'SUBMIT_PROBLEM_FAILURE'

export const submitProblem = (problem) => (dispatch) => {
  dispatch({ type: SUBMIT_PROBLEM_START })
  axios
    .post(
      `'https://the-world-problems-index.herokuapp.com/api/problems`,
      problem
    )
    .then((res) => {
      console.log('SUBMITTED PROBLEM res:', res)
      dispatch({ type: SUBMIT_PROBLEM_SUCCESS, payload: res.data.data })
    })
    .catch((err) => {
      console.log('err: ', err)
      dispatch({ type: SUBMIT_PROBLEM_FAILURE, payload: err.response })
    })
}

export const SUBMIT_SOLUTION_START = 'SUBMIT_SOLUTION_START'
export const SUBMIT_SOLUTION_SUCCESS = 'SUBMIT_SOLUTION_SUCCESS'
export const SUBMIT_SOLUTION_FAILURE = 'SUBMIT_SOLUTION_FAILURE'

export const submitSolution = (solutionObj) => (dispatch) => {
  dispatch({ type: SUBMIT_SOLUTION_START })
  axios
    .post(
      'https://the-world-problems-index.herokuapp.com/api/problems/solutions',
      solutionObj
    )
    .then((res) => {
      console.log('SUBMIT SOLUTION res:', res)
      dispatch({ type: SUBMIT_SOLUTION_SUCCESS, payload: res.data.data })
    })
    .catch((err) => {
      console.log('err: ', err)
      dispatch({ type: SUBMIT_SOLUTION_FAILURE, payload: err.response })
    })
}

export const DELETE_SOLUTION_START = 'DELETE_SOLUTION_START'
export const DELETE_SOLUTION_SUCCESS = 'DELETE_SOLUTION_SUCCESS'
export const DELETE_SOLUTION_FAILURE = 'DELETE_SOLUTION_FAILURE'

export const deleteSolution = (solutionId) => (dispatch) => {
  dispatch({ type: DELETE_SOLUTION_START })
  axios
    .delete(
      `https://the-world-problems-index.herokuapp.com/api/problems/solutions/${solutionId}`
    )
    .then((res) => {
      console.log('DELETE SOLUTION res:', res)
      dispatch({ type: DELETE_SOLUTION_SUCCESS, payload: res.data.data })
    })
    .catch((err) => {
      console.log('err: ', err)
      dispatch({ type: DELETE_SOLUTION_FAILURE, payload: err.response })
    })
}

export const ADD_VOTE_START = 'ADD_VOTE_START'
export const ADD_VOTE_SUCCESS = 'ADD_VOTE_SUCCESS'
export const ADD_VOTE_FAILURE = 'ADD_VOTE_FAILURE'

export const addVote = (solutionId, userId, problemId) => (dispatch) => {
  dispatch({ type: ADD_VOTE_START })
  return axios
    .put(
      `https://the-world-problems-index.herokuapp.com/api/problems/solutions/vote/${solutionId}`,
      { userId, problemId },
      {
        headers: {
          Authorization: `${localStorage.getItem('auth-token')}`
        }
      }
    )
    .then((res) =>
      dispatch({
        type: ADD_VOTE_SUCCESS,
        payload: { solutionId: solutionId, problem: res.data }
      })
    )
    .catch((error) => dispatch({ type: ADD_VOTE_FAILURE, payload: error }))
}

export const REMOVE_VOTE_START = 'REMOVE_VOTE_START'
export const REMOVE_VOTE_SUCCESS = 'REMOVE_VOTE_SUCCESS'
export const REMOVE_VOTE_FAILURE = 'REMOVE_VOTE_FAILURE'

export const removeVote = (solutionId, userId) => (dispatch) => {
  dispatch({ type: REMOVE_VOTE_START })
  return axios
    .put(
      `https://the-world-problems-index.herokuapp.com/api/problems/solutions/unvote/${solutionId}`,
      userId
    )
    .then((res) =>
      dispatch({
        type: REMOVE_VOTE_SUCCESS,
        payload: { solutionId: solutionId, votes: res.data }
      })
    )
    .catch((error) => dispatch({ type: REMOVE_VOTE_FAILURE, payload: error }))
}
