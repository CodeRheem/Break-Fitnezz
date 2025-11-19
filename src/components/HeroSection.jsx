import React from "react";
import bgImage from "../assets/victor-freitas-WvDYdXDzkhs-unsplash.jpg"

export default function HeroSection(){   
    return(
        <div className="relative h-[130vh] w-full overflow-hidden">
            {/* Background Image Layer */}
            <div 
                className="absolute inset-0 w-full h-full"
                style={{ 
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            />   
            <div className="absolute inset-0 bg-black/60">
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black">
                    <div className="relative z-10 h-full flex flex-col">
                        <header className="flex justify-between items-center px-8 py-6 bg-black/60">
                            <p className="text-2xl font-bold text-white font-serif">
                                <span className="text-green-600">Break Fitness</span>
                            </p>
                            
                            {/* Navigation */}
                            <nav>
                                <ul className="flex gap-6 text-amber-50 drop-shadow-[0_2px_8px_rgba(16,185,129,0.8)] font-medium font-[cursive]">
                                    <li>
                                        <a href="#classes" className="hover:text-green-600 transition-colors ">
                                            Classes
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#membership" className="hover:text-green-600 transition-colors">
                                            Membership
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#trainers" className="hover:text-green-600 transition-colors">
                                            Trainers
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#testimonials" className="hover:text-green-600 transition-colors">
                                            Testimonials
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#contactUs" className="hover:text-green-600 transition-colors">
                                            Contact Us
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </header>
                        
                        {/* Main Hero Content (Optional - add your content here) */}
                        <div className="flex-1 flex items-center justify-center">
                            <div className="text-center text-white p-3 rounded-4xl">
                                <h1 className="text-6xl font-bold mb-4">
                                    Break Boundaries, Achieve <span className="text-white">More!</span>
                                </h1>
                                <p className="text-sm mb-8">Join Break Fitness to push past your limits and reach new heights in your fitness journey. Start today and experience the difference.</p>
                                <div className="flex justify-center flex-row gap-7">
                                    <button className="bg-green-600 text-black border font-bold py-3 px-8 rounded-2xl">
                                        <a href="#contact">Start Your Tranformation</a>
                                    </button>
                                    <button className="hover:bg-white hover:text-black border text-white font-bold py-3 px-8 rounded-2xl">
                                        <a href="#membership">View Membership Options</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}