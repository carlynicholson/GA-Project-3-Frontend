import React, {useState, useContext, useEffect} from 'react'
import {getAllPets} from '../../services/api-loginHelper'
import {AppContext} from '../../App'
import './SignUp-Login.css'

function PetConfirmation(props) {
    const appProps = useContext(AppContext)
    const user = appProps.loggedIn.user
        
    useEffect(() => {
        const allPetsAPICall = async () => {
            const json = await getAllPets(user._id).then(response => {
                if (response.status === 200) {
                    appProps.setPets(response.data);
                }
            }).catch(error => {
                console.log("create pet error", error);
            });
        }
        allPetsAPICall()
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

    const handleClick = async (e) => {
        e.preventDefault();
        props.history.push("/dashboard");
    };

    const handlePetClick = async (e) => {
        e.preventDefault();
        props.history.push("/addpet");
    };
    
    return (
        <>
            <div className="Pet-Confirmation">
                <div className="All-Pets-Container">
                    <h1>{user.name}'s Pets</h1>
                    <div className="All-Pets">{allPets}</div>                    
                    <div className="Pet-Buttons">
                        <button onClick={handlePetClick} className="Pet-Button" type="submit">add pet</button>
                        <button onClick={handleClick} className="Pet-Button" type="submit">continue</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PetConfirmation;
