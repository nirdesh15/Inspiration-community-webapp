import React, { useState } from 'react';
import './Service5.scss'; // Import your SCSS file
import { Button } from 'react-bootstrap';

const ServicesPage5 = () => {
    const [showContent, setShowContent] = useState(false);

    const handleReadMore = () => {
        setShowContent(true);
    };

    return (
        <div id="cover">
            <div className="jumbotron-5 jumbotron-fluid">
              
                <div className="container">
                    <h1 className="title display-3 text-center" style={{ fontWeight: 100 }}>
                        <i className="bi bi-prescription2"></i> Service <br/><strong style={{ fontWeight: 600 }}>Community Participation</strong>
                    </h1>
                    <p className="lead text-left">
                    At Inspiration Community Care, we believe that being actively involved in the community is crucial for personal growth, social connections, and overall well-being. Our community participation services are designed to help individuals engage in meaningful activities, build relationships, and achieve their personal goals. We provide support and opportunities tailored to your interests and needs. Our services include:
                    </p>
                    <Button className='btm-1' onClick={handleReadMore}>More Details</Button>
                </div>
            </div>

            {showContent && (
                <div className="content">
                    <div className="content-left-5">
                     <b><i>"Our community participation services are designed to help you build a fulfilling and active life, fostering independence and a strong sense of belonging. We are committed to supporting you in achieving your personal goals and engaging fully with your community."</i></b><br/>
                        <img src="/undraw_festivities_tvvj.svg" alt="Description" className="content-image"/>
                        <img src="/undraw_trip_re_f724.svg" alt="Description" className="content-image"/>
                        <img src="undraw_conference_call_b0w6.svg" alt="Description" className="content-image"/>
                        <img src="/undraw_candidate_ubwv.svg" alt="Description" className="content-image"/>
                        <img src="/undraw_game_day_ucx9.svg" alt="Description" className="content-image"/>
                       
                    </div>
                    <div className="content-right-5">
                        
                        <ul>
                        
                        <li><h2><b>Social and Recreational Activities</b></h2>
                        <ul>
                            <li><b>Group Outings:</b>Organizing group outings to local events, parks, museums, and other community attractions.</li>
                            <li><b>Hobbies and Interests:</b>Supporting participation in hobbies and activities such as arts and crafts, sports, gardening, and more.
                            </li>
                            <li><b>Social Events:</b>Hosting and facilitating social events, gatherings, and clubs to help build friendships and social networks.
                            </li>
                           
                        </ul>
                        </li>

                        <br/>
                        <li>
                            <h2><b>Community Access and Inclusion</b></h2>
                            <ul>
                                <li><b>Navigating Community Resources:</b>Assisting with finding and accessing community resources, programs, and services.</li>
                                <li><b>Volunteering Opportunities:</b>Connecting you with volunteer opportunities that match your interests and skills.</li>
                                <li><b>Educational Activities: </b>Support with attending educational workshops, classes, and courses to learn new skills and knowledge.
                                </li>
                            </ul>
                            </li>
                            <br/>
                        <li><h2><b>Skills Development</b></h2>
                    
                        <ul>
                            <li><b>Life Skills Training:</b>Providing training in essential life skills such as cooking, budgeting, and using public transportation.</li>
                            <li><b>Communication Skills:</b>Helping you develop effective communication skills to interact confidently with others.
                            </li>
                            <li><b>Problem-Solving:</b> Assisting with developing problem-solving skills to navigate everyday challenges and make informed decisions.
                            </li>

                        </ul>
                        </li>
                        <br/>
                        <li><h2><b>Employment and Vocational Support</b></h2>
                        <ul>
                        <li><b>Job Readiness:</b> Preparing you for employment through resume building, interview practice, and job search assistance.</li>
                        <li><b>Work Experience:</b>Facilitating work experience placements and internships to gain practical skills and experience.</li>
                        <li><b>Supported Employment:</b>Providing ongoing support in the workplace to help you succeed and thrive in your job.
                        </li>
                        </ul>
                        </li>
                        <br/>
                        <li><h2><b>Cultural and Recreational Activities</b></h2>
                         <ul>
                            <li><b>Cultural Events:</b>Encouraging participation in cultural and community events to celebrate diversity and heritage.
                            </li>
                            <li><b>Recreational Activities:</b> Organizing and supporting involvement in recreational activities that promote physical health and well-being.</li>
                           
                        </ul>
                        </li>
                        <br/>

                        <li><h2><b>Transportation Assistance</b></h2>
                        <ul>
                            <li><b>Travel Support:</b> Providing assistance with transportation to and from community activities and events.
                            </li>
                            <li><b>Public Transport Training: </b>  Teaching you how to use public transportation safely and independently.</li>
                            
                        </ul>
                        </li>
                        <br/>
                        <li><h2><b>Advocacy and Support</b></h2>
                        <ul>
                            <li><b>Self-Advocacy:</b> Empowering you to advocate for your rights and make your voice heard in the community.
                            </li>
                            <li><b>Peer Support: </b> Connecting you with peer support groups for shared experiences and mutual encouragement.</li>
                            <li><b>Accessing Services:</b>Assisting with navigating and accessing various community services and supports.
                            </li>
                        </ul>
                        </li>
                       
                       
                        </ul>
                        
                      
                    </div>
                    
                </div>
                
            )}
        </div>
        
    );
};

export default ServicesPage5;
