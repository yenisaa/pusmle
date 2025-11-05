import React from "react";

import { ArrowRight } from "lucide-react";
import { stepOne, stepTwo, stepThree } from "../data/data";

import NavBar from "../components/NavBar";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Packages() {
  return (
    <section className="py-6 px-6 md:px-16 mx-auto overflow-hidden">
      <NavBar />

      <div className="bg-gray-50 flex flex-col items-center justify-center text-center max-w-7xl h-screen">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Our study plans are specifically designed to{" "}
          <span className="bg-linear-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
            meet your needs
          </span>
        </h2>
        <p className="text-gray-600 text-lg">
          Every program, mentor, and resource we provide is designed with one
          goal in mind <br /> to empower you with everything you need to excel.{" "}
        </p>
      </div>

      {/* Step 1  */}
      <div className="max-w-7xl overflow-hidden my-8 flex flex-col items-center justify-center">
        <div className="flex self-center items-center justify-center gap-3 border-b border-gray-100 pb-4 w-md mb-5">
          <span className=" rounded-xl font-bold w-6 h-6 text-red-600 bg-red-200 p-5 flex items-center justify-center hover:transition-colors">
            1
          </span>
          <h2 className=" text-3xl font-bold text-center text-gray-900">
            USMLE Step 1 Package
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 w-full mb-8">
          {stepOne.map((steps, index) => (
            <div
              key={index}
              className=" group hover:shadow-xl transition-all duration-500 hover:translate-y-2 relative bg-white rounded-xl overflow-hidden shadow-sm flex-1"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div
                className={`absolute top-0 left-0 w-full h-2 bg-linear-to-r`}
              ></div>
              <div className="p-6 flex flex-col items-start">
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-lg bg-red-200 hover:transition-colors`}
                >
                  <steps.icon className="w-6 h-6 text-red-600 hover:transition-colors" />
                </div>
                <h3 className="text-lg font-semibold mt-4">{steps.subTitle}</h3>
                {/* <p className="text-gray-600 mt-2">{steps.subTitle}</p> */}
                <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
                  {steps.features.map((feature, index) => (
                    <li key={index} className="text-gray-600 ">
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/pricing">
                  <button
                    className={`mt-4 w-full border border-gray-300 text-gray-900 font-medium px-6 py-2.5 rounded-lg hover:shadow-md hover:shadow-blue-200  hover:bg-blue-600 hover:text-white transition-all cursor-pointer flex items-center justify-center gap-2`}
                  >
                    See pricing <ArrowRight size="20" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Step 2  */}
      <div className="max-w-7xl overflow-hidden my-8 flex flex-col items-center justify-center">
        <div className="flex self-center items-center justify-center gap-3 border-b border-gray-100 pb-4 w-md mb-5">
          <span className=" rounded-xl font-bold w-6 h-6 text-blue-600 bg-blue-200 p-5 flex items-center justify-center hover:transition-colors">
            2
          </span>
          <h2 className=" text-3xl font-bold text-center text-gray-900">
            USMLE Step 2 Package
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 w-full mb-8">
          {stepTwo.map((steps, index) => (
            <div
              key={index}
              className=" group hover:shadow-xl transition-all duration-500 hover:translate-y-2 relative bg-white rounded-xl overflow-hidden shadow-sm flex-1"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div
                className={`absolute top-0 left-0 w-full h-2 bg-linear-to-r`}
              ></div>
              <div className="p-6 flex flex-col items-start">
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-lg bg-blue-600/10 hover:transition-colors`}
                >
                  <steps.icon className="w-6 h-6 text-blue-600 hover:transition-colors" />
                </div>
                <h3 className="text-lg font-semibold mt-4">{steps.subTitle}</h3>
                {/* <p className="text-gray-600 mt-2">{steps.subTitle}</p> */}
                <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
                  {steps.features.map((feature, index) => (
                    <li key={index} className="text-gray-600 ">
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="#contact">
                  <button
                    className={`mt-4 w-full border border-gray-300 text-gray-900 font-medium px-6 py-2.5 rounded-lg hover:shadow-md hover:shadow-blue-200  hover:bg-blue-600 hover:text-white transition-all cursor-pointer flex items-center justify-center gap-2`}
                  >
                    See pricing <ArrowRight size="20" />
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Step 3  */}
      <div className="max-w-7xl overflow-hidden my-8 flex flex-col items-center justify-center">
        <div className="flex self-center items-center justify-center gap-3 border-b border-gray-100 pb-4 w-md mb-5">
          <span className=" rounded-xl font-bold w-6 h-6 text-purple-600 bg-purple-200 p-5 flex items-center justify-center hover:transition-colors">
            3
          </span>
          <h2 className=" text-3xl font-bold text-center text-gray-900">
            USMLE Step 3 Package
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 w-full mb-8">
          {stepThree.map((steps, index) => (
            <div
              key={index}
              className=" group hover:shadow-xl transition-all duration-500 hover:translate-y-2 relative bg-white rounded-xl overflow-hidden shadow-sm flex-1"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div
                className={`absolute top-0 left-0 w-full h-2 bg-linear-to-r`}
              ></div>
              <div className="p-6 flex flex-col items-start">
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-lg bg-purple-200 hover:transition-colors`}
                >
                  <steps.icon className="w-6 h-6 text-purple-600 hover:transition-colors" />
                </div>
                <h3 className="text-lg font-semibold mt-4">{steps.subTitle}</h3>
                {/* <p className="text-gray-600 mt-2">{steps.subTitle}</p> */}
                <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
                  {steps.features.map((feature, index) => (
                    <li key={index} className="text-gray-600 ">
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="#contact">
                  <button
                    className={`mt-4 w-full border border-gray-300 text-gray-900 font-medium px-6 py-2.5 rounded-lg hover:shadow-md hover:shadow-blue-200  hover:bg-blue-600 hover:text-white transition-all cursor-pointer flex items-center justify-center gap-2`}
                  >
                    See pricing <ArrowRight size="20" />
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Testimonial />
      <Footer />
    </section>
  );
}

export default Packages;
