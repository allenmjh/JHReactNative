import { observable, action } from 'mobx';

class App {
  @observable backgroundColor = 'red';

  @action //记住：永远不要直接修改被观察的变量，使用 action() 来做这件事。
  changeBackgroundColor = color => {
    this.backgroundColor = color;
  };
}
export default new App();
