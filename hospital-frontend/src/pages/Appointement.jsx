import React from 'react';
import './Appointement.css';
import { useNavigate } from 'react-router-dom'; // ✅ for navigation
import Navbar from '../components/Navbar';
import doctorImg from '../images/doctor.png';
import Footer from '../components/Footer';
import AppointementForm from '../pages/AppointementForm';

const Appointement = () => {
  const navigate = useNavigate();
  const handleBookClick = () => {
    navigate('/AppointementForm'); // ✅ redirect to form page
  };

  return (
    <>
      

      <div className="appointment-hero">
        <div className="hero-left">
          <h1>Book Your Doctor Appointment Online.</h1>
          <p>
            A Healthier Tomorrow Starts Today: Schedule Your Appointment!
            <br />
            Your Wellness, Our Expertise: Set Up Your Appointment Today.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={handleBookClick}>
              Book An Appointment
            </button>
            
          </div>
        </div>

        <div className="hero-right">
          <img src={doctorImg} alt="Doctor" />
        </div>
      </div>

      
    </>
  );
};

export default Appointement;
