import { ArrowRight } from "lucide-react";
import { stepTwo } from "../data/data";
import Testimonial from "./Testimonial";
import Footer from "./Footer";

function StepTwo() {
  return (
    <section className="bg-gray-50 py-2 px-6 md:px-16 mx-auto overflow-hidden">
      <div className="text-center mb-12 max-w-7xl">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Master USMLE Step 2,{" "}
          <span className="bg-linear-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
            Applied Knowledge for Medical Excellence
          </span>
        </h2>
        <p className="text-gray-600 text-lg">
          Every program, mentor, and resource we provide is designed with one
          goal in mind <br /> to empower you with everything you need to excel.{" "}
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="">
          <img src="/clinicii.jpg" className="rounded-4xl w-[500px]" alt="" />
        </div>
        <div className="flex flex-col gap-8  w-full">
          <p className="text-gray-600">
            As an examinee, you will have the opportunity to demonstrate your ability to apply medical knowledge, skills, and understanding of clinical science essential for the provision of patient care under supervision. The emphasis on health promotion and disease prevention ensures that you are well-equipped to provide safe and competent care to your patients. This comprehensive exam, known as Step 2 CK, is designed to test your principles of clinical sciences and basic patient-centered skills that are the foundation of a successful medical practice.
          </p>
          <p className="text-gray-600">
            The one-day examination is divided into eight 60-minute blocks, and you will have a total of 9 hours to complete the test. The number of questions per block may vary, but you can expect a maximum of 40 questions per block and a total of 318 questions on the overall examination.
          </p>
          
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-8 my-8">
        <div className="">
          <img src="/clinic.jpg" className="rounded-4xl w-[500px]" alt="" />
        </div>
        <div className="flex flex-col gap-5 w-full">
          <h2 className="font-bold text-2xl">How is USMLE Step 1 scored?</h2>
          <p className="text-gray-600 text-lg">
            The minimum passing score of the USMLE Step 2 CK is now set at 214.
          </p>
        </div>
      </div>


      <div className="max-w-7xl overflow-hidden">
        <h2 className="mb-8 text-3xl font-bold text-center text-gray-900">
          USMLE Step 2 Package
        </h2>
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
                <div className="flex gap-5 items-center border-b border-gray-100 pb-5">
                    <div
                      className={`w-12 h-12 flex items-center justify-center rounded-lg bg-blue-600/10 hover:transition-colors`}
                    >
                      <steps.icon className="w-6 h-6 text-blue-600 hover:transition-colors flex" />
                    </div>
                    <h3 className="text-lg font-semibold ">{steps.subTitle}</h3>
                  </div>
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

export default StepTwo;
