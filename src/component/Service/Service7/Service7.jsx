import React, { useState } from 'react';
 import './Service7.scss'// Import your SCSS file
import { Button } from 'react-bootstrap';

const ServicesPage7 = () => {
    const [showContent, setShowContent] = useState(false);

    const handleReadMore = () => {
        setShowContent(true);
    };

    return (
        <div id="cover">
            <div className="jumbotron-7 jumbotron-fluid">
              
                <div className="container">
                    <h2 className="title display-3 text-center" style={{ fontWeight: 100 }}>
                        <i className="bi bi-prescription2"></i> Service <br/><strong style={{ fontWeight: 400 }}>Specialised Disability Assistance</strong>
                    </h2>
                    <p className="lead text-left">
                    At Inspiration Community care, we provide specialised disability assistance tailored to meet the unique needs of individuals with various disabilities. Our dedicated team of professionals is trained to offer compassionate and expert support to enhance the quality of life, promote independence, and ensure full participation in daily activities and community life. Our specialized disability assistance services include:
                    </p>
                    <Button className='btm-1' onClick={handleReadMore}>More Details</Button>
                </div>
            </div>

            {showContent && (
                <div className="content">
                    <div className="content-left-7">
                     <b><i>"Our specialized disability assistance services are designed to provide holistic and individualized support, ensuring that each person receives the care and resources they need to live their best life. We are dedicated to promoting independence, dignity, and active participation in all aspects of life."</i></b>
                        <img src="/undraw_online_discussion_re_nn7e.svg" alt="Description" className="content-image"/>
                        <img src="/undraw_grandma_re_rnv1.svg" alt="Description" className="content-image"/>
                        <img src="/undraw_sentiment_analysis_jp6w.svg" alt="Description" className="content-image"/>
                        <img src="/undraw_exciting_news_re_y1iw.svg" alt="Description" className="content-image"/>
                        
                    </div>
                    <div className="content-right-7">
                        
                        <ul>
                        
                        <li><h2><b>Personal Care and Daily Living Support</b></h2>
                        <ul>
                            <li><b>Personal Hygiene:</b>Assistance with bathing, grooming, dressing, and toileting, respecting privacy and dignity.</li>
                            <li><b>Meal Preparation:</b>Support with meal planning, cooking, and feeding if required, ensuring nutritional needs are met.
                            </li>
                            <li><b>Household Assistance:</b>Help with cleaning, laundry, and other household tasks to maintain a comfortable living environment.
                            </li>
                           
                        </ul>
                        </li>

                        <br/>
                        <li>
                            <h2><b>Mobility and Physical Support
                            </b></h2>
                            <ul>
                                <li><b>Mobility Assistance:</b>Support with moving around the home and community, including transfers from bed to wheelchair and assistance with walking.</li>
                                <li><b>Physical Therapy: </b>Coordination with physical therapists to support and implement exercise routines that improve mobility and strength.
                                </li>
                               
                            </ul>
                            </li>
                            <br/>
                        <li><h2><b>Medical and Health Care</b></h2>
                    
                        <ul>
                            <li><b>Medical Management:</b>Assistance with medication administration, health monitoring, and managing chronic conditions.</li>
                            <li><b>Specialized Medical Care:</b>Support with complex medical needs, including wound care, tracheostomy care, and catheter care.
                            </li>
                            <li><b>Health Coordination:</b>Collaboration with healthcare providers to ensure comprehensive and coordinated care.

                            </li>

                        </ul>
                        </li>
                        <br/>
                        <li><h2><b>Communication and Cognitive Support</b></h2>
                        <ul>
                        <li><b>Communication Aids:</b>Assistance with the use of communication devices and techniques to support effective communication.</li>
                        <li><b>Cognitive Support:</b>Help with memory aids, cognitive exercises, and strategies to support individuals with cognitive impairments or developmental disabilities.
                        </li>
                        </ul>
                        </li>
                        <br/>
                        <li><h2><b>Community Participation and Social Inclusion</b></h2>
                         <ul>
                            <li><b>Social Activities:  </b> Facilitating participation in social and recreational activities to enhance community involvement and personal fulfillment.

                            </li>
                            <li><b>Skill Development:</b>  Providing training in life skills, social skills, and vocational skills to support greater independence and integration.</li>
                            <li><b>Accessibility Support:</b> Assistance with accessing community resources, services, and activities, ensuring barriers are minimised.</li>
                           
                        </ul>
                        </li>
                        <br/>

                        <li><h2><b>Specialized Support Services</b></h2>
                        <ul>
                            <li><b>Personalized Care Plans:</b>Development of individualized care plans based on comprehensive assessments of needs, preferences, and goals.
                            </li>
                            <li><b>Crisis Intervention: </b> Providing immediate support and intervention during crises or emergencies, including behavioral or health-related incidents.
                            </li>
                            
                        </ul>
                        </li>
                        <br/>
                        <li><h2><b>Advocacy and Empowerment</b></h2>
                        <ul>
                            <li><b>Self-Advocacy Training:</b> Empowering individuals to advocate for their rights and needs effectively.

                            </li>
                            <li><b>Family Support: </b> Offering support and education to families and caregivers, helping them understand and manage the challenges of disability.
                            </li>
                            <li><b>Resource Navigation:</b>Assisting with accessing and navigating various disability services, benefits, and community resources.

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

export default ServicesPage7;
