import React, { useEffect, useState } from 'react';

//IMPORT COMPONENTS
import HeroHome from '../components/mobile/HeroHome';
import CallToAction from '../components/mobile/CallToAction';
import MenuList from '../components/mobile/MenuList';
import Footer from '../components/mobile/Footer';
import Address from '../components/mobile/Address';
import Time from '../components/mobile/Time';

const HomePage = () => {

    //STATE LIST-MENU
    const [ listMenu, setListMenu ] = useState(false);

    const handleOpenMenu = () => {
        setListMenu(!listMenu);
    }

    useEffect(() => {
        listMenu ? document.body.classList.add('bodynoscroll') : document.body.classList.remove('bodynoscroll');
    }, [listMenu])

    return (
        <div className="homepage page">
            <HeroHome />
            <CallToAction handleOpen={handleOpenMenu}/>
            { listMenu &&
                <MenuList handleOpen={handleOpenMenu}/>
            }
            <Address />
            <Time />
        </div>
    )
}

export default HomePage

