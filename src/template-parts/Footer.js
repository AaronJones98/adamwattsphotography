import React from 'react';
import logo_white from '../assets/logo-white.svg';

function Footer(){


return(
    <>

    <footer className="site-footer">
        <div className="container">
            <img src={logo_white} alt="Adam Watts Photography" ></img>
            <ul>
                <li>© Adam Watts Photography 2022</li>
            </ul>
        </div>
    </footer>
    </>
)

}
export default Footer