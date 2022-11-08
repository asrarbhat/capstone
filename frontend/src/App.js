import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import HomePage from './components/pages/HomePage'
import FundTransferPage from './components/pages/FundTransfer'
import NewFD from './components/pages/NewFD'

import './App.css'

export default class App extends Component {
    state = {
        "other": {},
        "trans": []
    }
    handleUpdate = (d) => {
        let e = { ...this.state }
        let p = { ...d }
        e["other"] = p;
        this.setState(e)
        console.log("handling")
        console.log(this.state)
    }
    handler = (d) => {
        let p = { ...this.state }
        p["trans"] = d
        this.setState(p)
    }
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" render={(props) => <LoginPage state={this.state.other} handleset={this.handleUpdate} />} />
                        <Route path="/login" render={(props) => <LoginPage state={this.state.other} handleset={this.handleUpdate} trans={this.handler} />} />
                        <Route path="/register" render={(props) => <RegisterPage state={this.state.other} handleset={this.handleUpdate} />} />
                        <Route path="/home" render={(props) => <HomePage state={this.state.other} l={this.state.trans} trans={this.handler} handleset={this.handleUpdate} />} />
                        <Route path="/ft" render={(props) => <FundTransferPage state={this.state.other} trans={this.handler} l={this.state.trans} handleset={this.handleUpdate} />} />
                        <Route path="/fd" render={(props) => <NewFD state={this.state.other} handleset={this.handleUpdate} />} />
                    </Switch>
                </div>
            </Router>
        )
    }
}



