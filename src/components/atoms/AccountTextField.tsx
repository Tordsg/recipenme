import React from 'react';
import './AccountTextField.css'

interface inputPlaceholder {
    placeholder: string;
}

export default function AccountTextField({placeholder}: inputPlaceholder){
    return (
        <div>
            <input type='text' placeholder={placeholder} className='textfield' />
            <br />
        </div>
    );
}