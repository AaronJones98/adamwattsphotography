import React, {useEffect, useRef } from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import photo_1 from '../assets/wedding-gallery/photo-1.jpeg'
import photo_2 from '../assets/wedding-gallery/photo-2.jpeg'
import photo_3 from '../assets/wedding-gallery/photo-3.jpeg'
import photo_4 from '../assets/wedding-gallery/photo-4.jpeg'
import photo_5 from '../assets/wedding-gallery/photo-5.jpeg'
import photo_6 from '../assets/wedding-gallery/photo-6.jpeg'
import photo_7 from '../assets/wedding-gallery/photo-7.jpeg'
import photo_8 from '../assets/wedding-gallery/photo-8.jpeg'
import photo_9 from '../assets/wedding-gallery/photo-9.jpeg'
import photo_10 from '../assets/wedding-gallery/photo-10.jpeg'
import photo_11 from '../assets/wedding-gallery/photo-11.jpeg'
import photo_12 from '../assets/wedding-gallery/photo-12.jpeg'
import photo_13 from '../assets/wedding-gallery/photo-13.jpeg'
import photo_14 from '../assets/wedding-gallery/photo-14.jpeg'
import photo_15 from '../assets/wedding-gallery/photo-15.jpeg'
import photo_16 from '../assets/wedding-gallery/photo-16.jpeg'
import photo_17 from '../assets/wedding-gallery/photo-17.jpeg'
import photo_18 from '../assets/wedding-gallery/photo-18.jpeg'
import photo_19 from '../assets/wedding-gallery/photo-19.jpeg'
import photo_20 from '../assets/wedding-gallery/photo-20.jpeg'
import photo_21 from '../assets/wedding-gallery/photo-21.jpeg'
import photo_22 from '../assets/wedding-gallery/photo-22.jpeg'
import photo_23 from '../assets/wedding-gallery/photo-23.jpeg'
import photo_24 from '../assets/wedding-gallery/photo-24.jpeg'
import photo_25 from '../assets/wedding-gallery/photo-25.jpeg'
import photo_26 from '../assets/wedding-gallery/photo-26.jpeg'
import photo_27 from '../assets/wedding-gallery/photo-27.jpeg'
import photo_28 from '../assets/wedding-gallery/photo-28.jpeg'
import photo_29 from '../assets/wedding-gallery/photo-29.jpeg'
import photo_30 from '../assets/wedding-gallery/photo-30.jpeg'
import photo_31 from '../assets/wedding-gallery/photo-31.jpeg'
import photo_32 from '../assets/wedding-gallery/photo-32.jpeg'
import photo_33 from '../assets/wedding-gallery/photo-33.jpeg'
import photo_34 from '../assets/wedding-gallery/photo-34.jpeg'
import photo_35 from '../assets/wedding-gallery/photo-35.jpeg'
import photo_36 from '../assets/wedding-gallery/photo-36.jpeg'
import photo_37 from '../assets/wedding-gallery/photo-37.jpeg'
import photo_38 from '../assets/wedding-gallery/photo-38.jpeg'
import photo_39 from '../assets/wedding-gallery/photo-39.jpeg'
gsap.registerPlugin(ScrollTrigger);
function Gallery(){

        const images = useRef([]);
        useEffect(() => {
            setTimeout(function(){
            images.current.forEach((el, index) => {
                gsap.fromTo(el, {
                    autoAlpha: 0,
                    y: 200
                }, {
                    autoAlpha:1,
                    duration: .5,
                    y: 0,
                    scrollTrigger: {
                        id: `section-${index+1}`,
                        trigger: el,
                        start: 'top bottom',
                        end: 'top -100px',
                        toggleActions: 'play play play reverse'
                    }
                })
            })
            }, 200)

          });

          
        
        return(
        <div className="gallery">
            <div className="gallery-row">
                <div class="gallery-item" key={1} ref={(element) => images.current.push(element)}>
                    <img src={photo_1} alt="Father and son at wedding"></img>
                </div>
                <div class="gallery-item" key={2} ref={(element) => images.current.push(element)}>
                    <img src={photo_2} alt="Man playing guitar at wedding"></img>
                </div>
            </div>

            <div className="gallery-row">
                <div class="gallery-item" key={3} ref={(element) => images.current.push(element)}>
                    <img src={photo_3} alt="Bride and Grooms first dance"></img>
                </div>
                <div class="gallery-item" key={4} ref={(element) => images.current.push(element)}>
                    <img src={photo_4} alt="Bride and Groom looking into each others eyes"></img>
                </div>
            </div>

            <div className="gallery-row">
                <div class="gallery-item" key={5} ref={(element) => images.current.push(element)}>
                    <img src={photo_5} alt="Intimate shot of bride and groom"></img>
                </div>
                <div class="gallery-item" key={6} ref={(element) => images.current.push(element)}>
                    <img src={photo_6} alt="Wedding bouquet"></img>
                </div>
                <div class="gallery-item" key={7} ref={(element) => images.current.push(element)}>
                    <img src={photo_7} alt="Wedding flowers"></img>
                </div>
            </div>

            <div className="gallery-row"> 
                <div class="gallery-item" key={8} ref={(element) => images.current.push(element)}>
                    <img src={photo_8} alt="Wedding cake with icing sugar dusting"></img>
                </div>
            </div>
            <div className="gallery-row">
                <div class="gallery-item" key={9} ref={(element) => images.current.push(element)}>
                    <img src={photo_9} alt="Wedding in Santorini"></img>
                </div>
                <div class="gallery-item" key={10} ref={(element) => images.current.push(element)}>
                    <img src={photo_10} alt="Bride and groom walking through field"></img>
                </div>
            </div>

            <div className="gallery-row">
                <div class="gallery-item" key={11} ref={(element) => images.current.push(element)}>
                    <img src={photo_11} alt="Groom making heart behind brides back"></img>
                </div>
            </div>

            <div className="gallery-row">
                <div class="gallery-item" key={12} ref={(element) => images.current.push(element)}>
                    <img src={photo_12} alt="Bride telling everyone to leave them along"></img>
                </div>
            </div>

            <div className="gallery-row">
                <div class="gallery-item" key={13} ref={(element) => images.current.push(element)}>
                    <img src={photo_13} alt="Bride and groom smiling"></img>
                </div>
            </div>

            <div className="gallery-row">
                <div class="gallery-item" key={14} ref={(element) => images.current.push(element)}>
                    <img src={photo_14} alt="Groomsmen suits"></img>
                </div>
            </div>

            <div className="gallery-row">
                <div class="gallery-item" key={15} ref={(element) => images.current.push(element)}>
                    <img src={photo_15} alt="Wedding flowers"></img>
                </div>
                <div class="gallery-item" key={16} ref={(element) => images.current.push(element)}>
                    <img src={photo_16} alt="Hands containing wedding bands"></img>
                </div>
            </div>

            <div className="gallery-row">
                <div class="gallery-item" key={17} ref={(element) => images.current.push(element)}>
                    <img src={photo_17} alt="Bride and groom smiling at eachother intimately"></img>
                </div>
                <div class="gallery-item" key={18} ref={(element) => images.current.push(element)}> 
                    <img src={photo_18} alt="Flourescent wedding bouquet"></img>
                </div>
            </div>

            <div className="gallery-row" >
                <div class="gallery-item" key={19} ref={(element) => images.current.push(element)}>
                    <img src={photo_19} alt="Young bridesmaids hugging"></img>
                </div>
                <div class="gallery-item" key={20} ref={(element) => images.current.push(element)}>
                    <img src={photo_20} alt="Bride holding her wedding bouquet"></img>
                </div>
            </div>

            <div className="gallery-row" >
                <div class="gallery-item" key={21} ref={(element) => images.current.push(element)}>
                    <img src={photo_21} alt="Groom dancing with his wife"></img>
                </div>
            </div>
            <div className="gallery-row" >
                <div class="gallery-item" key={22} ref={(element) => images.current.push(element)}>
                    <img src={photo_22} alt="Young married couple smiling at eachother"></img>
                </div>
            </div>
            <div className="gallery-row" >
                <div class="gallery-item" key={23} ref={(element) => images.current.push(element)}>
                    <img src={photo_23} alt="Brides shoes"></img>
                </div>
                <div class="gallery-item" key={24} ref={(element) => images.current.push(element)}>
                    <img src={photo_24} alt="Newly weds walking through confetti"></img>
                </div>
            </div>
            <div className="gallery-row" >
                <div class="gallery-item" key={25} ref={(element) => images.current.push(element)}>
                    <img src={photo_25} alt="wedding bouquet of flowers"></img>
                </div>
            </div>

            <div className="gallery-row" >
                <div class="gallery-item" key={26} ref={(element) => images.current.push(element)}>
                    <img src={photo_26} alt="wedding flower on table"></img>
                </div>
                <div class="gallery-item" key={27} ref={(element) => images.current.push(element)}>
                    <img src={photo_27} alt="bride and grooms first dance"></img>
                </div>
            </div>

            <div className="gallery-row" >
                <div class="gallery-item" key={28} ref={(element) => images.current.push(element)}>
                    <img src={photo_28} alt="Bride and groom in woodlands"></img>
                </div>
                <div class="gallery-item" key={29} ref={(element) => images.current.push(element)}>
                    <img src={photo_29} alt="bridal party and groomsmen"></img>
                </div>
            </div>

            <div className="gallery-row" >
                <div class="gallery-item" key={30} ref={(element) => images.current.push(element)}>
                    <img src={photo_30} alt="bride an grrom under canopy"></img>
                </div>
            </div>

            <div className="gallery-row" >
                <div class="gallery-item" key={31} ref={(element) => images.current.push(element)}>
                    <img src={photo_31} alt="bride and groom in archway"></img>
                </div>
            </div>

            <div className="gallery-row">
                <div class="gallery-item" key={32} ref={(element) => images.current.push(element)}>
                    <img src={photo_32} alt="first dance"></img>
                </div>
                <div class="gallery-item" key={33} ref={(element) => images.current.push(element)}>
                    <img src={photo_33} alt="hangover kits"></img>
                </div>
            </div>

            <div className="gallery-row">
                <div class="gallery-item" key={34} ref={(element) => images.current.push(element)}>
                    <img src={photo_34} alt="wedding party"></img>
                </div>
                <div class="gallery-item" key={35} ref={(element) => images.current.push(element)}>
                    <img src={photo_35} alt="page boy"></img>
                </div>
            </div>

            <div className="gallery-row">
                <div class="gallery-item" key={36} ref={(element) => images.current.push(element)}>
                    <img src={photo_36} alt="wedding in greece with man playing saxophone"></img>
                </div>
            </div>
            
            <div className="gallery-row">
                <div class="gallery-item" key={37} ref={(element) => images.current.push(element)}>
                    <img src={photo_37} alt="Lady caught wedding boquet"></img>
                </div>
            </div>

            <div className="gallery-row">
                <div class="gallery-item" key={38} ref={(element) => images.current.push(element)}>
                    <img src={photo_38} alt="Vintage wedding"></img>
                </div>
                <div class="gallery-item" key={39} ref={(element) => images.current.push(element)}>
                    <img src={photo_39} alt="Vintage wedding couple laughing"></img>
                </div>
            </div>

        </div>
        )
  }
  export default Gallery;