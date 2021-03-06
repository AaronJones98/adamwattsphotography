import React, {useEffect, useState } from 'react';
import MainNavigation from './MainNavigation';
import {Link} from 'react-router-dom';
import logo_white from '../assets/logo-white.svg';

function Header(){

    //Set scroll state
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 0);
        });
 }, []);

    

return(
    <>
    <header className="site-header">
        <div class="container">
            <div className="table">
                <div className="left-side">
                    <Link to="/">
                        <img src={logo_white} alt="Adam Watts Photography" />
                    </Link>
                </div>
                <div className="right-side">
                    <MainNavigation/>
                </div>
            </div>
        </div>
    </header>
    <header className={`site-header sticky ${scroll ? 'stuck' : ''}`} >
    <div class="container">
        <div className="table">
            <div className="left-side">
                <Link to="/">
                    <img src={logo_white} alt="Adam Watts Photography" />
                </Link>
            </div>
            <div className="right-side">
                <MainNavigation/>
            </div>
        </div>
    </div>
    </header>
    </>
)

}
export default Header