import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { login, fetchUser } from '../actions'

const Login = (props) => {
  const [creds, setCreds] = useState({ username: '', password: '' })
  const handleChange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.login(creds).then(() => {
      props.history.push('/dashboard')
      // }).then(()=> {
      //   props.fetchUser(props.user.user.id)
    })
    console.log('login props', props)
  }

  return (
    <>
      {props.signingUp ? (
        <p>Loading....</p>
      ) : (
        <div className='login'>
          <h1>login</h1>
          <form onSubmit={handleSubmit}>
            <div className='login-username'>
              <label>username</label>
              <input
                type='text'
                name='username'
                placeholder='username'
                onChange={handleChange}
                value={creds.username}
              />
            </div>
            <div className='login-password'>
              <label>password</label>
              <input
                type='password'
                name='password'
                placeholder='password'
                onChange={handleChange}
                value={creds.password}
              />
            </div>
            <button>Login</button>
          </form>
          <p>
            New user? Sign up <Link to='/signup'>here.</Link>
          </p>
        </div>
      )}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    signingUp: state.userReducer.signingUp,
    loggedIn: state.userReducer.loggedIn,
    user: state.userReducer.user
  }
}
export default connect(
  mapStateToProps,
  { login, fetchUser }
)(Login)
