import { ArrowRight } from "lucide-react";
import { stepOne } from "../data/data";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

function StepOne() {
  return (
    <section className="bg-gray-50 py-2 px-6 md:px-16 mx-auto overflow-hidden">
      <div className="">
        <NavBar />
      </div>  
      
      <div className="text-center mb-12 max-w-7xl mt-50">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Master USMLE Step 1,{" "}
          <span className="bg-linear-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
            Your Foundation for Medical Excellence
          </span>
        </h2>
        <p className="text-gray-600 text-lg">
          Every program, mentor, and resource we provide is designed with one
          goal in mind <br /> to empower you with everything you need to excel.{" "}
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full">
          <img src="/adebayo.png" alt="" />
        </div>
        <div className="flex flex-col gap-8  w-full">
          <p className="text-gray-600">
            Step 1 tests your understanding and ability to apply fundamental
            concepts in medicine, with a focus on health, disease, and
            treatment. It measures mastery of basic sciences and the ability to
            continue learning throughout your medical career. The exam is based
            on an integrated outline that covers systems and processes
          </p>
          <p className="text-gray-600">
            Unlock the key to your medical residency dreams with USMLE Step 1.
            This comprehensive exam may be pass/fail, but its broad content
            coverage and high stakes weigh heavy on your future. With the right
            preparation, you’ll be able to master the material and secure your
            spot in the top residency programs.” “Maximize your performance on
            Step 1 by preparing for a full-day exam experience. The test is
            divided into seven timed blocks and held in one 8-hour session, with
            the possibility of up to 40 questions per block and a maximum of 280
            questions overall.
          </p>
          <p className="text-gray-600 text-lg">
            Step 1 includes 45 minutes of break time, and a 15-minute optional
            tutorial. More break time can be earned by finishing a block or
            tutorial early.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-8 my-8">
        <div className="w-full">
          <img src="/nafisat.png" alt="" />
        </div>
        <div className="flex flex-col gap-5 w-full">
          <h2 className="font-bold text-2xl">How is USMLE Step 1 scored?</h2>
          <p className="text-gray-600 text-lg">
            The USMLE Step 1 exam is evaluated as a PASS OR FAIL test. Students
            who pass the exam receive only a passing grade without any
            additional information. However, those who fail the exam are
            provided with information on how close they were to passing and
            feedback on specific content areas to help guide their study plan
            for future attempts.
          </p>
        </div>
      </div>

      <div className="max-w-7xl overflow-hidden">
        <h2 className="mb-8 text-3xl font-bold text-center text-gray-900">
          USMLE Step 1 Package
        </h2>
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
      <Testimonial />
      <Footer />
    </section>
  );
}

export default StepOne;
