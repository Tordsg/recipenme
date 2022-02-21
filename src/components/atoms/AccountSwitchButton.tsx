import './AccountSwitchButton.css';
import React from 'react';

interface button{
    labelText: string;
    buttonText: string;
}

export default function AccountSwitchButton({labelText, buttonText}: button){
    return (
        <div>
            <p className='signUpText'>{labelText}</p>
            <button type='button' className='signUpButton'>{buttonText}</button>
        </div>
    );
}