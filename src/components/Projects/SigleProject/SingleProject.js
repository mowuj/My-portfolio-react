import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'
import './SingleProject.css'
const SingleProject = ({project}) => {
    const { name, _id, img1, sDescription,liveSite} = project
    const navigate = useNavigate();
    const navigateDetail = id => {
        navigate(`project/${id}`);
    }
    useEffect(() => {
        AOS.init({duration:2000})
    },[])
    return (
        
            
                            <div className='col-12 col-md-6 col-lg-4 'data-aos="zoom-in">
                            <div className='card text-dark'>
                                <img className='card-img-top' src={img1} alt="Lucky" />
                <div className='card-body'>
                    <a href={liveSite}>Live Site</a>
                    <a href={liveSite}>Live Site</a>
                                    <h5 className='card-title'>{ name}</h5>
                    <p>Features:{sDescription}
                    
                    
                    </p>
                    
                    
                                    <button className='btn more' onClick={()=>navigateDetail(_id)}>More Detail</button>
                                    
                                </div>
                            </div>
                        </div>
            
            
        
    );
};

export default SingleProject;