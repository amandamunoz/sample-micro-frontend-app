import React from 'react';
import {navigateToUrl} from "single-spa";

const Nav = () => (
    <nav>
        <div className="nav-wrapper">
            <a href="/" onClick={navigateToUrl} className="brand-logo">single-spa</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="/" onClick={navigateToUrl}>Home</a></li>
                <li><a href="/vue" onClick={navigateToUrl}>Vue</a></li>
                <li><a href="/react" onClick={navigateToUrl}>React</a></li>
            </ul>
        </div>
    </nav>
)

export default Nav;
