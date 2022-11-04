import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

import '../../App.css'

export default function SignUpPage() {
    const url=""
    const[data, setData]=useState({
        first_name:"",
        middle_name:"",
        last_name:"",
        email:"",
        password:"",
        acctype:""
    })
    function handle(e)
    {
        const newdata={...data}
        newdata[e.target.id]=e.target.value
        setData(newdata)
    }
    function submit(e) {
        e.preventDefault();
        Axios.post(url,{
            first_name:data.first_name,
            middle_name:data.middle_name,
            last_name:data.last_name,
            email:data.email,
            password:data.password,
            acctype:data.acctype
        })
        .then(res=>{console.log(res.data)})
    }

    return (
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form action="/login">
                <p>
                    <label>First Name</label>
                    <input type="text" onChange={(e)=>handle(e)} value={data.first_name} id="first_name" required />
                </p>
                <p>
                    <label>Middle Name</label>
                    <input type="text" onChange={(e)=>handle(e)} value={data.middle_name} id="middle_name" />
                </p>
                <p>
                    <label>Last Name</label>
                    <input type="text" onChange={(e)=>handle(e)}  value={data.last_name} id="last_name" required />
                </p>
                <p>
                    <label>Email address</label>
                    <input type="email" onChange={(e)=>handle(e)}  value={data.email} id="email" required />
                </p>
                <p>
                    <label>Password</label>
                    <input type="password" onChange={(e)=>handle(e)}  value={data.password} id="password" required />
                </p>
                <p>
                    <label>Security Question</label>
                    <select>
                        <option value="school">What is your first school?</option>
                        <option value="pet">What is your pet name?</option>
                        <option value="game">What is your favourite game?</option>
                    </select>
                </p>
                <p>
                    <label>Answer</label>
                    <input type="text" name="SecAnswer" required />
                </p>
                <p>
                    <label>Account Type</label>
                    <select id="acctype">
                        <option value={data.acctype}>Savings</option>
                        <option value={data.acctype}>Credit</option>
                    </select>
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required />I accept all the <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms and conditions of service</a>.
                </p>
                <p>
                    <button id="sub_btn" type="submit" onSubmit={submit}>Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Login</Link>.</p>
            </footer>
        </div>
    )

}
