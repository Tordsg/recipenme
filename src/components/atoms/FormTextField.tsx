import React from 'react';
import './FormTextField.css';

interface IFormTextField {
    placeholder: string
};

const FormTextField = (props: IFormTextField) => {
    return (
        <div className="formTextFieldContainer">
            <input className="formTextField" placeholder={props.placeholder} type="text" />
        </div>
    )
};

export default FormTextField;
