import React from 'react';
import './Header.css';
import hero_1 from '../img/hero_1.jpg';
import { FaFacebookF ,FaTwitter,FaInstagram} from "react-icons/fa";


const Header = () => {
    return (
        <>
            <div className="container-fluid  border-bottom  top-bar bg-dark ">
                <div className='conacts'>
                    <span className='text-white mr-3'>Phone: </span>
                   <a href="#"  className="contact-link me-3">+91-9452052583</a>
                    <span className='text-white mr-3'>Email: </span>
                    <a href="#" className="contact-link me-3">contact@techsseract.com</a>
                </div>
                <div className='social-icons' >
                    <a href="#" className='social-link me-3'>< FaFacebookF /></a>
                    <a href="#"className='social-link me-3'><FaTwitter /></a>
                    <a href="#"className='social-link me-3'><FaInstagram /></a>
                </div>
            </div>

            <div className="nav-bar">
                <div className="text-black">
                    <h3>Techsseract.</h3>
                </div>
                <div className="navi_1">
                    <a href="#" className="navigate me-2">Home</a>
                    <a href="#" className="navigate me-2">Work</a>
                    <a href="#" className="navigate me-2">Services</a>
                    <a href="#" className="navigate">About</a>
                </div>
            </div>
            <div className="logo">
            <img src={hero_1}  className='img-logo' alt="logo"/>
          </div>
        

        </>
    );
};

export default Header;
