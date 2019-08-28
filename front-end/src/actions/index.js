import axios from "axios";

export const SIGNUP_FETCHING = "SIGNUP_FETCHING";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

export const signup = user => dispatch => {
  console.log("User: ", user);
  dispatch({ type: SIGNUP_FETCHING });
  return axios
  .post(
    "https://the-world-problems-index.herokuapp.com/api/auth/register",
      user
      )
    .then(res => {
      console.log("token response: ", res);
      localStorage.setItem("auth-token", res.data.token);
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log("token err: ", err);
      dispatch({ type: SIGNUP_FAILURE, payload: err });
    });
};

export const LOGIN_FETCHING = "LOGIN_FETCHING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = user => dispatch => {
  console.log("loggedinUser: ", user);
  dispatch({ type: LOGIN_FETCHING });
  return axios
  .post("https://the-world-problems-index.herokuapp.com/api/auth/login", user)
    .then(res => {
      console.log("token response: ", res);
      localStorage.setItem("auth-token", res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log("token err: ", err);
      dispatch({ type: LOGIN_FAILURE, payload: err });
    });
};

export const PROBLEMS_FETCHING = "PROBLEMS_FETCHING";
export const PROBLEMS_SUCCESS = "PROBLEMS_SUCCESS";
export const PROBLEMS_FAILURE = 'PROBLEMS_FAILURE';

export const fetchProblems = () => dispatch => {
  dispatch({ type: PROBLEMS_FETCHING });
  return axios
    .get('https://the-world-problems-index.herokuapp.com/api/problems')
    .then((res) => {
      console.log('problems list res: ', res)
      dispatch({ type: PROBLEMS_SUCCESS, payload: res.data })
    })
    .catch((err) => {
      console.log('token err: ', err)
      dispatch({ type: PROBLEMS_FAILURE, payload: err })
    })
};

export const SINGLE_PROBLEM_FETCHING = "SINGLE_PROBLEM_FETCHING";
export const SINGLE_PROBLEM_SUCCESS = "SINGLE_PROBLEM_SUCCESS";
export const SINGLE_PROBLEM_FAILURE = 'SINGLE_PROBLEM_FAILURE';

export const fetchSingleProblem = (id) => dispatch => {
  dispatch({ type: SINGLE_PROBLEM_FETCHING });
  return axios
    .get(
      `https://the-world-problems-index.herokuapp.com/api/problems/${id}`
    )
    .then((res) => {
      console.log('single problem res: ', res)
      dispatch({ type: SINGLE_PROBLEM_SUCCESS, payload: res.data })
    })
    .catch((err) => {
      console.log('token err: ', err)
      dispatch({ type: SINGLE_PROBLEM_FAILURE, payload: err })
    })
  };

export const SUBMIT_PROBLEM_START = 'SUBMIT_PROBLEM_START'
export const SUBMIT_PROBLEM_SUCCESS = 'SUBMIT_PROBLEM_SUCCESS'
export const SUBMIT_PROBLEM_FAILURE = 'SUBMIT_PROBLEM_FAILURE'

export const submitProblem = (problem) => dispatch => {
  return (dispatch) => {
    dispatch({ type: SUBMIT_PROBLEM_START })
    axios
      .post(
        'http://localhost:3000', problem)
      .then((res) => {
        console.log('res',res)
        dispatch({ type: SUBMIT_PROBLEM_SUCCESS, payload: res.data.data })
      })
      .catch((err) => {
        dispatch({ type: SUBMIT_PROBLEM_FAILURE, payload: err.response })
      })
  }
}

export const SUBMIT_SOLUTION_START = 'SUBMIT_SOLUTION_START'
export const SUBMIT_SOLUTION_SUCCESS = 'SUBMIT_SOLUTION_SUCCESS'
export const SUBMIT_SOLUTION_FAILURE = 'SUBMIT_SOLUTION_FAILURE'

export const submitSolution = (solutionObj) => dispatch => {
  return (dispatch) => {
    dispatch({ type: SUBMIT_SOLUTION_START })
    axios
      .post(
        'https://the-world-problems-index.herokuapp.com/api/problems/solutions',
        solutionObj
      )
      .then((res) => {
        console.log('res', res)
        dispatch({ type: SUBMIT_SOLUTION_SUCCESS, payload: res.data.data })
      })
      .catch((err) => {
        dispatch({ type: SUBMIT_SOLUTION_FAILURE, payload: err.response })
      })
  }
}

export const DELETE_SAVED_START = 'DELETE_SAVED_START'
export const DELETE_SAVED_SUCCESS = 'DELETE_SAVED_SUCCESS'
export const DELETE_SAVED_FAILURE = 'DELETE_SAVED_FAILURE'

export const deleteSaved = () => dispatch => {
  return (dispatch) => {
    dispatch({ type: DELETE_SAVED_START })
    axios
      .delete(
        'http://localhost:3000')
      .then((res) => {
        console.log('res',res)
        dispatch({ type: DELETE_SAVED_SUCCESS, payload: res.data.data })
      })
      .catch((err) => {
        dispatch({ type: DELETE_SAVED_FAILURE, payload: err.response })
      })
  }
}
