import React, {useState, useContext, useEffect} from 'react'
import {getAllPets} from '../../services/api-loginHelper'
import {AppContext} from '../../App'
import './SignUp-Login.css'

function Profile(props) {
    const appProps = useContext(AppContext)
    const user = appProps.loggedIn.user
    console.log('Profile-user', user)
    console.log('Profile-user', user._id)
    
    useEffect(() => {
        const allPetsAPICall = async () => {
            const json = await getAllPets(user._id).then(response => {
                console.log('Profile-allpets', response.data)
                if (response.status === 200) {
                    appProps.setPets(response.data);
                }
            }).catch(error => {
                console.log("create pet error", error);
            });
        }
        allPetsAPICall();
    }, []);    
    
    const allPets = appProps.pets.map((pet,index) => {
        
        return (
            <div key={index} className="Each-Pet">
                <img className="Pet-Image" src="https://res.cloudinary.com/de2i4dwok/image/upload/v1587677583/Project3/dog-icon_awou9z.png"
                    alt="DogFace" />
                <div className="Pet-Name">{pet.name}</div>
            </div>
            
        )
    })

    const handleXClick = async (e) => {
        e.preventDefault();
        console.log('handleContinueSubmit')
        props.history.push("/dashboard");
    };

    const handlePetClick = async (e) => {
        e.preventDefault();
        console.log('handlePetSubmit')
        props.history.push("/addpet");
    };
    
    return (
        <div className="Profile">
            <div className="Profile-Title">profile</div>
            <img onClick={handleXClick} className="Profile-X" src="https://res.cloudinary.com/de2i4dwok/image/upload/v1587686236/Project3/L6TNqYa4_Bumdlj4r3RGgnPz1giNeTBS2-mV0FI0IuzBR1QBdydsrzhNFSs-jPE6ccl_1RbmvtwRNPJeXRAD05ZHjSL5t6SK8z_OlcRU_ouO_ojwdfs.jpg" alt="Exit" />
            <div className="User-Profile-Info-Container">
                <div className="User-Profile-Item">Name: {user.name}</div>
                <div className="User-Profile-Item">Email: {user.email}</div>
                <div className="User-Profile-Item">Password: {user.password}</div>
                <div className="User-Profile-Item">Zip Code: {user.zip}</div>
            </div>
            <div className="Pet-Confirmation">
                <div className="All-Pets-Box">
                    <h1>{user.name}'s Pets</h1>
                    <div className="All-Pets">{allPets}</div>                    
                    <div className="Pet-Buttons">
                        <button onClick={handlePetClick} className="Pet-Button" type="submit">add pet</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
