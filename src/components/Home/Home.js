import React from 'react';
import TypeWriter from 'typewriter-effect'
import { FaGithub,FaFacebook,FaLinkedin } from 'react-icons/fa';
import ahsan1 from '../../images/ahsan1.png'
import ahsan2 from '../../images/ahsan2.jpg'
import './Home.css'
const Home = () => {
    return (
        <div className='w-100 home'>
            <div className='container'>
                <div className='row pt-5'>
                    <div className='col-12 col-md-6 col-lg-6 homeText'>
                        <div>
                            <h3 className='welcome'>WELCOME !</h3>
                            <h1>
                                <TypeWriter
                                    options={{
                                        autoStart: true,
                                        loop: true,
                                        delay: 60,
                                        strings:["I AM WEB DEVELOPER","I AM WEB DESIGNER"]
                                }}
                                />
                            </h1>
                            <p>I'am Front-End developer with 5 projects experience.
                                My expertise is to create front-end design for a website.
                            </p>
                            <div className='icons'></div>
                            <a className='icons' href="https://github.com/mowuj"><FaGithub/></a>
                            <a className='icons' href="https://web.facebook.com/profile.php?id=100076318906776"><FaFacebook/></a>
                            <a className='icons'  href="https://www.linkedin.com/in/ahsan-habib-827b6b229/"><FaLinkedin/></a>

                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-6 homeImg'>
                        <img className='banner-img' src={ahsan1} alt="ahsan" />
                    </div>
                        
                </div>
            </div>
        </div>
    );
};

export default Home;