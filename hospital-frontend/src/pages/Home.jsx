import React from 'react';
import { Link } from 'react-router-dom';
import gal1 from '../images/gal1.jpg';
import gal2 from '../images/gal2.jpg';
import gal3 from '../images/gal3.jpg';
import gal4 from '../images/gal4.jpg';
import gal5 from '../images/gal5.jpg';
 import gal6 from '../images/gal6.jpg';
import chiness from '../images/chiness.jpg';
import cute from '../images/cute.jpg';
import service1 from '../images/service1.jpg';
import service2 from '../images/service2.jpg';
import service3 from '../images/service3.jpg';
import choose1 from '../images/choose1.jpg';
import choose2 from '../images/choose2.jpg';
import choose3 from '../images/choose3.jpg';
import d1 from '../images/d1.png';
import d2 from '../images/d2.png';
import d3 from '../images/d3.png';
import d4 from '../images/d4.png';
import d5 from '../images/d5.png';
import d6 from '../images/d6.png';


const Home = () => {
  return (
    <>
      <div className="background-image">
        <div className="background-content">
          <h1>provide an exceptional <br /> patient experience</h1>
          <p>
            At LifeCare Hospital, your health and happiness are our priority.
            We aim to not only treat your medical needs but also to exceed
            your expectations with exceptional care and empathy.
          </p>
        </div>
      </div>

      <section className="gallery" id="gallery">
  <h1>Our Specialist</h1>
  <div className="main-gallery">
    {[
      { img: d1, name: "Dr. Pulkit Sharma", dept: "Medical Oncology" },
      { img: d2, name: "Dr. Rakhi Mehta", dept: "Psychiatry" },
      { img: d3, name: "Dr. Shailendra", dept: "Orthopaedics" },
      { img: d4, name: "Dr. Anita Goyal", dept: "Radiation Oncology" },
      { img: d5, name: "Dr. Meena Kumari", dept: "Gynecology" },
      { img: d6, name: "Dr. Anil Sinha", dept: "Cardiology" },
    ].map((doc, idx) => (
      <div className="inner-gallery" key={idx}>
        <img src={doc.img} alt={`doctor-${idx}`} />
        <h1 className="doc-name">{doc.name}</h1>
        
      </div>
    ))}
  </div>
</section>

      <section className="gallery" id="gallery">
        <h1>Gallery</h1>
        <div className="main-gallery">
          {[gal6, gal4, gal2, gal1, gal3, gal5].map((img, idx) => (
            <div className="inner-gallery" key={idx}>
              <img src={img} alt={`gallery-${idx}`} />
            </div>
          ))}
        </div>
      </section>

      <section className="our-services">
        <div className="service-content">
          <div className="left-service-content">
            <h1>Our special services</h1>
            
          </div>
          <div className="right-service-content">
            <div className="right-btn">
              <Link to="/Services">See all services</Link>
            </div>
          </div>
        </div>
        <div className="main-services">
          {[service1, service2, service3].map((img, idx) => (
            <div className="inner-services-content" key={idx}>
              <div className="service-icon">
                <img src={img} alt={`service-${idx}`} style={{ width: '50px', height: '50px', borderRadius: '10px' }} />
              </div>
              <h2>{['24X7 Pharmacy', 'ICU', 'Operation Theatre (OT)'][idx]}</h2>
              <p>
                {[
                  'Our in-house pharmacy is open round the clock for all your medication needs.',
                  'State-of-the-art Intensive Care Unit with continuous monitoring.',
                  'Well-equipped and sterilized OT for all kinds of surgeries.'
                ][idx]}
              </p>
            </div>
          ))}
        </div>
      </section>

      

      <section className="our-services">
        <div className="service-content">
          <div className="left-service-content">
            <h1>Why Choose Life Care Hopsital?</h1>
            
          </div>
          <div className="right-service-content">
            <div className="right-btn">
              <Link to="whychooseus">Choose US</Link>
            </div>
          </div>
        </div>
        <div className="main-services">
          {[choose1, choose2,choose3].map((img, idx) => (
            <div className="inner-services-content" key={idx}>
              <div className="service-icon">
                <img src={img} alt={`service-${idx}`} style={{ width: '50px', height: '50px', borderRadius: '10px' }} />
              </div>
              <h2>{['30+ Years Excellence', '700+ Doctors', '200+ Beds'][idx]}</h2>
              <p>
                {[
                  'Delivering trusted healthcare for over 30 years with a commitment to excellence.',
                  'A team of 700+ experienced doctors dedicated to your well-being.',
                  'Equipped with 200+ modern beds to ensure patient comfort and care.'
                ][idx]}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="about">
        <div className="main-about">
          <div className="inner-about">
            <div className="about-content">
              <h1>about us</h1>
              <p>
                At LifeCare, we take pride in our multidisciplinary team of healthcare
                professionals, including board-certified physicians, nurses, and support staff, who
                are committed to delivering personalized care tailored to each patient's needs.
              </p>
              <Link to="/aboutusreadmore">Read more</Link>
            </div>
          </div>
          <div className="inner-about">
            <div className="inner-about-image">
              <img src={chiness} alt="about" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
