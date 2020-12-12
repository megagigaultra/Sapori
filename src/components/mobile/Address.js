import React, { useEffect, useRef } from 'react';

import addressImage from '../../assets/images/mobile/carte/carte57.jpeg'
import { ReactComponent as Carte } from '../../assets/svgs/carte-sapori.svg'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

//REGISTER PLUGIN
gsap.registerPlugin(ScrollTrigger)

const Address = () => {

    const addressImgRef = useRef(null);
    const addressImgContainerRef = useRef(null)

    useEffect(() => {
        const pageHeight = window.innerHeight;

        gsap.fromTo(".address-background, .address-info", {
            y: "20vh",
            autoAlpha: 0
        },
        {
            y: 0,
            autoAlpha: 1,
            scrollTrigger: {
                trigger: ".address-mb",
                start: `top ${pageHeight/1.2}`,
                toggleActions: 'play none none reverse'
            },
            duration: 1.1,
            ease: "expo.inOut"
        });

        gsap.fromTo(".address", {
            x: "10vh",
            autoAlpha: 0
        },
        {
            x: 0,
            autoAlpha: 1,
            scrollTrigger: {
                trigger: ".address-background",
                start: `top ${pageHeight/1.3}`,
                toggleActions: 'play none none reverse'
            },
            stagger: .1,
            duration: 1.1,
            ease: 'expo.inOut'
        });

        gsap.fromTo(".map-box", {
            y: "10vh",
            autoAlpha: 0
        },
        {
            y: 0,
            autoAlpha: 1,
            scrollTrigger: {
                trigger: ".address-background",
                start: `top ${pageHeight/1.7}`,
                toggleActions: 'play none none reverse'
            },
            duration: 3,
            ease: 'expo.Out'
        });

    }, [])

    return (
        <div className="address-mb">
            <div className="container address-background index25">
                <div className="row back address-shadow index15"></div>
                <div className="back row">
                    <div ref={addressImgContainerRef} className="address-img index10">
                        <img ref={addressImgRef} src={addressImage} alt="menu"/>
                    </div>
                </div>
            </div>
            <div className="container address-info index20">
                <p className="row address address-title">Adresse</p>
                <div className="address">
                    <div className="row address-invitation">Passez nous voir</div>
                    <div className="row address-line">Rue Fraischamps 150</div>
                    <div className="row address-line">4030, Grivegnee</div>
                    <div className="row address-line">0478 93 78 85</div>
                </div>
            </div>
            <div className="container address-map">
                 <div className="map-box">
                    <Carte className="map"/>
                    <div className="shadow index5"></div>
                 </div>
            </div>
        </div>
    )
}

export default Address
