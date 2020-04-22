import React, {useState, useContext} from 'react'
import {createUser} from '../services/api-loginHelper'
import {AppContext} from '../App.js'
import {Link} from "react-router-dom";

function SignUp(props) {
    const handleLogin = useContext(AppContext)
    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        password: "",
        zip: ""
    });

    const handleChange = (e) => {
        const value = e.target.value
        setNewUser({
            ...newUser,
            [e.target.name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const json = await createUser(newUser).then(response => {
            if (response.status === 200) {
                handleSuccessfulAuth(response.data);
            }
        }).catch(error => {
            console.log("registration error", error);
        });
    };

    const handleSuccessfulAuth = (data) => {
        handleLogin(data);
        props.history.push("/dashboard");
    };

    return (
        <div className="SignUp">
            <form onSubmit={handleSubmit} className="SignUp-Form">
                <input className="SignUp-Form-Input"
                       type="text"
                       name="name"
                       placeholder="Name"
                       value={newUser.name}
                       onChange={handleChange} required/>
                <input className="SignUp-Form-Input"
                       type="email"
                       name="email"
                       placeholder="Email"
                       value={newUser.email}
                       onChange={handleChange} required/>
                <input className="SignUp-Form-Input"
                       type="password"
                       name="password"
                       placeholder="Password"
                       value={newUser.password}
                       onChange={handleChange} required/>
                <input className="SignUp-Form-Input"
                       type="number"
                       name="zip"
                       placeholder="Zip Code"
                       value={newUser.zip}
                       onChange={handleChange} required/>
                <button className="SignUp-Form-Button" type="submit">Register</button>
            </form>
            <p>Already have an account? <Link to="/login">Login.</Link></p>
        </div>
    );
}

export default SignUp;
