import Link from 'next/link';
import React from 'react'

const socialLinks = [
    { path: "https://www.linkedin.com/in/zac-front-end-developer/", label: "LinkedIn" },
    { path: "https://www.instagram.com/zacharydistant", label: "Instagram" },
    { path: "https://www.facebook.com/zachary-distant", label: "Facebook" },
  ];

export const SocialLinks = () => {
  return (
    <div className='flex'>
        {socialLinks.map((link, index) => (
            <Link href={link.path} target="_blank" key={index} className="mr-2 mb-4 transition-all text-[1rem] relative before:absolute before:bottom-[-0.25rem] before:h-[1px] before:w-full before:max-w-[0px] before:bg-white before:transition-all before:content-[''] hover:before:max-w-full">
              {link.label}
            </Link>
      ))}
      </div>
  )
}

export default SocialLinks;
