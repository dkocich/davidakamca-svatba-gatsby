import * as React from "react";
import { PageProps } from "gatsby";
import {Scripts} from "../cmp/Scripts";
import {MySharedHeader} from "../cmp/MySharedHeader";

// markup
const KontaktPage = (props: PageProps) => {
  return (
    <div>
      <MySharedHeader/>
      {/*<div className="fh5co-loader" />*/}

      <div id="page">
        <nav className="fh5co-nav" role="navigation">
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

        <header
          id="fh5co-header"
          className="fh5co-cover fh5co-cover-sm"
          role="banner"
          style={{ backgroundImage: "url(images/img_bg_1.jpg)" }}
        >
          <div className="overlay" />
          <div className="fh5co-container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center">
                <div className="display-t">
                  <div
                    className="display-tc animate-box"
                    data-animate-effect="fadeIn"
                  >
                    <h1>Contact Us</h1>
                    <h2>
                      Free HTML5 templates Made by{" "}
                      <a href="http://freehtml5.co" target="_blank">
                        FreeHTML5.co
                      </a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div id="fh5co-couple" className="fh5co-section-gray">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                <h2>Hello!</h2>
                <h3>November 28th, 2016 New York, USA</h3>
                <p>We invited you to celebrate our wedding</p>
              </div>
            </div>
            <div className="couple-wrap animate-box">
              <div className="couple-half">
                <div className="groom">
                  <img
                    src="images/groom.jpg"
                    alt="groom"
                    className="img-responsive"
                  />
                </div>
                <div className="desc-groom">
                  <h3>Joefrey Mahusay</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove
                  </p>
                </div>
              </div>
              <p className="heart text-center">
                <i className="icon-heart2"></i>
              </p>
              <div className="couple-half">
                <div className="bride">
                  <img
                    src="images/bride.jpg"
                    alt="groom"
                    className="img-responsive"
                  />
                </div>
                <div className="desc-bride">
                  <h3>Sheila Mahusay</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fh5co-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-md-push-6 animate-box">
                <h3>Get In Touch</h3>
                <form action="#">
                  <div className="row form-group">
                    <div className="col-md-6">
                      <label htmlFor="fname">First Name</label>
                      <input
                        type="text"
                        id="fname"
                        className="form-control"
                        placeholder="Your firstname"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="lname">Last Name</label>
                      <input
                        type="text"
                        id="lname"
                        className="form-control"
                        placeholder="Your lastname"
                      />
                    </div>
                  </div>

                  <div className="row form-group">
                    <div className="col-md-12">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        id="email"
                        className="form-control"
                        placeholder="Your email address"
                      />
                    </div>
                  </div>

                  <div className="row form-group">
                    <div className="col-md-12">
                      <label htmlFor="subject">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        className="form-control"
                        placeholder="Your subject of this message"
                      />
                    </div>
                  </div>

                  <div className="row form-group">
                    <div className="col-md-12">
                      <label htmlFor="message">Message</label>
                      <textarea
                        name="message"
                        id="message"
                        cols={30}
                        rows={10}
                        className="form-control"
                        placeholder="Write us something"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Send Message"
                      className="btn btn-primary"
                    />
                  </div>
                </form>
              </div>
              <div className="col-md-5 col-md-pull-5 animate-box">
                <div className="fh5co-contact-info">
                  <h3>Contact Information</h3>
                  <ul>
                    <li className="address">
                      198 West 21th Street, <br /> Suite 721 New York NY 10016
                    </li>
                    <li className="phone">
                      <a href="tel://1234567920">+ 1235 2355 98</a>
                    </li>
                    <li className="email">
                      <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                    </li>
                    <li className="url">
                      <a href="http://gettemplates.co">gettemplates.co</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="map" className="fh5co-map" />

        <footer id="fh5co-footer" role="contentinfo">
          <div className="container">
            <div className="row copyright">
              <div className="col-md-12 text-center">
                <p>
                  <small className="block">
                    &copy; 2016 Free HTML5. All Rights Reserved.
                  </small>
                  <small className="block">
                    Designed by{" "}
                    <a href="http://freehtml5.co/" target="_blank">
                      FREEHTML5.co
                    </a>{" "}
                    Demo Images:{" "}
                    <a href="http://unsplash.co/" target="_blank">
                      Unsplash
                    </a>
                  </small>
                </p>
                <div>
                  <ul className="fh5co-social-icons">
                    <li>
                      <a href="#">
                        <i className="icon-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-dribbble" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <div className="gototop js-top">
        <a href="#" className="js-gotop">
          <i className="icon-arrow-up" />
        </a>
      </div>

      <Scripts/>
    </div>
  );
};

export default KontaktPage;
