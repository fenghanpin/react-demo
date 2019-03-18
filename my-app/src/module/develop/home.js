import React from 'react'
import NavPage from './nav'
import MainPage from './main'
import Welcome from './welcome'
import Message from './message'
import Agency from './agency'

class HomeContent extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            type: 'welcome'
        }
    }

    changeMain = (v) => {
        this.setState({
            type: v
        })
    }

    render() {
        let compon = ''
        switch (this.state.type) {
            case 'welcome':
                compon = <Welcome changeMain={this.changeMain} />
                break;
            case 'message':
                compon = <Message changeMain={this.changeMain} />
                break;
            case 'agency':
                compon = <Agency changeMain={this.changeMain} />
                break;
            default:
                break;
        }
        return (
            <div>
                <NavPage changeMain={this.changeMain} tabType={this.state.type}/>
                <MainPage compon={compon}/>
            </div>
        )
    }
}
export default HomeContent
