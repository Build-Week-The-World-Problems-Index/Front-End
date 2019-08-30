import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSingleProblem } from '../actions';

import SolutionForm from './SolutionForm';
import ProblemSolutionsList from './ProblemSolutionsList';
import RelatedProblemList from '../components/RelatedProblemList';

const ProblemDisplay = props => {
  console.log('problemdisaply props', props)
  const id = props.match.params.id;

  useEffect(() => {
    props.fetchSingleProblem(id);
  }, []);

  // console.log('props problems',props.problem);
  return (
    <div className='problem-container'>
      <div className='problem-header'>
        <h1>{props.problem.title}</h1>
        <p>{props.problem.description}</p>
      </div>
      <div className='problem-content'>
        <div className='problem-solutions-container'>
          <h4>Solutions</h4>
          {props.fetchingProblems ? (
            <div>...Loading</div>
          ) : (
            <ProblemSolutionsList solutions={props.problem.problemSolutions} />
          )}
        </div>
        <div className='problem-related-container'>
          <h4>Problems with related solutions</h4>
          <div className='problem-related-solutions'>
            <RelatedProblemList
              relatedProblems={props.problem.relatedProblems}
            />
          </div>
        </div>
      </div>
      <SolutionForm id={id} />
    </div>
  );
};
const mapStateToProps = state => {
  return {
    fetchingProblems: state.problemsReducer.fetchingProblems,
    problem: state.problemsReducer.problem,
  };
};
export default connect(
  mapStateToProps,
  { fetchSingleProblem },
)(ProblemDisplay);
