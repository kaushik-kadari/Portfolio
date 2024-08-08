import { GiCalendar, GiClawSlashes, GiMailbox, GiMayanPyramid, GiPhone } from "react-icons/gi";
import { FaEnvelope, FaGithub, FaLinkedin, FaLocationArrow } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { FaCode, FaLocationDot } from "react-icons/fa6";
import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";

const Aside = () => {
  const [isvisible, setIsVisible] = useState(false);

  const showSidebar = () => {
    setIsVisible(!isvisible);
     const hamburger_menu = document.querySelector('.hamburger_menu')
      hamburger_menu.style.display = 'flex'
  };

  const hideSidebar = () => {
    setIsVisible(!isvisible);
    const hamburger_menu = document.querySelector('.hamburger_menu')
      hamburger_menu.style.display = 'none'
  };

  return (
    <aside className="sidebar">
        <div className="sidebar-info">
          <figure className="avatar-box">
            <img
              src="/images/LinkedinDp1.png"
              alt="Koushik Kadari"
              width="80"
            />
          </figure>

          <div className="info-content">
            <h1 className="name" title="Richard hanrick">
              Koushik Kadari
            </h1>

            <p className="title">Web developer</p>
          </div>

          { !isvisible && 
            <button className="info_more-btn" data-sidebar-btn onClick={showSidebar}>
              <span>Show Contacts</span>

              <GiClawSlashes />
            </button>
          }

          <ul className={ "hamburger_menu" }>
            <li onClick={hideSidebar} className="hamburger_close"> <IoCloseSharp size={35}/></li>
            <li><a href="mailto:kaushikkadari456@gmail.com" target="_blank" rel="noreferrer"><span><FaEnvelope/></span> Email</a></li>
            <li><a href="tel:+917671898733" target="_blank" rel="noreferrer"><span><GiPhone/></span> Phone</a></li>
            <li><a href="https://www.linkedin.com/in/kaushik-kadari/" target="_blank" rel="noreferrer"><span><FaLinkedin/></span> Linkedin</a></li>
            <li><a href="https://github.com/kaushik-kadari" target="_blank" rel="noreferrer"><span><FaGithub/></span> Github</a></li>
            <li><a href="https://leetcode.com/kaushik_kadari" target="_blank" rel="noreferrer"><span><FaCode/></span> Leetcode</a></li>
          </ul>
        </div>

        <div className="sidebar-info_more">
          <div className="separator"></div>

          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
                <FaEnvelope/>
                
              </div>

              <div className="contact-info">
                <p className="contact-title">Email</p>

                <a href="mailto:kaushikkadari456@gmail.com" className="contact-link">
                  kaushikkadari456@gmail.com
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <GiPhone/>
              </div>

              <div className="contact-info">
                <p className="contact-title">Phone</p>

                <a href="tel:+917671898733" className="contact-link">
                  +91 7671898733
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
              <FaGithub />
               
              </div>

              <div className="contact-info">
                <p className="contact-title">Github</p>

                <a href="https://github.com/kaushik-kadari" className="contact-link">Koushik Kadari</a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
              <FaLinkedin />
               
              </div>

              <div className="contact-info">
                <p className="contact-title">Linkedin</p>

                <a href="https://www.linkedin.com/in/kaushik-kadari" className="contact-link">Koushik Kadari</a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
              <FaCode />
               
              </div>

              <div className="contact-info">
                <p className="contact-title">Leetcode</p>

                <a href="https://www.leetcode.com/kaushik_kadari" className="contact-link">Koushik Kadari</a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <FaLocationDot/>
                <ion-icon name="location-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Location</p>

                <address>Hyderabad, Telangana, India</address>
              </div>
            </li>
          </ul>

          <div className="separator"></div>

          <ul className="social-list">
            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </aside>
  )
}

export default Aside