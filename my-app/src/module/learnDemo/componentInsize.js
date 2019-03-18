import React from 'react'
// 多入口组件
import ShowPanel from './showPanel'

// ShowPanel类似一个容器
// function ShowPanel(props) {
//     return (
//         <div className={props.color}>
//             {props.children}
//         </div>
//     )
// }

function Left(props) {
    return (
        <div>
            上边
        </div>
    )
}

function Right(props) {
    return (
        <div>
            下边
        </div>
    )
}

class ComponentInsize extends React.Component{
    render() {
        return (
            <div>
                <ShowPanel color="red" left={<Left/>} right={<Right/>}>
                    <span>今天气温多少度</span>
                </ShowPanel>
            </div>
        )
    }
}

export default ComponentInsize