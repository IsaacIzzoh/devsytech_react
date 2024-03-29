import React, { Component } from "react";

import { NavLink } from "react-router-dom";

class Services extends Component {

    render() {
        return (
            <div>
                <title>Our Services - DevsyTech IT Solutions & Services Company in Kenya</title>
                <section className="breadcrumb-area banner-2">
                    <div className="text-block">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 v-center">
                                    <div className="bread-inner">
                                        <div className="bread-menu">
                                            <ul>
                                                <li><NavLink to="/">Home</NavLink></li>
                                                <li><a href="#">Services</a></li>
                                            </ul>
                                        </div>
                                        <div className="bread-title">
                                            <h2>Our Cutting Edge Services</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="element-page pad-tb">
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
                                        <li> <a href="https://developer.apple.com/xcode/">iPhone</a> </li>
                                        <li> <a href="https://developer.android.com/">Android</a> </li>
                                        <li> <a href="https://flutter.dev/">Cross Platform</a> </li>
                                    </ul>
                                    <div className="tec-icon mt30">
                                        <ul className="servc-icon-sldr">
                                            <li><a href="#">
                                                <div className="img-iconbb"><img src="images/icons/android.svg" alt="img" /></div>
                                            </a></li>
                                            <li><a href="#">
                                                <div className="img-iconbb"><img src="images/icons/apple.svg" alt="img" /></div>
                                            </a></li>
                                            <li><a href="#">
                                                <div className="img-iconbb"><img src="images/icons/tablet.svg" alt="img" /></div>
                                            </a></li>
                                        </ul>
                                    </div>
                                    <p className="mt20">Crafting innovative mobile applications tailored to your business needs with meticulous attention
                                        to detail and strategic planning.</p>
                                    <NavLink to="/app-development" className="mt20 link-prbs">Read More <i
                                        className="fa fa fa-arrow-circle-right"></i></NavLink>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt30 wow fadeIn" data-wow-delay="0.5s">
                                <div className="service-card-app hoshd">
                                    <h4>Web Development</h4>
                                    <ul className="-service-list mt10">
                                        <li> <a href="#">UI/UX</a> </li>
                                        <li> <a href="#">PHP</a> </li>
                                        <li> <a href="#">Java</a> </li>
                                        <li> <a href="#">WordPress</a></li>
                                    </ul>
                                    <div className="tec-icon mt30">
                                        <ul className="servc-icon-sldr">
                                            <li><a href="#">
                                                <div className="img-iconbb"><img src="images/icons/ux.svg" alt="img" /></div>
                                            </a></li>
                                            <li><a href="#">
                                                <div className="img-iconbb"><img src="images/icons/php.svg" alt="img" /></div>
                                            </a></li>
                                            <li><a href="#">
                                                <div className="img-iconbb"><img src="images/icons/java.svg" alt="img" /></div>
                                            </a></li>
                                            <li><a href="#">
                                                <div className="img-iconbb"><img src="images/icons/wordpress.svg" alt="img" /></div>
                                            </a></li>
                                        </ul>
                                    </div>
                                    <p className="mt20">Design and develop a creative website with our microscopic detailing and scrupulous
                                        strategies.</p>
                                    <NavLink to="/web-development" className="mt20 link-prbs">Read More <i
                                        className="fa fa fa-arrow-circle-right"></i></NavLink>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt30 wow fadeIn" data-wow-delay="0.8s">
                                <div className="service-card-app hoshd">
                                    <h4>eCommerce Development</h4>
                                    <ul className="-service-list mt10">
                                        <li> <a href="#">Magento</a> </li>
                                        <li> <a href="#">Shopify</a> </li>
                                        <li> <a href="#">Woo-commerce</a></li>
                                    </ul>
                                    <div className="tec-icon mt30">
                                        <ul className="servc-icon-sldr">
                                            <li><a href="#">
                                                <div className="img-iconbb"><img src="images/icons/magento.svg" alt="img" /></div>
                                            </a></li>
                                            <li><a href="#">
                                                <div className="img-iconbb"><img src="images/icons/shopify.svg" alt="img" /></div>
                                            </a></li>
                                            <li><a href="#">
                                                <div className="img-iconbb"><img src="images/icons/woocommerce.svg" alt="img" /></div>
                                            </a></li>
                                        </ul>
                                    </div>
                                    <p className="mt20">Design and develop a creative website with our microscopic detailing and scrupulous
                                        strategies.</p>
                                    <NavLink to="/web-development" className="mt20 link-prbs">Read More <i
                                        className="fa fa fa-arrow-circle-right"></i></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Services;
