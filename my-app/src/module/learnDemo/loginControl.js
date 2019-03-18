import React from 'react';

function LoginButton(props) {
    return (
        <div>
            <span>登录</span>
            <button onClick={props.onClick}>
                login
            </button>
        </div>
    );
}

function LogoutButton(props) {
    return (
        <div>
            <span className="red">退出</span>
            <button onClick={props.onClick}>
                logout
            </button>
        </div>
    );
}

class LoginControl extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            isLogin: false
        }
    }
    loginHandle = () => {
        this.setState({
            isLogin: true
        })
    }
    logoutHandle = () => {
        this.setState({
            isLogin: false
        })
    }
    render() {
        const isLogin = this.state.isLogin
        let button = null
        if (isLogin) {
            // 自定义组件的引用，事件继承
            button = <LogoutButton onClick={this.logoutHandle}/>
        } else {
            button = <LoginButton onClick={this.loginHandle}/>
        }
        return (
            <div>
                {button}
            </div>
        )
    }
}
export default LoginControl