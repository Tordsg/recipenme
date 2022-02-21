import './AccountButton.css';
import React from 'react';

interface button{
    buttonText: string;
}

export default function LoginButton({buttonText}: button){
    return (
        <button type='button' className="loginButton" data-cy="submit">{buttonText}</button>
    );
}