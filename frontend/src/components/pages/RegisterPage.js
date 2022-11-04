import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function SignUpPage() {

    return (
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form action="/home">
                <p>
                    <label>First Name</label>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Middle Name</label>
                    <input type="text" name="middle_name" />
                </p>
                <p>
                    <label>Last Name</label>
                    <input type="text" name="last_name" required />
                </p>
                <p>
                    <label>Email address</label>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label>Password</label>
                    <input type="password" name="password" requiredc />
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
                    <input type="checkbox" name="checkbox" id="checkbox" required />I accept all the <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms and conditions of service</a>.
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Login</Link>.</p>
            </footer>
        </div>
    )

}
