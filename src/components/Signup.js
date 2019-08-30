import React, { useState } from 'react'
import { connect } from 'react-redux'
import { signup } from '../actions'

const Signup = (props) => {
  const [creds, setCreds] = useState({ username: '', password: '' })

  const handleChange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.signup(creds).then(() => props.history.push('/dashboard'))
    setCreds({ username: '', password: '' })
  }
  // console.log('signup props', props)

  return (
    <>
      {!props.signingUp ? (
        <div className='signup'>
          <h1>sign up</h1>
          <form onSubmit={handleSubmit}>
            <div className='signup-username'>
              <label>username</label>
              <input
                type='text'
                name='username'
                placeholder='username'
                onChange={handleChange}
                value={creds.username}
              />
            </div>
            <div className='signup-password'>
              <label>password</label>
              <input
                type='password'
                name='password'
                placeholder='password'
                onChange={handleChange}
                value={creds.password}
              />
            </div>
            <button type='submit'>Submit</button>
          </form>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    signingUp: state.userReducer.signingUp
  }
}
export default connect(
  mapStateToProps,
  { signup }
)(Signup)
