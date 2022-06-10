import React, { useEffect } from 'react';
import AOS from 'aos';
import lucky from '../../images/lucky.png'
import fitness from '../../images/fitness.png'
import car from '../../images/car.png'
import save from '../../images/save.png'
import laptop from '../../images/laptop.png'
import phone from '../../images/phone.png'
import { FaGithub,FaFacebook,FaLinkedin } from 'react-icons/fa';
import 'aos/dist/aos.css'
import './Projects.css'
const Projects = () => {
    useEffect(() => {
        AOS.init({duration:2000})
    },[])
    return (
        <div className='projects p-5' id='projects'>
            <div className='projectText '>
                <h3>MY <span>PROJECTS</span></h3> <br />
                <hr />
                <div className='container text-center mt-5'>
                    <div className='row'>
                        <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="fade-right">
                            <div className='card text-dark'>
                                <img className='card-img-top' src={lucky} alt="Lucky" />
                                <div className='card-body'>
                                    <h5 className='card-title'>Lucky Manufacturer </h5>
                                    <p >Features: Authentication,Admin role,Dashboard,Create and Delete Product,Payment.</p>
                                    
                                    <a href="" className='btn'>More Detail</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="zoom-in">
                            <div className='card text-dark'>
                                <img className='card-img-top' src={fitness} alt="fitness" />
                                <div className='card-body'>
                                    <h5 className='card-title'>Fitness Studio </h5>
                                    <p>Features: Authentication ,Dashboard,See all service, Order and remove service,Delete service. </p>
                                    <a href="" className='btn'>More Detail</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="fade-left">
                            <div className='card text-dark'>
                                <img className='card-img-top' src={car} alt="car" />
                                <div className='card-body'>
                                    <h5 className='card-title'>Car Inventory </h5>
                                    <p>Authentication,Admin role,Dashboard,Create and Delete Product,Order and remove product</p>
                                    <a href="" className='btn'>More Detail</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="fade-left">
                            <div className='card text-dark'>
                                <img className='card-img-top' src={laptop} alt="social media" />
                                <div className='card-body'>
                                    <h5 className='card-title'>Manufacturer </h5>
                                    <p>Features: This is a laptop selling website.and showing all customer reviews.use react charts</p>
                                    <a href="" className='btn'>More Detail</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="fade-left">
                            <div className='card text-dark'>
                                <img className='card-img-top' src={save} alt="social media" />
                                <div className='card-body'>
                                    {/* <a  href="https://github.com/mowuj"><FaGithub/></a> */}
                                    <h5 className='card-title'>Save money </h5>
                                    <p>Features: This is a calculate system base website.Calculate user saving amount.try this for you</p>
                                    <a href="" className='btn'>More Detail</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="fade-left">
                            <div className='card text-dark'>
                                <img className='card-img-top' src={phone} alt="social media" />
                                <div className='card-body'>
                                    <h5 className='card-title'>Phone picker </h5>
                                    <p>Features: This is a random choose system.user can choose his lucky phone by used it </p>
                                    <a href="" className='btn'>More Detail</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;