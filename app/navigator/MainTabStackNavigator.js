import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { StackNavigator, addNavigationHelpers } from 'react-navigation'

import GroupsView from 'app/views/GroupsView'
import GroupView from 'app/views/GroupView'
import PostView from 'app/views/PostView'
import ProfileView from 'app/views/ProfileView'

export const MainTabStack = StackNavigator({
  groups: {
    screen: GroupsView,
  },
  group: {
    screen: GroupView,
  },
  post: {
    screen: PostView,
  },
  profile: {
    screen: ProfileView,
  },
})

class MainTabStackNavigator extends Component {
  render() {
    return (
      <View style={{ flex: 1, overflow: 'hidden' }}>
        <MainTabStack
          navigation={addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.navigation,
          })}
        />
      </View>
    )
  }
}

const module = connect(state => ({
  navigation: state.mainTabStackNavigation,
}))(MainTabStackNavigator)

module.forTab = tabName => connect(state => ({
  navigation: state.navigation.mainTabStacks[tabName],
}))(MainTabStackNavigator)

export default module
