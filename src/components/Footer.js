import React from 'react';
import { FaGithub, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';


function Footer() {
  
  return (
    <div className="footer">
      <ul>
        <li><a href="https://github.com/druharo"><FaGithub /></a></li>
        <li><a href="https://twitter.com/druharo"> <FaTwitterSquare /></a></li>
        <li><a href="https://www.linkedin.com/in/denis-ruharo-913a1b16/linkedin"><FaLinkedin /></a></li>
      </ul>
    </div>
  );
}

export default Footer;