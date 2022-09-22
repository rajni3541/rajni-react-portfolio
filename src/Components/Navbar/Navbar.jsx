import React, { useState } from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import { useContext } from 'react'
import { themeContext } from '../../App'
import hamburger from '../../img/bars-solid.svg';
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { dark } = useContext(themeContext)
    return (
        <div className="n-wrapper">
            <div id='header-name'>
                <p className='header-name'>Rajni Saini</p>
                <Toggle />
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: 'none' }}>
                        <li><a style={{ color: !dark && '#000' }} href="#home">Home</a></li>
                        <li><a style={{ color: !dark && '#000' }} href="#experience">Experience</a></li>
                        <li><a style={{ color: !dark && '#000' }} href="#portfolio">Portfolio</a></li>
                    </ul>

                </div>
                <a href="#footer" style={{ textDecoration: 'none' }} className="button">Contact Me</a>
            </div>
            <div className='menu-btn' onClick={() => setOpen(true)}>
                <img src={hamburger} alt="hamburger" className={dark && 'dark'} />
            </div>
            {open && <div className='menu'>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li onClick={() => setOpen(false)}>close</li>
                </ul>
            </div>}
        </div>

    )
}

export default Navbar