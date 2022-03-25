import React from 'react'
import { Link } from 'react-router-dom'

import './navbar.scss'

const Navbar = () => {
    return (
        <nav className='nav'>
            <div className="nav-item">
                <div className='nav-logo'>
                    <Link to="/">Let's<br/>drink!</Link>
                </div>
                <ul className="nav-links">
                    <li>
                        <Link to="/">Main</Link>
                    </li>
                    <li>
                        <Link to="/category">Category</Link>
                    </li>
                </ul>
            </div>
        
        </nav>
    )
}

export default Navbar
