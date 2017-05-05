import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'
import store from 'store'
import SplashView from 'views/SplashView'
import WelcomeView from 'views/WelcomeView'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainContainer />
      </Provider>
    )
  }
}

class Main extends Component {
  render() {
    if (this.props.ready) {
      return (
        <WelcomeView />
      )
    }

    return (
      <SplashView />
    )
  }
}

const MainContainer = connect(state => ({
  ready: state.app.stateReady,
}))(Main)
