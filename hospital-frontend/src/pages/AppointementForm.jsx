import React, { useState } from 'react';
import './AppointementForm.css';
import axios from 'axios';

const AppointementForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    date: '',
    gender: '',
    paymentMethod: '', // ✅ New field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/appointments', formData);
      alert('Appointment submitted successfully!');
      console.log(response.data);
    } catch (error) {
      alert('Error submitting appointment.');
      console.error(error);
    }
  };

  return (
    <div className="form-wrapper">
      <div className="container">
        <div className="progress">Step 1 of 1</div>
        <h1>Book Your Appointment</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label htmlFor="date">Preferred Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <label>Gender</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === 'Male'}
                onChange={handleChange}
              /> Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === 'Female'}
                onChange={handleChange}
              /> Female
            </label>
          </div>

          {/* ✅ Payment Method Section */}
          <label>Payment Method</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="UPI"
                checked={formData.paymentMethod === 'UPI'}
                onChange={handleChange}
              /> UPI
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="Credit/Debit Card"
                checked={formData.paymentMethod === 'Credit/Debit Card'}
                onChange={handleChange}
              /> Credit/Debit Card
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="Cash"
                checked={formData.paymentMethod === 'Cash'}
                onChange={handleChange}
              /> Cash
            </label>
          </div>

          <button type="submit" className="next-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AppointementForm;
