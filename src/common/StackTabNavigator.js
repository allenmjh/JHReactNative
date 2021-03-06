import React from 'react';
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation';
import { appRouters, appComponents } from './Routers';
import TabBarItem from '../components/tab/TabBarItem';

const Tab = TabNavigator(
  {
    Home: {
      screen: appRouters.HomePage,
      navigationOptions: () => ({
        tabBarLabel: gShowText.home,
        tabBarIcon: ({ focused, tintColor }) => (
          <appComponents.TabBarItem
            focused={focused}
            normalImage={gImagePath.tabUnselectHome}
            selectedImage={gImagePath.tabSelectHome}
          />
        ),
      }),
    },
    Mine: {
      screen: appRouters.MinePage,
      navigationOptions: () => ({
        tabBarLabel: gShowText.mine,
        tabBarIcon: ({ focused, tintColor }) => (
          <appComponents.TabBarItem
            focused={focused}
            normalImage={gImagePath.tabUnselectMine}
            selectedImage={gImagePath.tabSelectMine}
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
      activeTintColor: '#dd9408', // 文字和图片选中颜色   -->自定义的tabbarItem的图片 没有使用tintColor ，不改颜色
      inactiveTintColor: '#979797', // 文字和图片默认颜色 -->自定义的tabbarItem的图片 没有使用tintColor ，不改颜色
      style: { backgroundColor: '#ffffff' },
      labelStyle: {
        fontSize: 16, // 文字大小
      },
    },
  },
);

const Navigator = StackNavigator(
  {
    Tab: { screen: Tab },
    HomeView: { screen: appRouters.HomePage },
  },
  {
    navigationOptions: {
      header: null,
      swipeEnabled: false,
      animationEnabled: false,
      gesturesEnabled: false,
    },

    mode: 'card',
  },
);

export default Navigator;
