/**
 * 全局的一些统一的样式
 */

import { Dimensions, PixelRatio } from 'react-native';

global.gScreen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  onePix: 1 / PixelRatio.get(),
};

global.gText = {
  color: '#494949',
  primaryTitleFont: 26,
  SecondaryTitleFont: 20,
  ThirdTitleFont: 18,
};
