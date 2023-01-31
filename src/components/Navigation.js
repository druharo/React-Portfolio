import React from 'react';

function Navigation() {
    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><a className="nav-link" href="/">About me</a></li>
                <li className="nav-item"><a className="nav-link" href="/portfolio">Portfolio</a></li>
                <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
                <li className="nav-item"><a className="nav-link" href="/resume">Resume</a></li>
            </ul>
        </div>
    )
}

export default Navigation;
