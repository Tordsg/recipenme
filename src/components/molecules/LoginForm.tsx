import React from 'react';
import AccountButton from '../atoms/AccountButton';
import './LoginForm.css'
import AccountTextField from '../atoms/AccountTextField';
import AccountSwitchButton from '../atoms/AccountSwitchButton';
import { getUser } from '../../client';

function getUserName() {
    let username = (document.getElementById("usernameFieldLogin") as HTMLInputElement).value;
    return username;
}
function getPassword() {
    let password = (document.getElementById("passwordFieldLogin") as HTMLInputElement).value;
    return password;
}

function redirectToHome() {
    let username = getUserName();
    let password = getPassword();
    let user = getUser(username, password);
    return 0;
}

export default function LoginForm(){
    return (
        <div className='loginForm'>
            <p className='header'>Sign in</p>
            <form className='form'>
                <AccountTextField id={'usernameFieldLogin'} placeholder={'Username'}/>
                <AccountTextField id={'passwordFieldLogin'} placeholder={'Password'}/>
            </form>
            <AccountButton handleClick={redirectToHome} buttonText='Sign in'/>
            <br />
            <AccountSwitchButton labelText="Don't have an account?" buttonText='Sign up here' inputPath='/signup'/>
        </div>
    );
}
