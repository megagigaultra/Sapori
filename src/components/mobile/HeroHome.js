import React, { useEffect, useRef }  from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

//IMPORT IMAGES
import heroImage from '../../assets/images/mobile/hero/cover3.jpeg'

//IMPORT SVG
import { ReactComponent as ArrowScroll } from '../../assets/svgs/arrow-scroll.svg'


//REGISTER PLUGIN
gsap.registerPlugin(ScrollTrigger)


const HeroHome = () => {

    const herodescRef = useRef(null);

    useEffect(() => {
        const pageHeight = window.innerHeight;

        gsap.fromTo(".intro", {
            x: "20vh",
            autoAlpha: 0
        },
        {
            x: 0,
            autoAlpha: 1,
            duration: 1.4,
            delay: .8,
            stagger: .15,
            ease: 'expo.out'
        });

        gsap.fromTo(".content-arrow", {
            x: "-8vh",
            autoAlpha: 0
        },
        {
            x: 0,
            autoAlpha: 1,
            duration: 1.7,
            delay: 1.4,
            ease: 'expo.inOut'
        });

        gsap.fromTo(".hero-image", {
            autoAlpha: 0
        },
        {
            autoAlpha: 1,
            delay: 1.2,
            duration: 3,
            ease: "shine.Out"
        });

        gsap.fromTo(".arrow-box", {
            x: 0,
            autoAlpha: 1
        },
        {
            x: "-5vh",
            autoAlpha: 0,
            scrollTrigger: {
                trigger: ".content-arrow",
                start: `top ${pageHeight/1.59}`,
                toggleActions: 'play none none reverse'
            },
            duration: 1.1,
            ease: "expo.inOut"
        });

    }, [])

    return (
        <div className="container herohome-mb">
            <div className="hero-background index10">
                <div className="hero-shadow index5"></div>
                <div className="hero-image index">
                    <img src={heroImage} alt="Paysage italien"/>
                </div>
            </div>

            <div className="container content-header index20">
                <div className="intro title-1 row">
                    <p>I Sapori</p>
                </div>
                <div className="intro title-2 row">
                    <p>del Sud</p>
                </div>
            </div>

            <div className="row dots index20">
                <div className="intro dot green"></div>
                <div className="intro dot"></div>
                <div className="intro dot red"></div>
            </div>

            <div ref={herodescRef} className="content-description index20">
                <p className="intro row description">
                    I Sapori Del Sud vous invite 
                    à découvrir une selection de 
                    sandwiches et de specialités 
                    italiennes
                </p>
            </div>
        
            <div className="content-arrow">
                <div className="row">
                    <div className="arrow-box">
                        <ArrowScroll className="arrow"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroHome
