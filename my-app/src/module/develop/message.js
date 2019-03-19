import React from 'react'
import MessageData from './message.json'
import './message.less'

class Message extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            page: 1
        }
    }
    componentDidMount() {
        console.log('获取信息数据')
    }

    prevPage = () => {
        const page = this.state.page
        if (page === 1) return
        this.setState({
            page: page - 1
        })
    }

    nextPage = () => {
        const page = this.state.page 
        if (page === Math.ceil(MessageData.data.length / 10)) return
        this.setState({
            page: page + 1
        })
    }

    render() {
        let num = 0
        const message = MessageData.data.map((v, idx) => {
            if (idx > this.state.page*10 - 11 && num < 10) {
                console.log(num)
                num++;
                return <li key={v.id}><p>{v.author_id}<em className="fr">更新时间：{v.create_at}</em></p><span>{v.content}</span></li>
            }
        })

        return (
            <div className="message">
                <div className="fs16 mb20">
                    <span>留言板</span>
                    <span onClick={this.nextPage} className="fr cp">下一页</span>
                    <span onClick={this.prevPage} className="fr mr10 cp">上一页</span>
                </div> 
                <div className="message-border">
                    <ul>{message}</ul>  
                    <div className="fr mt20 mb20 fs16">
                    总共 {MessageData.data.length} 条, 第 {this.state.page} 页
                    </div>
                </div>
            </div>
        )
    }
}

export default Message