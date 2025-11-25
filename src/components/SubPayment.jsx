import React from "react";

const CheckIcon = () => (
  <svg className="w-6 h-6 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

export default function SubPayment() {
  return (
    <div className="font-poppins text-white">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .feature-item { opacity: 0; animation: fadeInUp 0.6s ease-out forwards; }
        .feature-item:nth-child(1){ animation-delay: 0.1s; }
        .feature-item:nth-child(2){ animation-delay: 0.2s; }
        .feature-item:nth-child(3){ animation-delay: 0.3s; }
        .feature-item:nth-child(4){ animation-delay: 0.4s; }
      `}</style>

      <section>
        <div className="bg-black px-4 py-12 md:py-16" id="membership">
          <div className="max-w-7xl mx-auto">
            <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 md:mb-12 px-2 md:px-6">
              <p className="w-full md:w-2/5 font-medium text-base md:text-lg">
                Pick a plan tailored to your fitness goals and lifestyle. Each membership offers unique benefits to help you break limits and achieve more.
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl w-full md:w-3/5 font-extrabold text-left md:text-right">
                Perfect Plans for your Fitness Goals.
              </h2>
            </div>

            {/* Plans grid - stacked on small, 3 columns on md+ */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-2 md:px-6">
              {/* Basic Plan */}
              <div className="rounded-lg p-6 bg-zinc-900 border border-gray-700 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl md:text-2xl font-extrabold mb-2">Basic</h2>
                  <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
                    $30 <span className="font-light text-base md:text-lg text-gray-400">/month</span>
                  </h3>
                  <hr className="border-gray-700 mb-6" />
                  <ul className="space-y-4 mb-6">
                    <li className="feature-item flex items-start gap-3">
                      <span className="text-green-500"><CheckIcon /></span>
                      <span className="text-gray-300 text-sm md:text-base">Unlimited gym access</span>
                    </li>
                    <li className="feature-item flex items-start gap-3">
                      <span className="text-green-500"><CheckIcon /></span>
                      <span className="text-gray-300 text-sm md:text-base">Participation in group fitness classes</span>
                    </li>
                    <li className="feature-item flex items-start gap-3">
                      <span className="text-green-500"><CheckIcon /></span>
                      <span className="text-gray-300 text-sm md:text-base">Access to locker rooms and showers</span>
                    </li>
                  </ul>
                </div>

                <button className="mt-2 bg-transparent hover:bg-white hover:text-black border border-white text-white rounded-full py-3 px-6 w-full md:w-auto text-center font-bold transition-all duration-300">
                  SUBSCRIBE NOW
                </button>
              </div>

              {/* VIP Plan (highlighted) */}
              <div className="rounded-lg p-6 bg-green-600 border-2 border-green-600 shadow-xl transform md:scale-105 flex flex-col justify-between">
                <div>
                  <div className="inline-block bg-black text-white px-3 py-1 rounded-full text-xs font-bold mb-2">
                    MOST POPULAR
                  </div>
                  <h2 className="text-xl md:text-2xl font-extrabold mb-1">VIP</h2>
                  <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
                    $100 <span className="font-light text-base md:text-lg">/month</span>
                  </h3>
                  <hr className="border-black border-opacity-30 mb-6" />
                  <ul className="space-y-4 mb-6">
                    <li className="feature-item flex items-start gap-3">
                      <span className="text-black"><CheckIcon /></span>
                      <span className="font-medium text-sm md:text-base">All Premium Plan features</span>
                    </li>
                    <li className="feature-item flex items-start gap-3">
                      <span className="text-black"><CheckIcon /></span>
                      <span className="font-medium text-sm md:text-base">Unlimited personal training sessions</span>
                    </li>
                    <li className="feature-item flex items-start gap-3">
                      <span className="text-black"><CheckIcon /></span>
                      <span className="font-medium text-sm md:text-base">Customized nutrition coaching</span>
                    </li>
                  </ul>
                </div>

                <button className="mt-2 bg-black text-white hover:bg-white hover:text-black border border-black rounded-full py-3 px-6 w-full md:w-auto text-center font-bold transition-all duration-300">
                  SUBSCRIBE NOW
                </button>
              </div>

              {/* Premium Plan */}
              <div className="rounded-lg p-6 bg-zinc-900 border border-gray-700 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl md:text-2xl font-extrabold mb-2">Premium</h2>
                  <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
                    $60 <span className="font-light text-base md:text-lg text-gray-400">/month</span>
                  </h3>
                  <hr className="border-gray-700 mb-6" />
                  <ul className="space-y-4 mb-6">
                    <li className="feature-item flex items-start gap-3">
                      <span className="text-green-500"><CheckIcon /></span>
                      <span className="text-gray-300 text-sm md:text-base">All Basic Plan features</span>
                    </li>
                    <li className="feature-item flex items-start gap-3">
                      <span className="text-green-500"><CheckIcon /></span>
                      <span className="text-gray-300 text-sm md:text-base">One personal training session per month</span>
                    </li>
                    <li className="feature-item flex items-start gap-3">
                      <span className="text-green-500"><CheckIcon /></span>
                      <span className="text-gray-300 text-sm md:text-base">Access to the sauna and steam room</span>
                    </li>
                  </ul>
                </div>

                <button className="mt-2 bg-transparent hover:bg-white hover:text-black border border-white text-white rounded-full py-3 px-6 w-full md:w-auto text-center font-bold transition-all duration-300">
                  SUBSCRIBE NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}