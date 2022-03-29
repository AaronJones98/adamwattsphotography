import React from 'react';
import {motion} from 'framer-motion';
import Hero from '../components/Hero';

function Occassions(){

    return (
        <motion.div exit="out" animate="in" initial="initial" variants={window.pageVariations} transition={window.pageTransition} className="about-page page">
            <Hero 
            title="Why choose me?" 
            text="Adam Watts Photography is a family run business based in Banbury. Me and my awesome team are all about having fun and creating high quality imagery you can look back at for years to come."
            styledlinktext="Get in touch"
            styledlink="#contact"
            buttontext="See my work"
            buttonlink="/weddings"
            ></Hero>
            <Hero 
            title="Why choose me?" 
            text="Adam Watts Photography is a family run business based in Banbury. Me and my awesome team are all about having fun and creating high quality imagery you can look back at for years to come."
            styledlinktext="Get in touch"
            styledlink="#contact"
            buttontext="See my work"
            buttonlink="/weddings"
            ></Hero>
            <Hero 
            title="Why choose me?" 
            text="Adam Watts Photography is a family run business based in Banbury. Me and my awesome team are all about having fun and creating high quality imagery you can look back at for years to come."
            styledlinktext="Get in touch"
            styledlink="#contact"
            buttontext="See my work"
            buttonlink="/weddings"
            ></Hero>
            <Hero 
            title="Why choose me?" 
            text="Adam Watts Photography is a family run business based in Banbury. Me and my awesome team are all about having fun and creating high quality imagery you can look back at for years to come."
            styledlinktext="Get in touch"
            styledlink="#contact"
            buttontext="See my work"
            buttonlink="/weddings"
            ></Hero>
        </motion.div>
    )
}
export default Occassions;