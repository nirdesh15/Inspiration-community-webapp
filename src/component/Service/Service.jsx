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
            <div className="jumbotron jumbotron-fluid">
              
                <div className="container">
                    <h1 className="title display-3 text-center" style={{ fontWeight: 100 }}>
                        <i className="bi bi-prescription2"></i> Service <br/><strong style={{ fontWeight: 600 }}>Daily Personal Activities</strong>
                    </h1>
                    <p className="lead text-left">
                        At Inspiration Community Care, we offer 24/7 home care, mobility assistance, continence care, domestic chores, and meal preparation to enhance the quality of life for individuals with disabilities. Our compassionate caregivers provide personalized care plans, ensuring safety, comfort, and independence at home. Contact us today to learn how we can support you or your loved one.
                    </p>
                    <Button className='btm-1' onClick={handleReadMore}>Read More</Button>
                </div>
            </div>

            {showContent && (
                <div className="content">
                    <div className="content-left">
                        <img src="/undraw_medical_care_movn.png" alt="Description" className="content-image"/>
                        <img src="/3.svg" alt="Description" className="content-image"/>
                        <img src="/undraw_Cooking_p7m1.png" alt="Description" className="content-image"/>
                    </div>
                    <div className="content-right">
                        <h1>Our Community Care Services</h1>
                        <p>
                            <ul>
                                <li><strong>1. Continuous Monitoring:</strong> Our caregivers are available around the clock to provide constant supervision and ensure the safety of your loved ones.</li>
                                <li><strong>Personalized Care Plans:</strong> We tailor our services to meet the specific needs of each individual, offering customized care that evolves with their needs.</li>
                                <li><strong>Companionship:</strong> Our caregivers provide emotional support and companionship, reducing feelings of loneliness and isolation.</li>
                                <li><strong>Medical Support:</strong> We assist with medication management, wound care, and other medical needs as prescribed by healthcare professionals.</li>
                                <li><strong>2. Mobility Assistance:</strong>
                                    <ul>
                                        <li><strong>Ambulation Support:</strong> Helping individuals move safely within their homes, ensuring they can navigate their environment with confidence.</li>
                                        <li><strong>Transfer Assistance:</strong> Providing support for safe transfers between bed, wheelchair, and other locations.</li>
                                        <li><strong>Exercise and Rehabilitation:</strong> Assisting with physical therapy exercises to enhance strength and mobility.</li>
                                        <li><strong>Equipment Management:</strong> Ensuring the proper use and maintenance of mobility aids such as walkers, canes, and wheelchairs.</li>
                                    </ul>
                                </li>
                                <li><strong>3. Continence Care:</strong>
                                    <ul>
                                        <li><strong>Personal Hygiene:</strong> Assisting with regular toileting routines to maintain dignity and comfort.</li>
                                        <li><strong>Incontinence Management:</strong> Providing and changing incontinence products like pads or catheters.</li>
                                        <li><strong>Skin Care:</strong> Preventing and treating skin irritations and infections caused by incontinence.</li>
                                        <li><strong>Support and Education:</strong> Educating individuals and their families about best practices for continence care.</li>
                                    </ul>
                                </li>
                                <li><strong>4. Domestic Chores:</strong>
                                    <ul>
                                        <li><strong>Cleaning:</strong> Performing general cleaning tasks, including dusting, vacuuming, and mopping, to ensure a clean and healthy living environment.</li>
                                        <li><strong>Laundry:</strong> Handling all laundry tasks, from washing and drying to folding and ironing clothes.</li>
                                        <li><strong>Dishwashing:</strong> Keeping the kitchen clean by washing dishes and sanitizing surfaces.</li>
                                        <li><strong>Organization:</strong> Assisting with decluttering and organizing living spaces to create a safe and orderly home.</li>
                                    </ul>
                                </li>
                                <li><strong>5. Meal Preparation:</strong>
                                    <ul>
                                        <li><strong>Meal Planning:</strong> Crafting meal plans that cater to individual dietary needs and preferences.</li>
                                        <li><strong>Grocery Shopping:</strong> Purchasing fresh and necessary ingredients to prepare nutritious meals.</li>
                                        <li><strong>Cooking:</strong> Preparing and cooking meals in a safe and hygienic manner.</li>
                                        <li><strong>Feeding Assistance:</strong> Helping individuals eat if they are unable to do so independently.</li>
                                    </ul>
                                </li>
                            </ul>
                           
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ServicesPage;
