import React, { Component } from 'react';
import { observer } from 'mobx-react/native';
import { reaction } from 'mobx';
import { StyleSheet, Text, View, FlatList, RefreshControl } from 'react-native';
import { appComponents } from '../../common/Routers';
import FeedStore from '../../store/feedBaseStore';

const DELICACY_ID = 1;

@observer
export default class HomeView extends Component {
  constructor(props) {
    super(props);
    this.feedStore = new FeedStore(DELICACY_ID);
  }

  componentDidMount() {
    // autorun 和 reaction 功能相似，autorun 会立即执行，reaction会等到追踪的被观察变量第一次发生变化后才会执行
    // autorun 和 reaction 都会返回一个 disposer 函数。你可以触发 disposer 并且在任何时候取消那些副作用
    this.dispose = reaction(
      () => this.feedStore.page,
      () => this.feedStore.getFeedList(),
    );
  }

  componentWillUnmount() {
    this.dispose(); //取消 reaction
  }

  _refreshing = () => {
    this.feedStore.page = 1;
  };

  _onload = () => {
    this.feedStore.page++;
  };
  _separator = () => {
    return <View style={{ height: 1, backgroundColor: '#fff' }} />;
  };

  _renderOneItem(item) {
    const style = {
      width: gScreen.width - 15 * 2,
      marginLeft: 15,
    };
    return (
      <appComponents.HomeItem
        itemsData={item}
        onPress={() => {}}
        style={style}
      />
    );
  }

  render() {
    const { feedList, isFetching } = this.feedStore;
    return (
      <View style={styles.container}>
        <appComponents.HeaderView
          isShowLeftBtn={false}
          title={gShowText.home}
        />
        <FlatList
          data={feedList}
          renderItem={({ item }) => this._renderOneItem(item)}
          ItemSeparatorComponent={this._separator}
          refreshing={isFetching}
          onRefresh={this._refreshing}
          onEndReachedThreshold={1}
          onEndReached={this._onload}
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
