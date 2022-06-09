import React, { useEffect } from 'react';
import ahsan4 from '../../images/ashan4.png'
import './About.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
const About = () => {
    useEffect(() => {
        AOS.init({duration:2000})
    },[])
    return (
        <div className=' w-100 about pt-5'>
            <div className='container'>
            <div className='row p-5'>
                <div className='col-12 col-md-6 col-lg-6 aboutImg' data-aos="fade-right">
                    <img className='w-50' src={ahsan4} alt="ahsan" />
                </div>
                <div className='col-12 col-md-6 col-lg-6 aboutText text-white' data-aos="fade-left">
                    <div>
                        <h3>
                            Hello,I Am Ahsan Habib
                        </h3>
                        <p>
                            I am passionate and extremely motivated new front-end developer.
                            I believe I stand out to my passion for continuous innovation and pushing
                            bring forward new ideas.With my skills,I identify real-world Challenges and
                            that bring efficiency and improvement to the lives of users and also showcase
                            improvements can make a meaningful impact on the user and the business
                        </p>
                        <table>
                            <tbody>
                                <tr>
                                    <td className='pe-5'>Name</td>
                                    <td>: Ahsan Habib</td>
                                </tr>
                                <tr>
                                    <td className='pe-5'>Age</td>
                                    <td>: 25</td>
                                </tr>
                                <tr>
                                    <td className='pe-5'>Address</td>
                                    <td>: Chuadanga,Bangladesh</td>
                                </tr>
                                <tr>
                                    <td className='pe-5'>Phone</td>
                                    <td>: 01311-054020</td>
                                </tr>
                                <tr>
                                    <td className='pe-5'>Email</td>
                                    <td>: ahsan.habib141710@gmail.com</td>
                                </tr>
                            </tbody>
                        </table>
                        <button className='btn downloadCv mt-4'>Download Resume</button>
                    </div>
                </div>
                </div>
                </div>
        </div>
    );
};

export default About;