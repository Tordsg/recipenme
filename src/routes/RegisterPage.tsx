import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import SignUpForm from '../components/molecules/SignUpForm';

export default function RegisterPage(){
    return(
        <div>
            <Navbar/>
            <SignUpForm/>
            <Outlet/>
        </div>
    )
}