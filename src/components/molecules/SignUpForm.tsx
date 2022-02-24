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
                <AccountTextField id ={'randomText 1'} placeholder={'First name'}/>
                <AccountTextField id ={'randomText 2'} placeholder={'Last name'}/>
                <AccountTextField id ={'randomText 3'} placeholder={'Email'}/>
                <AccountTextField id ={'randomText 4'} placeholder={'Password'}/>
                <AccountTextField id ={'randomText 5'} placeholder={'Repeat password'}/>
            </form>
            <LoginButton buttonText='Sign up'/>
            <br />
            <AccountSwitchButton labelText='Already have an account?' buttonText='Sign in here'/>
        </div>
    );
}