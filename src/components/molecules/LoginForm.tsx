import React from 'react';
import LoginButton from '../atoms/AccountButton';
import './LoginForm.css'
import AccountTextField from '../atoms/AccountTextField';
import AccountSwitchButton from '../atoms/AccountSwitchButton';

export default function LoginForm(){
    return (
        <div className='loginForm'>
            <p className='header'>Sign in</p>
            <form className='form'>
                <AccountTextField id={'emailField'} placeholder={'Email'}/>
                <AccountTextField id={'passwordField'} placeholder={'Password'}/>
            </form>
            <LoginButton buttonText='Sign in'/>
            <br />
            <AccountSwitchButton labelText="Don't have an account?" buttonText='Sign up here'/>
        </div>
    );
}
