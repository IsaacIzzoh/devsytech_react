import React, { Component } from "react";

import { NavLink } from "react-router-dom";

class Team extends Component {

    render() {
        return (
            <div>
                <title>Our Team | Devsy Tech - Mobile Application Development, Web Design &amp; Web App Development.</title>
                <section className="breadcrumb-area banner-4">
                    <div className="text-block">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 v-center">
                                    <div className="bread-inner">
                                        <div className="bread-menu">
                                            <ul>
                                                <li><NavLink to="/">Home</NavLink></li>
                                                <li><a href="#">Team</a></li>
                                            </ul>
                                        </div>
                                        <div className="bread-title">
                                            <h2>Our Leaders</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*<section className="team bg-gradient99 pad-tb">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="common-heading ptag">
                                    <span>We Are Awesome</span>
                                    <h2>Our Managing Directors</h2>
                                    <p className="mb0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-sm-6">
                                <div className="full-image-card hover-scale">
                                    <div className="image-div"><a href="#"><img src="images/team/team-a.jpg" alt="team" className="img-fluid"/></a></div>
                                    <div className="info-text-block">
                                        <h4><a href="#">Sasa Smile</a></h4>
                                        <p>Company CEO</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="full-image-card hover-scale">
                                    <div className="image-div"><a href="#"><img src="images/team/team-b.jpg" alt="team" className="img-fluid"/></a></div>
                                    <div className="info-text-block">
                                        <h4><a href="#">Moana Smile</a></h4>
                                        <p>Company CTO</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="full-image-card hover-scale">
                                    <div className="image-div"><a href="#"><img src="images/team/team-c.jpg" alt="team" className="img-fluid"/></a></div>
                                    <div className="info-text-block">
                                        <h4><a href="#">Bhvika Smile</a></h4>
                                        <p>Company COO</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="team pad-tb deep-dark">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="common-heading ptag">
                                    <span>We Are Awesome</span>
                                    <h2>Our Team Members</h2>
                                    <p className="mb0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="full-image-card hover-scale">
                                    <div className="image-div"><a href="#"><img src="images/team/team-1.jpg" alt="team" className="img-fluid"/></a></div>
                                    <div className="info-text-block">
                                        <h4><a href="#">Shakita Daoust</a></h4>
                                        <p>UI/UX Designer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="full-image-card hover-scale">
                                    <div className="image-div"><a href="#"><img src="images/team/team-2.jpg" alt="team" className="img-fluid"/></a></div>
                                    <div className="info-text-block">
                                        <h4><a href="#">Gerard Licari</a></h4>
                                        <p>UI/UX Designer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="full-image-card hover-scale">
                                    <div className="image-div"><a href="#"><img src="images/team/team-3.jpg" alt="team" className="img-fluid"/></a></div>
                                    <div className="info-text-block">
                                        <h4><a href="#">Teisha Yearta</a></h4>
                                        <p>Web Developer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="full-image-card hover-scale">
                                    <div className="image-div"><a href="#"><img src="images/team/team-4.jpg" alt="team" className="img-fluid"/></a></div>
                                    <div className="info-text-block">
                                        <h4><a href="#">Herman Running</a></h4>
                                        <p>Web Developer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="full-image-card hover-scale">
                                    <div className="image-div"><a href="#"><img src="images/team/team-5.jpg" alt="team" className="img-fluid"/></a></div>
                                    <div className="info-text-block">
                                        <h4><a href="#">Cary Montgomery</a></h4>
                                        <p>Android/IOS Developer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="full-image-card hover-scale">
                                    <div className="image-div"><a href="#"><img src="images/team/team-6.jpg" alt="team" className="img-fluid"/></a></div>
                                    <div className="info-text-block">
                                        <h4><a href="#">Mervin Griego</a></h4>
                                        <p>Android/IOS Developer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="full-image-card hover-scale">
                                    <div className="image-div"><a href="#"><img src="images/team/team-7.jpg" alt="team" className="img-fluid"/></a></div>
                                    <div className="info-text-block">
                                        <h4><a href="#">Janna Rother</a></h4>
                                        <p>Graphic Desinger</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="full-image-card hover-scale">
                                    <div className="image-div"><a href="#"><img src="images/team/team-8.jpg" alt="team" className="img-fluid"/></a></div>
                                    <div className="info-text-block">
                                        <h4><a href="#">Bianca Goers</a></h4>
                                        <p>Graphic Desinger</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </section>*/}
            </div>
        );
    }
}

export default Team;
