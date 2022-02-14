import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/Nav'
import Nav from 'react-bootstrap/Nav'
import Dropdown from './Dropdown';


export default function Navbar(){
    return(
        <div>
            <nav>
                <Dropdown />
                <Link className = 'AppTitle' to = '/home'>
                    <h3>
                        RecipeN´Me
                    </h3>
                </Link>
                <Link to = '/profile'>Profile</Link>
            </nav>
            <Outlet/>
        </div>
    )
}