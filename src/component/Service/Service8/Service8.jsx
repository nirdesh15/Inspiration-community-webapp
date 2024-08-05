import React, { useState } from 'react';
 import './Service8.scss'// Import your SCSS file
import { Button } from 'react-bootstrap';

const ServicesPage8 = () => {
    const [showContent, setShowContent] = useState(false);

    const handleReadMore = () => {
        setShowContent(true);
    };

    return (
        <div id="cover">
            <div className="jumbotron-8 jumbotron-fluid">
              
                <div className="container">
                    <h2 className="title display-3 text-center" style={{ fontWeight: 100 }}>
                        <i className="bi bi-prescription2"></i> Service <br/><strong style={{ fontWeight: 400 }}>24/7 support services
                        </strong>
                    </h2>
                    <p className="lead text-left">
                    At Inspiration Community Care, we are committed to providing continuous and comprehensive support around the clock. Our 24/7 support services are designed to ensure that individuals receive the care they need whenever they need it, providing peace of mind and security for both clients and their families. Our dedicated team is available at all times to offer assistance and address any needs that arise. Our 24/7 support services include: </p>
                    <Button className='btm-1' onClick={handleReadMore}>More Details</Button>
                </div>
            </div>

            {showContent && (
                <div className="content">
                    <div className="content-left-8">
                     <b><i>"Our 24/7 support services are designed to offer comprehensive, reliable, and compassionate care at all times. We are dedicated to ensuring that individuals and their families feel secure and supported, providing the highest level of care and attention whenever it is needed."</i></b>
                        <img src="/undraw_time_management_re_tk5w.svg" alt="Description" className="content-image"/>
                        <img src="/undraw_real_time_collaboration_c62i.svg" alt="Description" className="content-image"/>
                        <img src="/undraw_through_the_window_-51-ew.svg" alt="Description" className="content-image"/>
                        <img src="/undraw_friends_r511.svg" alt="Description" className="content-image"/>
                    </div>
                    <div className="content-right">
                        
                        <ul>
                        
                        <li><h2><b>Around-the-Clock Personal Care</b></h2>
                        <ul>
                            <li><b>Personal Hygiene:</b>Assistance with daily personal care tasks such as bathing, grooming, dressing, and toileting at any time of day or night.</li>
                            <li><b>Meal Preparation:</b>Support with meal planning, cooking, and feeding whenever required, ensuring nutritional needs are met consistently.
                            </li>
                            <li><b>Emergency Care:</b>Immediate assistance with any urgent personal care needs or health concerns that arise outside regular hours.
                            </li>
                           
                        </ul>
                        </li>

                        <br/>
                        <li>
                            <h2><b>Health and Medical Monitoring</b></h2>
                            <ul>
                                <li><b>Medication Management:</b>Regular administration of medications and monitoring for any side effects or issues, ensuring adherence to prescribed treatments at all times.</li>
                                <li><b>Health Monitoring: </b>Continuous monitoring of health conditions, including vital signs and symptoms, with prompt responses to changes or emergencies.</li>
                                <li><b>Medical Assistance: </b>Availability of medical support for urgent health issues, including coordination with healthcare professionals as needed.
                                </li>
                            </ul>
                            </li>
                            <br/>
                        <li><h2><b>Safety and Security</b></h2>
                    
                        <ul>
                            <li><b>Emergency Response: </b>Immediate response to emergencies, including medical incidents, falls, or safety concerns, ensuring rapid and effective intervention.
                            </li>
                            <li><b>Safety Checks:</b>Regular safety assessments and checks to ensure a secure living environment, with adjustments made as needed to maintain safety.
                            </li>
                            <li><b>Crisis Management:</b>Handling and resolving crises efficiently, providing support during behavioral or health-related emergencies.

                            </li>

                        </ul>
                        </li>
                        <br/>
                        <li><h2><b>Personalised Support</b></h2>
                        <ul>
                        <li><b>Individualised Care Plans:</b>Development and implementation of personalized care plans tailored to each individual's needs, with flexibility to adapt to changing circumstances.</li>
                        <li><b>Continuous Support:</b>Consistent support from a team of caregivers who are familiar with the individual’s specific needs and preferences, ensuring continuity of care.</li>
                        <li><b>Care Coordination: </b>Coordination with healthcare providers, family members, and other support services to ensure comprehensive and cohesive care.

                        </li>
                        </ul>
                        </li>
                        <br/>
                        <li><h2><b>Emotional and Psychological Support</b></h2>
                         <ul>
                            <li><b>Emotional Well-being: </b>Providing emotional and psychological support to address any concerns or stress, helping individuals cope with the challenges of their condition.

                            </li>
                            <li><b>Companionship:</b> Offering companionship and social interaction to reduce feelings of isolation and promote a positive and supportive environment.</li>
                            <li><b>Family Support:</b>Providing reassurance and support to families, including regular updates and communication about the individual’s well-being.
                            </li>
                           
                        </ul>
                        </li>
                        <br/>

                        <li><h2><b>Accessibility and Communication</b></h2>
                        <ul>
                            <li><b>24/7 Availability: </b>Ensuring that support is accessible at all times, with a dedicated team available to address any issues or questions.
                            </li>
                            <li><b>Communication Channels: </b>Maintaining open and effective communication channels, including phone, email, and emergency contact systems, to ensure immediate responses.
                            </li>
                            
                        </ul>
                        </li>
                        <br/>
                        
                       
                       
                        </ul>
                        
                      
                    </div>
                    
                </div>
                
            )}
        </div>
        
    );
};

export default ServicesPage8;
