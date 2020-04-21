import React, {useState,useContext} from 'react'
import {verifyUser} from '../services/api-loginHelper'
import {AppContext} from '../App.js'
import {Link} from "react-router-dom";

function Login (props) {
    const handleLogin = useContext(AppContext)
    const [User, setUser] = useState({
        email:"",
        password:"",
    })
    
    const handleChange = (e) => {
        const value = e.target.value
        setUser({
            ...User,
            [e.target.name]: value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        const json = await verifyUser(User).then(response => {
            if(response.status === 200){
                handleSuccessfulAuth(response.data)
            }else{
                console.log('login error')
            }
        }).catch(error =>{
            console.log("registration error", error)
        })
    }

    const handleSuccessfulAuth = (data) => {
        handleLogin(data);
        props.history.push("/dashboard");
      }

        return(
            <div className="Login">
                <form className="Login-Form" onSubmit={handleSubmit}>
                    <input className="Login-Form-Input" type="email" name="email" placeholder="Email" value={User.email} onChange={handleChange} required />
                    <input className="Login-Form-Input" type="password" name="password" placeholder="Password" value={User.password} onChange={handleChange} required />
                    <button className="Login-Form-Button" type="submit">Login</button>
                </form>
                <p>Don't have an account? <Link to="/signup">Create one.</Link></p>
            </div>
        )
    



}

export default Login

