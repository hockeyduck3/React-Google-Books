import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './nav.css';

function Nav() {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            
            {/* Logo / Homepage Link */}
            <Link className='navbar-brand' to='/'>
                <span className='blue'>G</span><span className='red'>o</span><span className='yellow'>o</span><span className='blue'>g</span><span className='green'>l</span><span className='red'>e</span> Books Search
            </Link>

            <button id='navbarBtn' className='navbar-toggler collapsed' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>

            <div className='collapse navbar-collapse' id='navbarNav'>
                <ul className='navbar-nav ml-auto'>

                    {/* Search Page */}
                    <li className='nav-item'>
                        <NavLink activeClassName='active' exact to='/' className='nav-link'>Search</NavLink>
                    </li>

                    {/* Saved Page */}
                    <li className='nav-item'>
                        <NavLink activeClassName='active' exact to='/' className='nav-link'>Saved Books</NavLink>
                    </li>

                </ul>
            </div>
        </nav>
    )
}

export default Nav;