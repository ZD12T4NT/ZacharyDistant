"use client";

import { useState, useRef } from "react";
import Image from "next/image";

const templates = [
  {
    title: "Gym Landing Page",
    slug: "gym-landing-page",
    category: "Gym",
    image: "/gym.jpg",
    demoLink: "/gym", // changed from external link
  },
  {
    title: "Barber Shop Landing Page",
    slug: "barber-shop-landing-page",
    category: "Barber",
    image: "/barbers.jpg",
    demoLink: "/barber", // changed
  },
  {
    title: "Cafe Landing Page",
    slug: "cafe-landing-page",
    category: "Cafe",
    image: "/coffee.jpg",
    demoLink: "/cafe", // changed
  },
];


const categories = ["All", "Gym", "Barber", "Cafe"];

export default function TemplatesShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTemplates =
    activeCategory === "All"
      ? templates
      : templates.filter((template) => template.category === activeCategory);

  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  const handleImageLoad = (index: number) => {
    const image = imageRefs.current[index];
    if (image) {
      image.classList.remove("opacity-0");
    }
  };

  return (
    <section className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Template Demos
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
              <div className="w-full h-60 bg-gray-200 animate-pulse rounded-lg mb-6"></div>

              {/* Real Image */}
              <Image
                src={template.image}
                alt={template.title}
                width={600}
                height={400}
                className="object-cover w-full h-60 rounded-lg opacity-0 transition-opacity duration-500"
                ref={(el) => (imageRefs.current[index] = el)}
                onLoadingComplete={() => handleImageLoad(index)}
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
