import React, {useState, createContext} from 'react';
import './App.css';
import Main from './components/Main'

function App() {
  const [service, setService] = useState("");
  const [loggedIn, setLoggedIn] = useState({
    loggedInStatus: "Not_Logged_In",
    user: {}
  });

  const handleServiceClick = (service) => {
    setService(service);
  };

  const handleLogin = (data) => {
    console.log('App-handleLogin', data)
    setLoggedIn({
      loggedInStatus: "Logged_In",
      user: data
    })
  };

  return (
      <div className="App">
        <AppContext.Provider value={
          {
            handleLogin,
            handleServiceClick,
            setService
          }
        }>
          <Main/>
        </AppContext.Provider>
      </div>
  );
}

export default App;
export const AppContext = createContext();
