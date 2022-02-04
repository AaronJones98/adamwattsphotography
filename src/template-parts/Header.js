import React from 'react';
import MainNavigation from './MainNavigation';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png';

function Header(){

return(
    <header className="site-header">
        <div class="container">
            <div className="table">
                <div className="left-side">
                    <Link to="/">
                        <img src={logo}/>
                    </Link>
                </div>
                <div className="right-side">
                    <MainNavigation/>
                </div>
            </div>
        </div>
    </header>
)

}
export default Header