import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <header className="Header">
            <Link to='/'><img src="assets/images/CDLOGO.webp" alt="<h1>Claussy Designs</h1>" /></Link>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </header>
    )
}
export default Header