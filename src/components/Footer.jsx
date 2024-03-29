import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <footer className="dark-footer dg-bg--1 pt60 nshape dark-footer-1">

                    <div className="container">
                        <div className="row justify-content-between" id="Smallfooter" >
                            <div className="col-lg-4 col-sm-6  ftr-brand-pp">
                                <a className="navbar-brand mb30 mt30" href="#"> <img src="images/logo.png" alt="Logo" width="200" /></a>
                                <p>DevsyTech is an award-winning, web and mobile app development company. We develop mobile apps and web apps focused on building products with the best technologies</p>
                                <div className="ff-social-icons mt30">
                                    <a href="javascript:void(0)" target="blank"><i className="fa fa-linkedin"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <h5 className="mb30 mt30">Contact Us</h5>
                                <ul className="footer-address-list ftr-details">
                                    <li>
                                        <span><i className="fa fa-envelope"></i></span>
                                        <p>Email <span> <a href="mailto:info@devsytech.com">info@devsytech.com</a></span></p>
                                    </li>
                                    <li>
                                        <span><i className="fa fa-phone"></i></span>
                                        <p>Phone <span> <a href="tel:+254745805901">+254745805901</a></span></p>
                                    </li>
                                    <li>
                                        <span><i className="fa fa-map-marker-alt"></i></span>
                                        <p>Address <span> We are Remote</span></p>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-sm-6">
                                <h5 className="mb30 mt30">Company</h5>
                                <ul className="footer-address-list link-hover">
                                    <li><NavLink to="/contact-us">Contact</NavLink></li>
                                    <li><NavLink to="about">About Us</NavLink></li>
                                    <li><NavLink to="/services">Our Services</NavLink></li>
                                    <li><NavLink to="/why-us">Why Us</NavLink></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-sm-6 footer-blog-">
                                <h5 className="mb30 mt30">Let's Achieve Together</h5>
                                <ul className="footer-address-list link-hover">
                                    <li><NavLink to="/contact-us">Hire Us</NavLink></li>
                                    <li><NavLink to="/careers">Join Us</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row end-footer-">
                            <div className="col-lg-6">
                                <div className="footer-copyrights-">
                                    <p>Copyright &copy; 2024 <NavLink to="./">DevsyTech</NavLink>. All rights reserved. </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <ul className="footer-link-- link-hover">
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/about">About Us</NavLink></li>
                                <li><NavLink to="/contact-us">Contact Us</NavLink></li>
                                <li><NavLink to="/services">Our Services</NavLink></li>
                                <li><NavLink to="/partnership">Partnership</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment >
        );
    }
}

export default Footer;
