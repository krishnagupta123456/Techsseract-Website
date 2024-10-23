import React from 'react';
import './Header.css';
import hero_1 from '../img/hero_1.jpg';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import ReactTypingEffect from 'react-typing-effect';

const Header = () => {
    return (
        <>
            <div className="section border-bottom top-bar">
                <div className='head'>
                    <div className='conacts'>
                        <span className='text-white mr-3'>Phone: </span>
                        <a href="#" className="contact-link me-3">+91-9452052583</a>
                        <span className='text-white mr-3'>Email: </span>
                        <a href="#" className="contact-link me-3">contact@techsseract.com</a>
                    </div>
                    <div className='social-icons'>
                        <a href="#" className='social-link me-3'><FaFacebookF /></a>
                        <a href="#" className='social-link me-3'><FaTwitter /></a>
                        <a href="#" className='social-link me-3'><FaInstagram /></a>
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-expand-md navbar-light bg-white">
                <div className="container">
                    <a className="navbar-brand text-black" href="#">
                        <h3>Techsseract.</h3>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto navi_1">
                            <li className="nav-item">
                                <a className="nav-link navigate" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link navigate" href="#">Work</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link navigate" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link navigate" href="#">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="logo-container">
                <img src={hero_1} className="img-logo" alt="logo" />
                <div className="typing-effect">
                    We Love To Build <span></span>
                    <ReactTypingEffect
                        text={[" Web Apps", " WordPress", " Mobile Apps"]}
                        speed={30}
                        eraseSpeed={30}
                        typingDelay={1500}
                        eraseDelay={3000}
                    />
                    <p className='lead-name md-5'> Adding a New Dimension to your Technology!</p>
                    <div>
                        <a href="" className='btn btn-md rounded-pill'>Watch Video</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;