import React from 'react';
import './Services.css'; // Reuse same CSS for consistent design
import {
  FaAward,
  FaUserMd,
  FaProcedures,
  FaHospital,
  FaHandsHelping,
  FaHeartbeat,
  FaStethoscope,
  FaClock
} from 'react-icons/fa';

const whyChooseData = [
  {
    icon: <FaAward />,
    title: "30+ Years of Excellence",
    desc: "Delivering trusted healthcare services with consistent quality and dedication.",
  },
  {
    icon: <FaUserMd />,
    title: "700+ Doctors",
    desc: "Highly experienced medical professionals across every specialty.",
  },
  {
    icon: <FaProcedures />,
    title: "200+ Beds",
    desc: "Modern infrastructure with over 200 comfortable and well-equipped beds.",
  },
  {
    icon: <FaHospital />,
    title: "Advanced Infrastructure",
    desc: "State-of-the-art medical equipment and patient-friendly facilities.",
  },
  {
    icon: <FaHandsHelping />,
    title: "24/7 Patient Support",
    desc: "Always available assistance and emergency help around the clock.",
  },
  {
    icon: <FaHeartbeat />,
    title: "Personalized Treatment",
    desc: "Compassionate and tailored care plans for every patient’s unique needs.",
  },
  {
    icon: <FaStethoscope />,
    title: "Comprehensive Care",
    desc: "From diagnosis to recovery, we provide end-to-end medical care services.",
  },
  {
    icon: <FaClock />,
    title: "Timely Services",
    desc: "Efficient appointment, diagnosis, and treatment with minimal wait time.",
  }
];

const WhyChooseUs = () => {
  return (
    <div className="services-page">
      <h1 className="services-heading">Why Choose LifeCare Hospital</h1>
      <div className="services-grid">
        {whyChooseData.map((item, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
