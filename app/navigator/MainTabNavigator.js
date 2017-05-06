import React, { Component } from 'react'
import { Platform } from 'react-native'
import { connect } from 'react-redux'
import { TabNavigator, addNavigationHelpers } from 'react-navigation'
// import Icon from 'react-native-vector-icons/Ionicons'
import MainTabStackNavigator from './MainTabStackNavigator'

// function getTabBarIcon(iconName) {
//   if (Platform.OS === 'android') {
//     return ({ tintColor }) => {
//       return <Icon size={20} name={`md-${iconName}`} color={tintColor} />
//     }
//   }

//   return ({ focused, tintColor }) => {
//     if (focused) {
//       return <Icon style={{ marginTop: 4 }} size={32} name={`ios-${iconName}`} color={tintColor} />
//     }

//     return <Icon style={{ marginTop: 4 }} size={32} name={`ios-${iconName}-outline`} color={tintColor} />
//   }
// }

export const MainTab = TabNavigator({
  groupsTab: {
    screen: MainTabStackNavigator.forTab('groupsTab'),
    navigationOptions: {
      // tabBarIcon: getTabBarIcon('list-box'),
      tabBarLabel: 'Groups',
    },
  },
  profileTab: {
    screen: MainTabStackNavigator.forTab('profileTab'),
    navigationOptions: {
      // tabBarIcon: getTabBarIcon('contact'),
      tabBarLabel: 'Profile',
    },
  },
})

class MainTabNavigator extends Component {
  render() {
    return (
      <MainTab
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.navigation,
        })}
      />
    )
  }
}

export default connect(state => ({
  navigation: state.navigation.mainTab,
}))(MainTabNavigator)
