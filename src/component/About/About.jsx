import React from 'react';
import './About.scss';

const About = () => {
  return (
    <div id="parallax-world-of-ugg">
      <section>
        <div className="title">
          <h3>Dream . Believe . Live</h3>
          <h1>Inspiration Community Care</h1>
          <br />
          <h3>About Us</h3>
        </div>
      </section>

      <section>
        <div className="parallax-one">
          <h2>Who are we?</h2>
        </div>
      </section>

      <section>
        <div className="block">
          <img
            src="/logo.png" // Replace with your image path
            alt="Logo" // Add alt text for accessibility
            className="header-image"
          />
          <div className="text-content">
            <p><span className="first-character sc">A</span>t Inspiration Community Care, we pride ourselves on being an experienced team dedicated to providing exceptional disability care and support to NDIS participants. Our mission is to foster meaningful connections with each participant, ensuring that we understand their unique needs and aspirations. By offering personalized and compassionate care, we strive to empower our participants, helping them to live fulfilling lives and achieve their personal goals. Our commitment to quality is evident in every aspect of our service, from the initial consultation to the ongoing support we provide.</p>
            <p className="line-break margin-top-10"></p>
            <p className="margin-top-10">We believe that every individual, regardless of their disability, deserves to be treated with respect, dignity, and empathy. Our team is comprised of highly trained professionals who are passionate about making a positive impact in the lives of those we serve. We work closely with participants and their families to develop tailored care plans that address specific needs and preferences. Whether it's assisting with daily activities, providing therapeutic support, or facilitating social engagement, we are dedicated to helping our participants lead independent and enriching lives. At Inspiration Community Care, your goals are our goals, and we are here to support you every step of the way.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="parallax-two">
          <h2>Who do we support?</h2>
        </div>
      </section>

      <section>
        <div className="block">
          <img
            src="/ndis.png" // Replace with your image path
            alt="NDIS Logo" // Add alt text for accessibility
            className="header-image"
          />
          <div className="text-content">
            <p><span className="first-character ny">W</span>e support individuals with intellectual, mental, and physical disabilities, ranging in age from 7 to 65+ years, throughout the Sydney region. Our dedication to providing quality care is driven by our passion for making a meaningful difference in the lives of our participants. We aim to be the trusted provider of choice for disability services under the National Disability Insurance Scheme (NDIS).</p>
            <p className="line-break margin-top-10"></p>
            <p className="margin-top-10">The NDIS is a landmark initiative in Australia designed to support people with disabilities by providing them with the necessary services and support to lead independent and meaningful lives. At Inspiration Community Care, we align our services with the core principles of the NDIS, ensuring that every participant receives individualized support that caters to their unique needs and goals. We work collaboratively with participants and their families to create comprehensive care plans that maximize their NDIS funding and enhance their quality of life.
</p>
<p className="line-break margin-top-10"></p>
            <p className="margin-top-10">At Inspiration Community Care, we are committed to building strong relationships with our participants and their families. We believe in the importance of trust, transparency, and open communication. Our goal is to not only meet but exceed the expectations of those we serve, fostering a supportive and inclusive environment where everyone can thrive. As we continue to expand our services across Sydney, we remain dedicated to upholding the highest standards of care and becoming the preferred provider for NDIS participants in our community.
</p>
          </div>
        </div>
      </section>

      <section>
        <div className="parallax-three">
          <h2>Purpose & Values</h2>
        </div>
      </section>

      <section className="cards-container">
        <div className="card">
          <h2>Mission</h2>
          <p>Our mission is to foster strong community partnerships that prioritize healthcare options and support NDIS participants.</p>
        </div>

        <div className="card">
          <h2>Vision</h2>
          <p>To create a resilient and empowered community in partnership to support NDIS participants to live a great life with choice.</p>
        </div>

        <div className="card">
          <h2>Values</h2>
          <p>Connected, integrity and Respect</p>
        </div>
      </section>

      <section>
        <div className="parallax-four">
          <h2>Meet Our Team</h2>
        </div>
      </section>

      <section>
        <div className="block">
          {/* Example of a person component */}
          <div className="person">
            <div className="container">
              <div className="container-inner">
                <img className="circle" src="/ninja.jpeg" alt="Profile" />
              </div>
            </div>
            <div className="divider"></div>
            <div className="name">Ninja Pandey</div>
            <br></br>
            <h3>Director</h3>
            
            
          </div>
          <div className="text-content">
            <p><span className="first-character sc">N</span>inja is an experienced registered nurse with over a decade of dedicated service in the community and aged care sector. Throughout her career, she has provided care and support to a wide range of individuals from diverse backgrounds, helping them achieve their goals and lead fulfilling lives.</p>
           
            <p className="margin-top-10">At “Inspiration Community Care,” Ninja plays a crucial role as a compassionate and competent leader. Her extensive knowledge and unwavering commitment to improving the lives of those in need set the standard for the entire team. Under her guidance, the organization prioritizes the delivery of high-quality care and continually strives for excellence.</p>
           
            <p className="margin-top-10">Ninja’s passion for assisting others is evident in her work. She establishes meaningful connections with people from all walks of life, ensuring that their unique needs are met. Her leadership is characterized by both her kindness and her exceptional skill in providing care. She not only excels in her role but also empowers her team to excel, ensuring that everyone receives the best possible care.</p>
           
            <p className="margin-top-10">The combination of Ninja’s expertise and her genuine care for people makes “Inspiration Community Care” an outstanding place for those seeking support. The organization is committed to delivering top-notch services and creating a positive impact on the lives of individuals and families. Ninja is like a caring superhero, always ready to lend a hand and help others lead happier, healthier lives.</p>
          </div>
        </div>
      </section>
      <section>
       
        <div className="block">
          <img
            src="/undraw_medical_care_movn.png" // Replace with your image path
            alt="nurse" // Add alt text for accessibility
            className="header-image"
          />
          <div className="text-content">
            <h1>Our Staff</h1>
            <br></br>
            <p><span className="first-character ny">W</span>e have an experienced team including qualified Registered nurses and qualified support workers.We prioritize the health and safety of our participants above all else. That’s why we have made sure that all of our care providers are:</p>
            
            <p className="margin-top-10">
            <li>Fully vaccinated.</li>
            <li>Hold valid police check and working with children check</li>
            <li>Hold NDIS worker screening check</li>
            <li>First aid and CPR trained</li>
            <li>WHS trained</li></p>

          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
