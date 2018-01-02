import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { appComponents } from '../../common/Routers';

const propTypes = {
  backgroundColor: PropTypes.string,
  title: PropTypes.string,
  showGoBack: PropTypes.bool,
  leftAction: PropTypes.func,
  rightAction: PropTypes.func,
  isShowLeftBtn: PropTypes.bool,
  isShowRightBtn: PropTypes.bool,
  isLeftText: PropTypes.bool,
  isRightText: PropTypes.bool,
  leftImageScouce: PropTypes.number,
  rightImageScouce: PropTypes.number,
  leftText: PropTypes.string,
  rightText: PropTypes.string,
};

export default class HeaderView extends Component {
  render() {
    const {
      backgroundColor,
      title,
      isShowLeftBtn,
      isShowRightBtn,
      leftAction,
      rightAction,
      leftCustomComponent,
      rightCustomComponent,
      leftImageScouce,
      rightImageScouce,
      isLeftText,
      isRightText,
      leftText,
      rightText,
    } = this.props;
    return (
      <View
        style={[styles.headerViewStyle, { backgroundColor: backgroundColor }]}
      >
        <appComponents.HeaderButtonView
          isShow={isShowLeftBtn}
          onPress={leftAction}
          style={styles.leftViewStyle}
          customComponent={leftCustomComponent}
          isText={isLeftText}
          imageSource={leftImageScouce}
          showText={leftText}
        />

        <View style={styles.centerViewStyle}>
          <Text style={styles.textStyle} numberOfLines={1}>
            {title}
          </Text>
        </View>

        <appComponents.HeaderButtonView
          isShow={isShowRightBtn}
          onPress={rightAction}
          style={styles.rightViewStyle}
          customComponent={rightCustomComponent}
          isText={isRightText}
          imageSource={rightImageScouce}
          showText={rightText}
        />
      </View>
    );
  }
}

HeaderView.propTypes = propTypes;

HeaderView.defaultProps = {
  backgroundColor: 'redrgb(237, 227, 184)',
  isShowLeftBtn: true,
  isShowRightBtn: false,
  title: '标题',
  showGoBack: false,
  leftAction: () => {},
  rightAction: () => {},
  leftImageScouce: gImagePath.headerBack,
  isRightText: false,
  isLeftText: false,
  leftText: '',
  rightText: '',
};

const styles = StyleSheet.create({
  headerViewStyle: {
    height: gScreen.headerHeight,
    flexDirection: 'row',
    paddingTop: gScreen.headerTop,
  },
  leftViewStyle: {
    minWidth: 60,
    justifyContent: 'center',
  },
  centerViewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightViewStyle: {
    minWidth: 60,
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: gText.primaryTitleFont,
    color: gText.color,
  },
});
