import React from 'react';
import { connect } from 'react-redux';
import { submitProblem } from '../actions';

class UserProblemForm extends React.Component {
  state = {
    userId: this.props.user.user.id,
    title: '',
    description: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.submitProblem(this.state);
    this.setState({
      title: '',
      description: '',
    });
  };

  render() {
    return (
      <div className='problem-form'>
        <h2>Add a world problem</h2>
        <form onSubmit={this.handleSubmit}>
          <h6>Problem</h6>
          <input
            type='text'
            name='title'
            value={this.state.title}
            onChange={this.handleChange}
          />
          <h6>Description</h6>
          <textarea
            type='text'
            name='description'
            value={this.state.description}
            onChange={this.handleChange}
          />
          <button>submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSubmitting: state.problemsReducer.isSubmitting,
    user: state.userReducer.user,
  };
};
export default connect(
  mapStateToProps,
  { submitProblem },
)(UserProblemForm);
