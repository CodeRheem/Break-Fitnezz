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
    "Build muscle and boost endurance with full-body strength and workouts,including weight training and resistance exercises.",
    "Burn calories, improve stamina, and keep your heart healthy with high energy classes like cycling,HIIT, and kickboxing.",
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
      <section className="bg-black text-white w-full min-h-screen flex items-center justify-center">
        <div className="text-2xl">Loading...</div>
      </section>
    );
  }

  return (
    <>
      <section className="bg-black text-white w-full" id="classes">
        {/* Content Section with Background */}
        <div className="min-h-screen w-full p-10 -mt-10">
          {/* Header Section */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            <h2 className="text-5xl w-full md:w-2/5">
              Fitness Classes for Every Goal.
            </h2>
            <p className="w-full md:w-3/5">
              From high-energy workouts to relaxing recovery sessions, Break
              Fitness offers a variety of classes designed to challenge and
              inspire you.
            </p>
          </div>
          {/* Image Boxes */}
          <div className="flex gap-4 w-full h-[380px]">
            {background.map((bg, index) => (
              <div
                key={index}
                className={`relative rounded-3xl bg-cover bg-center cursor-pointer transition-all duration-500 ease-in-out ${
                  index === activeSlide
                    ? "flex-3 border-2 border-green-600"
                    : "flex-[0.5] hover:flex-[0.7]"
                }`}
                style={{
                  backgroundImage: images[bg] ? `url(${images[bg]})` : "none",
                  backgroundColor: images[bg] ? "transparent" : "#333",
                }}
                onClick={() => setActiveSlide(index)}
              >
                {/* Text overlay */}
                <div
                  className={`absolute inset-0 flex flex-col justify-end p-8 bg-linear-to-t from-black/70 to-transparent rounded-3xl transition-opacity duration-500 ${
                    index === activeSlide ? "opacity-100" : "opacity-80"
                  }`}
                >
                  <h2
                    className={`font-bold text-green-600 mb-2 transition-all duration-500 text-3xl`}
                    style={{
                      writingMode:
                        index === activeSlide ? "horizontal-tb" : "vertical-rl",
                      textOrientation: "mixed",
                      textAlign: index === activeSlide ? "left" : "center",
                      margin: index === activeSlide ? "0 0 0.5rem 0" : "auto",
                    }}
                  >
                    {titles[index]}
                  </h2>

                  {/* Content only shows on active slide */}
                  {index === activeSlide && (
                    <div>
                      <p className="text-white text-sm">
                        {contents[index]}
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