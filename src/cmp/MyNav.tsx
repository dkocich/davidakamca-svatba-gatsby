// @flow
import * as React from 'react';

type Props = {

};

export function MyNav(props: Props) {
    return (
        <nav className="cmp-MyNav fh5co-nav" role="navigation">
            <div className="container">
                <div className="row">
                    <div className="col-xs-2">
                        <div id="fh5co-logo">
                            <a href="index.html">
                                Wedding<strong>.</strong>
                            </a>
                        </div>
                    </div>
                    <div className="col-xs-10 text-right menu-1">
                        <ul>
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li>
                                <a href="about.html">Story</a>
                            </li>
                            <li className="has-dropdown">
                                <a href="services.html">Services</a>
                                <ul className="dropdown">
                                    <li>
                                        <a href="#">Web Design</a>
                                    </li>
                                    <li>
                                        <a href="#">eCommerce</a>
                                    </li>
                                    <li>
                                        <a href="#">Branding</a>
                                    </li>
                                    <li>
                                        <a href="#">API</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="has-dropdown">
                                <a href="gallery.html">Gallery</a>
                                <ul className="dropdown">
                                    <li>
                                        <a href="#">HTML5</a>
                                    </li>
                                    <li>
                                        <a href="#">CSS3</a>
                                    </li>
                                    <li>
                                        <a href="#">Sass</a>
                                    </li>
                                    <li>
                                        <a href="#">jQuery</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="active">
                                <a href="contact.html">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};
