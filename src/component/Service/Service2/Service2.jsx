import React, { useState } from 'react';
import './Service2.scss';// Import your SCSS file
import { Button } from 'react-bootstrap';

const ServicesPage2 = () => {
    const [showContent, setShowContent] = useState(false);

    const handleReadMore = () => {
        setShowContent(true);
    };


    return (
        <div id="cover">
            <div className="jumbotron jumbotron-fluid">
              
                <div className="container">
                    <h1 className="title display-3 text-center" style={{ fontWeight: 100 }}>
                        <i className="bi bi-prescription2"></i> Service <br/><strong style={{ fontWeight: 600 }}>Household Task</strong>
                    </h1>
                    <p className="lead text-left">
                    Maintaining a clean and organized home is essential for a comfortable and stress-free living environment. Our household task services are designed to support you with everyday chores, ensuring your home remains a safe and welcoming space. Our dedicated support workers can assist with a variety of household tasks, tailored to your needs and preferences.
                    </p>
                    <Button className='btm-1' onClick={handleReadMore}>More Details</Button>
                </div>
            </div>

            {showContent && (
                <div className="content">
                    <div className="content-left-2">
                     <b><i>"Our household task services are designed to make your daily life easier and more manageable. Let us help you maintain a comfortable and organized home, giving you more time and energy to focus on the activities you enjoy."</i></b><br/>
                        <img src="/undraw_Clean_up_re_504g.png" alt="Description" className="content-image"/>
                        <img src="/undraw_heavy_box_agqi.png" alt="Description" className="content-image"/>
                        <img src="/undraw_Cooking_p7m1 (1).png" alt="Description" className="content-image"/>
                    
                    </div>

                    <div className="content-right">
                        
                        <ul>
                        
                        <li><h2><b>Cleaning and Tidying</b></h2>
                        <ul>
                            <li><b>Regular Cleaning:</b> Vacuuming, dusting, mopping, and general tidying to keep your home clean and hygienic.</li>
                            <li><b>Bathroom and Kitchen Cleaning: </b> Thorough cleaning of bathrooms and kitchens to maintain hygiene and safety.
                            </li>
                           
                        </ul>
                        </li>

                        <br/>
                        <li>
                            <h2><b>Laundry</b></h2>
                            <ul>
                                <li><b>Washing and Drying</b> Assistance with washing, drying, and folding clothes and linens.</li>
                                <li><b>Ironing:</b> Ironing clothes to keep them looking neat and presentable.</li>
                                <li><b>Changing Bed Linens:</b> Regularly changing and making beds with fresh linens.</li>
                            </ul>
                            </li>
                            <br/>
                        <li><h2><b>Meal Preparation</b></h2>
                    
                        <ul>
                            <li><b>Planning and Preparing Meals:</b> Assistance with planning and preparing nutritious meals that suit your dietary needs and preferences.</li>
                            <li><b>Cooking:</b>Cooking meals to ensure you have healthy and delicious food ready to eat.

                            </li>
                            <li><b>Meal Storage:</b>Properly storing meals and leftovers to maintain freshness and safety.
                            </li>
                        </ul>
                        </li>
                        <br/>
                        <li><h2><b>Shopping and Errands</b></h2>
                        <ul>
                        <li><b>Grocery Shopping:</b> Assistance with creating shopping lists and purchasing groceries.</li>
                        <li><b>Running Errands:</b>Support with running essential errands such as picking up prescriptions, posting mail, and other necessary tasks.</li>
                        </ul>
                        </li>
                        <br/>
                        <li><h2><b>Home Organization
                        </b></h2>
                        <ul>
                            <li><b>Decluttering:</b> Helping you organize and declutter your living space to create a more functional and pleasant environment.
                            </li>
                            <li><b>Storage Solutions: </b>Assisting with finding and implementing effective storage solutions for better organization.</li>
                            <p> <p>Our household task services are designed to make your daily life easier and more manageable. Let us help you maintain a comfortable and organized home, giving you more time and energy to focus on the activities you enjoy.</p></p>
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

export default ServicesPage2;
