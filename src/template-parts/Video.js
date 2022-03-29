import React from 'react';
import {motion} from 'framer-motion';
import Hero from '../components/Hero';

function Video(){
    return(
        <motion.div exit="out" animate="in" initial="initial" variants={window.pageVariations} transition={window.pageTransition} className="video-page page">
            <Hero 
            title="Video"
            text="We create professional event videos that can be engaging, powerful and often very emotional."
            ></Hero>
           
           <div class="video-area padding-both">
                <div class="responsive-iframe">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/XnH7ZuoUa5U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
           </div>
           <div class="row video-area padding-bottom">
                <div class="six columns">
                    <div class="responsive-iframe">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/dFNrInLM3EQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div class="six columns">
                    <div class="responsive-iframe">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/IIViOust2Mg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
           </div>
        </motion.div>
    )
}

export default Video;