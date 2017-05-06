import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'
import store from 'app/store'
import Navigator from 'app/navigator'
import SplashView from 'app/views/SplashView'

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
        <Navigator />
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
