import React, { Component } from "react";

import { NavLink } from "react-router-dom";

class About extends Component {

    render() {
        return (
            <div>
                <title>About Us - DevsyTech IT Solutions & Services Company in Kenya</title>
                
                <section className="breadcrumb-area banner-1" data-background="images/banner/9.jpg">
                    <div className="text-block">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 v-center">
                                    <div className="bread-inner">
                                        <div className="bread-menu">
                                            <ul>
                                                <li><a href="index.html">Home</a></li>
                                                <li><a href="#">About Us</a></li>
                                            </ul>
                                        </div>
                                        <div className="bread-title">
                                            <h2>About Company</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about-agency pad-tb block-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 v-center">
                                <div className="about-image">
                                    <img src="images/about/company-about.png" alt="about us" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="common-heading text-l ">
                                    <span>About Us</span>
                                    <h2>DevsyTech</h2>
                                    <p>DevsyTech is an award-winning, web and mobile app development company.
                                        We develop mobile apps and web apps focused on building products with the best technologies. We
                                        work on the entire application stack i.e. backend with API, app, and Frontend. Our mobile app
                                        development service is backed by business-centric consultancy and unmatched support.
                                    </p>
                                    <p>DevsyTech is known for its agility, partner approach, innovation, and technical
                                        excellence.</p>
                                </div>
                                <div className="row in-stats small about-statistics">
                                    <div className="col-lg-4 col-sm-4">
                                        <div className="statistics">
                                            <div className="statnumb counter-number">
                                                <span className="counter">200</span>
                                                <p>Happy Clients</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-4">
                                        <div className="statistics">
                                            <div className="statnumb">
                                                <span className="counter">40</span><span>k</span>
                                                <p>Hours Worked</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-4">
                                        <div className="statistics mb0">
                                            <div className="statnumb counter-number">
                                                <span className="counter">400</span>
                                                <p>Projects Done</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="why-choose pad-tb">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="common-heading">
                                    <span>We Are Awesome</span>
                                    <h2 className="mb30">Why Choose Us</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row upset">
                            <div className="col-lg-3 col-sm-6 mt30">
                                <div className="s-block up-hor">
                                    <div className="s-card-icon"><img src="images/icons/research.svg" alt="service" className="img-fluid" /></div>
                                    <h4>Customer-centric</h4>
                                    <p>We believe in investing in our relationships with our clients. It helps us stand out of the crowd
                                        and offer top-notch services to businesses. Our team of developers gives attention to every
                                        minute requirement of the client to come up with the best solutions.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 mt30">
                                <div className="s-block up-hor">
                                    <div className="s-card-icon"><img src="images/icons/chat.svg" alt="service" className="img-fluid" /></div>
                                    <h4>Unrivaled Business Solutions</h4>
                                    <p>We hold a prestigious position in the industry for helping businesses to grow and expand in no
                                        time. We are backed by a team of talented and skilled professionals capable of delivering the
                                        best solution in the industry.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 mt30">
                                <div className="s-block up-hor">
                                    <div className="s-card-icon"><img src="images/icons/monitor.svg" alt="service" className="img-fluid" /></div>
                                    <h4>On-Time Delivery</h4>
                                    <p>One thing that we don’t compromise with are the deadlines; we understand the time and efforts of
                                        our customers. Our dedicated team works over the project to deliver them within the given
                                        deadline..</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 mt30">
                                <div className="s-block up-hor">
                                    <div className="s-card-icon"><img src="images/icons/trasparency.svg" alt="service" className="img-fluid" />
                                    </div>
                                    <h4>Result Oriented</h4>
                                    <p>Unlike other companies, we are fueled with people working around the clock to deliver beyond
                                        client’s expectations. We not only focus on the projects but try to look at the client’s goal,
                                        intention and most importantly dream behind it..</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default About;
