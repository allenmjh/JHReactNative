/**
 * 全局的一些统一的样式
 */

import { Dimensions, PixelRatio } from 'react-native';

global.gScreen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  onePix: 1 / PixelRatio.get(),
  backgroundColor: 'white',
};

global.gText = {
  color: '#494949',
  primaryTitleFont: 26,
  SecondaryTitleFont: 20,
  ThirdTitleFont: 18,
};

global.imagePath = {
  tabUnselectHome: require('../resource/ic_tab_homepage.png'),
  tabSelectHome: require('../resource/ic_tab_homepage_select.png'),
  tabUnselectMine: require('../resource/ic_tab_my.png'),
  tabSelectMine: require('../resource/ic_tab_my_select.png'),
};

global.toastText = {
  toastError: '错误',
};

global.showText = {
  home: '主页',
  mine: '我的',
};
