import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="Navbar">
            <nav>
                <ul>
                    <li><Link to="/" className="Link">Home</Link></li>
                    <li><Link to="/post" className="Link">Create</Link></li>
                    <li><Link to="/gallery" className="Link">Gallery</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;