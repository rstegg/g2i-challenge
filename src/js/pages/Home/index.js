import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import Hero from 'elements/Hero'
import Section from 'elements/Section'

import { refreshQuiz } from '../../redux/actions/quiz'

class Home extends Component {
  componentDidMount() {
    this.props.refreshQuiz()
  }
  render() {
    return (
      <div className='home-container'>
        <Hero>
          <Hero.Title>Ryan Stegmann</Hero.Title>
          <Hero.Subtitle>Mobile & Web App developer, Javascript Junkie, & Functional Fanatic</Hero.Subtitle>
        </Hero>
        <div className='home'>
          <div className='container'>
            <Section title='Welcome to the Trivia Challenge!'>
              <br />
              <div className='content home-content'>
                <p>You will be presented with 10 True or False questions.</p>
                <div className='home-quicklinks'>
                  <h2>Can you score 100%?</h2>
                  <div className='section home-quicklinks__group'>
                    <NavLink to='/quiz' className='button is-medium'>
                      BEGIN
                    </NavLink>
                  </div>
                </div>
              </div>
            </Section>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({  }) =>
({

})

const mapDispatchToProps = dispatch =>
({
  refreshQuiz: () => dispatch(refreshQuiz())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
