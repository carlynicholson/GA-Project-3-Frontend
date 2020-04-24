import React, {useState, useContext} from 'react'
import {createPet} from '../../services/api-loginHelper'
import {AppContext} from '../../App'
import './SignUp-Login.css'

function CreatePet(props) {
    const appContext = useContext(AppContext)
    const user = appContext.loggedIn.user
    const [newPet, setNewPet] = useState({
        name: "",
        age: "",
        breed: "",
        comments: "",
        user_id: user._id        
    });

    const handleChange = (e) => {
        const value = e.target.value
        setNewPet({
            ...newPet,
            [e.target.name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const json = await createPet(newPet).then(response => {
            if (response.status === 200) {
                handleSuccessfulAuth(response.data);
            }
        }).catch(error => {
            console.log("create pet error", error);
        });
    };

    const handleSuccessfulAuth = (data) => {
        props.history.push("/petconfirmed");
    };
    
    return (
        <>
            <img className="Login-Image" src="https://res.cloudinary.com/de2i4dwok/image/upload/v1587589538/Project3/logo-white_qn3hrm.png" alt="Fetch logo" />
            <div className="Login-Container">
                <div className="SignUp">
                    <div className="Create-Account">create account</div>
                    <form onSubmit={handleSubmit} className="SignUp-Form">
                        <input className="SignUp-Form-Input"
                            type="text"
                            name="name"
                            placeholder="PET NAME"
                            value={newPet.name}
                            onChange={handleChange} required/>
                        <input className="SignUp-Form-Input"
                            type="number"
                            name="age"
                            placeholder="AGE (in years)"
                            value={newPet.age}
                            onChange={handleChange} />
                        <input className="SignUp-Form-Input"
                            type="text"
                            name="breed"
                            placeholder="BREED"
                            value={newPet.breed}
                            onChange={handleChange} />
                        <input className="SignUp-Form-Input"
                            type="text"
                            name="comments"
                            placeholder="COMMENTS"
                            value={newPet.comments}
                            onChange={handleChange} />
                        <button className="SignUp-Form-Button" type="submit">add pet</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default CreatePet;
