import React from 'react';
import './FormButton.css';

interface IFormButton {
    label: string
};

const FormButton = (props: IFormButton) => {
    return (
        <div>
            <button className="formButton" type="button">{props.label}</button>
        </div>
    )
};

export default FormButton;
