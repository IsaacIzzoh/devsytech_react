import React, { Component } from "react";

import { NavLink } from "react-router-dom";

class Clients extends Component {

    render() {
        return (
            <div>
                <title>Clients - Devsy Tech IT Solutions & Services Company in Kenya</title>
                <section className="breadcrumb-area banner-2">
                    <div className="text-block">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 v-center">
                                    <div className="bread-inner">
                                        <div className="bread-menu">
                                            <ul>
                                                <li><NavLink to="/">Home</NavLink></li>
                                                <li><a href="#">Clients</a></li>
                                            </ul>
                                        </div>
                                        <div className="bread-title">
                                            <h2>Our Clients</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about-sec classic-bg1 pad-tb">
                    <div className="container">
                        <div className="row justify-content-center text-center">
                            <div className="col-lg-10">
                                <div className="common-heading">
                                    <span>We Are Creative Agency</span>
                                    <h1 className="mb30">Clients We Work For</h1>
                                    <div className="row mt40">
                                        <div className="col-lg-12">
                                            <div className="clients-logos text-center col-12">
                                                <ul className="row text-center clearfix">
                                                    <li className="col-lg-3 col-md-3 col-sm-4 col-6">
                                                        <div className="brand-logo"><img src="images/client/DIGI-TECH-logo-large.png" alt="clients" className="img-fluid" /></div>
                                                        <a href="http://" target="_blank" rel="noopener noreferrer">DIGI-TECH , KENYA</a>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <h2>Our Specialization</h2>
                                    <p>Welcome to Devsy Tech, a leading App Development Agency. We specialize in designing and developing custom mobile apps that help businesses and organizations stand out in the crowded marketplace. Our team of experienced developers, designers, and project managers are dedicated to creating user-friendly, high-quality, and innovative apps that will help our clients achieve their goals.</p>
                                    <h2>Understanding Our Clients</h2>
                                    <p>At Devsy Tech, we understand that every client is unique and has different requirements for their app. That's why we take the time to understand our client's goals, target audience, and market before we start the development process. Our team has extensive experience in developing apps for various industries, including healthcare, education, e-commerce, entertainment, and many others.</p>
                                    <h2>Cutting-Edge Technologies</h2>
                                    <p>We use cutting-edge technologies and methodologies to ensure that the apps we create are not only functional and user-friendly but also scalable, secure, and future-proof. Our development process is transparent, and we keep our clients informed at every step, from planning to launch. Our team is dedicated to delivering high-quality work, on time and within budget.</p>
                                    <h2>Maintenance and Support</h2>
                                    <p>In addition to our app development services, we also offer app maintenance, updates, and support. Our goal is to ensure that our clients have the resources they need to continue to grow and succeed in the digital world.</p>
                                    <h2>Get in Touch</h2>
                                    <p>So, if you're looking to develop a new app or improve an existing one, look no further. Contact us today to schedule a consultation and see how Devsy Tech can help you achieve your goals.</p>
                                    <p>#AppDevelopment #CustomApps #MobileApps #InnovativeApps #DevsyTech #BusinessSolutions #UserFriendlyApps #ScalableApps #SecureApps #FutureProofApps #TransparentDevelopment #HighQualityWork #OnTimeDelivery #BudgetFriendly #AppMaintenance #Updates #Support #GrowAndSucceed #DigitalWorld</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="clients-section- classic-bg2 pad-tb">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="common-heading ptag">
                                    <h2 className="mb30">Brands</h2>
                                    <p>We give your brand a digital identity.</p>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </section>

                <section className="clients-section- classic-bg3 pad-tb light-dark">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="common-heading ptag">
                                    <h2 className="mb30">Start-Ups</h2>
                                    <p>We work with startups to bring their idea to life</p>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </section>

                <section className="clients-section- classic-bg5 pad-tb">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="common-heading ptag">
                                    <h2 className="mb30">Enterprises</h2>
                                    <p>We work with enterprises to bring custom made softwares and applications to fit their unique needs</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </section>
                <section className="cta-area pad-tb">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="common-heading">
                                    <span>Let's work together</span>
                                    <h2>We Love to Listen to Your Requirements</h2>
                                    <NavLink to="/contact-us" className="btn-outline">Estimate Project <i className="fa fa-chevron-right fa-icon"></i></NavLink>
                                    <p className="cta-call">Or call us now <a href="tel:+254745805901"><i className="fa fa-phone"></i> (+254) 745805901</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shape shape-a1"><img src="images/shape/shape-3.svg" alt="shape"/></div>
                    <div className="shape shape-a2"><img src="images/shape/shape-4.svg" alt="shape"/></div>
                    <div className="shape shape-a3"><img src="images/shape/shape-13.svg" alt="shape"/></div>
                    <div className="shape shape-a4"><img src="images/shape/shape-11.svg" alt="shape"/></div>
                </section>
            </div>
        );
    }
}

export default Clients;
