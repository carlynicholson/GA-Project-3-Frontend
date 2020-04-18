import React from 'react'
import SignUp from './SignUp'

function Home(props) {
    
    function handleSuccessfulAuth(data){
        props.handleLogin(data);
        props.history.push("/dashboard");
    }
    
    
    return(
        <>
        <div>Home</div>
        <h1>Status: {props.loggedInStatus} </h1>
        <SignUp handleSuccessfulAuth={handleSuccessfulAuth}/>
        </>
    )
}

export default Home