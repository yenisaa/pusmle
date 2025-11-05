import { useState } from "react";
import Logo from "/logo.png";
import { HiMenu, HiX } from "react-icons/hi";
import { navLinks } from "../data/data";
import { Link } from "react-router-dom";

function NavBar() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm z-50">
      <div
        className="w-full container  mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-30 h-16"
        role="Container"
      >
        {/* Logo Section */}
        <div className="w-[85px] h-[85px]  md:w-35 md:h-35">
          <img src={Logo} alt="Precision USMLE Tutors Logo" />
        </div>

        {/* Mobile Menu */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className=" md:hidden p-2"
        >
          {isMenuOpen ? (
            <HiX className="size-6" />
          ) : (
            <HiMenu className="size-6" />
          )}
        </button>

        {/* Desktop Navigation Links */}
        <div
          className="hidden md:flex items-center gap-10"
          role="navigation links"
        >
          <ul className="flex  gap-10">
            {navLinks.map((link, indexed) => (
              <Link
                key={indexed}
                to={link.href}
                className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full ${
                  activeLink === link.href
                    ? "text-blue-600 after:w-full"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={() => setActiveLink(link.href)}
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>

        {/* Call To Action Button */}
        <div className="hidden md:block">
          <Link to="/contact">
            <button className=" bg-linear-to-r from-red-600 to-blue-600 text-white px-6 py-2.5 rounded-lg hover:shadow-md hover:shadow-red-200 md:hover:bg-blue-700 transition-all ">
              Get In Touch
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile NavLinks */}
      <div className="" role="Mobile Menu Container">
        {isMenuOpen && (
          <div className=" border-t border-gray-100 bg-white w-full md:hidden py-4 ">
            <div className="containter mx-auto space-y-4 px-4">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`block text-sm font-medium py-2 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:text-blue-600 after:transition-all after:duration-300 hover:after:w-full ${
                    activeLink === link.href
                      ? "text-blue-600  after:w-full"
                      : "text-gray-600 hover:text-gray-900"
                  } `}
                  onClick={() => (
                    setActiveLink(link.href), setIsMenuOpen(false)
                  )}
                >
                  {link.label}
                </a>
              ))}
              {/* Call To Action Button */}
              <Link to="/contact">
                <button className=" md:hidden w-full bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:shadow-md hover:shadow-blue-200 md:hover:bg-blue-700 transition-all ">
                  Get In Touch
                </button>
              </Link>
              <div className=""></div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
