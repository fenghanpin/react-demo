import React from 'react';

class helloWord extends React.Component{
    constructor(props) {
        // super调用父类的构建方法，子类继承才可以设置this，child的this不相等于new Child,this是在new Child上包裹出来的
        super(props)
        this.state = {
            date: new Date()
        }
    }
    // dom渲染前 created
    componentWillMount() {
        console.log(this)
    }
    // dom渲染后 mounted
    componentDidMount() {
        this.num = 0
        this.Timer = setInterval(()=> {
            this.tick()
        }, 1000)
    }
    tick() {
        console.log(this.num)
        // this.setState设置状态的方法
        this.setState({
            date: new Date()
        })
    }
    // 监听props参数的变化  ： watch
    componentWillReceiveProps(props) {
        console.log(props)
        // console.log(this.props)
    }
    // 类似组件销毁前 beforeDestory
    componentWillUnmount() {
        clearInterval(this.Timer)
    }
    render() {
        return (
            <div className="App-hello">
                <div> Hello {this.props.name}, good morning {this.state.date.toLocaleTimeString()}</div>
                <div>{this.props.warning}</div>
            </div>
        )
    }
}

export default helloWord
