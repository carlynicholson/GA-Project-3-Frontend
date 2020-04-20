import React, {useState} from 'react'
import axios from 'axios'

//https://www.youtube.com/watch?v=QoLUB0QkUaE

function Login () {
    const [newUser, setNewUser] = useState({
        email:"",
        password:"",
        password_confirmation:"",
        registrationErrors:""
    })
    
    function handleChange(e){
        setNewUser({
            [e.target.name]: e.target.value
        })
    }
    function handleSubmit(e) {
        axios.post("http://localhost:5150", {
            user:{
                email: newUser.email,
                password: newUser.password,
                password_confirmation: newUser.password_confirmation
            }
        },
        {withCredentials: true}
        ).then(response => {
            console.log("registration res", response)
        }).catch(error =>{
            console.log("registration error", error)
        })  //need route from backend

        
        e.preventDefault();
    }
        return(
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="email" name="email" placeholder="Email" value={newUser.email} onChange={handleChange} required />
                    <input type="password" name="password" placeholder="Password" value={newUser.password} onChange={handleChange} required />
                    <input type="password" name="password_confirmation" placeholder="Password confirmation" value={newUser.password_confirmation} onChange={handleChange} required />
                    <button type="submit">Register</button>
                </form>
            
            </div>
        )
    



}

export default Login
