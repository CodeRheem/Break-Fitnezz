import React from "react";

export default function ExpertTrainers() {
  const trainers = [
    {
      name: "Ronald Richards",
      role: "Strength Coach",
      image: "/aaron-brogden-miCR9VIQ5PE-unsplash.jpg"
    },
    {
      name: "Sarah Johnson",
      role: "Yoga Instructor",
      image: "/patrick-malleret-p-v1DBkTrgo-unsplash.jpg"
    },
    {
      name: "Michael Chen",
      role: "CrossFit Trainer",
      image: "/anastase-maragos-HyvE5SiKMUs-unsplash.jpg"
    },
    {
      name: "James Wilson",
      role: "Pilates Expert",
      image: "/samuel-girven-Ppua0I4VjqE-unsplash.jpg"
    },
    {
      name: "Emma Davis",
      role: "Martial Arts Trainer",
      image: "/thao-lee-J1BwEL2n530-unsplash.jpg"
    },
    {
      name: "Lisa Anderson",
      role: "Nutrition Specialist",
      image: "/yilmaz-akin-FPKtCl74Hfs-unsplash.jpg"
    }
  ];

  return (
    <section>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .trainer-card {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .trainer-card:nth-child(1) { animation-delay: 0.1s; }
        .trainer-card:nth-child(2) { animation-delay: 0.2s; }
        .trainer-card:nth-child(3) { animation-delay: 0.3s; }
        .trainer-card:nth-child(4) { animation-delay: 0.4s; }
        .trainer-card:nth-child(5) { animation-delay: 0.5s; }
        .trainer-card:nth-child(6) { animation-delay: 0.6s; }

        .header-title {
          opacity: 0;
          animation: slideInLeft 1s ease-out forwards;
          animation-delay: 0.2s;
        }

        .header-description {
          opacity: 0;
          animation: slideInRight 1s ease-out forwards;
          animation-delay: 0.4s;
        }

        .trainer-card:hover .trainer-image {
          transform: scale(1.05);
        }

        .trainer-image {
          transition: transform 0.4s ease;
        }

        .trainer-overlay {
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .trainer-card:hover .trainer-overlay {
          opacity: 1;
        }
      `}</style>

      <div className="bg-black" id="trainers">
        <div className="text-white w-full flex flex-col md:flex-row items-center justify-between gap-8 mb-16 px-6 md:px-10 py-10 md:py-16">
          <h2 className="header-title text-3xl md:text-4xl lg:text-5xl w-full md:w-3/5 font-extrabold leading-tight">
            Meet Our Expert Trainers
          </h2>
          <p className="header-description w-full md:w-2/5 font-medium text-base md:text-lg text-gray-300 leading-relaxed">
            Our team of certified trainers is dedicated to helping you reach your fitness goals. With personalized coaching and expert advice, we're here to support you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-6 md:px-10 pb-16 md:pb-20">
          {trainers.map((trainer, index) => (
            <div key={index} className="trainer-card group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl bg-zinc-900 shadow-xl">
                <div className="relative h-80 md:h-96 overflow-hidden">
                  <img 
                    src={trainer.image} 
                    alt={trainer.role}
                    className="trainer-image w-full h-full object-cover"
                  />
                  <div className="trainer-overlay absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{trainer.name}</h3>
                  <p className="text-green-500 font-medium text-lg">{trainer.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}