import React, { useState } from "react";

const rawImages = import.meta.glob("../assets/Images/*.jpg", { 
  eager: true,
  import: 'default'
});

const images = {};
for (const path in rawImages) {
  const fileName = path.split("/").pop().replace(".jpg", "");
  images[fileName] = rawImages[path];
}

export default function ClassesCards() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const background = ["download-1", "download22", "Flex", "Mind"];
  const titles = ["STRENGTH", "CARDIO", "FLEX", "MIND"];

  const contents = [
    "Build muscle and boost endurance with full-body strength and workouts, including weight training and resistance exercises.",
    "Burn calories, improve stamina, and keep your heart healthy with high energy classes like cycling, HIIT, and kickboxing.",
    "Improve flexibility and recover with yoga, Pilates and stretch classes designed to relax your body and prevent injuries.",
    "Find balance and reduce stress with meditation and restorative yoga sessions that support your mental and physical well-being.",
  ];

  // Preload images
  React.useEffect(() => {
    const imagePromises = background.map((bg) => {
      if (images[bg]) {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = images[bg];
          img.onload = resolve;
          img.onerror = resolve;
        });
      }
      return Promise.resolve();
    });

    Promise.all(imagePromises).then(() => {
      setImagesLoaded(true);
    });
  }, []);

  if (!imagesLoaded) {
    return (
      <section className="bg-black text-white w-full min-h-[60vh] flex items-center justify-center">
        <div className="text-xl sm:text-2xl">Loading...</div>
      </section>
    );
  }

  return (
    <>
      <section className="bg-black text-white w-full" id="classes">
        {/* Content Section with Background */}
        <div className="w-full p-6 md:p-10 md:min-h-screen -mt-6">
          {/* Header Section */}
          <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl w-full md:w-2/5 font-extrabold">
              Fitness Classes for Every Goal.
            </h2>
            <p className="w-full md:w-3/5 text-sm sm:text-base text-gray-200">
              From high-energy workouts to relaxing recovery sessions, Break
              Fitness offers a variety of classes designed to challenge and
              inspire you.
            </p>
          </div>

          {/* Image Boxes - responsive: column on small, row on md+ */}
          <div className="flex flex-col md:flex-row gap-4 w-full">
            {background.map((bg, index) => (
              <div
                key={index}
                className={`relative rounded-2xl bg-cover bg-center cursor-pointer transition-all duration-500 ease-in-out overflow-hidden
                  ${index === activeSlide
                    ? "md:flex-[3] flex-auto h-64 md:h-[380px] border-2 border-green-600"
                    : "md:flex-[0.7] flex-[0.9] h-44 md:h-[380px] hover:md:flex-[1.1] hover:flex-[1.02]"}
                `}
                style={{
                  backgroundImage: images[bg] ? `url(${images[bg]})` : "none",
                  backgroundColor: images[bg] ? "transparent" : "#333",
                }}
                onClick={() => setActiveSlide(index)}
              >
                {/* Text overlay */}
                <div
                  className={`absolute inset-0 flex flex-col justify-end p-5 md:p-8 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-500 rounded-2xl
                    ${index === activeSlide ? "opacity-100" : "opacity-90 md:opacity-80"}
                  `}
                >
                  <h2
                    className={`font-bold text-green-500 mb-2 transition-all duration-500 text-xl sm:text-2xl md:text-3xl`}
                    style={{
                      writingMode: index === activeSlide ? "horizontal-tb" : "vertical-rl",
                      textOrientation: "mixed",
                      textAlign: index === activeSlide ? "left" : "center",
                      margin: index === activeSlide ? "0 0 0.5rem 0" : "auto",
                      transform: index === activeSlide ? "none" : "none",
                    }}
                  >
                    {titles[index]}
                  </h2>

                  {/* Content only shows on active slide (desktop) */}
                  {index === activeSlide && (
                    <div className="hidden md:block">
                      <p className="text-white text-sm md:text-base">
                        {contents[index]}
                      </p>
                    </div>
                  )}

                  {/* On small screens show short content under title */}
                  {index === activeSlide && (
                    <div className="block md:hidden mt-2">
                      <p className="text-white text-xs">
                        {contents[index].slice(0, 90)}{contents[index].length > 90 ? "..." : ""}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}