import React from 'react';
import './Services.css'; // Reusing the same styling
import {
  FaBrain,
  FaLungs,
  FaBone,
  FaHeart,
  FaBaby,
  FaTooth,
  FaUserNurse,
  FaMicroscope,
  FaXRay,
  FaFemale,
  FaUserShield,
  FaSyringe
} from 'react-icons/fa';

const departments = [
  {
    icon: <FaHeart />,
    title: "Cardiology",
    desc: "Expert care for heart-related conditions and treatments."
  },
  {
    icon: <FaBrain />,
    title: "Neurology",
    desc: "Comprehensive care for brain and nervous system disorders."
  },
  {
    icon: <FaLungs />,
    title: "Pulmonology",
    desc: "Advanced treatment for lung and respiratory issues."
  },
  {
    icon: <FaBone />,
    title: "Orthopaedics",
    desc: "Bone, joint, and muscle care with surgical excellence."
  },
  {
    icon: <FaBaby />,
    title: "Pediatrics",
    desc: "Specialized care for infants, children, and adolescents."
  },
  {
    icon: <FaTooth />,
    title: "Dentistry",
    desc: "Comprehensive oral health services and dental surgeries."
  },
  {
    icon: <FaUserNurse />,
    title: "Nursing Department",
    desc: "Professional nursing care and patient support services."
  },
  {
    icon: <FaMicroscope />,
    title: "Pathology",
    desc: "Accurate diagnostics through lab testing and analysis."
  },
  {
    icon: <FaXRay />,
    title: "Radiology",
    desc: "Imaging services like X-ray, MRI, CT scan, and ultrasound."
  },
  {
    icon: <FaFemale />,
    title: "Gynecology",
    desc: "Women's health, maternity care, and fertility treatment."
  },
  {
    icon: <FaUserShield />,
    title: "Psychiatry",
    desc: "Mental health services, counseling, and psychiatric care."
  },
  {
    icon: <FaSyringe />,
    title: "Anesthesiology",
    desc: "Pain management and anesthesia support for surgeries."
  }
];

const Departments = () => {
  return (
    <div className="services-page">
      <h1 className="services-heading">Hospital Departments</h1>
      <div className="services-grid">
        {departments.map((dept, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{dept.icon}</div>
            <h3>{dept.title}</h3>
            <p>{dept.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Departments;
