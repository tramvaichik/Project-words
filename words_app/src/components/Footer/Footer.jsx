import React from 'react';
import { Link } from "react-router-dom";
import Logo_f from "../public/logo_f.png";


export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footer_images'>
                <Link to="/">
                    <img src={Logo_f} className='footer_img' alt='logo' />
                </Link>
            </div>
            <div className="footer_info">
                <a href="https://www.instagram.com/sinemordji/'"><i className="fa fa-instagram fa-3x"></i> </a>
                <p className="footer_text"> &copy; Дина Гуринова </p>
            </div>
        </footer>
    );
}