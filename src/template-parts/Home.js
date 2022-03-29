import React from 'react';
import {Link} from 'react-router-dom';
import Hero from '../components/Hero';
import Offerings from './Offerings';
import {motion} from 'framer-motion';

function Home(){

    return (

        <motion.div exit="out" animate="in" initial="initial" variants={window.pageVariations} transition={window.pageTransition} className="homepage page">
            <Hero 
            title="We're a family run photography business based in Banbury." 
            styledlinktext="Get in touch"
            styledlink="mailto:adamwattsphotography@live.co.uk"
            buttontext="See my work"
            buttonlink="/photography"
            ></Hero>
            <Offerings/>
            <div className="text-panel">
                <div className="container thin">
                    <div className="grid">
                        <div className="col">
                        <h2>About us</h2>
                        </div>
                        <div className="col">
                            <p>Myself, an art major and Photography manager for a leading school photography company and my sister, a media student graduate make up our team.</p>
                            <p>We create high quality photographs and videos for all types of events. We mainly work with weddings but have worked in many different industries.</p>
                            <p>Based central UK, Banbury, Oxfordshire we are happy to travel up and down the country.</p>
                            <Link to="/photography" class="styled-link dark">
                            <span className="arrow before"></span>
                            See my work
                            <span className="arrow after"></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
export default Home;