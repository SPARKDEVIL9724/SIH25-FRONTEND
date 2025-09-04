import React, {useState} from 'react';

function NavBar(){
    const options = ["Home","Mock Mode", "Manage Trains", "Manage Track", "Manage Station", "Scenario Modeling", "Conflicts & Disruptions", "Data & Analytics"];
    return(
        <div className='navbar'>
            <ul>
                {options.map((option, index) => <li className='nav-options' key={index}>{option}</li>)}
            </ul>
        </div>
    );

}

export default NavBar