import React, { useState } from 'react'
import Axios from 'axios'

import '../../App.css'

export default function NewFD() {
    const url=""
    const[fddata, setfddata]=useState({
        amount:""
    })
    function handle(e)
    {
        const newfddata={...fddata}
        newfddata[e.target.id]=e.target.value
        setfddata(newfddata)
    }
    function submit(e) {
        e.preventDefault();
        Axios.post(url,{
            amount:fddata.amount,
        })
        .then(res=>{console.log(res.fddata)})
    }

    return (
        <div className="text-center m-5-auto">
            <h5>Open your new FD</h5>
            <form action="/home">
                <p>
                    <label>From Account</label>
                    <input type="text" onChange={(e)=>handle(e)} placeholder="Your Account number" value={fddata.acc_number} id="account_number" required />
                </p>
                <p>
                    <label>FD Product Type</label>
                    <select id="fdtype">
                        <option value={fddata.fdtype}>Regular</option>
                        <option value={fddata.fdtype}>Corporate</option>
                        <option value={fddata.fdtype}>Cumilative</option>
                    </select>
                </p>
                <p>
                    <label>FD Period</label>
                    <select id="fdperiod">
                        <option value={fddata.fdperiod}>6 months</option>
                        <option value={fddata.fdperiod}>1 year</option>
                        <option value={fddata.fdperiod}>3 years</option>
                        <option value={fddata.fdperiod}>5 years</option>
                    </select>
                </p>
                <p>
                    <label>Amount</label>
                    <input type="text" onChange={(e)=>handle(e)}  value={fddata.transfer_amount} id="etransfer_amount" required />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required />I accept all the <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms and conditions of service</a>.
                </p>
                <p>
                    <button id="sub_btn" type="submit" onSubmit={submit}>Submit</button>
                </p>
            </form>
        </div>
    )

}
