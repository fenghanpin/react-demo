import React, { Component } from 'react';
import Home from './module/develop/home'
import './assets/base.css'
// import logo from './logo.svg';
// import './App.css';
// import './App.less';
// import Hello from './module/learnDemo/Hello'
// import MyLog from './module/learnDemo/myLog'
// import Group from './module/learnDemo/group'
// import Calculator from './module/learnDemo/calculator '
// import ComponentInsize from './module/learnDemo/componentInsize'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
        {/* <header className="App-header">/ */}
          {/* 钩子 */}
          {/* <Hello name="fengyifan" warning="抓住一切时间，疯狂生长"/> */}
          {/* 事件处理 */}
          {/* <MyLog name="查看"/> */}
          {/* 条件渲染 */}
          {/* <Group liArr={[1,2]}/> */}
          {/* 状态提升 */}
          {/* <Calculator/> */}
          {/* 组件嵌套 */}
          {/* <ComponentInsize/> */}
          {/* <img src={logo} className="App-logo" alt="logo" /> */}

        {/* </header> */}

      </div>
    );
  }
}

export default App;
