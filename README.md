# JHReactNative

基于 Mobx, react-navigation 的练习项目。

## 生命周期
```
export default class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // 准备加载组件，会调用
  componentWillMount() {
    console.log('=============componentWillMount===========');
  }

  //在组件第一次绘制之后会调用 ，通知组件已经加载完成
  componentDidMount() {
    //RN 框架是先调用子组件的 componentDidMount()，然后调用父组件的函数
    console.log('=============componentDidMount===========');
  }

  // 如果组件收到新的属性（props），就会调用
  componentWillReceiveProps(nextProps) {
    // 输入参数 nextProps 是即将被设置的属性，
    // 旧的属性还是可以通过 this.props 来获取。
    // 在这个回调函数里面，你可以根据属性的变化，通过调用 this.setState() 来更新你的组件状态，
    // 这里调用更新状态是安全的，并不会触发额外的 render() 调用
    console.log('=============componentWillReceiveProps===========');
  }

  //当组件接收到新的属性和状态改变的话，都会触发调用
  shouldComponentUpdate(nextProps, nextState) {
    console.log('=============shouldComponentUpdate===========');
    return true; //如果 true 表示需要更新，false则不更新，直接进入等待状态
  }

  // 如果组件状态或者属性改变，并且上面的 shouldComponentUpdate(...) 返回为 true，调用
  // 这个函数调用之后，就会把 nextProps 和 nextState 分别设置到 this.props 和 this.state 中
  /*** 不能使用 this.setState 来修改状态***/
  componentWillUpdate(nextProps, nextState) {
    console.log('=============componentWillUpdate===========');
  }

  //渲染界面
  /*** 不能使用 this.setState 来修改状态***/
  render() {
    console.log('=============render===========');
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to HomeView!</Text>
      </View>
    );
  }

  // 调用了 render() 更新完成界面之后，会调用
  componentDidUpdate() {
    /*** 不能使用 this.setState 来修改状态***/
    console.log('=============componentDidUpdate===========');
  }

  // 当组件要被从界面上移除
  componentWillUnmount() {
    /*** 不能使用 this.setState 来修改状态***/
    console.log('=============componentWillUnmount===========');
  }
}
```




