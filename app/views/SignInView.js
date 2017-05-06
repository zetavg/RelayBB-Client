import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import store from 'app/store'
import { NavigationActions } from 'react-navigation'

export default class SignInView extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>SignInView</Text>
        <Button
          title="Go back"
          onPress={() => {
            store.dispatch({
              ...NavigationActions.back(),
              for: 'rootStack',
            })
          }}
        />
      </View>
    )
  }
}
