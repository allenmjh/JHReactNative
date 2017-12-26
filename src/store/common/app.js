import { observable, action } from 'mobx';

class App {
  @observable backgroundColor = 'red';

  @action
  changeBackgroundColor = color => {
    this.backgroundColor = color;
  };
}
export default new App();
