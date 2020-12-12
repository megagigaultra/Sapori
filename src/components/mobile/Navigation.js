import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

//IMPORT SVGS
import { ReactComponent as Logo } from "../../assets/svgs/logo.svg"

import gsap from 'gsap'

const Navigation = () => {

    useEffect(() => {

        gsap.fromTo(".logo-svg", {
            y: 45,
            autoAlpha: 0
        },
        {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            delay: 1,
            ease: 'expo.out'
        })

},[])

    return (
        <div className="container navigation-mb index40">
            <div className="row nav-bar">
                <NavLink to="/" exact  className="logo"><Logo className="logo-svg" /></NavLink>
            </div>
        </div>
    )
}

export default Navigation
