import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import filename from '../../img/WhatsApp Image 2022-01-11 at 3.33.56 AM.jpeg'
// import Crown from '../../img/crown.png'
// import glassesimoji from '../../img/glassesimoji.png'
// import FloatingDiv from '../FloatingDiv/FloatingDiv'
import Aos from 'aos'
import TypeIt from "typeit-react";
import { useEffect } from 'react'



const Intro = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div className="intro" data-aos="fade-up" id="home">
            <div className="i-left">
                <div className="i-name">
                    <TypeIt options={{
                        loop: false,
                        strings: "Hy! I am",
                        speed: 300,
                        waitUntilVisible: true,
                        cursor: false
                    }} />
                    <TypeIt options={{
                        startDelay: 3000,
                        loop: true,
                        strings: "Rajni Saini",
                        speed: 300,
                        waitUntilVisible: true,
                        cursor: false

                    }} />
                    <span className='skills'>Mern Stack Developer with high level
                        of Experience in full Stack development,
                        producting the quality work
                    </span>
                </div>

                <a href="#contact" style={{ textDecoration: 'none', textAlign: 'center' }} className="button i-button centered">Hire me</a>
                <div className="i-icons centered">
                    <a href='https://github.com/rajni3541'>
                        <img src={Github}
                            alt="" />
                    </a>
                    <a href='https://www.linkedin.com/in/rajnisaini/'>
                        <img src={LinkedIn}
                            alt="" />
                    </a>
                </div>
            </div>
            <div className="i-right">
                <img src={filename} alt="my profile" />
            </div>
        </div>
    )
}

export default Intro