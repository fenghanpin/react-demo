import React from 'react'
import NavHover from './navHover'
import navData from './nav.json'
import './nav.less'
import user from '../../assets/image/admin.png'
import expand from '../../assets/image/expand.jpg'

class NavPage extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            hover: true
        }
    }

    componentWillMount() {
        // 获取navData数据
        // 获取user数据
    }
    // 继承home组件的操作tab事件
    handleTab = (liID) => {
        this.props.changeMain(liID)
    }

    logOut = (e) => {
        if (window.confirm('确定要退出吗？')) {
            window.location.reload()
        }
    }

    handleMouseUserOver = (e) => {
        this.setState({
            hover: false
        })
    }

    handleMouseOut = (e) => {
        setTimeout(() => {
            this.setState({
                hover: true
            })
        }, 500)
    }

    render() {
        const navArr = navData.map((x) => {
            return <li id={x.type} className={["fl", this.props.tabType === x.type ? "active" : null].join(' ')} key={x.type} onClick={() => this.handleTab(x.type)}><span>{x.name}</span></li>
        })

        return (
            <div className="navHeader">
                <div className="head-logo di fl">Demo Logo</div>
                <div className="left-content di">
                    <ul>
                        {navArr}
                    </ul>
                </div>
                <div className="expand-content dn fr mt10 mr20"
                    onMouseOver={this.handleMouseUserOver}
                    onMouseLeave={this.handleMouseOut}>
                    <img src={expand} alt="" className="img-style"/>
                </div>
                <div className="right-content di fr mr20">
                    <a onClick={this.logOut} className="logout cp">退出</a>
                </div>
                <div className="user-content di fr mr10">
                    <img src={user} alt="" className="img-style"/>
                </div>
                <NavHover 
                hover={this.state.hover}
                tabType={this.props.tabType}
                navData={navData}
                handleTab={this.handleTab} 
                logOut={this.logOut}/>
            </div>
        )
    }
}

export default NavPage