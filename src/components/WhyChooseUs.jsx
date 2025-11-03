import { PhoneCall } from "lucide-react";
import { differentiators } from "../data/data";

function WhyChooseUs() {
  return (
    <section className="w-full mx-auto px-4 py-16 bg-gray-50 flex flex-col items-center justify-center">
      <div className="max-w-7xl">
        {/* heading section  */}
        <div className="text-center mb-12 max-w-7xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why{" "}
            <span className="bg-linear-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
              Choose Us?
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            Every program, mentor, and resource we provide is designed with one
            goal in mind <br /> to empower you with everything you need to excel.{" "}
          </p>
        </div>
        {/* the why section  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center">
          {differentiators.map((differentiator, index) => (
            <div
              className="flex flex-col items-center justify-center"
              key={index}
            >
              <div className="w-24 h-24 mb-6 rounded-full flex items-center justify-center bg-blue-600/10 group hover:shadow-xl transition-all duration-500 hover:translate-y-2 relative">
                <differentiator.icon className="text-blue-600 absolute" />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-gray-900 text-lg">
                  {differentiator.title}
                </h3>
                <p className="text-gray-600">{differentiator.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Button  */}
        <div className="flex items-center justify-center w-full mt-8">
          <button className="bg-blue-600 text-white cursor-pointer px-10 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors relative flex items-center gap-3">
            Start Your Free Consultation <PhoneCall className="flex size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;

{
  /* <div className="col-span-2 grid grid-cols-1 md:grid-cols-4 justify-between gap-2 ">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="w-full flex flex-col md:flex-row items-center"
            >
              <div className="flex flex-col md:flex-row justify-center gap-2 ">
                <div className="flex items-center  justify-center bg-blue-600/10 w-20 h-20 rounded-2xl">
                  <stat.icon className=" text-blue-600" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-3xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="w-full">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div> */
}
