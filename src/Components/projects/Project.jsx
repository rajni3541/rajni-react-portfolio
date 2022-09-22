import React from 'react'
import './Project.css'
import hearteEmoji from '../../img/heartemoji.png'
import Card from '../../Components/Card/Card'
// import Humble from '../../img/humble.png'
// import glassesimoji from '../../img/glassesimoji.png'
import Rajni from '../../img/Rajni (1).pdf'
import Aos from 'aos';
import { useEffect } from 'react'
import social from '../../img/social-media-post.png';
import commerce from '../../img/ecommerce-website.png';
import zee from '../../img/zee5-logo.jpg'
import port from '../../img/portfolio.jpeg'

const Project = () => {
    useEffect(() => { Aos.init(); }, []);
    return (
        <div className="project" data-aos="fade-up">
            {/* left side */}
            <div className="awesome" >
                <span>My Awesome Projects</span>
                <span className="technologies">My projects include HTML5, CSS, JavaScript, MongoDB, Express.js, React.js, Redux, Node.js</span>
                <a className="cv" href={Rajni} Download>
                    <button className='button s-button'>DOWNLOAD CV</button>
                </a>
            </div>
            {/* <div className='blur s-blurl' style={{ background: "#ABF1FF94" }}></div> */}
            {/* right side */}
            <div className='cards'>
                <div >
                    <Card
                        emoji={social}
                        heading={'Social-Media'}
                        details={"web app like instagram"}
                        url="https://social-media-frontend-4559yrz0h-rajni3541.vercel.app"
                        github="https://github.com/rajni3541/social-media"
                    />
                </div>
                {/* second card */}
                <div  >
                    <Card
                        emoji={commerce}
                        heading={'E-commerce'}
                        details={"web app for shopping"}
                        url="https://kellton-ecommerce1.vercel.app/"
                        github="https://github.com/rajni3541/kellton-ecommerce"
                    />
                </div>
                {/* THIRD card */}
                <div >
                    <Card
                        emoji={zee}
                        heading={'Zee5'}
                        details={"web app of movies "}
                        url=""
                        github="https://github.com/rajni3541/zee-frontend"
                    />
                </div>
                {/* Fourth Card */}
                <div >
                    <Card
                        emoji={port}
                        heading={'Protfolio'}
                        details={"online resume like web app"}
                        url=""
                        github="https://github.com/rajni3541/rajni-portfolio"
                    />
                </div>
                {/* FIFTH card */}
                <div >
                    <Card
                        emoji={hearteEmoji}
                        heading={'covid app'}
                        details={"web app of movies "}
                        url="https://social-media-frontend-4559yrz0h-rajni3541.vercel.app"
                        github="https://github.com/rajni3541/social-media"
                    />
                </div>
                {/* SIXTH card */}
                <div >
                    <Card
                        emoji={hearteEmoji}
                        heading={'beauty product site'}
                        details={"web app of movies "}
                        url="https://social-media-frontend-4559yrz0h-rajni3541.vercel.app"
                        github="https://github.com/rajni3541/social-media"
                    />
                </div>
            </div>
        </div>
    )
}

export default Project