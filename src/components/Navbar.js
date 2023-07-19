// Navbar.js
import React from 'react';
import logo from '../logo.svg';
import "../App.css"

export default function Navbar(){
    return (
        <div className='fixed z-50 bg-dark-500 w-full top-0 left-0 px-8 py-4 lg:px-20 xl:px-36'>
            <div className='flex justify-between items-center text-white'>
                <ul className='hidden md:flex'>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#honors">Honors</a></li>
                    <li><a href="#cert">Certifications</a></li>                </ul>
            </div>
        </div>
    )
}
