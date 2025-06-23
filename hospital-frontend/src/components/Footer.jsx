import React from 'react';
import logo from '../images/logo.png';

const Footer = () => {
  return (
   <footer className="footer">
           <div className="main-footer">
             <div className="inner-footer">
               <img src={logo} alt="footer-logo" />
             </div>
             <div className="inner-footer">
               <h2>other facility</h2>
               <a href="#">Nursing Homes</a>
               <a href="#">Mental Health Centers</a>
               <a href="#">Birth Centers</a>
               <a href="#">Music Therapy</a>
               <a href="#">Imaging and radiology centers</a>
             </div>
             <div className="inner-footer">
               <h2>Other Branches</h2>
               <a href="#">Himachal Pradesh</a>
               <a href="#">Delhi</a>
               <a href="#">Bangalore</a>
               <a href="#">Gujarat</a>
               <a href="#">Mumbai</a>
             </div>
             <div className="inner-footer">
               <h2>other hospital</h2>
               <a href="http://solankihospital.com/">Solanki Hospital</a>
               <a href="https://www.justdial.com/Alwar/Kamla-Nursing-Home">Kamla Nursing Home</a>
               <a href="https://www.justdial.com/Alwar/Harish-Hospital">Harish Hospital</a>
               <a href="https://www.justdial.com/Alwar/Sunil-Nursing-Home">Sunil Nursing Home</a>
               <a href="https://www.justdial.com/Alwar/Supreme-Hospital">Supreme Hospital</a>
             </div>
           </div>
         </footer>
  );
};

export default Footer;
