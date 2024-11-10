// Footer.tsx or Footer.jsx
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import the GitHub and LinkedIn icons
import '../Footer/Footer.css'; // Import the global CSS file

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="iconContainer">
        <a 
          href="https://github.com/umaimajaffer?tab=repositories"
          target="_blank" 
          rel="noopener noreferrer" 
          className="iconLink"
        >
          <FaGithub size={30} /> {/* GitHub icon */}
        </a>
        <a 
          href="https://www.linkedin.com/in/your-linkedin-username" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="iconLink"
        >
          <FaLinkedin size={30} /> {/* LinkedIn icon */}
        </a>
      </div>
      <p className="footerText">Follow us on social media and stay updated!</p>
      <p className="footerText">© 2024 Your Company. All rights reserved.</p>
    </div>
  );
};

export default Footer;
