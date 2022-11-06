import React, { useState } from 'react'
import Axios from 'axios'

import '../../App.css'

export default function FundTransferPage() {
    const url=""
    const[ftdata, setftdata]=useState({
        acc_number:"",
        ben_acc:"",
        ben_ifsc:"",
        amount:"",
        acctype:""
    })
    function handle(e)
    {
        const newftdata={...ftdata}
        newftdata[e.target.id]=e.target.value
        setftdata(newftdata)
    }
    function submit(e) {
        e.preventDefault();
        Axios.post(url,{
            acc_number:ftdata.acc_number,
            ben_acc:ftdata.ben_acc,
            ben_ifsc:ftdata.ben_ifsc,
            amount:ftdata.amount,
            password:ftdata.password,
            acctype:ftdata.acctype
        })
        .then(res=>{console.log(res.ftdata)})
    }

    return (
        <div className="text-center m-5-auto">
            <h5>Transfer from one to one</h5>
            <form action="/home">
                <p>
                    <label>From Account</label>
                    <input type="text" onChange={(e)=>handle(e)} placeholder="Your Account number" value={ftdata.acc_number} id="account_number" required />
                </p>
                <p>
                    <label>Benificiary  Account</label>
                    <input type="text" onChange={(e)=>handle(e)} value={ftdata.ben_acc} id="ben_acc" required/>
                </p>
                <p>
                    <label>Benificiary IFSC Code</label>
                    <input type="text" onChange={(e)=>handle(e)}  value={ftdata.ben_ifsc} id="ben_ifsc" required />
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
                    <input type="text" onChange={(e)=>handle(e)}  value={ftdata.transfer_amount} id="etransfer_amount" required />
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
