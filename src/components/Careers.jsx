import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Careers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeAccordion: null
        };
        this.toggleAccordion = this.toggleAccordion.bind(this);
    }

    toggleAccordion(index) {
        this.setState(prevState => ({
            activeAccordion: prevState.activeAccordion === index ? null : index
        }));
    }

    render() {
        return (
            <div>
                <title>Careers - DevsyTech IT Solutions & Services Company in Kenya</title>
                <section className="breadcrumb-area banner-6">
                    <div className="text-block">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 v-center">
                                    <div className="bread-inner">
                                        <div className="bread-menu wow fadeInUp" data-wow-delay=".2s">
                                            <ul>
                                                <li><NavLink to="/">Home</NavLink></li>
                                                <li><NavLink to="/careers">Career</NavLink></li>
                                            </ul>
                                        </div>
                                        <div className="bread-title wow fadeInUp" data-wow-delay=".5s">
                                            <h2>Devsy Tech Careers Portal</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="about-agencys pad-tb block-1 dark-bg3">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-lg-6">
                                <div className="common-heading text-l">
                                    <h2 className="mb20">Join Devsy Tech: Flourishing Careers, Thriving Culture</h2>
                                    <p>At Devsy Tech, we don't just offer jobs; we provide a vibrant ecosystem where innovation, collaboration, and growth intersect. Our commitment to fostering a dynamic workplace culture ensures that every member of our team feels empowered to unleash their full potential.</p>
                                    <p>With a legacy built on excellence and a future driven by innovation, Devsy Tech is more than just a workplace—it's a community of passionate individuals dedicated to pushing boundaries and shaping the future of technology.</p>
                                    <a href="#jobs" className="btn-main bg-btn2 lnk mt30">Explore Open Positions <i className="fa fa-chevron-right fa-icon"></i><span className="circle"></span></a>
                                </div>

                            </div>
                            <div className="col-lg-5">
                                <div className="image-block mb0 m-mt30">
                                    <img src="images/careers.gif" alt="Careers-about" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="service-block pad-tb bg-gradient7">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="common-heading ptag">
                                    <span>Welcome to Devsy Tech</span>
                                    <h2>Unlock Exclusive Benefits at Devsy Tech</h2>
                                    <p className="mb30">At Devsy Tech, we believe in creating an environment where every member feels valued, supported, and empowered to thrive. Join us and discover the perks of being part of our vibrant community.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-sm-6 mt30  wow fadeIn" data-wow-delay=".2s">
                                <div className="s-block wide-sblock">
                                    <div className="s-card-icon"><img src="images/icons/teama.svg" alt="service" className="img-fluid" /></div>
                                    <div className="s-block-content">
                                        <h4>In-House Expertise</h4>
                                        <p>Benefit from our dedicated team's reliable service and expertise, ensuring seamless collaboration and top-notch results.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay=".5s">
                                <div className="s-block wide-sblock">
                                    <div className="s-card-icon"><img src="images/icons/link.svg" alt="service" className="img-fluid" /></div>
                                    <div className="s-block-content">
                                        <h4>Trusted by People Like You</h4>
                                        <p>Join a community trusted by individuals like you, where your contributions are recognized and valued.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay=".8s">
                                <div className="s-block wide-sblock">
                                    <div className="s-card-icon"><img src="images/icons/tech.svg" alt="service" className="img-fluid" /></div>
                                    <div className="s-block-content">
                                        <h4>Complete Technical Competency</h4>
                                        <p>Experience comprehensive technical expertise that drives innovation and excellence in every project.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay="1.1s">
                                <div className="s-block wide-sblock">
                                    <div className="s-card-icon"><img src="images/icons/hi.svg" alt="service" className="img-fluid" /></div>
                                    <div className="s-block-content">
                                        <h4>Friendly & Cordial in Nature</h4>
                                        <p>Be a part of a friendly and cordial atmosphere that fosters collaboration, creativity, and positivity.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay="1.4s">
                                <div className="s-block wide-sblock">
                                    <div className="s-card-icon"><img src="images/icons/badge.svg" alt="service" className="img-fluid" /></div>
                                    <div className="s-block-content">
                                        <h4>Excellent Quality Delivered on Time</h4>
                                        <p>Experience a commitment to excellence with high-quality deliverables completed within deadlines.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay="1.7s">
                                <div className="s-block wide-sblock">
                                    <div className="s-card-icon"><img src="images/icons/tin.svg" alt="service" className="img-fluid" /></div>
                                    <div className="s-block-content">
                                        <h4>Effective & Continuous Communication</h4>
                                        <p>Benefit from transparent and continuous communication channels, ensuring clarity and alignment in every step.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contact-page pad-tb" id="jobs">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="common-heading ptag">
                                    <span>Jobs</span>
                                    <h2>Current Openings</h2>
                                    <p className="mb60">08 Sep 2020 Latest Jobs</p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div class="col-md-6 mt60">
                                <div class="tabs-layout">
                                    <ul class="nav nav-tabs" id="myTab1" role="tablist">
                                        <li class="nav-item">
                                            <a class="nav-link active" id="home-tab" data-bs-toggle="tab" href="#hometab" role="tab" aria-controls="home" aria-selected="true">Home</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="contact-tab" data-bs-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
                                        </li>
                                    </ul>
                                    <div class="tab-content" id="myTabContent1">
                                        <div class="tab-pane fade show active" id="hometab" role="tabpanel" aria-labelledby="home-tab">
                                            <h4>Tab 1</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                            <h4>Tab 2</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                            <h4>Tab 3</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >


                <div className="popup-modals">
                    <div className="modal" id="modalform">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <div className="common-heading">
                                        <h4 className="mt0 mb0">Apply Now</h4>
                                    </div>
                                    <button type="button" className="closes" data-bs-dismiss="modal">&times;</button>
                                </div>

                                <div className="modal-body pt40 pb60">
                                    <div className="form-block fdgn2">
                                        <form id="contact-form" method="post" action="#">
                                            <div className="fieldsets row">
                                                <div className="col-md-6 form-group"><input id="form_name" type="text" name="name" placeholder="Enter your name *" required="required" /> </div>
                                                <div className="col-md-6 form-group"><input id="form_email" type="email" name="email" placeholder="Enter your email *" required="required" /> </div>
                                            </div>
                                            <div className="fieldsets row">
                                                <div className="col-md-6 form-group"><input id="form_phone" type="text" name="phone" placeholder="Enter your Phone No *" required="required" /> </div>
                                                <div className="col-md-6 form-group">
                                                    <select id="form_need" name="need" required="required">
                                                        <option value="">Select Post</option>
                                                        <option value="Graphic Design">Graphic Design</option>
                                                        <option value="Web Design">Web Design</option>
                                                        <option value="App Design">App Design</option>
                                                        <option value="Other">Other</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="fieldsets form-group"> <textarea id="form_message" name="message" placeholder="Message *" rows="4" required="required"></textarea> </div>
                                            <div className="fieldsets- row">
                                                <div className="col-md-12 form-group">
                                                    <div className="custom-file">
                                                        <input type="file" className="custom-file-input mb0" id="customFile" />
                                                        <label className="custom-file-label">Choose file</label>
                                                    </div>
                                                    <p><small>Please upload maximum 5 files Only pdf, docx and doc files.</small></p>
                                                </div>
                                            </div>
                                            <div className="fieldsets mt20">
                                                <button type="submit" className="lnk btn-main bg-btn">Submit Application<span className="circle"></span></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Careers;
