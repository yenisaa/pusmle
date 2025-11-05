import heroImage from "/Hero-lmage.png";
import { HiStar } from "react-icons/hi2";
import { ArrowRightCircle } from "lucide-react";
import { PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="overflow-x-hidden container flex flex-col md:flex-row justify-between pt-44 mx-auto pb-6 px-4 sm:px-6 lg:px-8"
      id="home"
    >
      {/* Left Col */}
      <div className="w-full md:w-1/2 space-y-8">
        {/* Bubble */}
        <div className="flex items-center gap-2 bg-white w-fit shadow-md p-2 px-4 rounded-full">
          <span className="">
            <HiStar className="fill-blue-400 group-hover:scale-110 group-hover:text-amber-300 transition-transform" />
          </span>{" "}
          <p className="text-sm font-medium">Jump start your growth</p>
        </div>
        {/* Headline */}
        <div className="">
          <h1 className="text-5xl md:text-4xl font-bold text-gray-900 lg:text-5xl leading-tight">
            <span className="bg-linear-to-r from-red-600 to-blue-600 bg-clip-text text-transparent inline-block relative">
              Excel in Your USMLE Journey{" "}
              <span className="absolute bottom-0 left-0  w-40  h-1.5 bg-red-200/90"></span>
            </span>
            with US Trained Physicians and Seasoned Board Educators
          </h1>
        </div>
        {/* Headline Text */}
        <div className="">
          <p className="text-gray-600 text-lg md:text-xl max-w-xl">
            Transform your Nigerian medical knowledge into US board success.
            Expert tutoring for Step 1, Step 2 CK, and Step 3 that bridges the
            gap between local training and American medical licensing
            requirements.
          </p>
        </div>
        {/* Action Buttons */}
        <div>
          <Link to="/contact" className="flex flex-col md:flex-row gap-3">
            <button className="bg-linear-to-r from-red-600 to-blue-600 text-white px-6 py-2.5  rounded-lg hover:shadow-md hover:shadow-red-200 md:hover:bg-blue-700 transition-all cursor-pointer flex items-center justify-center gap-2">
              Start Your Free Consultation <PhoneCall className="flex size-4" />
            </button>
            <button className="border-gray-300 border text-gray-900 font px-6 py-2.5 rounded-lg hover:shadow-md hover:shadow-red-200  transition-all cursor-pointer flex items-center justify-center gap-2">
              Explore Programs <ArrowRightCircle className="flex size-4" />
            </button>
          </Link>
        </div>
      </div>
      {/*  Right Col */}
      <div className="w-full flex flex-col items-center justify-center md:w-1/2 space-y-8 mt-16 md:mt-0 pl-0 md:pl-12 ">
        <div className="w-md relative overflow-hidden rounded-lg">
          <img
            src={heroImage}
            alt="hero image"
            className="rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
