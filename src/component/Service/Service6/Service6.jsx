import React, { useState } from 'react';
import './Service6.scss'; // Import your SCSS file
import { Button } from 'react-bootstrap';

const ServicesPage6 = () => {
    const [showContent, setShowContent] = useState(false);

    const handleReadMore = () => {
        setShowContent(true);
    };

    return (
        <div id="cover">
            <div className="jumbotron-6 jumbotron-fluid">
              
                <div className="container">
                    <h2 className="title display-3 text-center" style={{ fontWeight: 100 }}>
                    <i className="bi bi-alexa"></i> <br/><strong style={{ fontWeight: 400 }}>Assistance for shared living accommodation</strong>
                    </h2>
                    <p className="lead text-left">
                    At Inspiration community care, we are committed to creating supportive and enriching shared living environments. Our comprehensive support services are designed to enhance the quality of life for individuals living in shared accommodations, promoting independence, cooperation, 
                    and personal growth. We provide a range of tailored services to meet the unique needs of each resident, ensuring a harmonious and well-functioning household. Our support services in shared living include:
                    </p>
                    <Button className='btm-1' onClick={handleReadMore}>More Details</Button>
                </div>
            </div>

            {showContent && (
                <div className="content">
                    <div className="content-left-6">
                     <b><i>"Our goal is to ensure that every participant in shared living environments feels supported, valued, and empowered to live independently and confidently. We are dedicated to fostering a positive and inclusive community where everyone can thrive."</i></b><br />
                        <img src="/undraw_showing_support_re_5f2v.svg" alt="Description" className="content-image"/>
                        <img src="/undraw_gift_box_re_vau4.svg" alt="Description" className="content-image"/>
                        <img src="/undraw_personal_notes_-8-n63.svg" alt="Description" className="content-image"/>
                        <img src="/undraw_career_progress_ivdb.svg" alt="Description" className="content-image"/>
                        <img src="/undraw_check_boxes_re_v40f.svg" alt="Description" className="content-image"/>
                    </div>
                    <div className="content-right-6">
                        
                        <ul>
                        
                        <li><h2><b>Daily Living Assistance</b></h2>
                        <ul>
                            <li><b>Personal Care:</b>Assisting with daily personal care activities such as bathing, dressing, grooming, and hygiene.</li>
                            <li><b>Meal Preparation::</b>Helping with meal planning, grocery shopping, and cooking nutritious meals that cater to diverse dietary needs.
                            </li>
                            <li><b>Household Management:</b>Providing support with cleaning, laundry, and other household chores to maintain a clean and organized living space.
                            </li>
                           
                        </ul>
                        </li>

                        <br/>
                        <li>
                            <h2><b>Community Building</b></h2>
                            <ul>
                                <li><b>Social Activities:</b>Organising social gatherings, group activities, and outings to foster a sense of community and build relationships among housemates.</li>
                                <li><b>Conflict Resolution:</b>Offering mediation and support to resolve conflicts, promote understanding, and maintain a peaceful living environment.</li>
                                <li><b>Shared Responsibilities: </b>Assisting with the fair division of household tasks and responsibilities to ensure equitable participation from all participants.
                                </li>
                            </ul>
                            </li>
                            <br/>
                        <li><h2><b>Skills Development</b></h2>
                    
                        <ul>
                            <li><b>Independent Living Skills:</b>Teaching essential life skills such as budgeting, cooking, time management, and personal organization.</li>
                            <li><b>Communication and Social Skills:</b>Helping residents develop effective communication and social skills to interact positively with housemates and others.
                            </li>
                            <li><b>Problem-Solving:</b>Supporting residents in developing problem-solving skills to handle everyday challenges and make informed decisions.

                            </li>

                        </ul>
                        </li>
                        <br/>
                        <li><h2><b>Safety and Well-being</b></h2>
                        <ul>
                        <li><b>Safety Checks:</b>Conducting regular safety inspections to ensure the living environment is secure and hazard-free.</li>
                        <li><b>Emergency Preparedness:</b> Developing and practicing emergency plans to ensure participants know how to respond in case of emergencies.</li>
                        <li><b>Health Monitoring:</b>Providing regular health and wellness checks, medication management, and support with medical appointments.
                        </li>
                        </ul>
                        </li>
                        <br/>
                        <li><h2><b>Emotional and Psychological Support</b></h2>
                         <ul>
                            <li><b>Emotional Well-being: </b>Offering emotional and psychological support to help participants cope with the challenges of shared living and personal issues.

                            </li>
                            <li><b>Counseling Services:</b> Providing access to professional counseling for residents who need additional emotional or mental health support.</li>
                            <li><b>Peer Support:</b>Facilitating peer support groups where residents can share experiences, offer mutual support, and build connections.</li>
                           
                        </ul>
                        </li>
                        <br/>

                        <li><h2><b>Transportation Assistance</b></h2>
                        <ul>
                            <li><b>Travel Support:</b>Assisting with transportation for medical appointments, social activities, work, and other essential outings.
                            </li>
                            <li><b>Public Transport Training: </b> Teaching residents how to use public transportation safely and independently, including route planning and timetable navigation.</li>
                            
                        </ul>
                        </li>
                        <br/>
                        <li><h2><b>Individualized Support Plans</b></h2>
                        <ul>
                            <li><b>Personalized Plans: </b>  Creating individualized support plans tailored to each participant’s needs, preferences, and goals.

                            </li>
                            <li><b>Regular Assessments:</b>  Conducting regular assessments and reviews of support plans to ensure they remain relevant and effective.</li>
                            <li><b>Collaborative Care:</b>Working closely with participants, families, and other care providers to deliver coordinated and comprehensive support.
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

export default ServicesPage6;
