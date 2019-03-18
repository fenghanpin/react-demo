import React from 'react'
import './agency.less'
import del from '../../assets/image/del.png'

//获取当前日期
function getDate() {
    //获取日期
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    if (month < 10) {
        month = "0" + month;
    }
    let day = date.getDate();
    if (day < 10) {
        day = "0" + day;
    }
    //获取时间
    let hour = "00" + date.getHours();
    hour = hour.substr(hour.length - 2);
    let minute = "00" + date.getMinutes();
    minute = minute.substr(minute.length - 2);
    let second = "00" + date.getSeconds();
    second = second.substr(second.length - 2);
    return year + '-' + month + '-' + day + ' '+ hour + ':'+ minute + ':'+ second
}

class Agency extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            flag: false,
            agencyList: [],
            value: ''
        }
    }
    componentDidMount() {
        // 获取代办数据
        this.setState({
            agencyList: [{
                name: '7点起来',
                time: '2019-03-18 23:12:13'
            },{
                name: '中午吃饭',
                time: '2019-03-18 23:12:14'
            },{
                name: '晚上吃饭',
                time: '2019-03-18 23:12:15'
            }]

        })
    }

    // 删除提示
    handleDel = (e) => {
        this.setState({
            flag: true
        })
    }
    // 同步input
    changeVal= (e) => {
        this.setState({
            value: e.target.value
        })
    }
    // 标记任务
    tipAgen = (e) => {
        if (e.currentTarget.style['text-decoration']) {
            e.currentTarget.style = "text-decoration:''"
        } else {
            e.currentTarget.style = "text-decoration:line-through"
        }
    }
    // 删除任务
    delAency = (idx, e) => {
        e.stopPropagation();
        if (window.confirm('确定要删除吗？')) {
            let agencyList = []
            this.state.agencyList.forEach((v, index) => {
                if (idx !== index) agencyList.push(v)
            })
            this.setState({
                agencyList
            })
        }
    }

    onKeyDown = (e) => {
        if (e.keyCode === 13) {
            if (!this.state.value) {
                alert('请输入代办事件')
                return
            }
            this.state.agencyList.push({
                name: e.target.value,
                time: getDate()
            })
            this.setState({
                value: ''
            })
        }
    }

    save = () => {
        console.log('保存')
    }

    render() {
        let agencyList = this.state.agencyList.map((v, index) => {
            return <li key={v.name}><span onClick={this.tipAgen} className="cp di mt5">{v.name}</span><div className="fr di"><span className="timeStyle">{v.time}</span><img src={del} alt="删除" className="cp" onClick={this.delAency.bind(this, index)}/></div></li>
        })
        return (
            <div className="pl20 pr20 agen-container">
                <div className={["alert", "alert-warning", this.state.flag ? "dn" : null].join(' ')}>
                    <span>该 Todo 示例无需 后端 RESTful API 支持</span>
                    <span className="fr cp alert-img" onClick={this.handleDel} title="关闭">x</span>
                </div> 
                <div className="agen-center">
                    <ul>{agencyList}</ul>
                </div>
                <div className="agen-footer">
                    <input placeholder="请输入待办事项，敲回车确认添加" value={this.state.value} onKeyDown={this.onKeyDown} value={this.state.value} onChange={this.changeVal}></input>
                    <a onClick={this.save} className="btn-success">保存</a>
                </div>
            </div>
        )
    }
}

export default Agency