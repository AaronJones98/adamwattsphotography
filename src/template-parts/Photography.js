import React from 'react';
import {motion} from 'framer-motion';
import Gallery from '../components/Gallery';

function Photography(){


    return(
        <motion.div exit="out" animate="in" initial="initial" variants={window.pageVariations} transition={window.pageTransition} className="photography-page page padding-both">
                <div className="four columns">
                    <div className="sticky-element fade-in-up">
                    <h1>It's your day</h1>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut feugiat augue. Praesent semper mauris eu metus ullamcorper, nec vestibulum mi ultrices.</h3>
                    <a href="mailto:adamwattsphotography@live.co.uk" class="button">Get in touch</a>
                    </div>
                </div>
                <div className="eight columns">
                    <Gallery />
                </div>
        </motion.div>
    )
}

export default Photography;