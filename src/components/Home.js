import React from 'react'
import SignUp from './SignUp'
<<<<<<< HEAD
import Login from './Login'

export const HomeContext = React.createContext()

function Home(props) {
    
    const handleSuccessfulAuth = (data) => {
        console.log('home-handleSuccess',data)
        props.handleLogin(data);
        props.history.push("/dashboard");
    }
    
=======

function Home() {
>>>>>>> 3257515ae64616f5d6a14c2508cf2c75f463d0d4
    
    return(
        <>
        <div>Home</div>
<<<<<<< HEAD
        <h1>Status: {props.loggedInStatus} </h1>
        <HomeContext.Provider value={handleSuccessfulAuth}>
            <SignUp handleSuccessfulAuth={handleSuccessfulAuth}/>
            <Login />
        </HomeContext.Provider>
=======
        <SignUp />
>>>>>>> 3257515ae64616f5d6a14c2508cf2c75f463d0d4
        </>
    )
}

<<<<<<< HEAD
export default Home
=======
export default Home
>>>>>>> 3257515ae64616f5d6a14c2508cf2c75f463d0d4
