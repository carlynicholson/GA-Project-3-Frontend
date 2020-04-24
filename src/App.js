import React, {useState, createContext} from 'react';
import './App.css';
import Main from './components/Main'

function App(props) {
  const [service, setService] = useState("");
  const [date, setDate] = useState(new Date());
  const [loggedIn, setLoggedIn] = useState({
    loggedInStatus: "Not_Logged_In",
    user: {}
  });
  const [pets, setPets] = useState([])

  const handleServiceClick = (service) => {
    setService(service);
  };

  const onDateClick = date => setDate(date);

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
            onDateClick,
            setService,
            service,
            date,
            setDate,
            loggedIn,
            pets,
            setPets
          }
        }>
          <Main />
        </AppContext.Provider>
      </div>
  );
}

export default App;
export const AppContext = createContext();