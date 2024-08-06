import React, { useState } from 'react';
import './Service3.scss';// Import your SCSS file
import { Button } from 'react-bootstrap';

const ServicesPage3 = () => {
    const [showContent, setShowContent] = useState(false);

    const handleReadMore = () => {
        setShowContent(true);
    };

    return (
        <div id="cover">
            <div className="jumbotron-3 jumbotron-fluid">
              
                <div className="container">
                    <h1 className="title display-3 text-center" style={{ fontWeight: 100 }}>
                    <i className="bi bi-car-front-fill"></i><br/><strong style={{ fontWeight: 600 }}>Travel and Transport assistance</strong>
                    </h1>
                    <p className="lead text-left">
                    Navigating your community with ease and confidence is vital for maintaining independence and staying connected. Our travel and transport assistance services are designed to help you get where you need to go safely and efficiently. Whether it's for appointments, social activities, or running errands, our team is here to support your travel needs. Our services include:
                    </p>
                    <Button className='btm-1' onClick={handleReadMore}>More Details</Button>
                </div>
            </div>

            {showContent && (
                <div className="content">
                    <div className="content-left-3">
                     <b><i>"Our travel and transport assistance services aim to empower you to travel with confidence, enhancing your independence and ability to participate fully in your community. Let us help you stay mobile and connected, no matter where you need to go."</i></b>
                     <br />
                        <img src="/undraw_order_ride_re_372k.svg" alt="Description" className="content-image"/>
                        <img src="/kk.svg" alt="Description" className="content-image"/>
                        <img src="/purple3.svg" alt="Description" className="content-image"/>
                    </div>
                    <div className="content-right-3">
                         
                        <ul>
                        
                        <li><h2><b>Transportation to Appointments</b></h2>
                        <ul>
                            <li><b>Medical Appointments:</b>Reliable transport to and from doctor's appointments, therapy sessions, and other medical visits.
                            </li>
                            <li><b>Therapies and Treatments:</b>Assistance with transportation to physiotherapy, occupational therapy, and other health treatments.
                            </li>
                            <li><b>Specialist Visits:</b>Support with getting to specialist appointments and hospital visits.
                            </li>
                           
                        </ul>
                        </li>

                        <br/>
                        <li>
                            <h2><b>Community Access</b></h2>
                            <ul>
                                <li><b>Social Outings:</b> Assistance with transport to social events, community activities, and gatherings with friends and family.</li>
                                <li><b>Recreational Activities:</b>Reliable transportation to recreational activities such as going to the gym, attending sports events, or visiting parks.</li>
                                <li><b>Educational and Vocational Activities:</b>Support with transport to classes, workshops, or vocational training sessions.</li>
                            </ul>
                            </li>
                            <br/>
                        <li><h2><b>Daily Errands and Shopping</b></h2>
                    
                        <ul>
                            <li><b>Grocery Shopping: </b> Transport and assistance with grocery shopping to ensure you have everything you need at home.</li>
                            <li><b>Running Errands:</b>Support with running essential errands such as picking up prescriptions, visiting the post office, or banking.

                            </li>
                            <li><b>Personal Shopping:</b>Assistance with shopping for clothing, personal items, and other necessities.

                           </li>
                          
                        </ul>
                        </li>
                        <br/>
                        <li><h2><b>Transport Support</b></h2>
                        <ul>
                        <li><b>Public Transport Assistance:</b> Guidance and support for using public transport safely and confidently, including navigating routes and timetables.</li>
                        <li><b>Accompanied Travel:</b> A support worker can accompany you on public transport or during travel to ensure your safety and comfort.</li>
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

export default ServicesPage3;
