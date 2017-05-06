import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import store from 'app/store'
import { NavigationActions } from 'react-navigation'

export default class GroupView extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.name ? navigation.state.params.name : `Group #${navigation.state.params.id}`,
  })

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>GroupView</Text>
        <Button
          onPress={() => this.props.navigation.setParams({ name: 'XYZ' })}
          title="Set title to 'XYZ'"
        />
        <Button
          title="Go to a post"
          onPress={() => {
            store.dispatch(NavigationActions.navigate({
              routeName: 'post',
              params: { id: 'hello-post' },
            }))
          }}
        />
      </View>
    )
  }
}
