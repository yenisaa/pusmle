import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { stepOne, stepThree, stepTwo } from "../data/data";
import { CircleArrowRight } from "lucide-react";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

function PricePage() {
  return (
    <section className="bg-gray-50 py-2 px-6 md:px-16 mx-auto overflow-hidden">
      <div className="">
        <NavBar />
      </div>

      <div className="text-center mb-12 max-w-7xl mt-50">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Flexible Plans Designed for{" "}
          <span className="bg-linear-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
            Every Student
          </span>
        </h2>
        <p className="text-gray-600 text-lg">
          Transparent pricing with no hidden fees. Choose the package that fits
          your preparation timeline and budget.{" "}
        </p>
      </div>
      <div className="">
        <div className="flex flex-col items-center justify-center">
          <h2 className=" text-3xl max-w-md font-bold text-center text-gray-900 my-8 h-5xl">
            USMLE Step 1
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-6  my-8">
          {stepOne.map((steps, index) => (
            <div
              className=" group hover:shadow-xl transition-all duration-500 hover:translate-y-2 relative bg-white rounded-xl overflow-hidden shadow-sm flex-1"
              key={index}
            >
              <div
                className={`absolute top-0 left-0 w-full h-2 bg-linear-to-r ${steps.from} ${steps.to}</span>
                    ))}`}
              ></div>
              <div
                className="flex flex-col md:flex-row bg-white w-full rounded-4xl p-4 "
                role="steps Table Container"
              >
                <div className=" w-full">
                  {/* steps Table Header Info  */}
                  <div className="flex flex-col items-center justify-center">
                    <h3 className="text-2xl text-center font-bold text-gray-400  w-full mb-2">
                      {steps.title}
                    </h3>
                    <h4 className="text-xl text-center font-bold text-gray-900 mb-2">
                      {steps.fee}
                    </h4>
                    <p className="text-gray-600 text-lg text-center mb-4 pb-3 border-b-2 border-gray-100">
                      {steps.subTitle}
                    </p>
                    {/* <h2 className="flex text-6xl font-bold text-gray-900 items-center mb-4 pb-3 border-b-2 border-gray-100">
                            <steps.icon className=" size-12 " /> {steps.cost}
                          </h2> */}
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    {/* steps Table Body  */}
                    <ul className="flex flex-col md:flex-row items-center justify-center">
                      <li className="">
                        {steps.features.map((feature, index) => (
                          <ul key={index} className="list-disc list-inside ">
                            <li className="text-gray-600 text-left">
                              {feature}
                            </li>
                          </ul>
                        ))}
                      </li>
                    </ul>
                    <Link to="/contact">
                      <button className="bg-blue-600 text-white cursor-pointer w-65  h-12 rounded-full font-medium hover:bg-blue-700 transition-colors relative flex items-center justify-center gap-3 mt-8 ">
                        Choose Plan
                        <CircleArrowRight className="flex size-4" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className=" text-3xl max-w-md font-bold text-center text-gray-900 my-8 h-5xl">
            USMLE Step 2CK
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-6  my-8">
          {stepTwo.map((steps, index) => (
            <div
              className=" group hover:shadow-xl transition-all duration-500 hover:translate-y-2 relative bg-white rounded-xl overflow-hidden shadow-sm flex-1"
              key={index}
            >
              <div
                className={`absolute top-0 left-0 w-full h-2 bg-linear-to-r ${steps.from} ${steps.to}</span>
                    ))}`}
              ></div>
              <div
                className="flex flex-col md:flex-row bg-white w-full rounded-4xl p-4 "
                role="steps Table Container"
              >
                <div className=" w-full">
                  {/* steps Table Header Info  */}
                  <div className="flex flex-col items-center justify-center">
                    <h3 className="text-2xl text-center font-bold text-gray-600  w-full mb-2">
                      {steps.title}
                    </h3>
                    <h4 className="text-xl text-center font-bold text-gray-600 mb-2">
                      {steps.fee}
                    </h4>
                    <p className="text-gray-600 text-lg text-center mb-4 pb-3 border-b-2 border-gray-100">
                      {steps.subTitle}
                    </p>
                    {/* <h2 className="flex text-6xl font-bold text-gray-900 items-center mb-4 pb-3 border-b-2 border-gray-100">
                            <steps.icon className=" size-12 " /> {steps.cost}
                          </h2> */}
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    {/* steps Table Body  */}
                    <ul className="flex flex-col md:flex-row items-center justify-center">
                      <li className="">
                        {steps.features.map((feature, index) => (
                          <ul key={index} className="list-disc list-inside ">
                            <li className="text-gray-600 text-left">
                              {feature}
                            </li>
                          </ul>
                        ))}
                      </li>
                    </ul>
                    <Link to="/contact">
                      <button className="bg-blue-600 text-white cursor-pointer w-65  h-12 rounded-full font-medium hover:bg-blue-700 transition-colors relative flex items-center justify-center gap-3 mt-8 ">
                        Choose Plan
                        <CircleArrowRight className="flex size-4" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className=" text-3xl max-w-md font-bold text-center text-gray-900 my-8 h-5xl">
            USMLE Step 3
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-6  my-8">
          {stepThree.map((steps, index) => (
            <div
              className=" group hover:shadow-xl transition-all duration-500 hover:translate-y-2 relative bg-white rounded-xl overflow-hidden shadow-sm flex-1"
              key={index}
            >
              <div
                className={`absolute top-0 left-0 w-full h-2 bg-linear-to-r ${steps.from} ${steps.to}</span>
                    ))}`}
              ></div>
              <div
                className="flex flex-col md:flex-row bg-white w-full rounded-4xl p-4 "
                role="steps Table Container"
              >
                <div className=" w-full">
                  {/* steps Table Header Info  */}
                  <div className="flex flex-col items-center justify-center">
                    <h3 className="text-2xl text-center font-bold text-gray-600  w-full mb-2">
                      {steps.title}
                    </h3>
                    <h4 className="text-xl text-center font-bold text-gray-600 mb-2">
                      {steps.fee}
                    </h4>
                    <p className="text-gray-600 text-lg text-center mb-4 pb-3 border-b-2 border-gray-100">
                      {steps.subTitle}
                    </p>
                    {/* <h2 className="flex text-6xl font-bold text-gray-900 items-center mb-4 pb-3 border-b-2 border-gray-100">
                            <steps.icon className=" size-12 " /> {steps.cost}
                          </h2> */}
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    {/* steps Table Body  */}
                    <ul className="flex flex-col md:flex-row items-center justify-center">
                      <li className="">
                        {steps.features.map((feature, index) => (
                          <ul key={index} className="list-disc list-inside ">
                            <li className="text-gray-600 text-left">
                              {feature}
                            </li>
                          </ul>
                        ))}
                      </li>
                    </ul>
                    <Link to="/contact">
                      <button className="bg-blue-600 text-white cursor-pointer w-65  h-12 rounded-full font-medium hover:bg-blue-700 transition-colors relative flex items-center justify-center gap-3 mt-8 ">
                        Choose Plan
                        <CircleArrowRight className="flex size-4" />
                      </button>
                    </Link>
                  </div>
                </div>
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

export default PricePage;
