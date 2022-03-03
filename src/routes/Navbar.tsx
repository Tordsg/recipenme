import React from 'react';
import { Link, Outlet } from 'react-router-dom';
/*import NavDropdown from 'react-bootstrap/Nav'
import Nav from 'react-bootstrap/Nav' */
import Dropdown from './Dropdown';
import { useNavigate } from "react-router-dom";


export default function Navbar(){
    let navigate = useNavigate(); 

    const routeChange = () =>{ 
        let path = '/login'; 
        navigate(path);
      }

    return(
        <div>
            <nav>
                <Dropdown />
                <Link className = 'AppTitle' to = '/home'>
                    <h3>
                        RecipeN´Me
                    </h3>
                </Link>
                <button id='loginNav' onClick={routeChange}>Login</button>
                <Link to = '/profile'>Profile</Link>
            </nav>
            <Outlet/>
        </div>
    )
}