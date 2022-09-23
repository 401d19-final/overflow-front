import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import { Github, Linkedin } from 'react-bootstrap-icons';

export default class NextJsCarousel extends Component {
    render() {
        return (

            <div>
                <Carousel>
                    <div class="container">
                        <p className='text-3xl font-medium'> Alec Torres</p>
                        <div>
                            <a href="https://github.com/atorresla24">
                                <Linkedin className="my-1 inline-block w-auto mx-auto px-8 h-10" color="royalblue" size={24} />
                            </a>
                            <a href="https://github.com/atorresla24">
                                <Github className="my-1 inline-block w-auto mx-auto px-8 h-10" color="black" size={24} />
                            </a>
                        </div>
                        <img src="../images/alec.jpg" alt="image1" className=" block w-auto mx-auto" />
                        <p className="legend"> Full stack software developer specializing in Python<br />
                            Based out of Spotsylvania, Virginia<br />
                            Enjoy reading books, playing sports, and space<br />
                            Future goal: Excel in anything I set my sights on
                        </p>
                    </div>

                    <div class="container">
                        <p className='text-3xl font-medium'>Benjamin Small</p>
                        <div>
                            <a href="https://www.linkedin.com/in/bjgsmall/">
                                <Linkedin className="my-1 inline-block w-auto mx-auto px-8 h-10" color="royalblue" size={24} />
                            </a>
                            <a href="https://github.com/BenjaminSmall94">
                                <Github className="my-1 inline-block w-auto mx-auto px-8 h-10" color="black" size={24} />
                            </a>
                        </div>
                        <img src="../images/ben.jpg" alt="image1" className=" block w-auto mx-auto" />
                        <p className="legend"> BS in Industrial Engineering: UW Seattle in 2016<br />
                            Army Aviation Officer: Commander/Blackhawk Pilot (6 years)<br />
                            Full Stack Software Developer - Advanced Python Programming Certificate<br />
                            Interested in process automation, database management, stand-alone applications, full-stack
                            web applications, and virtual reality. Also loves nature!
                        </p>
                    </div>

                    <div className="container">
                        <p className='text-3xl font-medium'>Rui Guo</p>
                        <div>
                            <a href="https://www.linkedin.com/in/rui-guo/">
                                <Linkedin className="my-1 inline-block w-auto mx-auto px-8 h-10" color="royalblue" size={12} />
                            </a>
                            <a href="https://github.com/mvrk">
                                <Github className="my-1 inline-block w-auto mx-auto px-8 h-10" color="black" size={24} />
                            </a>
                        </div>
                        <img src="../images/rui.jpeg" alt="image1" className=" block w-auto mx-auto" />
                        <p className="legend"> Full stack software developer<br />
                            LSU graduate with a system science background<br />
                            Living in greater Seattle area<br />
                            Love outdoor discoveries and new technologies
                        </p>
                    </div>

                    <div className="container">
                        <p className='text-3xl font-medium'>Falashade Greene</p>
                        <div>
                            <a href="http://linkedin.com/in/falashadegreene">
                                <Linkedin className="my-1 inline-block w-auto mx-auto px-8 h-10" color="royalblue" size={24} />
                            </a>
                            <a href="https://github.com/falashadegreene">
                                <Github className="my-1 inline-block w-auto mx-auto px-8 h-10" color="black" size={24} />
                            </a>
                        </div>
                        <img src="../images/shade.png" alt="image1" className=" block w-auto mx-auto" />
                        <p className="legend"> Full stack software developer<br />
                            Background in customer service and fashion<br />
                            Living in the Baltimore, Maryland area
                            Love to travel
                        </p>
                    </div>

                    <div className="container">
                        <p className='text-3xl font-medium'>Ryan McMillan</p>
                        <div>
                            <a href="https://www.linkedin.com/in/ryan-m-369b50132/">
                                <Linkedin className="my-1 inline-block w-auto mx-auto px-8 h-10" color="royalblue" size={24} />
                            </a>
                            <a href="https://github.com/RyanLMcMillan">
                                <Github className="my-1 inline-block w-auto mx-auto px-8 h-10" color="black" size={24} />
                            </a>
                        </div>
                        <img src="../images/ryan.jpg" alt="image1" className=" block w-auto mx-auto" />
                        <p className="legend"> Full Stack Software Developer furthering learning in Python<br />
                            Based in the greater Seattle area<br />
                            Passion and interest for music and technologies<br />
                            Career goal is to join a team with a growth mindset
                        </p>
                    </div>

                    <div className="container">
                        <p className='text-3xl font-medium'>Yu-wei Hsieh</p>
                        <div>
                            <a href="https://www.linkedin.com/in/welly-yu-wei-hsieh/">
                                <Linkedin className="my-1 inline-block w-auto mx-auto px-8 h-10" color="royalblue" size={24} />
                            </a>
                            <a href="https://github.com/welly091">
                                <Github className="my-1 inline-block w-auto mx-auto px-8 h-10" color="black" size={24} />
                            </a>
                        </div>
                        <img src="../images/yu-wei.jpg" alt="image1" className=" block w-auto mx-auto" />
                        <p className="legend"> Full-stack software developer & Python software developer<br />
                            UW graduated<br />
                            Chemistry & biochemistry background<br />
                            Future goal: Seeking opportunities in tech industry
                        </p>
                    </div>
                </Carousel>
            </div>
        );
    }
};