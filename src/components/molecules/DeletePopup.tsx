import { useState } from "react";
import { getUserReturn, loginReturn, deleteUserReturn } from "../../client";
import AccountButton from "../atoms/AccountButton";
import AccountTextField from "../atoms/AccountTextField";
import Popup from "../atoms/Popup";
import SettingsOption from "../atoms/SettingsOption";
import './DeletePopup.css';

interface popupId {
    id: string;
}

export default function DeletePopup({id}:popupId) {
    const error = document.getElementById('errorDelete')!;
    const userID = Number(localStorage.getItem('user'));

    const deleteProfile = async() => {
        const userdata = await getUserReturn(userID);
        const objList = JSON.parse(userdata);
        const username = objList.username;

        const pwd = (document.getElementById('deletePassword') as HTMLInputElement).value;
        const pwdRepeat = (document.getElementById('deletePasswordRepeat') as HTMLInputElement).value;

        if(pwd != pwdRepeat){
            console.log('rip');
            error.innerHTML = 'Passwords do not match!';
            error.style.display = 'block';
        } else {
            const tryLogin = await loginReturn(username, pwd);
            if(tryLogin === parseInt(tryLogin, 10)){
                const deleteResult = await deleteUserReturn(userID);
                if(deleteResult == '-1'){
                    
                }
                console.log('heihei');
            } else {
                error.innerHTML = 'Wrong password';
                error.style.display = 'block';
            }

            console.log('jeg skal til backend')
        }
    }

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const deleteOption = () => {
        togglePopup();
    }

    return (
        //1. Hent info om bruker så du vet username
        //2. Bruk login-funksjonen for å autentisere
        <div>
            {isOpen && <Popup id={id} handleClick={togglePopup} content = {
                <>
                    <h2 className="header">Please enter your password to delete your account.</h2>
                    <form>
                        <AccountTextField type='text' id='deletePassword' placeholder='Password' />
                        <AccountTextField type='text' id='deletePasswordRepeat' placeholder='Repeat password' />
                    </form>
                    <p id='errorDelete' className='deleteError'></p>
                    <AccountButton handleClick={deleteProfile} buttonText='Delete my account'/>
                </>
            }
            />}
            <SettingsOption handleClick={deleteOption} text={"Delete account"}/>
        </div>
    );
}
