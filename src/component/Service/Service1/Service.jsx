import React, { useState } from 'react';
import './Service.scss'; // Import your SCSS file
import { Button } from 'react-bootstrap';

const ServicesPage = () => {
    const [showContent, setShowContent] = useState(false);

    const handleReadMore = () => {
        setShowContent(true);
    };

    return (
        <div id="cover">
            <div className="jumbotron-1 jumbotron-fluid">
              
                <div className="container">
                    <h1 className="title display-3 text-center" style={{ fontWeight: 100 }}>
                    <i class="bi bi-calendar2"></i>  <br/><strong style={{ fontWeight: 600 }}>Daily Personal Activities</strong>
                    </h1>
                    <p className="lead text-left">
                    Our daily personal activities services are designed to support you in your day-to-day living, promoting independence and enhancing your quality of life. Our compassionate and skilled support workers are here to assist you with a range of personal activities, tailored to your individual needs and preferences. 
                    </p>
                    <Button className='btm-1' onClick={handleReadMore}>More Details</Button>
                </div>
            </div>

            {showContent && (
                <div className="content">
                    <div className="content-left-1">
                        <div className='text'>
                   <b> <i>"Our goal is to provide personalized care that respects your independence while ensuring your safety and well-being. Let us help you live your life to the fullest every day."
                   "</i></b>
                   </div>
                        <img src="/undraw_medicine_b1ol (1).png" alt="Description" className="content-image"/>
                        
                        <img src="/undraw_medical_care_movn (1).png" alt="Description" className="content-image"/>
                        <img src="/undraw_shopping_app_flsj.png" alt="Description" className="content-image"/>
                        <br/>
                        
                    </div>
                    <div className="content-right-1">
                        <ul>
                        <li><h2><b>Personal Care</b></h2>
                        <ul>
                            <li><b>Assistance with Bathing and Showering:</b> We provide support to ensure your hygiene needs are met with dignity and respect.</li>
                            <li><b>Dressing and Grooming:</b>Our team helps you with choosing appropriate clothing, dressing, and personal grooming tasks.</li>
                            <li><b>Toileting:</b>We offer discreet and respectful assistance with toileting needs.</li>
                        </ul>
                        </li>

                        <br/>
                        <li>
                            <h2><b>Mobility and Transfer Assistance</b></h2>
                            <ul>
                                <li><b>Support with Moving Around Your Home:</b>Our team helps you move safely and comfortably within your living space.</li>
                                <li><b>Assistance with Transfers:</b>We assist with transferring from bed to chair, wheelchair to toilet, etc., ensuring your safety.</li>
                            </ul>
                            </li>
                            <br/>
                        <li><h2><b>Meal Preparation and Feeding</b></h2>
                    
                        <ul>
                            <li><b>Meal Planning and Preparation:</b>We help you plan and prepare nutritious meals that meet your dietary needs and preferences.</li>
                            <li><b>Feeding Assistance:</b>Our support workers can assist with feeding if needed, ensuring you receive proper nutrition.
                            </li>
                        </ul>
                        </li>
                        <br/>
                        <li><h2><b>Medication Management</b></h2>
                        <ul>
                        <li><b>Medication Reminders: </b> We provide reminders and assistance to ensure you take your medications as prescribed.</li>
                        <li><b>Administration Support:</b>Our qualified staff can help with the administration of medications, following your healthcare plan.</li>
                        </ul>
                        </li>
                        <br/>
                        <li><h2><b>Household Tasks</b></h2>
                        <ul>
                            <li><b>Light Cleaning and Laundry:</b> We assist with household chores to keep your living environment clean and comfortable.</li>
                            <li><b>Shopping and Errands:</b>Our team can help with grocery shopping and running essential errands.</li>
                        </ul>
                        </li>
                        <br/>
                        <li><h2><b>Community Access</b></h2>
                        <ul>
                            <li><b>Support with Outings: </b>We can accompany you on community outings, helping you stay connected and engaged with your community.</li>
                            <li><b>Transportation Assistance: </b>Our team provides support with transportation to appointments, social activities, and other community engagements.</li>
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

export default ServicesPage;
