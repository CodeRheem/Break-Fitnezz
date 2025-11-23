import React from "react";

export default function AboutFitness() {
    return (
        <div className="font-poppins bg-black h-[70vh] text-white">
            <div className="w-full flex flex-row items-center justify-between gap-16 md:flex-row px-12">
                <h2 className="text-5xl w-full md:w-2/5 font-extrabold">About Break Fitness</h2>
                <p className="w-full md:w-3/5 font-medium">
                    At Break Fitness, we are more than a gym—we are a community. With state-of-the-art equipment, expert trainers, and a welcoming atmosphere, we help you break barriers and achieve greatness. Whether you're a beginner or seasoned athlete, we offer personalized support to ensure every workout brings you closer to your goals.
                </p>
            </div>
            <div className="flex flex-row gap-6 tb:flex-row mt-12 px-12">
                <div className="flex flex-col gap-1 items-center justify-center w-full md:w-1/4">
                    <h3 className="text-7xl tb:text-3xl lg:text-7xl text-accent font-bold text-green-600">10+</h3>
                    <p className="text-sm text-center">Years of Excellence</p>
                </div>
                <div className="flex flex-col gap-1 items-center justify-center w-full md:w-1/4">
                    <h3 className="text-7xl tb:text-3xl lg:text-7xl text-accent font-bold text-green-600">5000+</h3>
                    <p className="text-sm text-center">Members Served</p>
                </div>
                <div className="flex flex-col gap-1 items-center justify-center w-full md:w-1/4">
                    <h3 className="text-7xl tb:text-3xl lg:text-7xl text-accent font-bold text-green-600">50+</h3>
                    <p className="text-sm text-center">Classes Weekly</p>
                </div>
                <div className="flex flex-col gap-1 items-center justify-center w-full md:w-1/4">
                    <h3 className="text-7xl tb:text-3xl lg:text-7xl text-accent font-bold text-green-600">13</h3>
                    <p className="text-sm text-center">Awards Won</p>
                </div>
            </div>
        </div>
    );
}