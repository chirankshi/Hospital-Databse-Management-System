import React from 'react';
import './Services.css'; // Custom styling
import {
  FaAmbulance,
  FaUserMd,
  FaBriefcaseMedical,
  FaHeartbeat,
  FaTint,
  FaProcedures,
  FaStethoscope,
  FaSyringe,
  FaClinicMedical,
  FaBaby,
  FaChair,
  FaUserNurse
} from 'react-icons/fa';

const services = [
  {
    icon: <FaBriefcaseMedical />,
    title: "24x7 Pharmacy",
    desc: "Our in-house pharmacy is open round the clock for all your medication needs."
  },
  {
    icon: <FaAmbulance />,
    title: "Ambulance Service",
    desc: "Emergency ambulance available 24/7 with advanced life-saving equipment."
  },
  {
    icon: <FaUserMd />,
    title: "24x7 Doctors",
    desc: "Doctors from all departments are available at any time for emergency care."
  },
  {
    icon: <FaStethoscope />,
    title: "Outpatient Department (OPD)",
    desc: "Consult experienced doctors across specialties in our OPD."
  },
  {
    icon: <FaProcedures />,
    title: "ICU",
    desc: "State-of-the-art Intensive Care Unit with continuous monitoring."
  },
  {
    icon: <FaBaby />,
    title: "NICU",
    desc: "Neonatal Intensive Care Unit designed to provide advanced care to newborns."
  },
  {
    icon: <FaTint />,
    title: "Blood Bank",
    desc: "Licensed blood bank with all necessary blood groups available."
  },
  {
    icon: <FaSyringe />,
    title: "Operation Theatre (OT)",
    desc: "Well-equipped and sterilized OT for all kinds of surgeries."
  },
  {
    icon: <FaHeartbeat />,
    title: "Cardiac Care",
    desc: "Advanced cardiac monitoring and treatment for heart-related conditions."
  },
  {
    icon: <FaClinicMedical />,
    title: "Emergency Ward",
    desc: "Fully functional emergency ward for quick treatment and triage."
  },
  {
    icon: <FaUserNurse />,
    title: "Nursing Staff",
    desc: "Highly trained nursing staff available 24/7 for patient support and care."
  },
  {
    icon: <FaChair />,
    title: "Waiting Room",
    desc: "Spacious and comfortable waiting area for patients and their families."
  }
];

const Services = () => {
  return (
    <div className="services-page">
      <h1 className="services-heading">Our Main Hospital Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
