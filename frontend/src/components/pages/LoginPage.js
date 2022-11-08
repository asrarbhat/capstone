import React, { useState } from 'react'
import { Link, useHistory }from 'react-router-dom'
import axios from 'axios'

import '../../App.css'

export default function SignInPage(props) {
    const url="https://jsonplaceholder.typicode.com"
    const history=useHistory();
    const[logindata, setlogindata]=useState({
        username:"",
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
        let login = async function (username, password) {
            let r = await axios.get(url)
            if(r.data==null){
                alert("Invalid Credentials")
            }
        }
        login(logindata.email,logindata.password)
        props.state["username"]=logindata.username
        console.log(props.state);
        history.push('/home')
    }
    return (
        <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            <form onSubmit={submit}>
                <p>
                    <label>UserName/Email address</label><br/>
                    <input type="text" onChange={(e)=>handle(e)} id="username" required />
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