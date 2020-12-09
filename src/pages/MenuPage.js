import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'

//IMPORT DATA
import { menus } from '../data';
import HeroMenu from '../components/mobile/HeroMenu';

gsap.registerPlugin(ScrollToPlugin);

const MenuPage = (match) => {

    const menufrontcoverRef = useRef(null);

    const {carte} = match.match.params;
    const slugMenu = [menus.find( slugMenu => slugMenu.name === carte)];

    useEffect(() => {
        document.body.classList.remove('bodynoscroll');
        gsap.to(window, {
            duration: 0, 
            scrollTo: {
                y: 0
            },
            ease: "none"
        });
    }, [])

    useEffect(() => {

        gsap.set(".menu-mb", {
            css: { visibility : "visible"},
            delay: .2
        })

        gsap.fromTo(".menu-frontcover", {
            autoAlpha: 1
        },
        {
            duration: 1,
            delay: .3,
            autoAlpha: 0
        });

    }, [])

    return (
        <div className="menu-mb">
            {slugMenu.map((menu, key)=>(
                <div key={key} className="carte">
                    <HeroMenu image={menu.bg} description={menu.description} name={menu.name} category={menu.category}/>
                    <div className="container content">
                        {menu.menu.map((item, key)=>(
                            <div key={key} className="item">
                            <p className="row title">{item.name}</p>
                            <p className="row detail">{item.info}</p>
                            <p className="row price">{item.price}</p>
                        </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MenuPage
