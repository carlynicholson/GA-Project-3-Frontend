import React, {useState} from 'react'
import axios from 'axios'
import {createUser} from '../services/api-loginHelper'



function SignUp (props) {
    const [newUser, setNewUser] = useState({
        name: "",
        email:"",
        password:"",
        zip: ""
    })
    
    const handleChange = (e) => {
        console.log('name',e.target.name)
        console.log('value',e.target.value)
        setNewUser({
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async(e) => {
        console.log('form submitted')
        e.preventDefault()
        const json = await createUser(newUser).then(response => {
                console.log("registration res", response)
                // if(response.data.status === 'created'){
                // props.handleSuccessfulAuth(response.data)
                // }
            }).catch(error =>{
                console.log("registration error", error)
            })
           
      
        
    }
        return(
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Name" value={newUser.name} onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Email" value={newUser.email} onChange={handleChange} required />
                    <input type="password" name="password" placeholder="Password" value={newUser.password} onChange={handleChange} required />
                    <input type="number" name="zip" placeholder="Zip Code" value={newUser.zip} onChange={handleChange} required />
                    <button type="submit">Register</button>
                </form>
            
            </div>
        )
    



}

export default SignUp