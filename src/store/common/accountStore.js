import { observable, action } from 'mobx';

class Account {
  @observable account = '123';
}

export default new Account();
