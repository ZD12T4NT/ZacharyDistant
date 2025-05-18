import Link from "next/link";

interface ExploreButtonProps {
  className?: string;
}

export const ExploreButton: React.FC<ExploreButtonProps> = ({ className }) => {
  const buttonLinks = [{ path: "/offers", label: "Services" }];

  return (
    <div className={`w-full md:w-auto md:flex mt-5 md:align-middle link-holder ${className}`}>
      {buttonLinks.map((link, index) => (
        <div className="flex mt-2 mb-0 md:mt-0 md:mb-5 w-full md:w-auto" key={index}>
          <Link href={link.path} className="inline-block justify-center transition-all relative max-w-fit bg-[#a7ec51] py-[.7rem] px-[2rem] rounded-[100em] text-black hover:bg-black hover:text-white">
              <span>{link.label}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ExploreButton;
