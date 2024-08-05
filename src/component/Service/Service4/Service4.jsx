import React, { useState } from 'react';
import './Service4.scss'// Import your SCSS file
import { Button } from 'react-bootstrap';

const ServicesPage4 = () => {
    const [showContent, setShowContent] = useState(false);

    const handleReadMore = () => {
        setShowContent(true);
    };

    return (
        <div id="cover">
            <div className="jumbotron-4 jumbotron-fluid">
              
                <div className="container">
                    <h1 className="title display-3 text-center" style={{ fontWeight: 100 }}>
                        <i className="bi bi-prescription2"></i> Service <br/><strong style={{ fontWeight: 600 }}>Community Nursing services:</strong>
                    </h1>
                    <p className="lead text-left">
                    Our nursing services provide high-quality, professional healthcare in the comfort of your home. Our team of experienced Registered Nurses is dedicated to supporting individuals with disabilities to manage their health conditions and improve their quality of life. We offer a wide range of nursing services tailored to meet your unique needs, ensuring you receive the best possible care. Our services includes but not limited to:
                    </p>
                    <Button className='btm-1' onClick={handleReadMore}>More Details</Button>
                </div>
            </div>

            {showContent && (
                <div className="content">
                    <div className="content-left-4">
                     <b><i>"Our nursing services are designed to provide compassionate, skilled care that promotes your health and well-being. We are committed to helping you live as independently and comfortably as possible, with the highest standard of care."</i></b>
                        <img src="/undraw_doctor_kw-5-l.svg" alt="Description" className="content-image"/>
                        <img src="/undraw_flowers_vx06.svg" alt="Description" className="content-image"/>
                        <img src="/undraw_injured_9757 (1).svg" alt="Description" className="content-image"/>
                        <img src="/undraw_barber_-3-uel.svg" alt="Description" className="content-image"/>
                        <img src="/undraw_medicine_b-1-ol.svg" alt="Description" className="content-image"/>

                    </div>
                    <div className="content-right-4">
                        
                        <ul>
                        
                        <li><h2><b>Medication Management</b></h2>
                        <ul>
                            <li><b>Medication Administration:</b>Safe and accurate administration of medications, including injections, oral medications, and topical treatments.</li>
                            <li><b>Medication Reminders: </b> Ensuring you take your medications on time and as prescribed.
                            </li>
                            <li><b>Medication Reviews: </b> Regular reviews of your medications to ensure they are effective and up-to-date.
                            </li>
                           
                        </ul>
                        </li>

                        <br/>
                        <li>
                            <h2><b>Wound Care and Management</b></h2>
                            <ul>
                                <li><b>Wound Assessment:</b>Thorough assessment and monitoring of wounds to ensure proper healing.</li>
                                <li><b>Wound Dressing:</b>Application and changing of wound dressings to promote healing and prevent infection.</li>
                                <li><b>Specialized Wound Care:</b>Management of complex wounds, pressure sores, and diabetic ulcers.
                                </li>
                            </ul>
                            </li>
                            <br/>
                        <li><h2><b>Catheter Care and Management</b></h2>
                    
                        <ul>
                            <li><b>Catheter Insertion:</b>Safe and sterile insertion of urinary catheters, whether short-term (intermittent) or long-term (indwelling), with minimal discomfort.</li>
                            <li><b>Catheter Removal:</b>Careful and gentle removal of catheters, ensuring comfort and preventing complications.
                            </li>
                            <li><b>Routine Cleaning:</b> Regular cleaning of the catheter site and tubing to maintain hygiene and prevent infections.
                            </li>
                            <li><b>Bag Changes:</b>Timely and hygienic changing of drainage bags, ensuring proper urine flow and reducing the risk of blockages.
                            </li>
                            <li><b>Monitoring:</b>Regular monitoring of the catheter and urine output to detect and address any issues early.
                            </li>

                        </ul>
                        </li>
                        <br/>
                        <li><h2><b>Chronic Disease Management</b></h2>
                        <ul>
                        <li><b>Diabetes Management:</b> Support with blood sugar monitoring, insulin administration, and dietary advice.</li>
                        <li><b>Cardiac Care:</b>Monitoring and managing heart conditions, including blood pressure checks and medication management.</li>
                        <li><b>Respiratory Care:</b>Assistance with managing respiratory conditions, including asthma and COPD, and providing nebulizer treatments.
                        </li>
                        </ul>
                        </li>
                        <br/>
                        <li><h2><b>Post-Hospital Care</b></h2>
                        <ul>
                            <li><b>Transition Support:</b>  Assistance with the transition from hospital to home, ensuring a smooth and safe recovery.
                            </li>
                            <li><b>Monitoring: </b>Regular monitoring of your condition to detect and address any complications early.</li>
                           
                        </ul>
                        </li>
                        <br/>

                        <li><h2><b>Palliative Care</b></h2>
                        <ul>
                            <li><b>Symptom Management:</b> Providing relief from pain and other distressing symptoms to improve your comfort.
                            </li>
                            <li><b>Emotional Support: </b> Offering emotional and psychological support to you and your family during difficult times.</li>
                            <li><b>End-of-Life Care:</b>Ensuring dignity and quality of life in the final stages of illness.</li>
                        </ul>
                        </li>
                        <br/>
                        <li><h2><b>Health Assessments and Care Planning</b></h2>
                        <ul>
                            <li><b>Comprehensive Assessments: </b>Conducting thorough health assessments to identify your needs and develop a personalized care plan.

                            </li>
                            <li><b>Care Coordination: </b> Collaborating with your healthcare providers to ensure cohesive and coordinated care.</li>
                            <li><b>Regular Reviews:</b>Ongoing reviews of your care plan to ensure it remains relevant and effective.
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

export default ServicesPage4;
