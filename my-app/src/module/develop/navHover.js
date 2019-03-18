import React from 'react'

class NavHover extends React.Component{
    // 继承nav组件的操作tab事件
    handleTab = (liID) => {
        this.props.handleTab(liID)
    }

    logOut = () => {
        this.props.logOut()
    }

    render() {
        const imgStyle = {
            "width": "30px",
            "height": "30px",
            "borderRadius": "15px",
            "verticalAlign": "middle",
            "marginBottom": "2px"
        }
        const spanName = {
            "fontSize": '14px'
        }
        const navHoverArr = this.props.navData.map((x) => {
            return <li title={x.name} id={x.type} className={["fl", this.props.tabType === x.type ? "active" : null].join(' ')} key={x.type} onClick={() => this.handleTab(x.type)}><span style={spanName}>{x.name}</span></li>
        })

        return (
            <div className={["hover-content", this.props.hover ? 'dn' : null].join(' ')}>
                <ul>
                    {navHoverArr}
                    <div className="clearfloat">
                        <img src={this.props.user} alt="" style={imgStyle}/>
                        <a onClick={this.logOut} className="logout cp ml10">退出</a>
                    </div>
                </ul>
            </div>
        )
    }
}

export default NavHover