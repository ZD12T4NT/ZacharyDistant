"use client";

import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./NavMenu.css";
import SocialLinks from "./SocialLinks";

const menuLinks = [
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];

export const NavMenu = () => {
  const container = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const tl = useRef<gsap.core.Timeline | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    gsap.set(".menu-link-item-holder", { y: 75 });

    tl.current = gsap
      .timeline({ paused: true })
      .to(".menu-overlay", {
        duration: 1.2,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.inOut",
      })
      .to(".menu-link-item-holder", {
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.inOut",
        delay: -0.75,
      });
  }, []);

  useEffect(() => {
    if (tl.current) {
      if (isMenuOpen) {
        tl.current.play();
      } else {
        tl.current.reverse();
      }
    }
  }, [isMenuOpen]);

  return (
    <div className="menu-container" ref={container}>
      <div className={`menu-bar ${scrolling ? "backdrop-blur-md bg-zinc-900 shadow-md" : "bg-transparent"} transition-all duration-300 fixed top-0 w-full`}>
        <div className="menu-logo">
          <Link href="/">InnoWeb Solutions</Link>
        </div>
        <div className="menu-open" onClick={toggleMenu}>
          <p>Menu</p>
        </div>
      </div>
      <div className={`menu-overlay z-20 ${isMenuOpen ? "open" : ""}`}>
        <div className="menu-overlay-bar">
          <div className="menu-logo open">
            <Link href="/" onClick={toggleMenu}>InnoWeb Solutions</Link>
          </div>
          <div className="menu-close" onClick={toggleMenu}>
            <p>Close</p>
          </div>
        </div>
        
        <div className="menu-copy">
          <div className="menu-links">
            {menuLinks.map((link, index) => (
              <div className="menu-link-item mb-7" key={index}>
                <div className="menu-link-item-holder" onClick={toggleMenu}>
                  <Link href={link.path} className="uppercase menu-link transition-all">
                    <span>{link.label}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="menu-info flex-col">
            <div className="menu-info-col mb-3">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
