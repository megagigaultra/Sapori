import React, { useEffect, useRef } from 'react'
import menuImage from '../../assets/images/mobile/carte/carte8.jpeg'

import { ReactComponent as ArrowOpen } from '../../assets/svgs/arrow-open.svg'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

//REGISTER PLUGIN
gsap.registerPlugin(ScrollTrigger)

const CallToAction = (props) => {

    const calltitleRef = useRef(null);
    const callimgRef = useRef(null);
    const callimgContainerRef = useRef(null)

    useEffect(() => {
        const pageHeight = window.innerHeight * 1.15;

        gsap.fromTo(".call-background, .call-header, .call-buttons", {
            y: "20vh",
            autoAlpha: 0
        },
        {
            y: 0,
            autoAlpha: 1,
            scrollTrigger: {
                trigger: ".calltoaction-mb",
                start: `top ${pageHeight/1.4}`,
                toggleActions: 'play none none reverse'
            },
            duration: 1.1,
            ease: "expo.inOut"
        });

        gsap.fromTo(".call-header>p, .button-open", {
            x: "-10vh",
            autoAlpha: 0
        },
        {
            x: 0,
            autoAlpha: 1,
            scrollTrigger: {
                trigger: ".calltoaction-mb",
                start: `top ${pageHeight/2.2}`,
                toggleActions: 'play none none reverse'
            },
            duration: 1.1,
            ease: 'expo.inOut'
        });

    }, [])

    return (
        <div className="calltoaction-mb">
            <div className="container call-background">
                <div className="row call-shadow index15"></div>
                <div className="row">
                    <div ref={callimgContainerRef} className="call-img index10">
                        <img ref={callimgRef} src={menuImage} alt="menu"/>
                    </div>
                </div>
            </div>
            <div onClick={props.handleOpen} ref={calltitleRef} className="call-header index20">
                <p>Au menu</p>
            </div>
            <div onClick={props.handleOpen} className="container-buttons">
                <div className="call-buttons open index20">
                    <div className="button-container">
                        <ArrowOpen className="button button-open" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CallToAction
