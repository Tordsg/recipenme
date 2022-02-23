import React from 'react';
import LoginButton from '../atoms/AccountButton';
import LoginTextField from '../atoms/AccountTextField';
import './LoginForm.css'
import './SignUpForm.css'
import AccountSwitchButton from '../atoms/AccountSwitchButton';
import AccountTextField from '../atoms/AccountTextField';

export default function SignUpForm(){
    return (
        <div className='signUpDiv'>
            <p className='header'>Sign up</p>
            <form className='signUpForm'>
                <AccountTextField placeholder={'First name'}/>
                <AccountTextField placeholder={'Last name'}/>
                <AccountTextField placeholder={'Email'}/>
                <AccountTextField placeholder={'Password'}/>
                <AccountTextField placeholder={'Repeat password'}/>
            </form>
            <LoginButton buttonText='Sign up'/>
            <br />
            <AccountSwitchButton labelText='Already have an account?' buttonText='Sign in here'/>
        </div>
    );
}