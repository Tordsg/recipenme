import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import LoginForm from '../components/molecules/LoginForm';
import Navbar from './Navbar';


export default function LoginPage(){
    return(
        <div>
            <Navbar/>
            <LoginForm/>
            <Outlet/>
        </div>
    )
}