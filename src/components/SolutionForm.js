import React from 'react';
import { connect } from 'react-redux';
import { submitSolution } from '../actions';

class SolutionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      userId: this.props.user.user.id, //TODO: get live user ID
      problemId: this.props.id,
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, userId, problemId } = this.state;
    console.log('in handle submit......', problemId);
    this.props.submitSolution(this.state);
    this.setState({
      name: '',
      userId: '',
      problemId: '',
    });
  };

  render() {
    console.log('problem....', this.state.problemId);

    return (
      <>
        <div className='solution-form'>
          <h4>add a solution to this problem</h4>
          <form onSubmit={this.handleSubmit}>
            <input
              type='text'
              name='name'
              value={this.state.solution}
              onChange={this.handleChange}
            />
            <button>submit</button>
          </form>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSubmitting: state.problemsReducer.isSubmitting,
    solution: state.problemsReducer.solution,
    user: state.userReducer.user,
    problem: state.problemsReducer.problem,
  };
};
export default connect(
  mapStateToProps,
  { submitSolution },
)(SolutionForm);
