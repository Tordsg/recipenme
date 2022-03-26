import React, { MouseEventHandler } from 'react';

interface deleteButton {
    buttonText: string;
    handleClick: () => void;
}

export default function DeleteProfileButton({buttonText, handleClick}: deleteButton){
    return (
        <button onClick={handleClick}>{buttonText}</button>
    );
}
