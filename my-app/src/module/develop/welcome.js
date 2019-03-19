import React from 'react'
import './welcome.less'

class Welcome extends React.Component{
    handleTab = (type) => {
        this.props.changeMain(type)
    }

    componentWillUnmount() {
        // 销毁组件
        console.log('销毁欢迎页组件，适合清除定时器')
    }

    render() {
        return (
            <div className="wel-container pl20 pr20 mr20 ml20">
                <h1>
                    欢迎使用 Fengyifan Demo
                </h1>
                <div className="mt20 mb20">
                    <a onClick={() => this.handleTab('message')} className="btn-success mr20">前往留言板 ></a>
                    <a onClick={() => this.handleTab('agency')} className="btn-success">前往代办事项 ></a>
                </div>
            </div>
        )
    }
}

export default Welcome