import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../actions";

const Login = props => {
  const [creds, setCreds] = useState({ username: "", password: "" });

  const handleChange = e => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.login(creds).then(() => {
      props.history.push('/dashboard')
    });
    setCreds({ username: "", password: "" });
  };

  return (
    <>
      {props.signingUp ? (
        <p>Loading....</p>
      ) : (
        <div className='login'>
          <form onSubmit={handleSubmit}>
            <h1>login</h1>
            <label>username</label>
            <input
              type='text'
              name='username'
              placeholder='username'
              onChange={handleChange}
              value={creds.username}
            />
            <label>password</label>
            <input
              type='password'
              name='password'
              placeholder='password'
              onChange={handleChange}
              value={creds.password}
            />
            <button>Login</button>
          </form>
          <p>
            New user? Sign up <Link to='/signup'>here.</Link>
          </p>
        </div>
      )}
    </>
  )
};

const mapStateToProps = (state) => {
  return {
    signingUp: state.userReducer.signingUp,
  }
};
export default connect(
  mapStateToProps,
  { login }
)(Login);
