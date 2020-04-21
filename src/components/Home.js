import React from 'react'
import SignUp from './SignUp'

import Login from './Login'

export const HomeContext = React.createContext()

function Home(props) {
    
    const handleSuccessfulAuth = (data) => {
        console.log('home-handleSuccess',data)
        props.handleLogin(data);
        props.history.push("/dashboard");
    }
    




    
    return(
        <>
        <div>Home</div>

        <h1>Status: {props.loggedInStatus} </h1>
        <HomeContext.Provider value={handleSuccessfulAuth}>
            <SignUp handleSuccessfulAuth={handleSuccessfulAuth}/>
            <Login />
        </HomeContext.Provider>

        <SignUp />

        </>
    )
}


export default Home
