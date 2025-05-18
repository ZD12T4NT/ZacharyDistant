"use client";

import { useState, useRef } from "react";
import Image from "next/image";

const templates = [
  {
    title: "Sonic Sound Equipment Landing Page",
    slug: "sonic-landing-page",
    category: ["Product"],
    image: "/soundLPMain.png",
    demoLink: "http://sonic-landing-page-nine.vercel.app/", 
  },
  {
    title: "Personal Tattoo Landing Page",
    slug: "tattoo-landing-page",
    category: ["Personal", "Portfolio"],
    image: "/tattooLPMain.png",
    demoLink: "https://ai-landing-page-orcin.vercel.app/", 
  },
  {
    title: "Modern AI Landing Page",
    slug: "ai-landing-page",
    category: ["AI", "Modern"],
    image: "/aiLPMain.png",
    demoLink: "https://ai-landing-page-orcin.vercel.app/", 
  },
  {
    title: "Gym Landing Page",
    slug: "gym-landing-page",
    category: ["Gym", "Business", "Product"],
    image: "/gymLpImage.png",
    demoLink: "https://gym-landing-page-v1.vercel.app/", 
  },
  {
    title: "Cafe Landing Page",
    slug: "cafe-landing-page",
    category: ["Cafe", "Business", "Product"],
    image: "/cafeLpImage.png",
    demoLink: "https://cafe-landing-page-lilac.vercel.app/", 
  },
  {
    title: "Barber Shop Landing Page",
    slug: "barber-shop-landing-page",
    category: ["Barber", "Business", "Product"],
    image: "/barberLp.png",
    demoLink: "https://barber-landing-page-pi.vercel.app/", 
  },
];



const categories = ["All", "Gym", "Barber", "Cafe", "AI", "Product", "Personal", "Portfolio", "Business"];

export default function TemplatesShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");

const filteredTemplates =
  activeCategory === "All"
    ? templates
    : templates.filter((template) =>
        template.category.some(
          (cat) => cat.toLowerCase() === activeCategory.toLowerCase()
        )
      );


  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  const [isImageLoaded, setIsImageLoaded] = useState<boolean[]>(
    new Array(templates.length).fill(false)
  );
  
  const handleImageLoad = (index: number) => {
    setIsImageLoaded((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };
  

  return (
    <section className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
            Fully Customisable Website Demos (Tailored to your brand)
        </h2>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12 gap-4 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`py-2 px-6 rounded-full border ${
                activeCategory === category
                  ? "bg-black text-white"
                  : "bg-white text-black"
              } hover:bg-black hover:text-white transition duration-300`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {filteredTemplates.map((template, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
         
                    {/* Skeleton Loader */}
                    {!isImageLoaded[index] && (
                      <div className="absolute w-full h-60 bg-gray-200 animate-pulse rounded-lg mb-6 z-10"></div>
                    )}

                    {/* Real Image */}
                    <Image
                      src={template.image}
                      alt={template.title}
                      width={600}
                      height={400}
                      className={`object-cover w-full h-60 rounded-lg transition-opacity duration-500 ${
                        isImageLoaded[index] ? "opacity-100" : "opacity-0"
                      }`}
                      onLoad={() => handleImageLoad(index)}
                    />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition duration-300 space-y-3">
              <a
                href={template.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black font-semibold py-2 px-6 rounded-full hover:bg-gray-200"
              >
                View Demo
              </a>
              <a
                href={`/template/${template.slug}`}
                className="bg-white text-black font-semibold py-2 px-6 rounded-full hover:bg-gray-200"
              >
                More Info
              </a>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
