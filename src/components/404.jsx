import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
export default class Error extends Component {
    render() {
        return (
            <div>
                <title>Error | Page not Found - Devsy Tech IT Solutions & Services Company in Kenya</title>
                <section className="error bg-gradient pad-tb">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center mt50 mb50">
                                <div className="layer-div">
                                    <div className="error-block">
                                        <h1>Page not Found</h1>
                                        <p>The Page You Requested Cannot be found!.</p>
                                        <div className="images mt20">
                                            <img src="images/shape/error-page.png" alt="error page" className="img-fluid"/>
                                        </div>
                                        <NavLink to="/" className="btn-outline">Back to Home</NavLink>
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