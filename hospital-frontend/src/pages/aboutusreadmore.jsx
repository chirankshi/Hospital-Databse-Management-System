import React from 'react';
import { Link } from 'react-router-dom';
import './aboutusreadmore.css'; // External CSS file for styling

function About() {
  return (
    <>
      <header className="about-header">
        <h1>About Us</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <section id="about">
        <div className="container">
          <h2>Welcome to Life Care</h2>
          <p>
            At Life Care, we are dedicated to providing compassionate and high-quality healthcare to our community.
            Since <strong>[year established]</strong>, we have been committed to meeting the healthcare needs of our
            patients with professionalism and expertise. Our state-of-the-art facilities combined with a team of
            highly skilled medical professionals ensure that you receive the best possible care in a supportive environment.
          </p>

          <h3>Our Mission</h3>
          <p>
            Our mission is to improve the health and well-being of the individuals and communities we serve. We strive
            to achieve this by delivering exceptional healthcare services, advancing medical knowledge through research
            and education, and promoting wellness initiatives in our community.
          </p>

          <h3>Our Vision</h3>
          <p>
            To be recognized as a leading healthcare provider, known for our commitment to patient-centered care,
            medical innovation, and community health.
          </p>

          <h3>Core Values</h3>
          <ul>
            <li><strong>Compassion:</strong> We treat each patient with empathy, dignity, and respect.</li>
            <li><strong>Excellence:</strong> We strive for the highest standards of quality and safety in everything we do.</li>
            <li><strong>Integrity:</strong> We uphold ethical practices and transparency in our interactions.</li>
            <li><strong>Collaboration:</strong> We work together as a team and with our community to achieve the best outcomes.</li>
            <li><strong>Innovation:</strong> We embrace new ideas and technologies to continually improve healthcare delivery.</li>
          </ul>

          <h3>Our Services</h3>
          <p>
            Life Care offers a comprehensive range of medical services, including emergency care, specialty care,
            surgical services, diagnostic imaging, rehabilitation services, and maternity care.
          </p>

          <h3>Community Involvement</h3>
          <p>
            We are deeply rooted in our community and actively participate in health education programs, outreach
            initiatives, and partnerships that promote wellness and preventive care.
          </p>

          <h3>Contact Us</h3>
          <p>
            We welcome you to Life Care. For more information about our services or to schedule an appointment,
            please contact us at <strong>[phone number]</strong> or visit our <Link to="/contact">contact page</Link>.
          </p>
        </div>
      </section>

      <footer className="about-footer">
        <p>&copy; 2024 Life Care Hospital. All rights reserved.</p>
      </footer>
    </>
  );
}

export default About;
