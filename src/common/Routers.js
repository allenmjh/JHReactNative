/**
 * 路由路径
 */
import HomePage from '../pages/home/HomePage';
import MinePage from '../pages/me/MinePage';

export const appRouters = {
  MinePage: MinePage,
  HomePage: HomePage,
};

/**
 * 组件路径
 */
import TabBarItem from '../components/tab/TabBarItem';
import HeaderView from '../components/header/HeaderView';
import HeaderButtonView from '../components/header/Header.ButtonView';
import HomeItem from '../components/HomeItem';

export const appComponents = {
  TabBarItem: TabBarItem,
  HeaderView: HeaderView,
  HeaderButtonView: HeaderButtonView,
  HomeItem: HomeItem,
};
