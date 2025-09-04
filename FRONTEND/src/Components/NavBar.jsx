import React from 'react';
import {Link} from 'react-router-dom';
import './NavBarStyle.css';

export function NavBar(){
    const options = [
        "Home",
        "Mock Mode",
        "Manage Trains", 
        "Manage Tracks", 
        "Manage Station", 
        "Scenario Modeling", 
        "Conflicts & Disruptions", 
        "Data & Analytics"];
    return(
        <div className='navbar'>
            <Link to="/">
                <button>Home</button>
            </Link>
            <Link to="Mock+Mode">
                <button>Mock Mode</button>
            </Link>
            <Link to="/Manage+Trains">
                <button>Manage Trains</button>
            </Link>
            <Link to="/Manage+Tracks">
                <button>Manage Tracks</button>
            </Link>
            <Link to="/Manage+Stations">
                <button>Manage Station</button>
            </Link>
            <Link to="/Scenario+Modeling">
                <button>Scenario Modeling</button>
            </Link>
            <Link to="/Conflicts+Disruptions">
                <button>Conflicts & Disruptions</button>
            </Link>
            <Link to="/Data+Analytics">
                <button>Data & Analytics</button>
            </Link>
        </div>
    );

}

