import React, { Component, } from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

//import { Link } from 'react-router-dom'
import { Table } from 'semantic-ui-react'
import FundTransferPage from './FundTransfer';
import NewFD from './NewFD';
import Services from './Services';
import { Link } from 'react-router-dom'
import axios from 'axios';
export default class HomePage extends Component {
    render() {
        let accountInfo = (
            <Table stripped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>username</Table.HeaderCell>
                        <Table.HeaderCell>account number</Table.HeaderCell>
                        <Table.HeaderCell>savings balance</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>{this.props.state.username}</Table.Cell>
                        <Table.Cell>{this.props.state.accountNumber}</Table.Cell>
                        <Table.Cell>{this.props.state.balance}</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        )

        let accountTransactions = (
            <Table stripped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>TransactionId</Table.HeaderCell>
                        <Table.HeaderCell>sender</Table.HeaderCell>
                        <Table.HeaderCell>receiver</Table.HeaderCell>
                        <Table.HeaderCell>Amount</Table.HeaderCell>
                    </Table.Row>

                </Table.Header>

                <Table.Body>
                    {[...this.props.l].reverse().map(element => <Table.Row>
                        <Table.Cell>{element.transactionNumber}</Table.Cell>
                        <Table.Cell>{element.accountNumber}</Table.Cell>
                        <Table.Cell>{element.destAccountNumber}</Table.Cell>
                        <Table.Cell>{element.transferAmount}</Table.Cell>

                    </Table.Row>)}
                </Table.Body>
            </Table>
        );
        // console.log(trans.data)
        return (
            <div className="App">
                <Tabs className="Tabs">
                    <TabList>
                        <Tab>Dashboard</Tab>
                        <Tab>Fund Transfer</Tab>
                        <Tab>Create FD</Tab>
                        <Tab>Services</Tab>
                        <Tab>Logout</Tab>
                    </TabList>
                    <TabPanel>
                        <div className='account'>
                            <h3>My Bank Account</h3>
                            <div id='accountInfo' >{accountInfo}</div>
                            <div id='accountTransactions' >{accountTransactions}</div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <FundTransferPage trans={this.props.trans} state={this.props.state} l={this.props.l} handleset={this.props.handleset} />
                    </TabPanel>
                    <TabPanel>
                        <NewFD state={this.props.state} handleset={this.props.handleset} />
                    </TabPanel>
                    <TabPanel>
                        <Services state={this.props.state} handleset={this.props.handleset} />
                    </TabPanel>
                    <TabPanel>
                        <Link to="/login">LOGOUT</Link>
                    </TabPanel>
                </Tabs>
            </div>
        );
    }
}