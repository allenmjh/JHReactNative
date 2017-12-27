import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
export default class HeaderButtonView extends Component {
  render() {
    const {
      isShow,
      style,
      customComponent,
      isText,
      showText,
      imageSource,
      imageStyle,
      onPress,
    } = this.props;
    if (!isShow) {
      return <TouchableOpacity style={style} />;
    }

    if (customComponent) return customComponent;

    return (
      <TouchableOpacity style={style} onPress={onPress} activeOpacity={0.8}>
        {isText ? (
          <Text style={styles.textStyle} numberOfLines={1}>
            {showText}
          </Text>
        ) : (
          <Image
            source={imageSource}
            style={!imageStyle && { width: 30, height: 30 }}
            resizeMode="contain"
          />
        )}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    color: gText.color,
    fontSize: gText.SecondaryTitleFont,
    alignSelf: 'center',
  },
});
