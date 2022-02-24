import './AccountButton.css';
import React from 'react';
import postUser from '../../client'

interface button{
    buttonText: string;
}

function getEmail() {
    let email = (document.getElementById("emailField") as HTMLInputElement).value;
    return email;
}

function getPassword() {
    let password = (document.getElementById("passwordField") as HTMLInputElement).value;
    return password;
}

export default function LoginButton({buttonText}: button){
    return (
        <button type='button' onClick={() => postUser(getEmail(), getPassword())} className="loginButton">{buttonText}</button>
    );
}