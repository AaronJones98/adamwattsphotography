import React from 'react';
import {Link} from 'react-router-dom';

function MainNavigation(){
    return (
       <ul className="top-nav">
           <li><Link to="/photography">Photography</Link></li>
           <li><Link to="/video">Video</Link></li>
           <li><Link to="/occassions">Occassions</Link></li>
           <li><a href="mailto:adamwattsphotography@live.co.uk" id="contact-popup">Get in Touch</a></li>
       </ul>
    )
}
export default MainNavigation;