import React, { useEffect } from 'react';
import AOS from 'aos';
import lucky from '../../images/lucky.png'
import fitness from '../../images/fitness.png'
import car from '../../images/car.png'
import 'aos/dist/aos.css'
import './Projects.css'
const Projects = () => {
    useEffect(() => {
        AOS.init({duration:2000})
    },[])
    return (
        <div className='projects p-5' id='projects'>
            <div className='projectText pt-5'>
                <h3>MY <span>PROJECTS</span></h3> <br />
                <hr />
                <div className='container text-center mt-5'>
                    <div className='row'>
                        <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="fade-right">
                            <div className='card text-dark'>
                                <img className='card-img-top' src={lucky} alt="social media" />
                                <div className='card-body'>
                                    <h5 className='card-title'>Manufacturer </h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, nesciunt.</p>
                                    <a href="" className='btn'>More Detail</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="zoom-in">
                            <div className='card text-dark'>
                                <img className='card-img-top' src={lucky} alt="social media" />
                                <div className='card-body'>
                                    <h5 className='card-title'>Manufacturer </h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, nesciunt.</p>
                                    <a href="" className='btn'>More Detail</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="fade-left">
                            <div className='card text-dark'>
                                <img className='card-img-top' src={lucky} alt="social media" />
                                <div className='card-body'>
                                    <h5 className='card-title'>Manufacturer </h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, nesciunt.</p>
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