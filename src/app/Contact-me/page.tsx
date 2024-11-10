import Image from 'next/image';
import "../Contact-me/contact.css"; // Assuming CSS is stored here
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Icons for GitHub, LinkedIn, and Email

export default function Contact() {
  return (
    <div className="new-contact-container">
      {/* Contact heading */}
      <h1 className="new-contact-heading">Contact Me</h1>

      <div className="new-contact-content">
        {/* Left side with heading and paragraph */}
        {/* Right side with the image */}
        <div className="new-image-wrapper">
          <Image
            src="/images/contact.png" // Update with your image path
            alt="Contact Icon"
            width={300}
            height={300}
          />
        </div>
      </div>

      {/* Contact form */}
      <form className="new-contact-form">
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input 
            type="text" 
            id="fullName" 
            name="fullName" 
            placeholder="Enter your full name"
            className="new-form-control" 
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Enter your email"
            className="new-form-control" 
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea 
            id="message" 
            name="message" 
            placeholder="Write your message here"
            className="new-form-control"
            rows={4}
            required
          ></textarea>
        </div>

        <button type="submit" className="new-btn-submit">Send Message</button>
      </form>

      {/* Bottom section with contact alternatives */}
      <div className="new-bottom-section">
        <p>You can also contact me via:</p>
        <ul>
          <li>
            <a href="umaimajaffer2003@gmail.com">
              <FaEnvelope size={24} /> Email
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/example" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} /> LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/umaimajaffer?tab=repositories" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} /> GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
