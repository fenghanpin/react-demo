import React from 'react'

class ShowPanel extends React.Component{
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        let style = {
            'font-size': '50px'
        }
        return (
            <div className={this.props.color}>
                <div>
                    {this.props.left}
                </div> 
                {this.props.children}
                <div style={style}>
                    {this.props.right}
                </div>
            </div>
        )
    }
}

export default ShowPanel