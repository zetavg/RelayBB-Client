import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export default class PostView extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.name ? navigation.state.params.name : `Post #${navigation.state.params.id}`,
  })

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>PostView</Text>
        <Button
          onPress={() => this.props.navigation.setParams({ name: 'Hello Post' })}
          title="Set title to 'Hello Post'"
        />
      </View>
    )
  }
}
