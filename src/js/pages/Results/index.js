import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import Hero from 'elements/Hero'
import Section from 'elements/Section'

import { reduce, equals, add } from 'ramda'

const hasCorrectAnswer = (acc, { correct_answer, answer }) =>
  equals(correct_answer, answer) ? add(1, acc) : acc

const ResultsScreen = ({ quiz: { answered } }) =>
<div className='home-container'>
  <Hero>
    <Hero.Title>Ryan Stegmann</Hero.Title>
    <Hero.Subtitle>Mobile & Web App developer, Javascript Junkie, & Functional Fanatic</Hero.Subtitle>
  </Hero>
  <div className='home'>
    <div className='container'>
      <Section title={`You scored ${reduce(hasCorrectAnswer, 0, answered)}/10`}>
        <br />
        <div className='content home-content'>
          <p>You will be presented with 10 True or False questions.</p>
          <div className='home-quicklinks'>
            <div className='section home-quicklinks__group'>
              <NavLink to='/' className='button is-medium'>
                PLAY AGAIN?
              </NavLink>
            </div>
          </div>
        </div>
      </Section>
    </div>
  </div>
</div>

const mapStateToProps = ({ quiz }) =>
({
  quiz
})

export default connect(
  mapStateToProps, {}
)(ResultsScreen)
