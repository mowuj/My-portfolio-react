import React, { useEffect } from 'react';
import { FaCode, FaPen, FaPhotoVideo } from 'react-icons/fa';
import './Services.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
const Services = () => {
    useEffect(() => {
        AOS.init({duration:2000})
    },[])
    return (
        <div className='services p-5'>
            <div className='serviceText pt-5'>
                <h3>MY <span>SERVICES</span></h3> <br />
                <hr />
                <div className='container text-center mt-5'>
                    <div className='row'>
                        <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="fade-right">
                            <div className='border service p-4'>
                                <p className='serviceIcon'> <span className='border p-2'> <FaPhotoVideo/></span></p>
                                <h5 className='mt-4'>WEB DESIGN</h5>
                                <p>Description Description Description Description
                                    Description Description DescriptionDescription Description
                                </p>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="zoom-in">
                            <div className='border service p-4'>
                                <p className='serviceIcon'> <span className='border p-2'><FaCode/> </span></p>
                                <h5 className='mt-4'>FRONT_END DEVELOPMENT</h5>
                                <p>Description Description Description Description
                                    Description Description DescriptionDescription Description
                                </p>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="fade-left">
                            <div className='border service p-4'>
                                <p className='serviceIcon'> <span className='border p-2'> <FaPen/></span></p>
                                <h5 className='mt-4'>BACK_END DEVELOPMENT</h5>
                                <p>Description Description Description Description
                                    Description Description DescriptionDescription Description
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;