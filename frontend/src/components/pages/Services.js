import React, { useState } from 'react'
import axios from 'axios'

import '../../App.css'

export default function Services(props) {
    const url = ""
    const [servicedata, setservicedata] = useState({
        amount: 0,
        service: ""
    })
    function handle(e) {
        console.log("yellow", servicedata)
        const newservicedata = { ...servicedata }
        newservicedata[e.target.id] = e.target.value
        setservicedata(newservicedata)
    }
    function submit(e) {
        e.preventDefault();

        let s = async function (acc_number, amount, service) {
            console.log(acc_number, amount);
            let data = { ...props.state }
            console.log("hi");
            console.log(props.state)
            console.log(amount)
            console.log(service)
            if (service == "Withdraw") {
                if (amount > data.balance)
                    alert("insufficient balance to create such an FD")
                else {
                    data.balance -= amount
                    props.handleset(data)
                    axios.put("http://localhost:8080/update", data)
                    alert("Transaction Success")
                }

            }
            else {
                console.log("whatsapp")
                data.balance += parseInt(amount)
                props.handleset(data)
                axios.put("http://localhost:8080/update", data)
                alert("Transaction Success")
            }
        }
        console.log(servicedata)
        let selectElement = document.querySelector('#service');
        let serv = selectElement.value;
        s(props.state.accountNumber, servicedata.amount, serv)
    }
    console.log(props.state)
    return (
        <div className="text-center m-5-auto">
            <h5>Withdraw or Deposite here</h5>
            <form onSubmit={submit}>
                <p>
                    <label>You wish to</label>
                    <select id="service" >
                        <option value="Withdraw" >Withdraw</option>
                        <option value="Deposit" >Deposit</option>
                    </select>
                </p>
                <p>
                    <label>Amount</label>
                    <input type="text" onChange={(e) => handle(e)} value={servicedata.amount} id="amount" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit" onSubmit={submit}>Submit</button>
                </p>

            </form>
        </div>
    )

}
