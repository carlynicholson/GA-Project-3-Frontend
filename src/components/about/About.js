import React from 'react';
import Header from '../header/Header';
import Footer from '../Footer';
import './About.css';


function About() {

    return (
        <>
            <Header/>

            <div className="about-team-body">
                <div className="about-intro">
                    <h1 className="abouth1">Our Team</h1>
                    <p className="about-team">Meet the team behind Fetch!</p>
                </div>
                <div className="team-members">
                    <div className="member-1">

                        {/* ATTN: Please leave the commented-out image links as is for now.
                    We'll need to get "headshots"/"profile photos" from the team for me to edit before 
                    we can use those lines */}

                        {/* <img className="headshot" src={Calendar} alt='Scott'/> */}
                        <div className="member-photo"></div>
                        <div className="member-content">
                            <h2 className="member-name">Scott</h2>
                            <h3 className="member-title">Title</h3>
                        </div>
                        <p className="about-member">Taxidermy 90's man braid tumblr succulents literally paleo tote bag
                            swag meh salvia art party you probably haven't heard of them sartorial. Etsy franzen pork
                            belly williamsburg heirloom.</p>
                        <div className="social-links">
                            <div className="github">
                                <a href="/" target="_blank" rel="nofollow noopener noreferrer" title="GitHub"><i
                                    className="icon-social-github"></i></a>
                            </div>
                            <div className="linkedin">
                                <a href="/" target="_blank" rel="nofollow noopener noreferrer" title="LinkedIn"><i
                                    className="icon-social-linkedin"></i></a>
                            </div>
                            <div className="portfolio">
                                <a href="/" target="_blank" rel="nofollow noopener noreferrer" title="Portfolio"><i
                                    className="icon-globe"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="member-2">
                        {/* <img className="headshot" src={Calendar} alt='Gracie'/> */}
                        <div className="member-photo"></div>
                        <div className="member-content">
                            <h2 className="member-name">Gracie</h2>
                            <h3 className="member-title">Title</h3>
                        </div>
                        <p className="about-member">Taxidermy 90's man braid tumblr succulents literally paleo tote bag
                            swag meh salvia art party you probably haven't heard of them sartorial. Etsy franzen pork
                            belly williamsburg heirloom.</p>
                        <div className="social-links">
                            <div className="github">
                                <a href="/" target="_blank" rel="nofollow noopener noreferrer" title="GitHub"><i
                                    className="icon-social-github"></i></a>
                            </div>
                            <div className="linkedin">
                                <a href="/" target="_blank" rel="nofollow noopener noreferrer" title="LinkedIn"><i
                                    className="icon-social-linkedin"></i></a>
                            </div>
                            <div className="portfolio">
                                <a href="/" target="_blank" rel="nofollow noopener noreferrer" title="Portfolio"><i
                                    className="icon-globe"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="member-3">
                        {/* <img className="headshot" src={Calendar} alt='Carly'/> */}
                        <div className="member-photo"></div>
                        <div className="member-content">
                            <h2 className="member-name">Carly</h2>
                            <h3 className="member-title">Title</h3>
                        </div>
                        <p className="about-member">Taxidermy 90's man braid tumblr succulents literally paleo tote bag
                            swag meh salvia art party you probably haven't heard of them sartorial. Etsy franzen pork
                            belly williamsburg heirloom.</p>
                        <div className="social-links">
                            <div className="github">
                                <a href="https://github.com/carlynicholson" target="_blank"
                                   rel="nofollow noopener noreferrer" title="GitHub"><i
                                    className="icon-social-github"></i></a>
                            </div>
                            <div className="linkedin">
                                <a href="https://www.linkedin.com/in/carlypnicholson/" target="_blank"
                                   rel="nofollow noopener noreferrer" title="LinkedIn"><i
                                    className="icon-social-linkedin"></i></a>
                            </div>
                            <div className="portfolio">
                                <a href="https://carlynicholson.github.io/portfolio/" target="_blank"
                                   rel="nofollow noopener noreferrer" title="Portfolio"><i
                                    className="icon-globe"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="member-4">
                        {/* <img className="headshot" src={Calendar} alt='Brandon'/> */}
                        <div className="member-photo"></div>
                        <div className="member-content">
                            <h2 className="member-name">Brandon</h2>
                            <h3 className="member-title">Title</h3>
                        </div>
                        <p className="about-member">Shortly after graduating from the <a
                            href="https://www.physics.ucsb.edu/" target="_blank" rel="nofollow noopener noreferrer"
                            style={{textDecoration: 'none'}}>University of California Santa Barbara</a> , I joined the
                            engineering team at <a href="https://www.payjunction.com/payments/" target="_blank"
                                                   rel="nofollow noopener noreferrer"
                                                   style={{textDecoration: 'none'}}>PayJunction</a> as an entry level
                            software engineer. While there I further honed my skills as an engineer in a test driven
                            development environment, utilizing technologies like Java, Javascript, Angular.js and
                            HTML/CSS. In an effort to further grow my developer skill set I then enrolled in a software
                            engineering intensive boot camp through <a href="https://generalassemb.ly/" target="_blank"
                                                                       rel="nofollow noopener noreferrer"
                                                                       style={{textDecoration: 'none'}}>General
                                Assembly</a>. During the boot camp I was able to add Python, Django, React, Node.js,
                            Express, MongoDB, and PostgreSQL to my repertoire. Currently I'm a software engineer based
                            in Santa Barbara CA. I enjoy building user centric applications and websites that are as
                            intuitive as they are dynamic.</p>
                        <div className="social-links">
                            <div className="github">
                                <a href="https://github.com/bcantello" target="_blank"
                                   rel="nofollow noopener noreferrer" title="GitHub"><i
                                    className="icon-social-github"></i></a>
                            </div>
                            <div className="linkedin">
                                <a href="https://www.linkedin.com/in/brandon-cantello/" target="_blank"
                                   rel="nofollow noopener noreferrer" title="LinkedIn"><i
                                    className="icon-social-linkedin"></i></a>
                            </div>
                            <div className="portfolio">
                                <a href="http://brandoncantello.com/" target="_blank" rel="nofollow noopener noreferrer"
                                   title="Portfolio"><i className="icon-globe"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    );
}

export default About;
