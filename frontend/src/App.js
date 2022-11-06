import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import HomePage from './components/pages/HomePage'
import FundTransferPage from './components/pages/FundTransfer'
import NewFD from './components/pages/NewFD'

import './App.css'

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ LoginPage} />
                    <Route path="/login" component={ LoginPage } />
                    <Route path="/register" component={ RegisterPage } />
                    <Route path="/home" component={ HomePage } />
                    <Route path="/ft" component={ FundTransferPage } />
                    <Route path="/fd" component={ NewFD } />
                </Switch>
            </div>
        </Router>
    )
}



