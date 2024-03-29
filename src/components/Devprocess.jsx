import React, { Component } from "react";

import { Link, NavLink } from "react-router-dom";

class Devprocess extends Component {

    render() {
        return (
            <div>
                <title>Development Process | Devsy Tech - Mobile Application Development, Web Design &amp; Web App Development</title>
                <section className="breadcrumb-area banner-2">
                    <div className="text-block">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 v-center">
                                    <div className="bread-inner">
                                        <div className="bread-menu">
                                            <ul>
                                                <li><Link to="./">Home</Link></li>
                                                <li><a href="#">Development Process</a></li>
                                            </ul>
                                        </div>
                                        <div className="bread-title">
                                            <h2>Development Process</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="service-block pad-tb">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="common-heading ptag">
                                    <span>Development Process</span>
                                    <h2>Our Web and App Design and Development Process</h2>
                                    <p>Our design and development process follows a structured approach to deliver high-quality products.</p>
                                </div>
                            </div>
                        </div>

                        <div class="row upset justify-content-center mt60">
                            <div class="col-lg-4 v-center order1">
                                <div class="image-block1">
                                    <img src="images/process/process-1.jpg" alt="Process" class="img-fluid" />
                                </div>
                            </div>
                            <div class="col-lg-7 v-center order2">
                                <div class="ps-block">
                                    <span>1</span>
                                    <h3>Requirement Gathering</h3>
                                    <p>This stage involves understanding client needs, defining project goals, and gathering requirements essential for project success.</p>
                                </div>
                            </div>
                        </div>

                        <div class="row upset justify-content-center mt60">
                            <div class="col-lg-7 v-center order2">
                                <div class="ps-block">
                                    <span>2</span>
                                    <h3>Design & Prototype</h3>
                                    <p>Designing mockups and prototypes to visualize the project's look and feel, as well as validate user experience.</p>
                                </div>
                            </div>
                            <div class="col-lg-4 v-center order1">
                                <div class="image-block1">
                                    <img src="images/process/process-2.jpg" alt="Process" class="img-fluid" />
                                </div>
                            </div>
                        </div>

                        <div class="row upset justify-content-center mt60">
                            <div class="col-lg-4 v-center order1">
                                <div class="image-block1">
                                    <img src="images/process/process-3.jpg" alt="Process" class="img-fluid" />
                                </div>
                            </div>
                            <div class="col-lg-7 v-center order2">
                                <div class="ps-block">
                                    <span>3</span>
                                    <h3>Development & Implementation</h3>
                                    <p>Building the project according to requirements, utilizing best practices and efficient coding standards.
                                        Deploying the web application to hosting servers, making it accessible over the internet. On the other hand deploying the mobile app involves making the app available for users to download and install on their mobile devices.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="row upset justify-content-center mt60">
                            <div class="col-lg-7 v-center order2">
                                <div class="ps-block">
                                    <span>4</span>
                                    <h3>Testing, Quality Assurance, Support and Maintainance</h3>
                                    <p>Thorough testing and quality assurance to ensure the project meets high standards of functionality and reliability.
                                    Providing ongoing support and maintenance to ensure the project continues to function effectively and stays up-to-date.
                                    </p>
                                </div>
                            </div>
                            <div class="col-lg-4 v-center order1">
                                <div class="image-block1">
                                    <img src="images/process/process-4.jpg" alt="Process" class="img-fluid" />
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </section>

            </div>
        );
    }
}

export default Devprocess;
