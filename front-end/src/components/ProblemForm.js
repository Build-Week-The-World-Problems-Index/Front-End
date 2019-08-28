import React from "react";
import { connect } from "react-redux";
import { submitProblem } from "../actions";

class ProblemForm extends React.Component {
  constructor() {
    super();
    this.state = {
      problemId: "",
      user: "",
      description: "",
      title: ""
    };
  }

  handleChange = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    submitProblem(this.state);
    this.setState({
      problemId: "",
      user: "",
      description: "",
      title: ""
    });
  };

  render() {
    return (
      <>
        <div className="problem-form">
          <h4>Problem Name</h4>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
            <h4>Problem Description</h4>
            <input
              type="text"
              name="description"
              value={this.state.description}
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
    problem: state.problemsReducer.problem
  };
};
export default connect(
  mapStateToProps,
  { submitProblem }
)(ProblemForm);
