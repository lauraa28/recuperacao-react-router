import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>DIGITAL <span>PROJECT</span></h2>
        </div>
        <div className="footer-section">
          <h4>Information</h4>
          <p>Main</p>
          <p>Gallery</p>
          <p>Projects</p>
          <p>Certifications</p>
          <p>Contacts</p>
        </div>
        <div className="footer-section">
          <h4>Contacts</h4>
          <p>📍 1234 Main Street, Building 4</p>
          <p>📞 +55 (11) 99999-9999</p>
          <p>✉️️ samplemail@gmail.com</p>
        </div>
        <div className="footer-section">
          <h4>Social Media</h4>
          <p>Facebook / Twitter / LinkedIn</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 All Rights Reserved</p>
      </div>
    </footer>
  );
}