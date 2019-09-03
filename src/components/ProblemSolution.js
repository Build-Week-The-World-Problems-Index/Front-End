import React from 'react';
import { connect } from 'react-redux';
import { addVote, removeVote } from '../actions';

const ProblemSolution = props => {
  const voted = () => {
    const user = props.user.user.id;
    const problem = props.problem._id;

    props.problem.problemSolutions.forEach(solution => {
      if (solution._id === props.solution._id) {
        if (solution.votes.some(vote => vote.user === user)) {
          props.removeVote(props.solution._id, user, problem);
        } else {
          props.addVote(props.solution._id, user, problem);
        }
      }
    });
  };

  return (
    <div className='problem-solution'>
      <button onClick={voted}>{props.solution.name}</button>
      <p>votes</p>
      <div>{props.solution.votes.length}</div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log('mapstate', state);
  return {
    fetchingProblems: state.problemsReducer.fetchingProblems,
    problem: state.problemsReducer.problem,
    user: state.userReducer.user,
  };
};
export default connect(
  mapStateToProps,
  { addVote, removeVote },
)(ProblemSolution);
