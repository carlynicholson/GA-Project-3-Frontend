import React, {useState, createContext} from 'react';
import './App.css';
import Main from './components/Main'
import {getProviderByZip} from "./services/api-helper";

function App() {
    const [service, setService] = useState("");
    const [date, setDate] = useState(new Date());
    const [appointmentTime, setAppointmentTime] = useState('10:00')
    const [localProviders, setLocalProviders] = useState([]);
    const [chosenProvider, setChosenProvider] = useState("");
    const [newAppointment, setNewAppointment] = useState([]);
    console.log(newAppointment);
    const [loggedIn, setLoggedIn] = useState({
        loggedInStatus: "Not_Logged_In",
        user: {}
    });
    const appointmentInfo = {
        date: date,
        time: appointmentTime,
        service: service,
        petId: loggedIn.user.petId,
        user_id: loggedIn.user['_id'],
        // provider_id: chosenProvider
    }
    console.log("This is APPOINTMENT INFO: ",appointmentInfo)

    const handleLogin = (data) => {
        setLoggedIn({
            loggedInStatus: "Logged_In",
            user: data
        })
    };

    const handleServiceClick = async(service) => {
        setService(service);
        const json = await getProviderByZip(94120).then((response) => {
            if (response.status === 200) {
                console.log(response.data);
                setLocalProviders([...localProviders, response.data]);
            } else {
                return ('login error');
            }
        }).catch(error => {
            return ("registration error" + error);
        });
    };

    const onDateClick = date => setDate(date);
    const onTimeChange = time => setAppointmentTime(time)

    return (
        <div className="App">
            <AppContext.Provider value={
                {
                    handleLogin,
                    handleServiceClick,
                    onDateClick,
                    onTimeChange,
                    setService,
                    service,
                    date,
                    setDate,
                    appointmentTime,
                    setAppointmentTime,
                    loggedIn,
                    localProviders,
                    chosenProvider,
                    setChosenProvider,
                    newAppointment,
                    setNewAppointment,
                    appointmentInfo,
                }
            }>
                <Main/>
            </AppContext.Provider>
        </div>
    );
}

export default App;
export const AppContext = createContext();
