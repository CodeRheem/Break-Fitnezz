import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function SubPayment() {
  return (
    <div className="font-poppins text-white">
      <section>
        <div className="bg-black px-4 py-16">
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 mb-12 px-10 py-10">
            <p className="w-full md:w-2/5 font-medium text-lg">
              Pick a plan tailored to your fitness goals and lifestyle. Each membership offers unique benefits to help you break limits and achieve more.
            </p>
            <h2 className="text-4xl w-full md:w-3/5 font-extrabold">
              Perfect Plans for your Fitness Goals.
            </h2>
          </div>
          <div className="flex justify-center flex-row gap-10 px-10">
            <div className="border rounded p-3 w-90 h-80 mt-2">
                <h2 className="text-2xl font-extrabold">Basic</h2>
                <h3 className="text-2xl font-extrabold mb-4">$30 <span className="font-light text-2">/month</span></h3>
                <hr />
                <ul className="p-4">
                    <li className="flex items-center gap-2 mb-1">
                        <CheckCircleIcon className="w-8 h-5 text-green-500" />
                        Unlimited gym access.
                    </li>
                    <li className="flex items-center gap-2 mb-1">
                        <CheckCircleIcon className="w-8 h-5 text-green-500 mb-5" />
                        Participation in group fitness classes.
                    </li>
                    <li className="flex items-center gap-2 mb-1">
                        <CheckCircleIcon className="w-8 h-5 text-green-500 mb-5" />
                        Access to locker rooms and showers.
                    </li>
                </ul>
                <button className="hover:bg-white hover:text-black border text-white border-white rounded-2xl p-2 text-center w-full mt-3 font-bold">SUBSCRIBE NOW</button>
            </div>
            <div className="border rounded p-3 w-100 h-91 -mt-3 bg-green-600 text-black">
                <h2 className="text-2xl font-extrabold p-2 mb-1">VIP</h2>
                <h3 className="text-2xl font-extrabold mb-4">$100 <span className="font-light text-2">/month</span></h3>
                <hr />
                <ul className="p-4">
                    <li className="flex items-center gap-2 mb-1">
                        <CheckCircleIcon className="w-8 h-5 text-black" />
                        All Premium Plan features
                    </li>
                    <li className="flex items-center gap-2 mb-1">
                        <CheckCircleIcon className="w-8 h-5 text-black mb-5" />
                        Unlimited personal training sessions
                    </li>
                    <li className="flex items-center gap-2 mb-1">
                        <CheckCircleIcon className="w-8 h-5 text-black mb-5" />
                        Customized nutrition coaching
                    </li>
                </ul>
                <button className="hover:bg-white hover:text-black border text-black border-black rounded-2xl p-2 text-center w-full mt-10 font-bold">SUBSCRIBE NOW</button>
            </div>
              <div className="border rounded p-3 w-90 h-80 mt-2">
                    <h2 className="text-2xl font-extrabold">Premium</h2>
                    <h3 className="text-2xl font-extrabold mb-4">$60 <span className="font-light text-2">/month</span></h3>
                    <hr />
                    <ul className="p-4">
                        <li className="flex items-center gap-2 mb-1">
                            <CheckCircleIcon className="w-8 h-5 text-green-500" />
                            All Basic Plan features
                        </li>
                        <li className="flex items-center gap-2 mb-1">
                            <CheckCircleIcon className="w-8 h-5 text-green-500 mb-5" />
                            One personal training session per month
                        </li>
                        <li className="flex items-center gap-2 mb-1">
                            <CheckCircleIcon className="w-8 h-5 text-green-500 mb-5" />
                            Access to the sauna and steam room
                        </li>
                    </ul>
                    <button className="hover:bg-white hover:text-black border text-white border-white rounded-2xl p-2 text-center w-full mt-3 font-bold">SUBSCRIBE NOW</button>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
}