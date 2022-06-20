import React from 'react';
import './styles.css';
import CartWidget from '../CartWidget';

const NavBar = () => {
    return (
        <nav className = 'navBar'>
<ul>
    <li><a href="http://">Link 1</a></li>
    <li><a href="http://">Link 2</a></li>
    <li><a href="http://">Link 3</a></li>
    <li><a href="http://">Link 4</a></li>
    <CartWidget/>
</ul>
</nav>

    )
}

export default NavBar;