import React from 'react'
import FormRender from './formRender'

function LiList(props) {
    // 以标签做一个组件进行渲染，和v-for区别
    return <li>{props.number}</li>
}
class Group extends React.Component{
    // constructor(props) {
    //     super(props)
    // }
    render() {
        // map用函数体{}，则需要return返回值
        // let arr = this.props.liArr.map((val) => val*2)
        const dataObj = {
            name: 'fengyifan',
            number: 30
        }
        return (
            <div>
                <ul>{
                    // 大括号直接用表达式
                    this.props.liArr.map((val) => {
                        return <LiList number={val} key={val}></LiList>
                    })
                }</ul>
                <FormRender data={dataObj}/>
            </div>
        )
    }
}

export default Group