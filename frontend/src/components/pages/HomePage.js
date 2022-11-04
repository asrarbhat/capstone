import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Input, Label, Table } from 'semantic-ui-react'
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
        <div className='account'>
            <h3>My Bank Account</h3>
            <div id='accountInfo' >{ accountInfo }</div>
            <div id='accountTransactions' >{ accountTransactions }</div>
        </div>
    );
}
