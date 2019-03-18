import React from 'react'
import LoginControl from './loginControl'

class myLog extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            isToggle: true,
            name:'fengyifan'
        }
        // 使用bind给类的方法绑定this，否则this是一个undefined
        // this.handle = this.handle.bind(this)
    }
    // 类的方法默认是不会绑定 this 的
    // handle() {
    //     console.log(this)
    //     this.setState(prevState => (
    //         {
    //             isToggle: !prevState.isToggle
    //         }
    //     ))
    // }
    handle = () => {
        console.log(this)
        this.setState(prevState => (
            {
                isToggle: !prevState.isToggle
            }
        ))
    }
    alertState(name, e) {
        // e.preventDefault();
        alert(name)
    }
    render() {
        return (
            <div className="App-myLog">
                {this.state.isToggle ? '打开': '关闭'}
                {/* <button onClick={(e) => this.handle(e)}> */}
                <button onClick={this.handle}>
                    {this.state.isToggle ? 'ON' : 'OFF'}
                </button>
                <div className="h40">
                    <a href="https://www.baidu.com/" onClick={this.alertState.bind(this, this.props.name)} className="aStyle">传参</a>
                </div>
                <LoginControl/>
            </div>
        )
    }
}

export default myLog