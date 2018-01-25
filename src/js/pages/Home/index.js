// @flow

import React, { Component } from 'react'
import PropTypes, { Props } from 'prop-types'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import Section from '../../elements/Section'
import Button from '../../elements/Button'
import Hero from '../../elements/Hero'

import { resetQuiz } from '../../redux/actions/quiz'

class Home extends Component<Props> {
  componentDidMount() {
    if (this.props.quiz.answered) {
      this.props.resetQuiz()
    }
  }
  render() {
    return (
      <Section>
        <Section.Container>
          <Section.Title>Welcome to the Trivia Challenge</Section.Title>
          <Section.Content>
            <p>You will be presented with 10 True or False questions.</p>
            <Hero.Home>
              <Hero.Body>
                <Hero.HomeContainer>
                  <Hero.Title>Can you score 100%?</Hero.Title>
                  <Hero.Subtitle>
                    <Button>
                      <NavLink to='/quiz'>
                        Begin
                      </NavLink>
                    </Button>
                  </Hero.Subtitle>
                </Hero.HomeContainer>
              </Hero.Body>
            </Hero.Home>
          </Section.Content>
        </Section.Container>
      </Section>
    )
  }
}

Home.propTypes = {
  quiz: PropTypes.object.isRequired,
  resetQuiz: PropTypes.func.isRequired,
}

const mapStateToProps = ({ quiz }) =>
({
  quiz
})

const mapDispatchToProps = dispatch =>
({
  resetQuiz: () => dispatch(resetQuiz())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
