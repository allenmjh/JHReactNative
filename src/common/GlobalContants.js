/**
 * 全局的一些统一的样式
 */

import { Dimensions, PixelRatio } from 'react-native';

global.gScreen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  onePix: 1 / PixelRatio.get(),
  backgroundColor: 'white',
  headerHeight: __IOS__ ? 64 : 44,
  headerTop: __IOS__ ? 15 : 0,
  headerColor: 'red',
};

global.gText = {
  color: '#494949',
  primaryTitleFont: 20,
  SecondaryTitleFont: 18,
  ThirdTitleFont: 16,
};

global.gImagePath = {
  tabUnselectHome: require('../resource/ic_tab_homepage.png'),
  tabSelectHome: require('../resource/ic_tab_homepage_select.png'),
  tabUnselectMine: require('../resource/ic_tab_my.png'),
  tabSelectMine: require('../resource/ic_tab_my_select.png'),
  headerBack: require('../resource/ic_back_dark.png'),
};

global.gToastText = {
  toastError: '错误',
};

global.gShowText = {
  home: '主页',
  mine: '我的',
};
