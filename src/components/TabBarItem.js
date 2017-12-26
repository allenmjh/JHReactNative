import React, { Component } from 'react';
import { Image } from 'react-native';

export default class TabBarItem extends Component {
  render() {
    return (
      <Image
        source={
          this.props.focused ? this.props.selectedImage : this.props.normalImage
        }
        style={{ width: 30, height: 30 }}
      />
    );
  }
}
