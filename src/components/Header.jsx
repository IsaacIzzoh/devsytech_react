import React, {  useState, Component } from "react";
import { NavLink } from "react-router-dom";
import ProgressBar from "./ProgressBar";

class CollapsibleNavItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    toggleCollapse = () => {
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen,
        }));
    };

    render() {
        const { title, links, closeMobileNav } = this.props;
        const { isOpen } = this.state;

        return (
            <li className="">
                <a href="#" className="menu-links" onClick={this.toggleCollapse}>
                    {title}
                    <i style={{ float: 'right' }} className={`fa ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                </a>
                <ul className="ul_drop" style={{ display: isOpen ? 'block' : 'none' }}>
                    {links.map((link) => (
                        <li key={link.to}>
                            <NavLink to={link.to} onClick={closeMobileNav}>{link.label}</NavLink>
                        </li>
                    ))}
                </ul>
            </li>
        );
    }
}

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobileNavOpen: false,
            startProgress: false,
        };
    }

    toggleMobileNav = () => {
        this.setState((prevState) => ({
            isMobileNavOpen: !prevState.isMobileNavOpen,
        }));
    };

    closeMobileNav = () => {
        this.setState({
            isMobileNavOpen: false,
        });
    };

    handleClick = () => {
        this.setState({
            startProgress: true,
        });
        // Add any other logic you want to execute onClick
    };

    render() {
            
        const { isMobileNavOpen, startProgress } = this.state;

        const navItems = [
            {
                title: "About Devsy Tech",
                links: [
                    { to: "about", label: "About Us" },
                    { to: "why-us", label: "Why Us" },
                    { to: "team", label: "Our Team" },
                    { to: "mission-vision", label: "Mission & Vision" },
                    { to: "development-process", label: "Development Process" },
                    { to: "clients", label: "Our Clients" },
                ],
            },
            // Add more nav items as needed
        ];

        
        return (
            <React.Fragment>
                 <ProgressBar startProgress={false} />
                <header className={`header-pr nav-bg-b main-header navfix fixed-top menu-white ${isMobileNavOpen ? 'nav-open' : ''}`}>
                    <div className="container-fluid m-pad">
                        <div className="menu-header">
                            <div className="dsk-logo" style={{ borderBottom: 'none' }}><NavLink className="nav-brand" to="./">
                                <img src="images/logo.png" style={{ borderBottom: 'none' }} alt="Logo" className="mega-white-logo" />
                                <img src="images/logo.png" style={{ borderBottom: 'none' }} alt="Logo" className="mega-darks-logo" />
                            </NavLink>
                            </div>
                            <div className="custom-nav" role="navigation">
                                <ul className="nav-list">


                                    <li>
                                        <NavLink to="/" className="menu-links text-black"  onClick={this.handleClick}> Home</NavLink>
                                    </li>
                                    <li className="sbmenu">
                                        <a href="#" className="menu-links">About DevsyTech</a>
                                        <div className="nx-dropdown" >
                                            <div className="sub-menu-section">
                                                <div className="container">
                                                    <div className="sub-menu-center-block">
                                                        <div className="sub-menu-column">
                                                            <ul>
                                                                <li><NavLink to="about">About Us</NavLink></li>
                                                                <li><NavLink to="why-us">Why Us</NavLink></li>
                                                                <li><NavLink to="team">Our Team</NavLink></li>
                                                                <li><NavLink to="mission-vision">Mission & Vision</NavLink></li>
                                                                <li><NavLink to="development-process?state=app&web">Development Process</NavLink></li>
                                                                <li><NavLink to="clients">Our Clients</NavLink></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="">
                                        <NavLink to="/services" className="menu-links" onClick={this.handleClick}>Our Services</NavLink>

                                    </li>

                                    <li>
                                        <NavLink to="/careers" className="menu-links" onClick={this.handleClick}>Careers</NavLink>

                                    </li>

                                    <li>
                                        <NavLink to="/contact-us" className="menu-links"onClick={this.handleClick}>Contact Us</NavLink>

                                    </li>

                                    <a href="#" className="menu-links right-bddr">&nbsp;</a>
                                    <li className="contact-show">
                                        <a href="#" className="btn-round- trngl btn-br bg-btn">&#128222;</a>
                                        <div className="contact-inquiry">
                                            <div className="contact-info-">
                                                <div className="contct-heading">DevsyTech Contacts</div>
                                                <div className="inquiry-card-nn hrbg">
                                                    <div className="title-inq-c">FOR HR DEPARTMENT</div>
                                                    <ul>
                                                        <li><a href="tel:+254745805901">Phone : +254745805901</a></li>

                                                        <li><a href="mailto:info@devsytech.com">Email: info@devsytech.com</a></li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <NavLink to="contact-us" className="btn-br bg-btn3 btshad-b2 lnk">Talk to Us<span
                                            className="circle"></span></NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="mobile-menu2">
                                <ul className="mob-nav2">
                                    <li><a href="#contact-popup" className="btn-round- trngl btn-br bg-btn btshad-b1" data-toggle="modal"
                                        data-target="#menu-popup"><i>&#128222;</i></a></li>

                                    <li className="mob-nav2">
                                        <button
                                            className="toggle"
                                            style={{
                                                border: 'none',
                                                background: 'transparent',
                                                fontSize: '30px',
                                                color: isMobileNavOpen ? 'white' : 'black', // Set the color dynamically
                                                zIndex: '10000',
                                            }}
                                            onClick={this.toggleMobileNav}
                                        >
                                            <i className={`fa ${isMobileNavOpen ? 'fa-times' : 'fa-bars'}`}></i>
                                        </button>
                                    </li>
                                </ul>

                            </div>

                        </div>

                        <div id="overlay-add" onClick={this.toggleMobileNav}></div>
                        <nav className={isMobileNavOpen ? "nav-open" : ""} >
                            <div className="menu-nav">
                                <ul className="first-nav">
                                    <h2>Our Menu</h2>
                                    <li>
                                        <NavLink onClick={this.toggleMobileNav} to="./">Home</NavLink>
                                    </li>
                                    {navItems.map((item, index) => (
                                        <CollapsibleNavItem key={index} title={item.title} links={item.links} closeMobileNav={this.closeMobileNav} />
                                    ))}
                                    <li>
                                        <NavLink onClick={this.toggleMobileNav} to="services" className="menu-links">Our Services</NavLink>
                                    </li>
                                    <li>
                                        <NavLink onClick={this.toggleMobileNav} to="careers" className="menu-links">Careers</NavLink>
                                    </li>
                                    <li>
                                        <NavLink onClick={this.toggleMobileNav} to="contact-us" className="menu-links">Contact Us</NavLink>
                                    </li>
                                </ul>

                            </div>
                        </nav>

                    </div>
                    <nav className="bottom-nav">
                        <NavLink to="/" className="nav-item waves-effect">
                            <i className="fa fa-home"></i>
                            <span>Home</span>
                            <div className="waves-ripple"></div>
                        </NavLink>
                        <NavLink to="/services" className="nav-item">
                            <i className="fa fa-wrench"></i>
                            <span>Services</span>
                        </NavLink>
                        <NavLink to="/contact-us" className="nav-item">
                            <i className="fa fa-phone"></i>
                            <span>Contact</span>
                        </NavLink>
                        <a href="javascript:void(Tawk_API.toggle())" id="openChatButton" className="nav-item ">
                            <i className="fa fa-comment"></i>
                            <span>Chat</span>
                        </a>
                    </nav>
                </header>
                <div className="popup-modal1">
                    <div className="modal" id="menu-popup">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <div className="common-heading">
                                        <h4 className="mt0 mb0">Devsy Tech Contacts</h4>
                                    </div>
                                    <button type="button" className="closes" data-dismiss="modal">&times;</button>
                                </div>
                                <div className="modal-body">
                                    <div className="getintouchblock mt30">
                                        <h4>Get In Touch</h4>
                                        <p className="mt10">Please reach out to us below if you have a plan or project in mind that you'd like to share with us.</p>
                                        <div className="media mt15">
                                            <div className="icondive"><img src="images/icons/call.svg" alt="icon" /></div>
                                            <div className="media-body getintouchinfo">
                                                <a href="tel:+254745805901">+254-745805901<br></br><span>Mon-Fri 9am - 6pm</span></a>
                                            </div>
                                        </div>
                                        <div className="media mt15">
                                            <div className="icondive"><img src="images/icons/whatsapp.svg" alt="icon" /></div>
                                            <div className="media-body getintouchinfo">
                                                <a href="https://wa.me/254745805901">+254-745805901 <br></br><span>Mon-Fri 9am - 6pm</span></a>
                                            </div>
                                        </div>
                                        <div className="media mt15">
                                            <div className="icondive"><img src="images/icons/mail.svg" alt="icon" /></div>
                                            <div className="media-body getintouchinfo">
                                                <a href="mailto:info@devsytech.com"><span className="__cf_email__" data-cfemail="3a53545c557a4d5f5849534e5f14595557">info@devsytech.com</span> <span>Online Support</span></a>
                                            </div>
                                        </div>
                                        <div className="media mt15">
                                            <div className="icondive"><img src="images/icons/map.svg" alt="icon" /></div>
                                            <div className="media-body getintouchinfo">
                                                <a href="/cdn-cgi/l/email-protection#0b62656d644b7c6e6978627f6e25686466">We are currently remote.<span>{ /*Visit Our Office*/}</span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="contact-data mt30">
                                        <h4>Follow Us On:</h4>
                                        <div className="social-media-linkz mt10">
                                            <a href="#" target="_blank"><img src="images/icons/linked-in.jpg" alt="LinkedIn" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                

            </React.Fragment >
        );
    }
}

export default Header;