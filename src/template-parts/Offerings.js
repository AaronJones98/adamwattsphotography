import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import photography_bg from '../assets/photography-bg.webp';
import video_bg from '../assets/videography-bg.jpg';
import occassions_bg from '../assets/occassions.jpg';
import occassions_overlay from '../assets/occassions-overlay.jpg';
import photography_overlay from '../assets/photography-overlay.jpeg';

function Offerings(){

    //Set scroll state
    const [overlay, setOverlay] = useState(false);
    useEffect(() => {
        document.querySelectorAll('.offering').forEach(el => {
            el.addEventListener('mouseenter',function (e) {
                const overlay = el.dataset.overlay
                setOverlay(overlay)
            });
        })

        document.querySelectorAll('.offering').forEach(el => {
            el.addEventListener('mouseleave',function (e) {
                setOverlay(false)
            });
        })
 }, []);

    return (

        <div className={`offerings ${overlay ? 'overlays' : ''}`}>
            <div className="overlays">
            <iframe className={`overlay ${overlay === 'videography' ? 'active' : ''}`} width="560" height="315" src="https://www.youtube.com/embed/XnH7ZuoUa5U?autoplay=1&controls=0&disablekb=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <img src={photography_overlay} alt="Photgraphy" className={`overlay ${overlay === 'photography' ? 'active' : ''}`}></img>
            <img src={occassions_overlay} alt="Occassions" className={`overlay ${overlay === 'occassions' ? 'active' : ''}`}></img>
            </div>
            <div class="table">
            <Link to="/photography" className="offering" data-overlay="photography">
                <div className="content">
                <h3>Wedding Photography</h3>
                <div className="description">
                    We provide a photography packages to suit any budget.
                   We'll give you a collection of photographs which capture those special moment that you may have missed yourself.
                </div>
                </div>
                <div className="overlay"></div>
                <div className="background" style={{ backgroundImage: `url(${photography_bg})` }}></div>
            </Link>
            <Link to="/video" className="offering" data-overlay="videography">
                <div className="content">
                <h3>Wedding Videography</h3>
                <div className="description">
                    We create pixel perfect video's so you can remember your special day exactly as it happened.
                </div>
                </div>
                <div className="overlay"></div>
                <div className="background" style={{ backgroundImage: `url(${video_bg})` }}></div>
            </Link>
            <Link to="/occassions" className="offering" data-overlay="occassions">
                <div className="content">
                <h3>Occassions</h3>
                <div className="description">
                    We provide our services not just at weddings but for many different occassions.
                </div>
                </div>
                <div className="overlay"></div>
                <div className="background" style={{ backgroundImage: `url(${occassions_bg})` }}></div>
            </Link>
            </div>
        </div>
    )
}
export default Offerings;