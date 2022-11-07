import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

//import { Link } from 'react-router-dom'
import { Table } from 'semantic-ui-react'
import FundTransferPage from './FundTransfer';
import NewFD from './NewFD';
import { Link }from 'react-router-dom'
export default function HomePage() {
    
    let accountInfo = (
        <Table stripped>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>AccountId</Table.HeaderCell>
                    <Table.HeaderCell>Account Balance</Table.HeaderCell>
                </Table.Row>
          </Table.Header>

          <Table.Body>
                <Table.Row>
                    <Table.Cell>Karthik</Table.Cell>
                    <Table.Cell>5625</Table.Cell>
                    <Table.Cell>100000</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    )

    let accountTransactions = (
        <Table stripped>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>TransactionId</Table.HeaderCell>
                    <Table.HeaderCell>Date</Table.HeaderCell>
                    <Table.HeaderCell>Type</Table.HeaderCell>
                    <Table.HeaderCell>Amount</Table.HeaderCell>
                </Table.Row>
          </Table.Header>

          <Table.Body>
            
                <Table.Row>
                    <Table.Cell>0001</Table.Cell>
                    <Table.Cell>12/12/2020</Table.Cell>
                    <Table.Cell>Savings</Table.Cell>
                    <Table.Cell>5000</Table.Cell>
                </Table.Row>
            
            </Table.Body>
        </Table>
    );
    return (        
        <div className="App">
            <Tabs className="Tabs">
                <TabList>
                    <Tab>Dashboard</Tab>
                    <Tab>Fund Transfer</Tab>
                    <Tab>Create FD</Tab>
                    <Tab>Logout</Tab>
                </TabList>
                <TabPanel>
                <div className='account'>
                    <h3>My Bank Account</h3>
                    <div id='accountInfo' >{ accountInfo }</div>
                    <div id='accountTransactions' >{ accountTransactions }</div>
                </div>
                </TabPanel>
                <TabPanel>
                    <FundTransferPage/>
                </TabPanel>
                <TabPanel>
                    <NewFD/>
                </TabPanel>
                <TabPanel>
                <Link to="/login">LOGOUT</Link>
                </TabPanel>
            </Tabs>
   </div>
    );
}
