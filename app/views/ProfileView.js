import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import store from 'app/store'
import { NavigationActions } from 'react-navigation'

export default class ProfileView extends Component {
  static navigationOptions = {
    title: 'Profile',
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>ProfileView</Text>
        <Button
          title="Go to sign in"
          onPress={() => {
            store.dispatch(NavigationActions.navigate({
              routeName: 'signIn',
            }))
          }}
        />
        <Button
          title="Go to view groups"
          onPress={() => {
            store.dispatch(NavigationActions.navigate({
              routeName: 'groups',
            }))
          }}
        />
      </View>
    )
  }
}
