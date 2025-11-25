import React from "react";

export default function AboutFitness() {
    return (
        <div className="font-poppins bg-black text-white py-12">
            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 px-4 md:px-12">
                <h2 className="text-4xl md:text-5xl w-full md:w-2/5 font-extrabold text-center md:text-left">About Break Fitness</h2>
                <p className="w-full md:w-3/5 font-medium text-center md:text-left">
                    At Break Fitness, we are more than a gym—we are a community. With state-of-the-art equipment, expert trainers, and a welcoming atmosphere, we help you break barriers and achieve greatness. Whether you're a beginner or seasoned athlete, we offer personalized support to ensure every workout brings you closer to your goals.
                </p>
            </div>
            <div className="flex flex-col md:flex-row gap-6 mt-12 px-4 md:px-12">
                <div className="flex flex-col gap-1 items-center justify-center w-full md:w-1/4">
                    <h3 className="text-5xl md:text-7xl text-accent font-bold text-green-600">10+</h3>
                    <p className="text-sm text-center">Years of Excellence</p>
                </div>
                <div className="flex flex-col gap-1 items-center justify-center w-full md:w-1/4">
                    <h3 className="text-5xl md:text-7xl text-accent font-bold text-green-600">5000+</h3>
                    <p className="text-sm text-center">Members Served</p>
                </div>
                <div className="flex flex-col gap-1 items-center justify-center w-full md:w-1/4">
                    <h3 className="text-5xl md:text-7xl text-accent font-bold text-green-600">50+</h3>
                    <p className="text-sm text-center">Classes Weekly</p>
                </div>
                <div className="flex flex-col gap-1 items-center justify-center w-full md:w-1/4">
                    <h3 className="text-5xl md:text-7xl text-accent font-bold text-green-600">13</h3>
                    <p className="text-sm text-center">Awards Won</p>
                </div>
            </div>
        </div>
    );
}