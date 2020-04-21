import React, {useState,useContext} from 'react'
import axios from 'axios'
import {verifyUser} from '../services/api-loginHelper'
import {HomeContext} from './Home'

<<<<<<< HEAD
function Login () {
    const handleSuccessfulLogin = useContext(HomeContext)
    console.log('login-context',handleSuccessfulLogin)
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
        // console.log('form submitted',newUser)
        e.preventDefault()
        const json = await verifyUser(User).then(response => {
            console.log("verify res", response)
            if(response.status === 200){
                console.log('submit-ok')
                handleSuccessfulLogin(response.data)
            }else{
                console.log('login error')
            }
        }).catch(error =>{
            console.log("registration error", error)
        })
    }

        return(
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="email" name="email" placeholder="Email" value={User.email} onChange={handleChange} required />
                    <input type="password" name="password" placeholder="Password" value={User.password} onChange={handleChange} required />
                    <button type="submit">Login</button>
                </form>
            
            </div>
        )
    



}

export default Login
=======
function Login() {
    return(
       <div>Login</div>
    )
}

export default Login;
>>>>>>> 3257515ae64616f5d6a14c2508cf2c75f463d0d4
