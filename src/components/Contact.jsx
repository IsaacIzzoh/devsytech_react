import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Contact = () => {
    const [data, setData] = useState({ name: "", email: "", mobile: "", requirement: "", message: "" });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Start loading

        try {
            await axios.post("http://localhost:3001/contact-us", data);
            console.log("Contact saved successfully");
            setSuccessMessage("Your message has been sent successfully!");
            // Reset the form if needed
            setData({ name: "", email: "", mobile: "", requirement: "", message: "" });
            setErrors({});
        } catch (error) {
            console.error("Error saving contact:", error);
            setSuccessMessage("");
            setErrors({ submit: "An error occurred while sending your message. Please try again later." });
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (

        <div>
            <title>Contact Us - Devsy Tech IT Solutions & Services Company in Kenya</title>
            <section className="breadcrumb-area banner-6">
                <div className="text-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 v-center">
                                <div className="bread-inner">
                                    <div className="bread-menu wow fadeInUp" data-wow-delay=".2s">
                                        <ul>
                                            <li><NavLink to="/">Home</NavLink></li>
                                            <li><a href="#">Contact</a></li>
                                        </ul>
                                    </div>
                                    <div className="bread-title wow fadeInUp" data-wow-delay=".5s">
                                        <h2>Contact</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-page pad-tb">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 v-center">
                            <div className="common-heading text-l">
                                <span>Contact Now</span>
                                <h2 className="mt0 mb0">Have Question? Write a Message</h2>
                                <p className="mb60 mt20">We will catch you as early as we receive the message</p>
                            </div>
                            <div className="form-block">
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="form-group col-sm-6">
                                            <input type="text" id="name" placeholder="Enter name" required="" name="name"
                                                data-error="Please fill Out" value={data.name}
                                                onChange={handleChange} />
                                            {data.name === "" && <div className="help-block with-errors">Please enter your name</div>}
                                        </div>
                                        <div className="form-group col-sm-6">
                                            <input type="email" id="email" placeholder="Enter email" required="" name="email" value={data.email}
                                                onChange={handleChange} />
                                            {data.email === "" && <div className="help-block with-errors">Please enter your email</div>}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-sm-6">
                                            <input type="text" name="mobile" placeholder="Enter mobile" required="" data-error="Please fill Out" value={data.mobile}
                                                onChange={handleChange} />
                                            {data.mobile === "" && <div className="help-block with-errors">Please enter your mobile number</div>}
                                        </div>
                                        <div className="form-group col-sm-6">
                                            <select id="Dtype" required="" name="requirement" value={data.requirement}
                                                onChange={handleChange}>
                                                <option value="">Select Requirement</option>
                                                <option value="web-development">Web Development</option>
                                                <option value="graphic-design">UI/UX Design</option>
                                                <option value="mobile-app-development">Mobile App Development</option>
                                                <option value="ecommerce-development">Ecommerce Development</option>
                                                <option value="other">Other</option>
                                            </select>
                                            {data.requirement === "" && <div className="help-block with-errors">Please select a requirement</div>}
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <textarea id="message" rows="5" placeholder="Enter your message" required=""
                                            name="message" value={data.message}
                                            onChange={handleChange}></textarea>
                                        {data.message === "" && <div className="help-block with-errors">Please enter your message</div>}
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn lnk btn-main bg-btn"
                                        disabled={loading || !data.name || !data.email || !data.mobile || !data.requirement || !data.message}
                                    >
                                        {loading ? (
                                            <>
                                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                               Loading...
                                            </>
                                        ) : (
                                            <>Submit<span className="circle"></span></>
                                        )}
                                    </button> <br />
                                    {successMessage && (
                                        <div className="alert alert-success" role="alert">
                                            {successMessage}
                                        </div>
                                    )}
                                    {errors.submit && (
                                        <div className="alert alert-danger" role="alert">
                                            {errors.submit}
                                        </div>
                                    )}
                                    <div className="clearfix"></div>
                                </form>


                            </div>
                        </div>
                        <div className="col-lg-5 v-center">
                            <div className="contact-details">
                                <div className="contact-card wow fadeIn" data-wow-delay=".2s">
                                    <div className="info-card v-center">
                                        <span><i className="fa fa-phone"></i> Phone:</span>
                                        <div className="info-body">
                                            <p>Assistance hours: Monday – Friday, 9 am to 5 pm</p>
                                            <a href="tel:+254745805901">(+254)745805901</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="email-card mt30 wow fadeIn" data-wow-delay=".5s">
                                    <div className="info-card v-center">
                                        <span><i className="fa fa-envelope"></i> Email:</span>
                                        <div className="info-body">
                                            <p>Our support team will get back to in 24-h during standard business hours.</p>
                                            <a href="mailto:info@devsytech.com">info@devsytech.com</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="skype-card mt30 wow fadeIn" data-wow-delay=".9s">
                                    <div className="info-card v-center">
                                        <span><i className="fa fa-globe"></i> Web:</span>
                                        <div className="info-body">
                                            <p>We Are Online 24-h</p>
                                            <NavLink to="/">www.devsytech.com</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            { /*<section className="contact-location pad-tb bglight">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="common-heading">
                                <span>Our Locations</span>
                                <h2>Our office</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center upset shape-numm">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.808351045742!2d36.780992714157286!3d-1.2892119359915362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f109996536c39%3A0x4eb6d6e1e16b4153!2siHub!5e0!3m2!1sen!2ske!4v1623882869479!5m2!1sen!2ske"
                            width="1600" height="450" style={{ border: '0' }} allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
    </section>*/}
        </div>
    );
}

export default Contact;
