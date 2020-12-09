import React from 'react'

import { ReactComponent as Fork } from '../../assets/svgs/fork.svg'

const Shortcut = () => {
    return (
        <div className="container sidebuttons shortcut index50">
            <div className="row">
                <div className="circle">
                    <Fork className="fork"/>
                </div>
            </div>
        </div>
    )
}

export default Shortcut
