import React from 'react';
import './AccountTextField.css'

interface inputPlaceholder {
    placeholder: string;
    id: string;
}

export default function AccountTextField({placeholder, id}: inputPlaceholder){
    return (
        <div>
            <input type='text' id={id} placeholder={placeholder} className='textfield' />
            <br />
        </div>
    );
}