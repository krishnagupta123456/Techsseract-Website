import React from 'react';
import './WorkSection.css';
import about_1 from '../img/about_1.jpg';
import { FaCheck } from "react-icons/fa6";
import { TbTool } from "react-icons/tb";

const WorkSection = () => {
  return (
    <>
      {/* First Section */}
      <div className="container py-5">
            <div className="row">
                {/* Innovate Section */}
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100 text-center border-0">
                        <div className="card-body">
                            <h3 className="card-title">Innovate</h3>
                            <p className="card-text">Your growing business</p>
                            <ul className="list-unstyled">
                                <li><FaCheck className="icon-check" /> Customer Experience</li>
                                <li><FaCheck className="icon-check"/> Product Management</li>
                                <li><FaCheck className="icon-check"/> Proof of Concept</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Create Section */}
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100 text-center border-0">
                        <div className="card-body">
                            <h3 className="card-title">Create</h3>
                            <p className="card-text">A new dimension for your business</p>
                            <ul className="list-unstyled">
                                <li><FaCheck className="icon-check"/> Web Design</li>
                                <li><FaCheck className="icon-check"/> Consultancy</li>
                                <li><FaCheck className="icon-check"/>Web & App Development</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Scale Section */}
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100 text-center border-0">
                        <div className="card-body">
                            <h3 className="card-title">Scale</h3>
                            <p className="card-text">Your current business needs</p>
                            <ul className="list-unstyled">
                                <li><FaCheck className="icon-check"/> New Website</li>
                                <li><FaCheck className="icon-check"/>Web Designing</li>
                                <li><FaCheck className="icon-check"/>Logo and Design</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      {/* Second Section */}
      <section className="work-section text-light py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
              <img src={about_1} alt="Work Environment" className="img-fluid" />
            </div>
            <div className="col-12 col-lg-6">
              <div className="row">
                <div className="col-12 col-md-6 mb-3">
                  <h4><TbTool  className='icons-main'/>Strategy</h4>
                  <p>Strategy Development for your business promotion.</p>
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <h4>Art Direction</h4>
                  <p>Graphics Design and Development.</p>
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <h4>Web Development</h4>
                  <p>Website and Web App Development.</p>
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <h4>Copywriting</h4>
                  <p>Copywriting and Content Writing service.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkSection;
