import React from 'react'
import { connect } from 'react-redux'
import { submitSolution } from '../actions'

class SolutionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      userId: '',
      problemId: ''
    }
  }

  handleChange = (e) => {
    this.setState({ ...this.state, name: e.target.value })
    // console.log('sol FORM state', this.state)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.submitSolution(this.state)
    this.setState({
      name: '',
      userId: '',
      problemId: ''
    })
  }

  componentDidMount() {
    this.setState({ ...this.state, problemId: this.props.id })
  }

  render() {
    return (
      <>
        <div className='solution-form'>
          <h2>add a solution to this problem</h2>
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
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isSubmitting: state.problemsReducer.isSubmitting,
    solution: state.problemsReducer.solution
  }
}
export default connect(
  mapStateToProps,
  { submitSolution }
)(SolutionForm)
