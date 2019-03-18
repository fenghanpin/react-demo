import React from 'react'

class Temperature extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            temperature: '',
            flag: true
        }
    }

    handleTemperature = (e) => {
        this.setState({
            flag: false
        })
        this.setState({
            temperature: e.target.value
        })
    }

    handleBlur = (e) => {
        let num = Number(e.target.value)
        this.props.onTemperature(this.props.obj.scale, num)
        this.setState({
            flag: true
        })
        this.setState({
            temperature: num
        })
    }
    render () {
        const className = {
            reduce : '减10',
            add: '加10'
        }
        let temperature
        if (this.state.flag) {
            temperature = this.props.obj.temperature
        } else {
            temperature = this.state.temperature
        }
        return (
            <div>
                <div>
                    <form>
                        <label>
                            <input value={temperature} onChange={this.handleTemperature} onBlur={this.handleBlur}/>
                            {className[this.props.obj.scale]}
                        </label>
                    </form>
                </div>
            </div>
        )
    }
}

export default Temperature