import React, { useEffect, useRef } from 'react'
import timeImage from '../../assets/images/mobile/carte/carte47.jpeg'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

//REGISTER PLUGIN
gsap.registerPlugin(ScrollTrigger)

const Time = () => {

    const timetitleRef = useRef(null);
    const timeimgRef = useRef(null);
    const timeimgContainerRef = useRef(null)

    useEffect(() => {
        const pageHeight = window.innerHeight * 1.15;

        gsap.fromTo(".time-background, .time-info", {
            y: "20vw",
            autoAlpha: 0
        },
        {
            y: 0,
            autoAlpha: 1,
            scrollTrigger: {
                trigger: ".time-mb",
                start: `top ${pageHeight/1.6}`,
                toggleActions: 'play none none reverse'
            },
            duration: 1.1,
            ease: "expo.inOut"
        });

        gsap.fromTo(".time-line", {
            x: "-10vh",
            autoAlpha: 0
        },
        {
            x: 0,
            autoAlpha: 1,
            scrollTrigger: {
                trigger: ".time-mb",
                start: `top ${pageHeight/2.5}`,
                toggleActions: 'play none none reverse'
            },
            stagger: .1,
            duration: 1.1,
            ease: 'expo.inOut'
        });

    }, [])

    return (
        <div className="time-mb index25">
            <div className="container time-background">
                <div className="row time-shadow index15"></div>
                <div className="row">
                    <div ref={timeimgContainerRef} className="time-img index10">
                        <img ref={timeimgRef} src={timeImage} alt="footer"/>
                    </div>
                </div>
            </div>
            <div ref={timetitleRef} className="container time-info title">
                <p className="row">Horaire</p>
            </div>
            <div className="container timetable">
                
            </div>
        </div>
    )
}

export default Time
