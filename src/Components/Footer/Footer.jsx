import React from 'react'
import "./Footer.css"
// import footer from '../../img/wave.png'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'

import Mail from '@iconscout/react-unicons/icons/uil-envelope'
import Phone from '@iconscout/react-unicons/icons/uil-phone'


const Footer = () => {
  return (
    <div className="footer" id="footer">
      {/* <img src={footer} alt="" style={{ width: '100%' }} className="footer-bacground" /> */}
      <div className="f-content" style={{ marginTop: '4rem' }}>
        <span style={{ fontweight: '500' }}><span>@RAJNI SAINI</span> Software Enginner At Kellton Tech Solutions Limited</span>
        <span style={{
          fontweight: '500', margintop: '6rem', display: 'flex', alignItems:
            'center', gap: '0.5rem  '
        }}><Mail color='white' size='2rem' /> sainirajni292000@gmail.com</span>
        <span style={{
          fontweight: '500', display: 'flex', alignItems:
            'center', gap: '0.5rem  '
        }}><Phone color='white' size='2rem' />9354409341</span>
        <div className="f-icon">
          <a href='https://github.com/rajni3541'>
            <Github color='white' size='3rem' />
          </a>
          <a href='https://www.linkedin.com/in/rajnisaini/'>
            <Linkedin color='white' size='3rem' />
          </a>
          <a href='https://www.instagram.com/rajnisaini_0209/'>
            <Insta color='white' size='3rem' />
          </a>

        </div>

      </div>
    </div>
  )
}

export default Footer