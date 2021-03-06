// @flow

import React, { Component } from 'react'
import PropTypes, { Props } from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

import { length } from 'ramda'

import Card from '../../elements/Card'
import Section from '../../elements/Section'
import Loader from '../../elements/Loader'

import { fetchQuiz, answerQuestion } from '../../redux/actions/quiz'

const TrueButton = styled(Card.Footer.Item)`
  color: hsl(141, 71%,  48%);
`

const FalseButton = styled(Card.Footer.Item)`
  color: hsl(348, 100%, 61%);
`

class QuizScreen extends Component<Props> {
  componentWillMount() {
    this.props.fetchQuiz()
  }
  render() {
    const { quiz: { isLoading, questions, answered, active }, answerQuestion } = this.props
    if (!active) {
      return <Redirect to='/results' />
    }
    if (isLoading) {
      return (
        <Section>
          <Section.Content>
            <Loader className='icon ion-load-c' />
          </Section.Content>
        </Section>
      )
    }
    return (
      <Section>
        <Section.Container>
          <Section.Title>{`${length(answered)}/${length(questions)}`}</Section.Title>
          <Section.Content>
            <Card>
              <Card.Header>
                <Card.Header.Title>
                  {active.category}
                </Card.Header.Title>
              </Card.Header>
              <Card.Content>
                <div dangerouslySetInnerHTML={{ __html: decodeURIComponent(active.question) }} />
              </Card.Content>
              <Card.Footer>
                <TrueButton href='#' onClick={() => answerQuestion(active, 'True')}>True</TrueButton>
                <FalseButton href='#' onClick={() => answerQuestion(active, 'False')}>False</FalseButton>
              </Card.Footer>
            </Card>
          </Section.Content>
        </Section.Container>
      </Section>
    )
  }
}

QuizScreen.propTypes = {
  quiz: PropTypes.object.isRequired,
  fetchQuiz: PropTypes.func.isRequired,
  answerQuestion: PropTypes.func.isRequired,
}

const mapStateToProps = ({ quiz }) =>
({
  quiz
})

const mapDispatchToProps = dispatch =>
({
  fetchQuiz: () => dispatch(fetchQuiz()),
  answerQuestion: (question, answer) => dispatch(answerQuestion(question, answer)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizScreen)
