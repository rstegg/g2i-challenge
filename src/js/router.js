import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { ConnectedRouter as Router } from 'react-router-redux'

import RootLayout from 'layouts/RootLayout'

import HomeScreen from './pages/Home'
import QuizScreen from './pages/Quiz'
import ResultsScreen from './pages/Results'

import store, { history } from './store'

const RootRouter = () =>
  <Provider store={store}>
    <Router history={history}>
      <RootLayout>
        <Switch>
          <Route exact path='/' component={HomeScreen} />
          <Route path='/quiz' component={QuizScreen} />
          <Route path='/results' component={ResultsScreen} />
        </Switch>
      </RootLayout>
    </Router>
  </Provider>

export default RootRouter
