import React, {useState} from 'react';
import './App.css';
import Main from './components/Main'

export const AppContext = React.createContext()

function App() { 
  const [loggedIn, setLoggedIn] =useState({
  loggedInStatus: "Not_Logged_In",
  user:{}
})  

const handleLogin = (data) => {
  console.log('App-handleLogin', data)
  setLoggedIn({
    loggedInStatus: "Logged_In",
    user: data
  })
}

  return (
    <div className="App">
      <AppContext.Provider value={handleLogin}>
        <Main />
      </AppContext.Provider>
    </div>
  );
}

export default App;