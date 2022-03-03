import './AccountButton.css';
import React from 'react';
import {postUser} from '../../client'

interface IButton{
    buttonText: string;
    handleClick: () => void;
}

export default function LoginButton({buttonText, handleClick}: IButton){
    return (
        <button type='button' onClick={handleClick} className="loginButton">{buttonText}</button>
    );
}