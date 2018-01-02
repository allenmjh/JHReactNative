import { observable, computed, action, runInAction } from 'mobx';
import { httpGet } from '../common/HttpTool';

export default class FeedStore {
  @observable feedList = [];
  @observable errorMsg = '';
  @observable page = 1;
  @observable isRefreshing = false;
  @observable isNoMore = true;

  constructor(categoryId) {
    this.categoryId = categoryId;
    this.getFeedList();
  }

  @action
  async getFeedList() {
    console.log('---------qing-->');
    try {
      if (this.isRefreshing) this.page = 1;
      const params = {
        page: this.page,
        category: this.categoryId,
        per: 10,
      };
      const responseData = await httpGet(gHttpUrl.feedListUrl, params, 30).then(
        res => res.json(),
      );
      const { feeds, page, total_pages } = responseData;
      runInAction(() => {
        this.isRefreshing = false;
        this.errorMsg = '';
        this.isNoMore = page >= total_pages;
        feeds.map(data => {
          data.key = data.item_id;
        });
        if (this.page === 1) {
          this.feedList.replace(feeds);
        } else {
          this.feedList.splice(this.feedList.length, 0, ...feeds);
        }
      });
    } catch (error) {
      if (error.msg) {
        this.errorMsg = error.msg;
      } else {
        this.errorMsg = error;
      }
    }
  }

  @computed
  get isFetching() {
    return this.feedList.length === 0 && this.errorMsg === '';
  }

  @computed
  get isLoadMore() {
    return this.page !== 1;
  }
}
