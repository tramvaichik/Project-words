import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../public/logo.png";
// import Button from './Button';
// import { ThemeContextConsumer } from './themeContext';
// 

export default function Header() {
    return (
        <header className='app_header'>
            <nav className='app_nav'>
                <div className='app_images'>
                    <Link to="/" className='app_img_a'>
                        <img src={Logo} className='app_img' alt='logo' />
                    </Link>
                </div>
                <div className='app_items'>
                    <ul className='app_list'>
                        <li className='app_link'>
                            <Link to="/" className='app_a'>Home</Link>
                        </li>
                        <li className='app_link'>
                            <Link to="/games" className='app_a'>Game</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}