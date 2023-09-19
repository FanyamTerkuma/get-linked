import React from 'react';
import Logo from './Logo';
import Button from './Button';

function Navbar() {
    return (
        <nav className='sticky top-0 z-40 bg-blue py-6 px-3 flex items-center border-b border-gray-600'>
            <Logo />
            <div className='mx-auto flex gap-6 cursor-pointer'>
                <p>Timeline</p>
                <p>Overview</p>
                <p>FAQs</p>
                <p>Contact</p>
            </div>
            <Button buttonType='button' />
        </nav>
    );
}

export default Navbar;
