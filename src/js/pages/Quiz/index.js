import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

import Card from 'elements/Card'
import Button from 'elements/Button'
import Box from 'elements/Box'

import { fetchQuiz, answerQuestion } from '../../redux/actions/quiz'

class QuizScreen extends Component {
  componentWillMount() {
    this.props.fetchQuiz()
  }
  render() {
    const { isLoading, questions, active } = this.props.quiz
    if (!active) {
      return <Redirect to='/results' />
    }
    return (
      <div className='projects'>
        {active.category}
        <Card>
          <Card.Content>
            <Card.Header>
              <div dangerouslySetInnerHTML={{ __html: decodeURIComponent(active.question) }} />
            </Card.Header>
          </Card.Content>
        </Card>
        <Box>
          <Button onClick={() => this.props.answerQuestion(active, 'True')}>True</Button>
          <Button onClick={() => this.props.answerQuestion(active, 'False')}>False</Button>
        </Box>
      </div>
    )
  }
}

const mapStateToProps = ({ quiz }) =>
({
  quiz
})

const mapDispatchToProps = dispatch =>
({
  fetchQuiz: () => dispatch(fetchQuiz()),
  answerQuestion: (q, a) => dispatch(answerQuestion(q, a)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizScreen)
