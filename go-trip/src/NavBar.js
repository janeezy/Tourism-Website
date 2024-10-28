// src/components/Navbar.jsx
import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full bg-white/90 shadow-md z-50">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="text-4xl font-satisfy text-primary">Go Trip</div>
                
                <div className="lg:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>

                <ul className={`lg:flex gap-8 font-barlow ${isMenuOpen ? 'flex flex-col absolute top-full left-0 w-full bg-white p-4' : 'hidden'}`}>
                    {['Home', 'Tours', 'Package', 'Blog', 'About Us', 'Contact Us'].map((item) => (
                        <li key={item}>
                            <a href={`#${item.toLowerCase()}`} 
                               className="text-dark hover:text-primary transition-colors uppercase">
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
