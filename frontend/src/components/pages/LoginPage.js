import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'

import '../../App.css'

export default function SignInPage(props) {
    const url = "http://localhost:8080/"
    const history = useHistory();
    const [logindata, setlogindata] = useState({
        username: "",
        password: ""
    })
    function handle(e) {
        const newlogindata = { ...logindata }
        newlogindata[e.target.id] = e.target.value
        setlogindata(newlogindata)
    }
    function submit(e) {
        e.preventDefault();
        console.log("hi")
        let login = async function (username, password) {
            let r = await axios.post(url + "get", { "username": username, "password": password })
            console.log(username, password)
            console.log("hello there")
            console.log(r.data)
            if (!r.data) {
                alert("Invalid Credentials")
            }
            else {

                props.handleset(r.data)
                console.log(props.state)
                let s = await axios.get(url + "transaction/" + r.data.accountNumber)
                props.trans(s.data)
                // console.log(s)
                history.push('/home')
                // console.log(props.state)
            }
        }
        login(logindata.username, logindata.password)
        // props.state["username"] = logindata.username
        // props.state["password"] = logindata.password
        console.log(props.state);
    }
    return (
        <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            <form onSubmit={submit}>
                <p>
                    <label>UserName/Email address</label><br />
                    <input type="text" onChange={(e) => handle(e)} id="username" required />
                </p>
                <p>
                    <label>Password</label>
                    <br />
                    <input type="password" onChange={(e) => handle(e)} id="password" required />
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