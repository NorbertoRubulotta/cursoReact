import React, { useContext } from 'react';
import './styles.css';
import CartWidget from '../CartWidget';
import { Link } from 'react-router-dom';
import { Shop } from '../../context/ShopContext';
import CartLogo from '../CartLogo';

const NavBar = () => {

/* const {cart} = useContext(Shop) */



    return (
        <nav className = 'navBar'>
            <CartLogo/>
            <ul className = 'nav-Container'>
                <li className= 'nav-element'><Link to = '/'>Home</Link></li>
                <li className= 'nav-element'><Link to = "/category/Whisky">Whisky</Link></li>
                <li className= 'nav-element'><Link to = "/category/Rum">Rum</Link></li>
                <li className= 'nav-element'><Link to = "/category/Gin">Gin</Link></li>
                <li className= 'nav-element'><Link to = "/category/Vodka">Vodka</Link></li>
                <li className= 'nav-element'><Link to = "/category/Cognac">Cognac</Link></li>
                 <CartWidget/>
            </ul>
        </nav>
    )
}

 export default NavBar;
