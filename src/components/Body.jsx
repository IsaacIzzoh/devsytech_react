import React, { Component } from "react";

import { NavLink, Link } from "react-router-dom";

class Body extends Component {

    render() {
        return (
            <div>
                <title>DevsyTech IT Solutions & Services Company in Kenya</title>
                <section className="hero-section hero-bg-bg1 bg-gradient dark-bg1">
                    <div className="text-block">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 v-center">
                                    <div className="header-heading">
                                        <h1 className="wow fadeInUp" data-wow-delay=".2s">Empowering Businesses with IT Solutions</h1>
                                        <p className="wow fadeInUp" data-wow-delay=".4s">Our comprehensive suite of Web & Apps Development
                                            services is designed to equip businesses of all
                                            sizes with the tools they need to succeed in today's digital landscape.</p>
                                        <NavLink to="contact-us" className="a btn-main bg-btn lnk wow fadeInUp" data-wow-delay=".6s">Lets Discuss
                                            your new project <i className="fa fa-chevron-right fa-icon"></i><span
                                                className="circle"></span></NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 v-center">
                                    <div className="single-image wow fadeIn" data-wow-delay=".5s">
                                        <img src="images/home.gif" alt="web development" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about-sec-app pad-tb pt60">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="common-heading text-l">
                                    <h2 className="mb30"><span className="text-second text-bold">DevsyTech </span> Mobile App & Websites
                                        Development Company</h2>
                                    <p>
                                        We are a team of (Mobile and Web) software developers,UserExperienceDesigners and web content
                                        builders and curators and our aim is to start your journey from where you are to embracing and
                                        taking your
                                        opportunities in the digital space.

                                    </p>
                                    <p className="mt10"> <span className="text-bold">

                                        Comprehensive innovation advice and technical services that are tailored to meet your
                                        individual needs. </span></p>
                                </div>
                                <div className="cta-card mt40">
                                    <h3 className="mb30">Let's Start a New Project Together</h3>
                                    <NavLink to="contact-us" className="btn-outline lnk">Talk To Us<i
                                        className="fa fa-chevron-right fa-icon"></i><span className="circle"></span></NavLink>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="funfact">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                            <div className="funfct srcl1">
                                                <img src="images/icons/startup.svg" alt="devsytech  App Development Kenya" />
                                                <span className="services-cuntr counter">5</span><span className="services-cuntr">+</span>
                                                <p>Years Experience</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                            <div className="funfct srcl2">
                                                <img src="images/icons/team.svg" alt="devsytech  App Development Kenya" />
                                                <span className="services-cuntr counter">5</span><span className="services-cuntr">+</span>
                                                <p>Talented Squad</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                            <div className="funfct srcl3">
                                                <img src="images/icons/mobile.svg" alt="devsytech  App Development Kenya" />
                                                <span className="services-cuntr counter">50</span><span className="services-cuntr">+</span>
                                                <p>Webs & Apps Developed</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                            <div className="funfct srcl4">
                                                <img src="images/icons/computers.svg" alt="devsytech  App Development Kenya" />
                                                <span className="services-cuntr counter">100</span><span className="services-cuntr">%</span>
                                                <p>Projects Delivered</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                            <div className="funfct srcl5">
                                                <img src="images/icons/world.svg" alt="devsytech  App Development Kenya" />
                                                <span className="services-cuntr counter">2</span><span className="services-cuntr">+</span>
                                                <p>Countries Served</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                            <div className="funfct srcl1">
                                                <img src="images/icons/deal.svg" alt="devsytech  App Development Kenya" />
                                                <span className="services-cuntr counter">100</span><span className="services-cuntr">%</span>
                                                <p>Client Satisfaction</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="service-section-app pad-tb">
                    <div className="sctxt">Web & App Development</div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="common-heading ptag">
                                    <span>Service</span>
                                    <h2>Our Services</h2>
                                    <p className="mb30">We think big and have hands in all leading technology platforms to provide you wide
                                        array of services.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row upset">
                            <div className="col-lg-4 col-md-6 mt30 wow fadeIn" data-wow-delay="0.2s">
                                <div className="service-card-app hoshd">
                                    <h4>App Development</h4>
                                    <ul className="-service-list mt10">
                                        <li> <Link to="https://developer.android.com/">Android</Link > </li>
                                        <li> <Link to="https://developer.apple.com/xcode/">iPhone</Link > </li>
                                        <li> <Link to="https://flutter.dev/">Cross Platform</Link > </li>
                                    </ul>
                                    <div className="tec-icon mt30">
                                        <ul className="servc-icon-sldr">
                                            <li><Link to="#">
                                                <div className="img-iconbb"><img src="images/icons/android.svg" alt="img" /></div>
                                            </Link ></li>
                                            <li><Link to="#">
                                                <div className="img-iconbb"><img src="images/icons/apple.svg" alt="img" /></div>
                                            </Link ></li>
                                            <li><Link to="#">
                                                <div className="img-iconbb"><img src="images/icons/tablet.svg" alt="img" /></div>
                                            </Link ></li>
                                        </ul>
                                    </div>
                                    <p className="mt20">Elevate your digital presence with meticulously crafted apps for a seamless user experience.</p>
                                    <NavLink to="app-development" className="mt20 link-prbs">Read More <i
                                        className="fa fa fa-arrow-circle-right"></i></NavLink>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt30 wow fadeIn" data-wow-delay="0.5s">
                                <div className="service-card-app hoshd">
                                    <h4>Web Development</h4>
                                    <ul className="-service-list mt10">
                                        <li> <Link to="#">UI/UX</Link > </li>
                                        <li> <Link to="#">PHP</Link > </li>
                                        <li> <Link to="#">Java</Link > </li>
                                        <li> <Link to="#">WordPress</Link ></li>
                                    </ul>
                                    <div className="tec-icon mt30">
                                        <ul className="servc-icon-sldr">
                                            <li><Link to="#">
                                                <div className="img-iconbb"><img src="images/icons/ux.svg" alt="img" /></div>
                                            </Link ></li>
                                            <li><Link to="#">
                                                <div className="img-iconbb"><img src="images/icons/php.svg" alt="img" /></div>
                                            </Link ></li>
                                            <li><Link to="#">
                                                <div className="img-iconbb"><img src="images/icons/java.svg" alt="img" /></div>
                                            </Link ></li>
                                            <li><Link to="#">
                                                <div className="img-iconbb"><img src="images/icons/wordpress.svg" alt="img" /></div>
                                            </Link ></li>
                                        </ul>
                                    </div>
                                    <p className="mt20">Design and develop a creative website with our microscopic detailing and scrupulous
                                        strategies.</p>
                                    <NavLink to="web-development" className="mt20 link-prbs">Read More <i
                                        className="fa fa fa-arrow-circle-right"></i></NavLink>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt30 wow fadeIn" data-wow-delay="0.8s">
                                <div className="service-card-app hoshd">
                                    <h4>eCommerce Development</h4>
                                    <ul className="-service-list mt10">
                                        <li> <Link to="#">Magento</Link > </li>
                                        <li> <Link to="#">Shopify</Link > </li>
                                        <li> <Link to="#">Woo-commerce</Link ></li>
                                    </ul>
                                    <div className="tec-icon mt30">
                                        <ul className="servc-icon-sldr">
                                            <li><Link to="#">
                                                <div className="img-iconbb"><img src="images/icons/magento.svg" alt="img" /></div>
                                            </Link ></li>
                                            <li><Link to="#">
                                                <div className="img-iconbb"><img src="images/icons/shopify.svg" alt="img" /></div>
                                            </Link ></li>
                                            <li><Link to="#">
                                                <div className="img-iconbb"><img src="images/icons/woocommerce.svg" alt="img" /></div>
                                            </Link ></li>
                                        </ul>
                                    </div>
                                    <p className="mt20">Crafting Dynamic E-Commerce: Unleash growth with our detailed design and strategic development expertise.</p>
                                    <Link to="web-development" className="mt20 link-prbs">Read More <i
                                        className="fa fa fa-arrow-circle-right"></i></Link >
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="why-choos-lg pad-tb deep-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="common-heading text-l">
                                    <span>Why Choose Us</span>
                                    <h2 className="mb20">Why The DevsyTech is<span className="text-second text-bold"> Ranked Top</span>
                                        Among The Leading Web & App Development Companies</h2>
                                    <p>DevsyTech is ranked among the top app development agency in Kenya.</p>
                                    <div className="itm-media-object mt40 tilt-3d">
                                        <div className="media">
                                            <div className="img-ab- base" data-tilt="" data-tilt-max="20" data-tilt-speed="1000"><img
                                                src="images/icons/computers.svg" alt="icon" className="layer" /></div>
                                            <div className="media-body">
                                                <h4>Mobile Applications Development</h4>
                                                <p>We build android,mobile web and windows based plartform based plartform for personal
                                                    and business use.</p>
                                            </div>
                                        </div>
                                        <div className="media mt40">
                                            <div className="img-ab- base" data-tilt="" data-tilt-max="20" data-tilt-speed="1000"><img
                                                src="images/icons/worker.svg" alt="icon" className="layer" /></div>
                                            <div className="media-body">
                                                <h4>Web Applications Development</h4>
                                                <p>We build web sites and web applications that are responsive and use web standards and
                                                    google ranking friendly and anlytics to tell how your digital strategy is going..
                                                </p>
                                            </div>
                                        </div>
                                        <div className="media mt40">
                                            <div className="img-ab- base" data-tilt="" data-tilt-max="20" data-tilt-speed="1000"> <img
                                                src="images/icons/deal.svg" alt="icon" className="layer" /></div>
                                            <div className="media-body">
                                                <h4>User Experience Design</h4>
                                                <p>(UXD, UED or XD) is the process of enhancing user satisfaction by improving the
                                                    usability, accessibility, and pleasure provided in the interaction between the user
                                                    and the product..</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div data-tilt="" data-tilt-max="5" data-tilt-speed="1000" className="single-image bg-shape-dez wow fadeIn"
                                    data-wow-duration="2s"><img src="images/banner/about-company.gif" alt="company banner image" className="img-fluid" />
                                </div>
                                <p className="text-center mt30">Winners of Pivot east 2016 and 2018 (East and central Africa mobile
                                    development).</p>
                                <div className="cta-card mt60 text-center">
                                    <h3 className="mb20">Let's Start a <span className="text-second text-bold">New Project</span> Together</h3>
                                    <p>Comprehensive technical advice and products and services that are tailored to meet your
                                        individual and business needs. </p>
                                    <Link to="contact-us" className="btn-outline lnk mt30">Lets Work Together<i
                                        className="fa fa-chevron-right fa-icon"></i><span className="circle"></span></Link >
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="portfolio-section pad-tb">
                    <div className="container">
                        <div className="row justify-content-center ">
                            <div className="col-lg-8">
                                <div className="common-heading">
                                    <span>Our Work</span>
                                    <h2 className="mb20">Our Latest Work</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-sm-6 col mt40 wow fadeIn" data-wow-delay="0.2s">
                                <div className="isotope_item up-hor">
                                    <div className="item-image">
                                        <Link to="#"><img src="images/portfolio/app-img1.jpg" alt="image" className="img-fluid" /> </Link >
                                    </div>
                                    <div className="item-info-div shdo">
                                        <h4><Link to="https://theiplug.com/">PowerBank Rental</Link ></h4>
                                        <p>iOs, Android</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 mt40 wow fadeIn" data-wow-delay="0.4s">
                                <div className="isotope_item up-hor">
                                    <div className="item-image">
                                        <Link to="#"><img src="images/portfolio/app-img2.jpg" alt="image" className="img-fluid" /> </Link >
                                    </div>
                                    <div className="item-info-div shdo">
                                        <h4><Link to="http://mynetdok.com/">TeleMedicine App</Link ></h4>
                                        <p>Android, Ios</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 mt40 wow fadeIn" data-wow-delay="0.6s">
                                <div className="isotope_item up-hor">
                                    <div className="item-image">
                                        <Link to="#"><img src="images/portfolio/app-img3.jpg" alt="image" className="img-fluid" /> </Link >
                                    </div>
                                    <div className="item-info-div shdo">
                                        <h4><Link to="https://farmersprideafrica.com/">Agribusiness App</Link ></h4>
                                        <p>Android</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 mt40 wow fadeIn" data-wow-delay="0.8s">
                                <div className="isotope_item up-hor">
                                    <div className="item-image">
                                        <Link to="#"><img src="images/portfolio/app-img4.jpg" alt="image" className="img-fluid" /> </Link >
                                    </div>
                                    <div className="item-info-div shdo">
                                        <h4><Link to="https://play.google.com/store/apps/details?id=com.app.mjengoapp&hl=en">Building
                                            App</Link ></h4>
                                        <p>iOs, Android</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 mt40 wow fadeIn" data-wow-delay="1s">
                                <div className="isotope_item up-hor">
                                    <div className="item-image">
                                        <Link to="http://farmquipafrica.com"><img src="images/portfolio/app-img5.jpg" alt="image"
                                            className="img-fluid" /> </Link >
                                    </div>
                                    <div className="item-info-div shdo">
                                        <h4><Link to="#">Delivery Apps</Link ></h4>
                                        <p>Android, Ios</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 mt40 wow fadeIn" data-wow-delay="1.2s">
                                <div className="isotope_item up-hor">
                                    <div className="item-image">
                                        <Link to="https://tbldc.org/"><img src="images/portfolio/app-img6.jpg" alt="image"
                                            className="img-fluid" /> </Link >
                                    </div>
                                    <div className="item-info-div shdo">
                                        <h4><Link to="#">Booking,Travel</Link ></h4>
                                        <p>Android, Ios</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="clients-section-app pad-tb">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="common-heading text-w">
                                    <span>Our Technology</span>
                                    <h2 className="mb30">Some of our Clients and Partners</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="client-logoset">
                                    <ul className="row text-center clearfix apppg">
                                        <li className="col-lg-2 col-md-3 col-sm-4 col-6 mt30 wow fadeIn" data-wow-delay=".2s">
                                            <div className="brand-logo hoshd"><img src="images/client/DIGI-TECH-logo-large.png"
                                                alt="Mobile Application Kenya" className="img-fluid" /></div>
                                            <p>DIGI-TECH PHONES AND LAPTOP REPAIRS KENYA</p>
                                        </li>


                                        <li className="col-lg-2 col-md-3 col-sm-4 col-6 mt30 wow fadeIn" data-wow-delay=".8s">
                                            <div className="brand-logo hoshd"><img src="images/client/logo4.png"
                                                alt="Mobile Application Kenya" className="img-fluid" /></div>
                                            <p>Firebase</p>
                                        </li>
                                        <li className="col-lg-2 col-md-3 col-sm-4 col-6 mt30 wow fadeIn" data-wow-delay="1s">
                                            <div className="brand-logo hoshd"><img src="images/client/logo5.png"
                                                alt="Mobile Application Kenya" className="img-fluid" /></div>
                                            <p>Google Play</p>
                                        </li>
                                        <li className="col-lg-2 col-md-3 col-sm-4 col-6 mt30 wow fadeIn" data-wow-delay="1.2s">
                                            <div className="brand-logo hoshd"><img src="images/client/logo6.png"
                                                alt="Mobile Application Kenya" className="img-fluid" /></div>
                                            <p>App Store</p>
                                        </li>

                                        <li className="col-lg-2 col-md-3 col-sm-4 col-6 mt30 wow fadeIn" data-wow-delay="1.6s">
                                            <div className="brand-logo hoshd"><img src="images/client/logo8.png"
                                                alt="Mobile Application Kenya" className="img-fluid" /></div>
                                            <p>Google Cloud</p>
                                        </li>

                                        <li className="col-lg-2 col-md-3 col-sm-4 col-6 mt30 wow fadeIn" data-wow-delay="2.4s">
                                            <div className="brand-logo hoshd"><img src="images/client/logo12.png"
                                                alt="Mobile Application Kenya" className="img-fluid" /></div>
                                            <p>Stack Overflow</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="badges-section pad-tb">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="common-heading w-tdxt">
                                    <span>WE MAKE RELATIONSHIPS</span>
                                    <h2>Ranked as #1 Top Web & App Development Companies</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-6 wow fadeIn" data-wow-delay=".2s">
                                <div className="badges-content">
                                    <img src="images/about/badges-a.png" alt="Mobile Application Kenya" className="img-fluid" />
                                    <p>Android Development Industry Leader</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-6 wow fadeIn" data-wow-delay=".4s">
                                <div className="badges-content">
                                    <img src="images/about/badges-b.png" alt="Mobile Application Kenya" className="img-fluid" />
                                    <p>Ios Development Industry Leader</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-6 wow fadeIn" data-wow-delay=".6s">
                                <div className="badges-content">
                                    <img src="images/about/badges-c.png" alt="Mobile Application Kenya" className="img-fluid" />
                                    <p>Web Development Industry Leader</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-6 wow fadeIn" data-wow-delay=".8s">
                                <div className="badges-content">
                                    <img src="images/about/badges-d.png" alt="Mobile Application Kenya" className="img-fluid" />
                                    <p>User Experience Development Industry Leader</p>
                                </div>
                            </div>
                        </div>
                        <div className="-cta-btn mt70">
                            <div className="free-cta-title v-center wow fadeInUp" data-wow-delay="1s">
                                <p>We <span>Promise.</span> We <span>Deliver.</span></p>
                                <Link to="contact-us" className="btn-main bg-btn2 lnk">Let's Work Together<i
                                    className="fa fa-chevron-right fa-icon"></i><span className="circle"></span></Link >
                            </div>
                        </div>
                    </div>
                </section>
                <section className="work-category pad-tb">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="common-heading ptag">
                                    <span>We Have Worked Across Multiple Industries</span>
                                    <h2>Industries We Serve</h2>
                                    <p>Successfully delivered digital products in all these industries.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt30">
                            <div className="col-lg-3 col-sm-6 col-6 wow fadeIn" data-wow-delay="0.1s">
                                <div className="industry-workfor hoshd"><img src="images/icons/house.svg" alt="img" />
                                    <h6>Real estate</h6>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-6 wow fadeIn" data-wow-delay="0.3s">
                                <div className="industry-workfor hoshd"><img src="images/icons/travel-case.svg" alt="img" />
                                    <h6>Tour &amp; Travels</h6>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-6 wow fadeIn" data-wow-delay="0.5s">
                                <div className="industry-workfor hoshd"><img src="images/icons/video-tutorials.svg" alt="img" />
                                    <h6>Education</h6>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-6 wow fadeIn" data-wow-delay="0.7s">
                                <div className="industry-workfor hoshd"><img src="images/icons/taxi.svg" alt="img" />
                                    <h6>Transport</h6>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-6 wow fadeIn" data-wow-delay="0.9s">
                                <div className="industry-workfor hoshd"><img src="images/icons/event.svg" alt="img" />
                                    <h6>Event</h6>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-6 wow fadeIn" data-wow-delay="1.1s">
                                <div className="industry-workfor hoshd"><img src="images/icons/smartphone.svg" alt="img" />
                                    <h6>eCommerce</h6>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-6 wow fadeIn" data-wow-delay="1.3s">
                                <div className="industry-workfor hoshd"><img src="images/icons/joystick.svg" alt="img" />
                                    <h6>Game</h6>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-6 wow fadeIn" data-wow-delay="1.5s">
                                <div className="industry-workfor hoshd"><img src="images/icons/healthcare.svg" alt="img" />
                                    <h6>Healthcare</h6>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-6 wow fadeIn" data-wow-delay="1.7s">
                                <div className="industry-workfor hoshd"><img src="images/icons/money-growth.svg" alt="img" />
                                    <h6>Finance</h6>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-6 wow fadeIn" data-wow-delay="1.9s">
                                <div className="industry-workfor hoshd"><img src="images/icons/baker.svg" alt="img" />
                                    <h6>Restaurant</h6>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-6 wow fadeIn" data-wow-delay="2.1s">
                                <div className="industry-workfor hoshd"><img src="images/icons/mobile-app.svg" alt="img" />
                                    <h6>On-Demand</h6>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-6 wow fadeIn" data-wow-delay="2.3s">
                                <div className="industry-workfor hoshd">
                                    <h6>And Many More ...</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="testinomial-section-app bg-none pad-tb">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="common-heading text-l">
                                    <span>What our clients say about devsytech </span>
                                    <h2>Over 1200+ Satisfied Clients and Growing</h2>
                                </div>
                                <div className="review-title-ref mt40">
                                    <h4>Read More Reviews</h4>
                                </div>
                                <div className="row mt30 justify-content-center">
                                    <Link to="https://www.appfutura.com/developers/vincentmacharia" target="blank"
                                        className="wow fadeIn col-lg-4 col-4" data-wow-delay=".6s"><img
                                            src="images/about/appfutura-badge_review.jpg" alt="review" className="img-fluid" /></Link >
                                    <Link to="#" target="blank" className="wow fadeIn col-lg-4 col-4" data-wow-delay=".2s"><img
                                        src="images/about/reviews-icon-1.png" alt="review" className="img-fluid" /></Link >
                                    <Link to="https://clutch.co/profile/devsytech-" target="blank" className="wow fadeIn col-lg-4 col-4"
                                        data-wow-delay=".4s"><img src="images/about/reviews-icon-2.png" alt="review"
                                            className="img-fluid" /></Link >
                                    <Link to="https://www.goodfirms.co/company/devsytech-" target="blank"
                                        className="wow fadeIn col-lg-4 col-4" data-wow-delay=".6s"><img
                                            src="images/about/reviews-icon-3.png" alt="review" className="img-fluid" /></Link >



                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section className="app-cta pad-tb">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="common-heading text-w">
                                    <span>Let's work together</span>
                                    <h2>We Love to Listen to Your Requirements</h2>
                                    <Link to="contact-us" className="btn-main bg-btn4 lnk">GET STARTED<i
                                        className="fa fa-chevron-right fa-icon"></i><span className="circle"></span></Link >
                                    <p className="cta-call">Or call us now <Link to="tel:+254745805901"><i className="fa fa-phone"></i>
                                        (+254) 745805901</Link ></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shape shape-c1"></div>
                    <div className="shape shape-c2"></div>
                    <div className="shape shape-c3"></div>
                </section>
                <section className="our-office pad-tb">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="common-heading">
                                    <span>Our Locations</span>
                                    <h2>Our Office</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-sm-6 shape-loc wow fadeIn" data-wow-delay=".2s">
                                <div className="office-card hoshd">
                                    <div className="landscp">
                                        <img src="images/location/india-img.png" alt="location" className="img-fluid" />
                                    </div>
                                    <div className="info-text-div">
                                        <h4>Kenya</h4>
                                        <h6 className="mt10">Registered Office</h6>
                                        <p>6th Floor Senteu Plaza, Galana/Lenana Road, Nairobi, Kenya.</p>
                                        <ul className="-address-list mt10">
                                            <li><Link to="mailto:info@devsytech.com"><i className="fa fa-envelope"></i>
                                                info@devsytech.com</Link >
                                            </li>
                                            <li><Link to="tel:+254745805901"><i className="fa fa-phone"></i> +254745805901</Link > </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Body;
