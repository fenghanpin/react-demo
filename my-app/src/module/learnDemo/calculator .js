import React from 'react'
import Temperature from './temperature'

// 通过向低阶组件传递函数，实现状态提升，让低阶组件有一个共同的数据源（公共父组件的state）


function toCelsius(fahrenheit) {
    return (fahrenheit - 10);
}
  
function toFahrenheit(celsius) {
    return (celsius + 10)
}

class Calculator  extends React.Component{
    constructor(props) {
        super(props)
        this.state= {
            temperature: 40,
            type: 'reduce'
        }
    }
    handleTmperatrue = (t, v) => {
        this.setState({
            type: t
        })
        this.setState({
            temperature: v
        })
    }
    handleState = (obj) => {
        if (obj.scale === 'reduce') {
            obj['temperature'] = obj.scale === this.state.type ? obj.temperature : toCelsius(obj.temperature)
            return obj
        } else if (obj.scale === 'add') {
            obj['temperature'] = obj.scale === this.state.type ? obj.temperature : toFahrenheit(obj.temperature)
            return obj
        }
    }
    render() {
        const cObj = {
            scale: 'reduce',
            temperature: this.state.temperature
        }
        const fObj = {
            scale: 'add',
            temperature: this.state.temperature
        }
        return (
            <div>
                <Temperature obj={this.handleState(cObj)} onTemperature={this.handleTmperatrue}/>
                <Temperature obj={this.handleState(fObj)} onTemperature={this.handleTmperatrue}/>
            </div>
        )
    }
}
export default Calculator 