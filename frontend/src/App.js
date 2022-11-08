import React, { Component} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import HomePage from './components/pages/HomePage'
import FundTransferPage from './components/pages/FundTransfer'
import NewFD from './components/pages/NewFD'

import './App.css'

export default class App extends Component {
    state={
        username:"",
        password:"",
        accountNumber:"",
        firstName:"",
        middleName:"",
        lastName:"",
        balance:0,
        fdBalance:0,
    }
    render() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" render={ (props)=><LoginPage state={this.state} set={this.setState}/>}/>
                    <Route path="/login" render={ (props)=><LoginPage state={this.state} set={this.setState}/>} />
                    <Route path="/register" render={ (props)=><RegisterPage state={this.state} set={this.setState}/>} />
                    <Route path="/home" render={ (props)=><HomePage state={this.state} set={this.setState}/>} />
                    <Route path="/ft" render={ (props)=><FundTransferPage state={this.state} set={this.setState}/>}/>
                    <Route path="/fd" render={ (props)=><NewFD state={this.state} set={this.setState}/>}/>
                </Switch>
            </div>
        </Router>
    )
    }
}



