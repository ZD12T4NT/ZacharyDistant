export type Project = {
  name: string;
  slug: string;
  src: string;
  hoverImage: string;
  year: number;
  category: string;
  description: string;
  images: string[];
  titleColor?: string;
  url?: string; // <-- Add this
};


export const projects: Project[] = [ 
  {
    name: 'First Point Group',
    titleColor: '#ed1c24',
    description: '​First Point Group is a global recruitment agency that specialises in telecommunications, technology, data centres, and energy & renewables. Founded in 2004 by Alistair Rynish and David Taylor, the company has expanded to operate 11 offices worldwide, including locations in London, Berlin, Paris, Toronto, Dallas, Hong Kong, Shenzhen, Mexico City, Dubai, Johannesburg, and Madrid.',
    year: 2025,
    category: 'Web Development',
    images: [
      '/firstpointone.png',
      '/firstpointtwo.png',
      '/firstpointthree.png',
      '/firstpointfour.png',
      '/firstpointfive.png',

    ],
    slug: 'firstpointgroup',
    src: '/firstpointbuild.png', // for project page
    hoverImage: '/firstpointgroupv2.png', // NEW - for hover preview
    url: 'https://www.firstpointgroup.com', // <-- Add this
  },
  {
    name: 'Fruition Group',
    titleColor: '#EE2C61',
    description: '​First Point Group is a global recruitment agency that specialises in telecommunications, technology, data centres, and energy & renewables. Founded in 2004 by Alistair Rynish and David Taylor, the company has expanded to operate 11 offices worldwide, including locations in London, Berlin, Paris, Toronto, Dallas, Hong Kong, Shenzhen, Mexico City, Dubai, Johannesburg, and Madrid.',
    year: 2025,
    category: 'Web Development',
    images: [
      '/fruitionhome.png',
      '/fruitiontwo.png',
      '/fruitionthree.png',
      '/fruitionfour.png',
      '/fruitionfive.png',
    ],
   
  src: '/fruitiongroupbuild.png', // ✅ Add this!
  slug: 'fruitiongroup',
  hoverImage:'/fruitiongroupv2.png',
  url: 'https://www.fruitiongroup.com', // <-- Add this

  },
  {
    name: 'MCS',
    titleColor: '#ff6900',
    description: 'MCS Group is a specialist recruitment consultancy based in Belfast, focusing on connecting exceptional talent with leading organizations across various sectors. Their website serves as a comprehensive platform for job seekers and employers, offering a user-friendly interface to facilitate seamless recruitment processes.',
    year: 2024,
    category: 'Web Development',
    images: [
      '/mcsimageone.png',
      '/mcsimagetwo.png',
      '/mcsimagethree.png',
      '/mcsimagefour.png',
    ],
   
  src: '/mcsbuild.png', // ✅ Add this!
  slug: 'mcs-group',
  hoverImage: '/mcshome.png',
  url: 'https://www.mcsgroup.jobs', // <-- Add this

  },
  {
    name: 'Barrington James',
    titleColor: '#e2001e',
    description: 'Barrington James is a global staffing expert specializing in the life sciences sector, dedicated to partnering with innovative companies to advance medical care and improve lives worldwide. Their website offers a user-friendly interface for job seekers and employers, providing resources such as blogs, podcasts, and case studies to support informed decision-making.',
    year: 2024,
    category: 'Web Development',
    images: [
      '/jamesimageone.png',
      '/jamesimagetwo.png',
      '/jamesimagethree.png',
      '/jamesimagefour.png',
    ],
   
  src: '/BarringtonJamesBuild.png', // ✅ Add this!
  slug: 'barrington-james',
  hoverImage: '/barringtonhome.png',
  url: 'https://www.barringtonjames.com', // <-- Add this

  },
  {
    name: 'Kintec Global',
    titleColor: '#54c8e8',
    description: 'The Kintec Global website is designed to streamline recruitment by connecting top talent with leading international sectors. With a user-friendly interface and intuitive navigation, it provides a seamless experience for job seekers and employers alike. The platform highlights Kintec&apos;s expertise, values, and meticulous approach to recruitment, reinforcing their reputation as industry leaders.',
    year: 2024,
    category: 'Web Development',
    images: [
      '/kintecimageone.png',
      '/kintecimagetwo.png',
      '/kintecimagethree.png',
      '/kintecimagefour.png',
      '/kintecimagefive.png',
    ],
    
    src: '/KintecGlobalBuild.png', // ✅ Add this!
    slug: 'kintec-global',
    hoverImage:'/kintechome.png',
    url: 'https://www.kintecglobal.com', // <-- Add this
    
  },
  {
    name: 'Spectrum IT',
    titleColor: '#ED1C24',
    description: 'Spectrum IT Recruitment is a leading UK-based agency specializing in software and technology recruitment. Their website serves as a comprehensive platform connecting exceptional talent with leading organizations across various sectors. With a user-friendly interface and intuitive navigation, it provides a seamless experience for job seekers and employers alike. The platform highlights Spectrum IT&apos;s expertise&#44; values&#44; and meticulous approach to recruitment&#44; reinforcing their reputation as industry leaders. ',
    year: 2024,
    category: 'Web Development',
    images: [
      '/spectrumimageone.png',
      '/spectrumimagetwo.png',
      '/spectrumimagethree.png',
      '/spectrumimagefour.png',
    ],
  
    src: '/SpectrumITBuild.png', // ✅ Add this!
    slug: 'spectrum-it',
    hoverImage: '/spectrumhome.png',
    url: 'https://www.spectrumit.co.uk/', // <-- Add this

  },
  {
    name: 'Sigmar Recruitment',
    titleColor: '#007dad',
    description: 'Sigmar Recruitment is a leading recruitment agency in Ireland, dedicated to connecting talent with leading businesses. Their website offers a user-friendly interface for job seekers and employers, providing resources such as salary guides and blogs to support informed decision-making.',
    year: 2024,
    category: 'Web Development',
    images: [
      '/sigmarimageone.png',
      '/sigmarimagetwo.png',
      '/sigmarimagethree.png',
      '/sigmarimagefour.png',

    ],
   
    src: '/SigmarRecruitmentBuild.png', // ✅ Add this!
    slug: 'sigmar-recruitment',
    hoverImage: '/sigmarhome.png',
    url: 'https://www.sigmarrecruitment.com/', // <-- Add this

  },
 
];
