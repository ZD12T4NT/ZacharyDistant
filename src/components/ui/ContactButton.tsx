import Link from "next/link";

interface ContactButtonProps {
  className?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({ className }) => {
  const buttonLinks = [{ path: "/projects", label: "Latest" }];

  return (
    <div className={`w-full md:w-auto md:flex mt-5 md:align-middle link-holder ${className}`}>
      {buttonLinks.map((link, index) => (
        <div className="flex mt-2 md:mt-0 mb-5 w-full md:w-auto" key={index}>
          <Link href={link.path} legacyBehavior>
            <a className="inline-block justify-center transition-all relative max-w-fit bg-[#fff] py-[.7rem] px-[2rem] rounded-[100em] text-black hover:bg-black hover:text-white">
              <span>{link.label}</span>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ContactButton;
