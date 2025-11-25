import React, { useState } from "react";

export default function WordPag() {
  const [currentPage, setCurrentPage] = useState(1);

  // Sample content for different pages
  const pages = {
    1: {
      name: "Sarah Johnson",
      role: "Fitness Enthusiast",
      content: "Joining Break Fitness was the best decision I made this year. The trainers are amazing, and the classes are so fun and engaging!",
      rating: 5
    },
    2: {
      name: "Michael Chen",
      role: "Professional Athlete",
      content: "The energy and motivation here are unmatched. I've achieved goals I never thought were possible!",
      rating: 5
    },
    3: {
      name: "Emma Rodriguez",
      role: "Yoga Instructor",
      content: "I love how inclusive and supportive the community at Break Fitness is. It's my happy place!",
      rating: 5
    },
    4: {
      name: "David Thompson",
      role: "Tech Executive",
      content: "From the smart tech integrations to the personalized plans, Break Fitness has everything I need to succeed!",
      rating: 5
    }
  };

  const totalPages = Object.keys(pages).length;

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentContent = pages[currentPage];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 md:p-8 lg:p-16" id="testimonials">
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .content-animation {
          animation: fadeIn 0.5s ease-out;
        }

        .header-animation {
          animation: slideInLeft 0.8s ease-out;
        }

        .quote-mark {
          font-family: Georgia, serif;
          font-size: 4rem;
          line-height: 0;
          opacity: 0.3;
        }
      `}</style>

      <div className="w-full max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          
          {/* Left Side - Header Text */}
          <div className="header-animation text-white w-full lg:w-2/5 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 lg:mb-6 leading-tight">
              What Our Members Say
            </h1>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed">
              Our members are the heart of Break Fitness. Hear from real people who have transformed their lives with us.
            </p>
          </div>

          {/* Right Side - Testimonial Card */}
          <div className="w-full lg:w-3/5 h-2/5">
            <div className="border-4 border-green-600 rounded-3xl bg-green-600 p-6 md:p-10 lg:p-8 shadow-2xl relative overflow-hidden">
              
              {/* Decorative Quote Mark */}
              <div className="quote-mark text-white absolute top-4 left-4">"</div>
              
              {/* Page Content */}
              <div className="content-animation text-white relative z-10">
                
                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(currentContent.rating)].map((_, index) => (
                    <svg key={index} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8 text-white">
                  "{currentContent.content}"
                </p>

                {/* Author Info */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {currentContent.name}
                  </h3>
                  <p className="text-lg text-white opacity-90">
                    {currentContent.role}
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="w-full bg-white bg-opacity-30 rounded-full h-2">
                    <div 
                      className="bg-white h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(currentPage / totalPages) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center gap-2 md:gap-4">
                <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 ${
                    currentPage === 1
                      ? "bg-gray-700 text-gray-500 cursor-not-allowed opacity-50"
                      : "bg-white text-black hover:bg-gray-200 hover:scale-105"
                  }`}
                >
                  <span className="hidden sm:inline">← Previous</span>
                  <span className="sm:hidden">←</span>
                </button>

                {/* Page Indicators */}
                <div className="flex gap-2">
                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index + 1)}
                      aria-label={`Go to testimonial ${index + 1}`}
                      className={`h-3 rounded-full transition-all duration-300 ${
                        currentPage === index + 1
                          ? "bg-white w-8"
                          : "bg-white bg-opacity-50 w-3 hover:bg-opacity-75"
                      }`}
                    ></button>
                  ))}
                </div>

                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 ${
                    currentPage === totalPages
                      ? "bg-gray-700 text-gray-500 cursor-not-allowed opacity-50"
                      : "bg-white text-black hover:bg-gray-200 hover:scale-105"
                  }`}
                >
                  <span className="hidden sm:inline">Next →</span>
                  <span className="sm:hidden">→</span>
                </button>
              </div>

              {/* Page Counter */}
              <div className="text-center mt-6">
                <span className="text-sm font-semibold text-white opacity-80">
                  {currentPage} / {totalPages}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}