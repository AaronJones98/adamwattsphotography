import React from 'react';
import {Link} from 'react-router-dom';

function MainNavigation(){
    return (
       <ul className="top-nav">
           <li><Link to="/about">About</Link></li>
           <li><Link to="/weddings">Weddings</Link></li>
           <li><Link to="/video">Video</Link></li>
           <li><a id="contact-popup">Get in Touch</a></li>
       </ul>
    )
}
export default MainNavigation;