/ src/components/Banner.jsx
import React from 'react';

const Banner = () => {
    return (
        <section className="relative h-screen flex items-center justify-center text-white mt-16">
            <div className="absolute inset-0 bg-[url('/images/banner-bg.jpg')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black/50"></div>
            </div>
            
            <div className="relative z-10 text-center px-4">
                <h1 className="text-7xl md:text-8xl font-satisfy text-primary mb-8">
                    Find your Next tour!
                </h1>
                
                <div className="space-y-6">
                    <select className="w-full max-w-md px-6 py-3 rounded text-dark font-roboto">
                        <option value="">Select Destination</option>
                        {['London', 'Canada', 'Monaco', 'France', 'Japan', 'Switzerland', 'Seoul']
                            .map(city => (
                                <option key={city} value={city.toLowerCase()}>{city}</option>
                            ))}
                    </select>
                    
                    <div>
                        <a href="#book" 
                           className="inline-block px-8 py-3 bg-primary text-dark font-barlow uppercase rounded hover:bg-yellow-400 transition-colors">
                            Book Now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;