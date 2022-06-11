import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Detail = () => {
    const { id } = useParams();
    console.log(id);
     const [project, setProject] = useState()
    
    useEffect(() => {
        fetch(`http://localhost:5000/projects/${id}`)
        .then(res=>res.json())
        .then(data=>setProject(data))
    },[])
    return (
        
        <div className='my-5  container'>
            <h2 className='pt-5 text-center'>{project?.name}</h2>
            <div className='row ms-5'>
                <div className='col-md-10 d-flex align-center border'>
                    <img className='w-full img-fluid' src={project?.img1} alt="" />
                </div>
                
            </div>
            <div className='row ms-5'>
                 
                <div className='col-md-8 '>
                        <h3 className='text-center mt-4'> DESCRIPTION</h3>
                        <hr />
                    <h5>Description: {project?.description}</h5>
                    
                    </div>
            </div>
            <div className='row ms-5 '>
                <div className='col-md-2 d-flex align-center '>
                    
                    <p>Technology:  { project?.technology}</p>
                    </div>
            </div>
            
            
            <div className='row ms-5 my-5'>
                <div className='col-md-6 '>
                    <h3 className='text-center mb-2'> Admin Role</h3>
                    <hr />
                <div className=' border'>
                     
                    <img className='w-full img-fluid' src={project?.img2} alt="" />
                </div>
                </div>
                <div className='col-md-6'>
                    <h3 className='text-center'> Manage Items</h3><hr />
                <div className=' border'>
                    
                    <img className='w-full img-fluid' src={project?.img3} alt="" />
                    </div>
                </div>
                <div>
                    
                </div>
            
            
            </div>
            
            </div>
    );
};

export default Detail;