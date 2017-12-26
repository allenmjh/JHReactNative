import React from 'react';
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation';
import Routers from './Routers';

const Tab = TabNavigator(
  {
    Home: {
      screen: Routers.HomeView,
      navigationOptions: () => ({
        tabBarLabel: '首页',
        title: 'HomeView',
        tabBarIcon: ({ focused, tintColor }) => (
          <Routers.TabBarItem
            focused={focused}
            normalImage={imagePath.tabUnselectHome}
            selectedImage={imagePath.tabSelectHome}
          />
        ),
      }),
    },
    Mine: {
      screen: Routers.MineView,
      navigationOptions: () => ({
        tabBarLabel: '我的',
        title: 'MineView',
        tabBarIcon: ({ focused, tintColor }) => (
          <Routers.TabBarItem
            focused={focused}
            normalImage={imagePath.tabUnselectMine}
            selectedImage={imagePath.tabSelectMine}
          />
        ),
      }),
    },
  },

  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom', //设置tabbar的位置，iOS默认在底部，安卓默认在顶部
    swipeEnabled: false, //是否允许在标签之间进行滑动
    backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
    animationEnabled: false, //是否在更改标签时显示动画
    lazy: true, //是否根据需要懒惰呈现标签，而不是提前，意思是在app打开的时候将底部标签栏全部加载，默认false,推荐为true
    tabBarOptions: {
      showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
      indicatorStyle: { height: 0 }, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
      activeTintColor: '#dd9408', // 文字和图片选中颜色
      inactiveTintColor: '#979797', // 文字和图片默认颜色
      style: { backgroundColor: '#ffffff' },
      labelStyle: {
        fontSize: 16, // 文字大小
      },
    },
  },
);

/**
 * header：可以设置一些导航的属性，如果隐藏顶部导航栏只要将这个属性设置为null
 * headerTitle：设置导航栏标题，推荐
 * headerBackTitle：设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题。可以自定义，也可以设置为null
 * headerTruncatedBackTitle：设置当上个页面标题不符合返回箭头后的文字时，默认改成"返回"
 * headerRight：设置导航条右侧。可以是按钮或者其他视图控件
 * headerLeft：设置导航条左侧。可以是按钮或者其他视图控件
 * headerStyle：设置导航条的样式。背景色，宽高等
 * headerTitleStyle：设置导航栏文字样式
 * headerBackTitleStyle：设置导航栏‘返回’文字样式
 * headerTintColor：设置导航栏颜色
 * headerPressColorAndroid：安卓独有的设置颜色纹理，需要安卓版本大于5.0
 * gesturesEnabled：是否支持滑动返回手势，iOS默认支持，安卓默认关闭
 */
const Navigator = StackNavigator(
  {
    Tab: { screen: Tab },
    HomeView: { screen: Routers.HomeView },
  },
  {
    navigationOptions: {
      header: null,
      showIcon: true,
      swipeEnabled: false,
      animationEnabled: false,
      gesturesEnabled: false,
    },

    mode: 'card',
  },
);

export default Navigator;
