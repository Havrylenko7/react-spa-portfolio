import React from 'react'
import own from './img/own.jpg'
import logoMail from './img/logo-mail.png'
import logoFacebook from './img/logo-facebook.png'
import logoLinkedin from './img/logo-linkedin.png'
//import logoGithub from './img/logo-github.png'
import logoTelegram from './img/logo-telegram.png'
import upbtn from './img/upbtn.png'
//import changeTheme from './img/changetheme.png'
import iconLogo from './img/icon-logo.png'
import dbtn from './img/download-btn.png'
import cvPdf from './img/cv-pdf.pdf'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import 'react-tippy/dist/tippy.css'
import {Tooltip} from 'react-tippy';

const scrollHome = () => window.scrollTo ({top: 0, behavior: "smooth"});

const scrollAboutMe = () => window.scrollTo ({top: 1030, behavior: "smooth"});

const scrollContact = () => window.scrollTo ({top: 1930, behavior: "smooth"});

function App() {
  return (
    <div className='main'>
        <div className='navbar'>
        <img className="navbar-logo" src={iconLogo} alt="0"/>
          <div className="navbar-container">
            <a className="navbar-container-buttons" onClick={scrollHome} id="home">Home</a>
            <a className="navbar-container-buttons" onClick={scrollAboutMe}>About me</a>
            <a className="navbar-container-buttons" onClick={scrollContact}>Contact</a>
            <a className="navbar-container-buttons" href={cvPdf}>CV</a>
            {/*<img className="navbar-container-icon" src={changeTheme} alt="4"/>*/}
          </div>
        </div>
        <div className="home">
         <p className="home-greeting">Hello. I'm Pavlo</p>              
         <p className="home-info">A Front-end Developer based in Kyiv</p> 
        </div>
        <div className="aboutme">
          <div className="aboutme-title">ABOUT ME</div> 
          <div className="aboutme-container">
            <img className="aboutme-container-own" src={own} alt="red"/>        
            <div className="aboutme-container-text">
              <p className="aboutme-container-text-quote">"Everything ingenious is simple"</p>
              <div className="aboutme-container-text-info">I’m a JS web developer with good knowledge of REACT, SCSS, HTML5, and other common front-end stuff. I started my way of programming more than a year ago and achieved some important skills over time in this area. I decided that it’s time to move on and I ready to work with commercial projects. Think we'd be a match?</div>
              <a className="aboutme-container-text-download" href={cvPdf}>View CV
                <img className="aboutme-container-text-download-icon" src={dbtn} alt="10"/>
              </a>
              <a className="aboutme-container-text-contactme" onClick={scrollContact}>Contact me</a>
            </div>
          </div>
        </div>
        <div className="contact">
          <p className="contact-title">CONTACT</p>
          <div className="contact-subtitle">Interested? Let's Get In Touch then!</div>
          <div className="contact-info">If you looking for a web developer, have any questions about me, or just want to say hello, feel free to contact me. I’m not really an active user of social pages but you can stay in touch with me by Telegram or email. You can find all references down below.</div>
          <div className="contact-footer">
            <div className="contact-footer-socials">
              <a>
                <Tooltip
                  title="Click to copy"
                  position="top"
                  trigger="mouseenter"
                  animation="fade"
                  followCursor="true">
                  <CopyToClipboard text="dendov@ukr.net">
                    <img className="contact-footer-socials-icons" id="email" src={logoMail} alt="5"/>                                    
                  </CopyToClipboard>
                </Tooltip>
              </a>
              <a href="https://t.me/PavloHav">
                <img className="contact-footer-socials-icons" src={logoTelegram} alt="9"/>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100004601791208">
                <img className="contact-footer-socials-icons" src={logoFacebook} alt="6"/>
              </a>
              <a href="https://www.linkedin.com/in/pavlo-havrylenko-505b58207/">
                <img className="contact-footer-socials-icons" src={logoLinkedin} alt="7"/>
              </a>
              {/*<a href="https://github.com/VAZ0N">
                <img className="contact-footer-socials-icons" src={logoGithub} alt="8"/>
              </a>*/}
            </div>
            <div className="contact-footer-upbtn">
              <img className="contact-footer-upbtn-icon" src={upbtn} alt="10" onClick={scrollHome}/>
            </div>
          </div>
        </div>
    </div>  
  );
}

export default App;