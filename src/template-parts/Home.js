import React from 'react';
import '../css/Home.css';
import homehero from "../assets/home-hero.webp";
import {Link} from 'react-router-dom';

function Home(){
    return (
        <div className="homepage">
            <div className="home-intro flex">
                <div className="container">
                    <h4 class="sub-title">Adam Watts Photography</h4>
                    <h1>Why choose me?</h1>
                    <p>Adam Watts Photography is a family run business based in Banbury.<br></br>
                        Me and my awesome team are all about having fun and creating high quality<br></br> imagery you can look back at for years to come.</p>

                        <Link to="/weddings" className="button">See my work</Link>

                        <div className="styled-link">
                            <span className="arrow before"></span>
                            Get in touch
                            <span className="arrow after"></span>
                        </div>
                </div>
            </div>
            <div className="quote">
                <div className="container">
                    <div className="quote-content">
                        "Adam did our wedding photos in April of this year and he was just brilliant. We met before the big day and discussed what sort of pics we wanted and he gave us everything we asked for. On the day he was amazing, in the background but getting the wonderful photos we so wanted. Also for his calming influence, honestly brides to be I would advise you to book him for that if nothing else!"
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;