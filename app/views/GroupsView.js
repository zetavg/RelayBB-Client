import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import store from 'app/store'
import { NavigationActions } from 'react-navigation'

export default class GroupsView extends Component {
  static navigationOptions = {
    title: 'Groups',
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>GroupsView</Text>
        <Button
          title="Go to a group"
          onPress={() => {
            store.dispatch(NavigationActions.navigate({
              routeName: 'group',
              params: { id: 'xyz' },
            }))
          }}
        />
      </View>
    )
  }
}
