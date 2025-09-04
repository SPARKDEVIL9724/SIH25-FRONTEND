import React from 'react';
import {Link} from 'react-router-dom';
function NavBar(){
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
            <Link to="">
                <button>Home</button>
            </Link>
            <Link to="">
                <button>Mock Mode</button>
            </Link>
            <Link to="">
                <button>Manage Trains</button>
            </Link>
            <Link to="">
                <button>Manage Tracks</button>
            </Link>
            <Link to="">
                <button>Manage Station</button>
            </Link>
            <Link to="">
                <button>Scenario MOdeling</button>
            </Link>
            <Link to="">
                <button>Conflicts & Disruptions</button>
            </Link>
            <Link to="">
                <button>Data & Analytics</button>
            </Link>
        </div>
    );

}

export default NavBar