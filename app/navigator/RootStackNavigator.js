import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StackNavigator, addNavigationHelpers } from 'react-navigation'
import MainTabNavigator from './MainTabNavigator'
import SignInView from 'app/views/SignInView'

export const RootStack = StackNavigator({
  main: {
    screen: MainTabNavigator,
  },
  signIn: {
    screen: SignInView,
  },
}, {
  headerMode: 'none',
  mode: 'modal',
})

class RootStackNavigator extends Component {
  render() {
    return (
      <RootStack
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.navigation,
        })}
      />
    )
  }
}

export default connect(state => ({
  navigation: state.navigation.rootStack,
}))(RootStackNavigator)
