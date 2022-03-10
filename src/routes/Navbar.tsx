import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarLogo from '../components/atoms/NavbarLogo';
import NavbarTitle from '../components/atoms/NavbarTitle';
import NavbarDropdown from '../components/molecules/NavbarDropdown';


export default function Navbar(){

    return(
        <div>
            <nav>
                <NavbarLogo />
                <NavbarTitle />
                <NavbarDropdown />
            </nav>
            <Outlet/>
        </div>
    )
}