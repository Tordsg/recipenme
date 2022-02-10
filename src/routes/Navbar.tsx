import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Navbar(){
    return(
        <div>
        <nav>
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