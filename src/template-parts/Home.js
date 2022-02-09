import React, { useRef, useEffect } from 'react';
import Quote from '../components/Quote';
import Hero from '../components/Hero';
import Offerings from './Offerings';

function Home(){


    return (

        <div className="homepage">
            <Hero 
            title="Why choose me?" 
            text="Adam Watts Photography is a family run business based in Banbury. Me and my awesome team are all about having fun and creating high quality imagery you can look back at for years to come."
            styledlinktext="Get in touch"
            styledlink="#contact"
            buttontext="See my work"
            buttonlink="/weddings"
            ></Hero>
            <Offerings/>
            <Hero 
            title="Oxfordshire & Surrounding areas" 
            text="Adam Watts Photography is a family run business based in Banbury. Me and my awesome team are all about having fun and creating high quality imagery you can look back at for years to come."
            styledlinktext="Enquire now"
            styledlink="#contact"
            alignment="right"
            ></Hero>
        </div>
    )
}
export default Home;