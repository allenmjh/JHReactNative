import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { appComponents } from '../../common/Routers';
export default class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <appComponents.HeaderView
          isShowLeftBtn={false}
          title={gShowText.home}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: gScreen.backgroundColor,
  },
});
