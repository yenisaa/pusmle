import { ArrowRight } from "lucide-react";
import { stepThree } from "../data/data";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
import NavBar from "./NavBar";

function StepThree() {
  return (
     <section className="bg-gray-50 py-2 px-6 md:px-16 mx-auto overflow-hidden">
      <div className="">
        <NavBar />
      </div>
      
      <div className="text-center mb-12 max-w-7xl mt-50">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Master USMLE Step 3,{" "}
          <span className="bg-linear-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
            A Step To Your Medical Excellence
          </span>
        </h2>
        <p className="text-gray-600 text-lg">
          Every program, mentor, and resource we provide is designed with one
          goal in mind <br /> to empower you with everything you need to excel.{" "}
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="">
          <img
            src="/clinicii.jpg"
            className="rounded-4xl w-full"
            alt="sthethoscope image"
          />
        </div>
        <div className="flex flex-col gap-8  w-full">
          <p className="text-gray-600">
            Step 3 of the USMLE sequence is the final examination that assesses
            your ability to apply medical knowledge and understanding of
            biomedical and clinical science for the unsupervised practice of
            medicine, with an emphasis on patient management in ambulatory
            settings. This examination is the last step in obtaining a license
            to practice medicine without supervision.
          </p>
          <p className="text-gray-600">
            The examination material is prepared by committees made up of
            recognized experts from various fields in the medical profession,
            including both academic and non-academic practitioners, as well as
            members of state medical licensing boards. The content of Step 3 is
            based on a data-based model of generalist medical practice in the
            United States, and the test items and cases reflect the clinical
            situations that a general, as-yet undifferentiated, physician may
            encounter within the context of a specific setting.
          </p>
          <p className="text-gray-600">
            Step 3 provides a final assessment of physicians who will be
            assuming independent responsibility for delivering general medical
            care.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-8 my-8">
        <div className="">
          <img
            src="/clinic.jpg"
            className="rounded-4xl w-full"
            alt="laboratory image"
          />
        </div>
        <div className="flex flex-col gap-5 w-full ">
          <h2 className="font-bold text-2xl">Exam Format for USMLE Step 3</h2>
          <p className="text-gray-600">
            Step 3 consists of multiple-choice questions (MCQs), also known as
            items, and computer-based case simulations.
          </p>

          <p className="text-gray-600 text-lg">
            Step 3 is a two-day examination. The first day of testing is
            primarily on Foundations of Independent Practice (FIP) and includes
            232 multiple-choice items divided into 6 blocks of 38-39 items; 60
            minutes are allotted for completion of each block of test items.
            There are approximately 7 hours in the test session on the first
            day, including 45 minutes of break time and a 5-minute optional
            tutorial. Note that the amount of time available for breaks may be
            increased by finishing a block of test items or the optional
            tutorial before the allotted time expires.
          </p>
        <div className="flex flex-col items- gap-8 my-8">
          <h3 className="font-bold text-xl text-gray-900">How is USMLE Step 3 scored?</h3>
          <p className="text-gray-600 text-lg">
            The minimum passing score of the USMLE Step 3 is now set at 198.
          </p>
        </div>
        </div>
      </div>

      <div
        className="bg-white w-full py-5 px-5
      "
      >
        <div className="max-w-7xl overflow-hidden">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-900">
            USMLE Step 3 Package
          </h2>
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
                <div className="p-6 flex flex-col justify-center mb-8">
                  <div className="flex gap-5 items-center border-b border-gray-100 pb-5">
                    <div
                      className={`w-12 h-12 flex items-center justify-center rounded-lg bg-blue-600/10 hover:transition-colors`}
                    >
                      <steps.icon className="w-6 h-6 text-blue-600 hover:transition-colors flex" />
                    </div>
                    <h3 className="text-lg font-semibold ">{steps.subTitle}</h3>
                  </div>
                  {/* <p className="text-gray-600 mt-2">{steps.subTitle}</p> */}
                  <ul className="mt-2 list-disc list-inside text-gray-600 pt-5 space-y-1">
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
      </div>

      <Testimonial />
      <Footer />
    </section>
  );
}

export default StepThree;
