export type Project = {
  name: string;
  slug: string;
  src: string;
  hoverImage: string;
  year: number;
  category: string;
  description: string;
  images: string[];
  titleColor?: string; // <-- optional color for title
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
  },
  {
    name: 'Fruition Group',
    titleColor: '#f27596',
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
  hoverImage:'/fruitiongroupv2.png'
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
      '/mcsimagefive.png',

    ],
   
  src: '/mcsbuild.png', // ✅ Add this!
  slug: 'mcs-group',
  hoverImage: '/mcshome.png'
  },
  {
    name: 'Barrington James',
    titleColor: '#e2001e',
    description: 'Barrington James is a global staffing expert specializing in the life sciences sector, dedicated to partnering with innovative companies to advance medical care and improve lives worldwide. Their website offers a user-friendly interface for job seekers and employers, providing resources such as blogs, podcasts, and case studies to support informed decision-making.',
    year: 2024,
    category: 'Web Development',
    images: [
      '/barringtonimageone.png',
      '/barringtonimagetwo.png',
      '/barringtonimagethree.png',
      '/barringtonimagefour.png',
      '/barringtonimagefive.png',

    ],
   
  src: '/BarringtonJamesBuild.png', // ✅ Add this!
  slug: 'barrington-james',
  hoverImage: '/barringtonhome.png'
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
    hoverImage:'/kintechome.png'
    
  },
  {
    name: 'Spectrum IT',
    titleColor: '',
    description: 'Spectrum IT Recruitment is a leading UK-based agency specializing in software and technology recruitment. Their website serves as a comprehensive platform connecting exceptional talent with leading organizations across various sectors. With a user-friendly interface and intuitive navigation, it provides a seamless experience for job seekers and employers alike. The platform highlights Spectrum IT&apos;s expertise&#44; values&#44; and meticulous approach to recruitment&#44; reinforcing their reputation as industry leaders. ',
    year: 2024,
    category: 'Web Development',
    images: [
      '/spectrumimageone.png',
      '/spectrumimagetwo.png',
      '/spectrumimagethree.png',
      '/spectrumimagefour.png',
      '/spectrumimagefive.png',

    ],
  
    src: '/SpectrumITBuild.png', // ✅ Add this!
    slug: 'spectrum-it',
    hoverImage: '/spectrumhome.png'
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
      // ...
    ],
   
    src: '/SigmarRecruitmentBuild.png', // ✅ Add this!
    slug: 'sigmar-recruitment',
    hoverImage: '/sigmarhome.png'
  },
  {
      name: 'Coltec',
      titleColor: '#008ecc',
      description: 'Coltech is a leading technology consultancy specializing in scaling technology teams across Data & AI&#44; Cloud&#44; and Software Engineering sectors. Their website serves as a comprehensive platform to connect exceptional talent with companies across Europe and the US&#44; focusing on delivering user-centric transformation and digital projects that enable the transition to new technologies. By offering services such as Tech Virtual Bench&#44; Project Teams&#44; and Project Delivery&#44; Coltech ensures innovative&#44; scalable results and unparalleled support for businesses of all sizes.',
      year: 2024,
      category: 'Web Development',
      images: [
        '/coltecimageone.png',
        '/coltecimagetwo.png',
        '/coltecimagethree.png',
        '/coltecimagefour.png',
        '/coltecimagefive.png',

      ],
    
    src: '/coltechome.png', // ✅ Add this!
    slug: 'coltec',
    hoverImage: '/coltecbuild.png'
  },
  {
    name: 'Integro Partners',
    titleColor: '#fc7753',
    description: 'Integro Partners is a recruitment consultancy specializing in connecting exceptional talent with leading organizations across various sectors. Their website serves as a comprehensive platform for job seekers and employers, offering a user-friendly interface to facilitate seamless recruitment processes.',
    year: 2023,
    category: 'Web Development',
    images: [
      '/integroimageone.png',
      '/integroimagetwo.png',
      '/integroimagethree.png',
      '/integroimagefour.png',
      '/integroimagefive.png',

    ],
   
  src: '/integrobuild.png', // ✅ Add this!
  slug: 'integro-partners',
  hoverImage: '/integrohome.png'
  },

];
