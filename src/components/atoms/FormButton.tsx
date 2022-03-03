import React from 'react';
import './FormButton.css';

interface IFormButton {
    label: string,
    id: string
};

const FormButton = (props: IFormButton) => {
    return (
        <div>
            <button id={props.id} className="formButton" type="button">{props.label}</button>
        </div>
    )
};

export default FormButton;
