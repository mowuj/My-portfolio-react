import React from 'react';
import TypeWriter from 'typewriter-effect'
import { FaGithub,FaFacebook,FaLinkedin } from 'react-icons/fa';
import ahsan1 from '../../images/ahsan1.png'
import mowuj2 from '../../images/mowuj2.jpg'
import { GrResume } from "react-icons/gr";

import './Home.css'
const Home = () => {
    return (
        <div className='w-100 home bg-black text-white' id='home'>
            <div className='container'>
                <div className='row pt-5'>
                    <div className='col-12 col-md-6 col-lg-6 homeText'>
                        <div>
                            <h2 className='welcome'>WELCOME !</h2>
                            <h1>
                                <TypeWriter
                                    options={{
                                        autoStart: true,
                                        loop: true,
                                        delay: 60,
                                        strings:["I AM AHSAN HABIB.","I AM A WEB DEVELOPER."]
                                }}
                                />
                            </h1>
                            <p>I'am Front-End developer.I’m working with React / Nodejs for about 1 years.
                                My expertise is to create front-end design for a website and also develop.
                            </p>
                            <div className='icons'></div>
                            <a className='icons' href="https://github.com/mowuj"><FaGithub/></a>
                            <a className='icons' href="https://web.facebook.com/profile.php?id=100076318906776"><FaFacebook/></a>
                            <a className='icons'  href="https://www.linkedin.com/in/ahsan-habib-827b6b229/"><FaLinkedin/></a>
                            

                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-6 homeImg'>
                        <img className='banner-img w-75  ms-5' src={mowuj2} alt="ahsan" />
                    </div>
                        
                </div>
            </div>
        </div>
    );
};

export default Home;