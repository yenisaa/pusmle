import { Facebook, Instagram, Linkedin } from "lucide-react";
import Logo from "/logo.png";
import { navLinks } from "../data/data";

function Footer() {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 flex items-center justify-center gap-8">
        <div className="w-md flex flex-col gap-1">
          {/* Brand Info Colum  */}
          {/* Logo Section */}
          <div className="w-[85px] h-[85px]  md:w-35 md:h-35">
            <img src={Logo} alt="Precision USMLE Tutors Logo" />
          </div>
          <div className="">
            <p>
              Expert tutoring for Step 1, Step 2 CK, and Step 3 that bridges the
              gap between local training and American medical licensing
              requirements.
            </p>
          </div>
          <div className="flex gap-5">
            {/* Social Media Handles  */}
            <a
              href="https://facebook.com/precisionusmletutors"
              className="flex hover:bg-gray-300 transition-all duration-200 bg-gray-200 rounded-full w-12 h-12 items-center justify-center"
            >
              <Facebook className="flex fill-gray-700 text-gray-700" />
            </a>
            <a
              href="https://www.instagram.com/precisionusmletutor/"
              className="flex hover:bg-gray-300 transition-all duration-200 bg-gray-200 rounded-full w-12 h-12 items-center justify-center"
            >
              <Instagram className="flex text-gray-700" />
            </a>
            <a
              href="https://www.linkedin.com/company/precision-usmle-tutors/"
              className="flex hover:bg-gray-300 transition-all duration-200 bg-gray-200 rounded-full w-12 h-12 items-center justify-center"
            >
              <Linkedin className="flex fill-gray-600 text-gray-600 bg-blue" />
            </a>
          </div>
        </div>
        <div className="w-md">
          <nav className="">
            <h3 className="text-1l font-bold">Company</h3>
            <div>
              {navLinks.map((link, index) => (
                <ul key={index} className="">
                    <li className="font-lg">
                        <a href={link.href} >{link.label}</a>
                    </li>
                </ul>
              ))}
            </div>
          </nav>
        </div>
       
      </div>
    </section>
  );
}

export default Footer;
