import React from 'react';
import './Services.css';
import { MdLaptop } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { MdQuestionAnswer } from "react-icons/md";
import { MdFormatPaint } from "react-icons/md";
import { IoExtensionPuzzleSharp } from "react-icons/io5";
import { MdPhonelink } from "react-icons/md"

const Services = () => {
  return (
    <section className="services py-5">
      <div className="container">
        <h2 className="text-center mb-5">Our Services</h2>
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="service text-center">
              <div className="icon mb-3">
                <i className="fas fa-laptop fa-3x text-info"></i>
              </div>
              <h5 className="service-title"><MdLaptop className="icon-service"/>Web Design</h5>
              <p className="service-text">
                Design and Development of the Website of your Business.
              </p>
              <a className="text-infos" href="#">Learn More</a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="service text-center">
              <div className="icon mb-3">
                <i className="fas fa-shopping-cart fa-3x text-info"></i>
              </div>
              <h5 className="service-title"><MdShoppingCart className="icon-service"/>eCommerce</h5>
              <p className="service-text">
                Development of eCommerce website and web portal for shopping.
              </p>
              <a className="text-infos" href="#">Learn More</a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="service text-center">
              <div className="icon mb-3">
                <i className="fas fa-code fa-3x text-info"></i>
              </div>
              <h5 className="service-title"><MdQuestionAnswer className="icon-service"/>Web Applications</h5>
              <p className="service-text">
                Web app development, web design, and domain management.
              </p>
              <a className="text-infos" href="#">Learn More</a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="service text-center">
              <div className="icon mb-3">
                <i className="fas fa-paint-brush fa-3x text-info"></i>
              </div>
              <h5 className="service-title"><MdFormatPaint className="icon-service"/>Designing</h5>
              <p className="service-text">
                Design and development of Logo, Poster, and everything you need for business promotion.
              </p>
              <a className="text-infos" href="#">Learn More</a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="service text-center">
              <div className="icon mb-3">
                <i className="fas fa-pen-nib fa-3x text-info"></i>
              </div>
              <h5 className="service-title"><IoExtensionPuzzleSharp className="icon-service"/>Copy Writing</h5>
              <p className="service-text">
                Copywriting and content writing service, plagiarism checking, proofreading.
              </p>
              <a className="text-infos" href="#">Learn More</a>
            </div> 
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="service text-center">
              <div className="icon mb-3">
                <i className="fas fa-mobile-alt fa-3x text-info"></i>
              </div>
              <h5 className="service-title"><MdPhonelink className="icon-service"/>Mobile Applications</h5>
              <p className="service-text">
                Mobile Application development, for iOS and Android, launch of App, hosting and designing.
              </p>
              <a className="text-infos" href="#">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
