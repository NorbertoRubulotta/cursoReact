import React from 'react';
import './styles.css';
import CartWidget from '../CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className = 'navBar'>
            <ul className = 'nav-Container'>
                <li className= 'nav-element'><Link to = '/'>Home</Link></li>
                <li className= 'nav-element'><Link to = '/category/electronics'>Electronics</Link></li>
                <li className= 'nav-element'><Link to = '/category/jewelery'>Jewelery</Link></li>
                <li className= 'nav-element'><Link to = "/category/women's clothing">Women's clothing</Link></li>
                <li className= 'nav-element'><Link to = "/category/men's clothing">Men's clothing</Link></li>
                <CartWidget/>
            </ul>
        </nav>
    )
}

 export default NavBar;
