
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Pages
import AboutUsReadMore from './pages/aboutusreadmore';
import Services from './pages/Services';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import Appointement from './pages/Appointement';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Layout from './components/Layout';
import WhyChooseUs from './pages/whychooseus';
import AppointementForm from './pages/AppointementForm';
import Departments from './pages/Departments';







const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="aboutusreadmore" element={<AboutUsReadMore />} />
          <Route path="services" element={<Services />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="appointement" element={<Appointement />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="AppointementForm" element={<AppointementForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/whychooseus" element={<WhyChooseUs />} />
          <Route path="/departments" element={<Departments />} />


        </Route>
      </Routes>
    </Router>
  );
};

export default App;
