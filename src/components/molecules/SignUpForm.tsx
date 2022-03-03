import React from 'react';
import AccountButton from '../atoms/AccountButton';
import './LoginForm.css'
import './SignUpForm.css'
import AccountSwitchButton from '../atoms/AccountSwitchButton';
import AccountTextField from '../atoms/AccountTextField';
import { postUser } from '../../client';
import { useNavigate } from 'react-router-dom';

function getFirstName() {
    let firstName = (document.getElementById("firstNameFieldSignUp") as HTMLInputElement).value;
    return firstName;
}

function getLastName() {
    let lastName = (document.getElementById("lastNameFieldSignUp") as HTMLInputElement).value;
    return lastName;
}

function getEmail() {
    let email = (document.getElementById("emailFieldSignUp") as HTMLInputElement).value;
    return email;
}

function getPassword() {
    let password = (document.getElementById("passwordFieldSignUp") as HTMLInputElement).value;
    return password;
}

function handleSignUp(){
    postUser(getFirstName(), getLastName(), getEmail(), getPassword());

}

export default function SignUpForm(){ 
    let navigate = useNavigate(); 

    const routeChange = () =>{ 
        let path = '/'; 
        navigate(path);
      }
    
    return (
        <div className='signUpDiv'>
            <p className='header'>Sign up</p>
            <form className='signUpForm'>
                <AccountTextField id="firstNameFieldSignUp" placeholder={'First name'}/>
                <AccountTextField id="lastNameFieldSignUp" placeholder={'Last name'}/>
                <AccountTextField id="emailFieldSignUp" placeholder={'Email'}/>
                <AccountTextField id="passwordFieldSignUp" placeholder={'Password'}/>
                <AccountTextField id="repeatPasswordFieldSignUp" placeholder={'Repeat password'}/>
            </form>
            <AccountButton handleClick={() => (handleSignUp(), routeChange())} buttonText='Sign up'/>
            <br />
            <AccountSwitchButton labelText='Already have an account?' buttonText='Sign in here' inputPath='/login'/>
        </div>
    );
}