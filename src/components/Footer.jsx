import { Facebook, Instagram, Linkedin } from "lucide-react";
import Logo from "/logo.png";

function Footer() {
  return (
    <section className="bg-gray-50 w-full mx-auto px-4 py-2  mb-16 ">
      <div className=" px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="w-full flex flex-col gap-8 items-center justify-center ">
          {/* Brand Info Colum  */}
          {/* Logo Section */}
          <div className="w-[156px] h-[156px]  md:w-35 md:h-35">
            <img src={Logo} alt="Precision USMLE Tutors Logo" />
          </div>
          <div className="w-full flex-col border-b border-gray-200 pb-7">
            <p className="text-gray-600 text-center">
              Expert tutoring for Step 1, Step 2 CK, and Step 3 that bridges the
              gap between local training and American medical licensing
              requirements.
            </p>
          </div>
          <div className="flex gap-5 ">
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
          <div className="">
            <p className=" text-gray-600 text-center">
                © 2025 Precision USMLE Tutors |  All rights reserved.
            </p>
          </div>
        </div>
        
       
      </div>
    </section>
  );
}

export default Footer;
