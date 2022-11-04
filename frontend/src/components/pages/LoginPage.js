import React, { useState } from 'react'
import { Link }from 'react-router-dom'
import Axios from 'axios'

import '../../App.css'

export default function SignInPage() {
    const url=""
    const[logindata, setlogindata]=useState({
        email:"",
        password:""
    })
    function handle(e)
    {
        const newlogindata={...logindata}
        newlogindata[e.target.id]=e.target.value
        setlogindata(newlogindata)
    }
    function submit(e) {
        e.preventDefault();
        Axios.post(url,{
            email:logindata.email,
            password:logindata.password,
        })
        .then(res=>{console.log(res.logindata)})
    }
    return (
        <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            <form action="/home">
                <p>
                    <label>Email address</label><br/>
                    <input type="email" onChange={(e)=>handle(e)} id="email" required />
                </p>
                <p>
                    <label>Password</label>
                    <br/>
                    <input type="password" onChange={(e)=>handle(e)} id="password" required />
                </p>
                <p>
                    <button id="sub_btn" onSubmit={submit} type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p>Didn't have an account ? <Link to="/register">Create one.</Link></p>
            </footer>
        </div>
    )
}
