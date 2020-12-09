import React from 'react'
import gsap from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'

import { ReactComponent as ArrowUp } from '../../assets/svgs/arrow-up.svg'

//REGISTER PLUGIN
gsap.registerPlugin(ScrollToPlugin)

const ScrollTop = () => {

    const handleScrollTop = () => {
        gsap.to(window, {
            duration: 0,
            scrollTo: {
                y: 0
            }
        })
    }

    return (
        <div className="container sidebuttons scrolltop index50">
            <div className="row">
                <div onClick={handleScrollTop} className="circle">
                    <ArrowUp className="arrow"/>
                </div>
            </div>
        </div>
    )
}

export default ScrollTop
