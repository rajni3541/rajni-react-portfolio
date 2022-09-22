import React from 'react'
import './Experience.css'
import Aos from 'aos'
import { useEffect } from 'react'
export const Experience = () => {
    useEffect(() => {Aos.init()},[]);
    return (
        <div style={{marginTop: '5rem'}} id="experience" className="experience" data-aos="fade-up">
            <div className="achievement">
                <div className="circle">1+</div>
                <span>Years</span>
                <span>Experience</span>
            </div>
            <div className="achievement">
                <div className="circle">1+</div>
                <span>Completed</span>
                <span>Projects</span>
            </div>
            <div className="achievement">
                <div className="circle">1+</div>
                <span>Companies</span>
                <span>Work</span>
                
            </div>




            
        </div>

    )
}
