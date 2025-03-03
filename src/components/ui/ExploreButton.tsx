import Link from 'next/link';

export const ExploreButton: React.FC<{ homeLinks: { label: string }[] }> = () => {


  const buttonLinks = [
    { path: "/projects", label: "Projects" },
  ];



  return (
    <div className="w-full md:w-auto md:flex mt-5 md:align-middle link-holder">
     {buttonLinks.map((link, index) => (
              <div className="flex mt-8 md:mt-0 mb-5 w-full md:w-auto" key={index}>
                  <Link href={link.path} className="flex justify-center transition-all relative w-full md:w-auto bg-[#a7ec51] py-[.7rem] px-[2rem] rounded-[100em] text-black hover:bg-black hover:text-white">
                  <span>
                    {link.label}
                  </span>
                  </Link>
              </div>
            ))}
    </div>
  );
};

export default ExploreButton;
