import React from 'react';
import { FaGithub, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';


function Footer() {

  return (
    <footer className="">
      <hr />
      <div className="position-relative m-4">
        <h1 className="position-absolute top-0 start-50 translate-middle">
          <a href="https://github.com/druharo"><FaGithub /></a>
          <a href="https://twitter.com/druharo"><FaTwitterSquare /></a>
          <a href="https://www.linkedin.com/in/denis-ruharo-913a1b16/linkedin"><FaLinkedin /></a>
        </h1> 
      </div>
    </footer >
  );
}

export default Footer;