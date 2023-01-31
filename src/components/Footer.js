import React from "react";
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <hr />
      <a href="https://github.com/druharo">
        <FaGithub />
      </a>
      <a href="https://twitter.com/druharo">
        {" "}
        <FaTwitterSquare />
      </a>
      <a href="https://www.linkedin.com/in/denis-ruharo-913a1b16/linkedin">
        <FaLinkedin />
      </a>
    </footer>
  );
}

export default Footer;
