import React, { useState } from 'react'
import Axios from 'axios'

import '../../App.css'

export default function FundTransferPage(props) {
    const url = ""
    const [ftdata, setftdata] = useState({
        acc_number: "",
        ben_acc: "",
        ben_ifsc: "",
        amount: "",
        acctype: ""
    })
    function handle(e) {
        const newftdata = { ...ftdata }
        newftdata[e.target.id] = e.target.value
        setftdata(newftdata)
    }
    async function submit(e) {
        e.preventDefault();
        let data = { ...props.state }
        console.log(data)
        console.log(ftdata.amount)
        if (ftdata.amount > data.balance) {
            alert("insufficient balance")
        }
        else {
            data.balance -= ftdata.amount
            props.handleset(data)
            Axios.post("http://localhost:8080/transaction", {
                accountNumber: data.accountNumber,
                destAccountNumber: ftdata.ben_acc,
                transferAmount: ftdata.amount
            })
            // let s = await Axios.get("http://localhost:8080/" + "transaction/" + data.accountNumber)
            props.trans([...props.l, {
                transactionNumber: props.l.length + 1,
                accountNumber: data.accountNumber,
                destAccountNumber: ftdata.ben_acc,
                transferAmount: ftdata.amount
            }])
            alert("transaction successful")
        }
    }

    return (
        <div className="text-center m-5-auto">
            <h5>Transfer from one to one</h5>
            <form onSubmit={submit}>
                <p>
                    <label>From Account</label>
                    <input type="text" onChange={(e) => handle(e)} placeholder="Your Account number" value={ftdata.acc_number} id="account_number" />
                </p>
                <p>
                    <label>Benificiary  Account</label>
                    <input type="text" onChange={(e) => handle(e)} value={ftdata.ben_acc} id="ben_acc" required />
                </p>
                <p>
                    <label>Benificiary IFSC Code</label>
                    <input type="text" onChange={(e) => handle(e)} value={ftdata.ben_ifsc} id="ben_ifsc" required />
                </p>
                <p>
                    <label>Benificiary Account Type</label>
                    <select id="acctype">
                        <option value={ftdata.benacctype}>Savings</option>
                        <option value={ftdata.benacctype}>Credit</option>
                    </select>
                </p>
                <p>
                    <label>Amount</label>
                    <input type="text" onChange={(e) => handle(e)} value={ftdata.amount} id="amount" required />
                </p>
                <p>
                    <label>Remarks</label>
                    <input type="text" name="remarks" required />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required />I accept all the <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms and conditions of service</a>.
                </p>
                <p>
                    <button id="sub_btn" type="submit" onSubmit={submit}>Transfer</button>
                </p>
            </form>
        </div>
    )

}
