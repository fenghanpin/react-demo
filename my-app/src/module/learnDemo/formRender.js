import React from 'react'

function Temperature(a) {
    if (a.temperature > 100) {
        return <span>太烫了</span>
    } else {
        return <span>哪壶不开提哪壶</span>
    }
}

class FormRender extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            name: props.data.name,
            number: props.data.number,
            temperature: 0
        }
    }

    hangle = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    hangleNumber = (e) => {
        this.setState({
            number: e.target.value
        })
    }
    changeTempera = (e) => {
        this.setState({
            temperature: e.target.value
        })
    }
    render() {
        return (
            <div>
                <form>
                    <label>
                        名字：
                        <input value={this.state.name} onChange={this.hangle}/>
                        年龄：
                        <input value={this.state.number} onChange={this.hangleNumber}/>
                    </label>
                    <div>
                    <label>
                        请输入一个温度： <input value={this.state.temperature} onChange={this.changeTempera}/>
                        <Temperature temperature={this.state.temperature}/>
                    </label>
                    </div>
                </form>
            </div>
        )
    }
}

export default FormRender