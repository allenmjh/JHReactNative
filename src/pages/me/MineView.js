import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default class MeView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  _pushAction() {
    const { navigate } = this.props.navigation;
    navigate('HomeView', { user: 'Sybil' });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={() => this._pushAction()}>
          Welcome to MeView!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
