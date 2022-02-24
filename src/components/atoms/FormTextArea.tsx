import React from 'react';
import './FormTextArea.css';

interface IFormTextArea {
    placeholder: string,
};

const FormTextArea = (props: IFormTextArea) => {
    return (
        <div className="formTextAreaContainer">
            <textarea className="formTextArea" placeholder={props.placeholder}></textarea>
        </div>
    )
};

export default FormTextArea;
