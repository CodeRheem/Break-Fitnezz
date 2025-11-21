import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function () {
  return (
    <>
      <section>
        <div className="bg-black text-white px-4 py-16">
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 mb-12 px-10 py-10">
            <p className="w-full md:w-2/5">
              Pick a plan tailored to your fitness goals and lifestyle. Each membership offers unique benefits to help you break limits and achieve more.
            </p>
            <h2 className="text-4xl w-full md:w-3/5">
              Perfect Plans for your Fitness Goals.
            </h2>
          </div>
          <div className="flex justify-center flex-row gap-10 px-10">
            <div className="border rounded-2xl p-3 w-80 h-80">
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
                <button className=" hover:bg-white hover:text-black border text-white border-white rounded-2xl p-2 text-center w-full mt-3">SUBSCRIBE NOW</button>
            </div>
            <div className="border rounded-2xl p-3 w-80 h-85 -mt-3 bg-green-600">
                <h2 className="text-2xl font-extrabold">VIP</h2>
                <h3 className="text-2xl font-extrabold mb-4">$100 <span className="font-light text-2">/month</span></h3>
                <hr />
            </div>
            <div  className="border rounded-2xl p-3 w-80 h-85">

            </div>
          </div>
        </div>
      </section>
    </>
  );
}