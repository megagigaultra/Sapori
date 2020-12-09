import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

import gsap from 'gsap'

//IMPORT DATA
import { menus } from '../../data';

const MenuList = (props) => {

    const menuListItemsRef = useRef([]);

    menuListItemsRef.current = [];

    const handleString = menu => {
        let menuSample = "";
        menu.forEach((menuitem, key) => {
            menuSample += ` ${menuitem.name},`
        });
        return menuSample.slice(0, -1);
    }

    const handleLinks = () => {
        props.handleOpen()
    }

    const [ linkActive, setLinkActive ] = useState(true);

    const handleClose = () => {
        gsap.set(".call-background, .call-header, .call-buttons",{
            x: 0,
            autoAlpha: 1
        })

        gsap.fromTo(".item-category, .item-title, .item-sample, .item-line, .menulist-cross", {
            autoAlpha: 1
        },
        {
            duration: .6,
            autoAlpha: 0,
            ease: "expo.out"
        })

        gsap.to(".list-backcover, .list-shadow", {
            autoAlpha: 0,
            duration: .8,
            delay: .2,
            ease: "Power4.out",
            onComplete: props.handleOpen
        })
    }

    useEffect(() => {

            gsap.fromTo(".list-backcover", {
                autoAlpha: 0,
                height: "110vh"
            },
            {
                duration: .3,
                delay: .5,
                autoAlpha: 1,
                ease: "Power4.out"
            })

            gsap.fromTo(".call-background", {
                x: 0,
                autoAlpha: 1
            },
            {
                x: "-100vw",
                autoAlpha: 0,
                duration: 1,
                ease: "expo.inOut"
            });
    
            gsap.fromTo(".call-header, .call-buttons", {
                x: 0,
                autoAlpha: 1
            },
            {
                x: "100vh",
                autoAlpha: 0,
                duration: 1.2,
                ease: 'expo.inOut'
            });

            gsap.fromTo(".list-shadow", {
                autoAlpha: 0,
            },
            {
                duration: .5,
                delay: .1,
                autoAlpha: 1,
                ease: "Power4.out"
            })

            gsap.fromTo(".menulist-cross", {
                y: -100,
                autoAlpha: 0
            },
            {
                autoAlpha: 1,
                y: 0,
                duration: 1.17,
                delay: 1.6,
                ease: "elastic.out(1.5, 1)"
            })

            gsap.fromTo(".item-category, .item-title, .item-sample", {
                x: "20vh",
                scale: .9,
                autoAlpha: 0
            },
            {
                duration: .8,
                x: 0,
                scale: 1,
                autoAlpha: 1,
                stagger: .08,
                /* ease: "elastic.out(1.5, 1)", */
                ease: "expo.out",
                delay: 1.1
            })

            gsap.fromTo(".item-title", {
                skewY: 4,
            },
            {
                duration: .8,
                skewY: 0,
                stagger: .08,
                ease: "expo.out",
                delay: .2
            })

    },[])

    return (
        <div>
            <div className="container menulist-mb index30">
                <div onClick={handleClose} className="menulist-cross index15">
                    <div className="crossbar crossbar-h"></div>
                    <div className="crossbar crossbar-v"></div>
                </div>
                <div className="list-backcover"></div>
                <div className="list-shadow index15"></div>
                <div className="items-container index10">
                        {/* IF LINKS ACTIVE ?*/}
                        {menus.map((menu, key) => (
                            <NavLink onClick={handleLinks} to={ linkActive ? `/menu/${menu.name}` : "" } key={key} className="menulist-items">
                                <span className="row item-category">{menu.category}</span>
                                <p className="row item-title">{menu.name}</p>
                                <div className="row">
                                    <p className="item-sample">{handleString(menu.menu)}</p>
                                </div>
                            </NavLink>
                        ))} 
                </div>
            </div>
        </div>
    )
}

export default MenuList
