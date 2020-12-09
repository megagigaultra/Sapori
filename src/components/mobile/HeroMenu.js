import React, { useEffect, useRef }  from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

//IMPORT SVG
import { ReactComponent as ArrowScroll } from '../../assets/svgs/arrow-scroll.svg'


//REGISTER PLUGIN
gsap.registerPlugin(ScrollTrigger)


const HeroMenu = (props) => {

    return (
        <div className="container heromenu-mb">
            <div className="hero-background index10">
                <div className="hero-shadow index5"></div>
                <div className="hero-image index">
                    <img src={props.image} alt="Paysage italien"/>
                </div>
            </div>

            <div className="container content-header index20">
                <div className="intro title-1 row">
                    <p>Carte</p>
                </div>
                <div className="intro title-2 row">
                    <p>{props.name}</p>
                </div>
            </div>

            <div className="row dots index20">
                <div className="intro dot green"></div>
                <div className="intro dot"></div>
                <div className="intro dot red"></div>
            </div>

            <div className="content-description index20">
                <p className="intro row description">
                    {props.description}
                </p>
            </div>
        
            <div className="content-arrow index15">
                <div className="row">
                    <div className="arrow-box">
                        <ArrowScroll className="arrow"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroMenu