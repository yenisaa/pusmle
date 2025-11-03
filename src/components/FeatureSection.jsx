import { programs } from "../data/data";
import { ArrowRight } from "lucide-react";

function FeatureSection() {

  return (
    <section
      className="bg-white w-full mx-auto py-4 px-6 md:px-16 flex flex-col items-center justify-center"
      id="courses"
    >
      <div className="max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-sm font-medium uppercase text-blue-600">
            Our Programs
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Comprehensive{" "}
            <span className="bg-linear-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
              USMLE Preparation
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            Choose the program that fits your needs and get expert guidance
            every step of the way.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 w-full mb-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className=" group hover:shadow-xl transition-all duration-500 hover:translate-y-2 relative bg-white rounded-xl overflow-hidden shadow-sm flex-1"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div
                className={`absolute top-0 left-0 w-full h-2 bg-linear-to-r ${program.color.from} ${program.color.to}`}
              ></div>
              <div className="p-6 flex flex-col items-start">
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-lg bg-blue-600/10`}
                >
                  <program.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mt-4">{program.title}</h3>
                <p className="text-gray-600 mt-2">{program.description}</p>
                <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
                  {program.details.map((detail, index) => (
                    <li className="marker:text-blue-600" key={index}>
                      {detail}
                    </li>
                  ))}
                </ul>
                <a href="#contact">
                  <button
                    
                    className={`mt-4 w-full border border-gray-300 text-gray-900 font-medium px-6 py-2.5 rounded-lg hover:shadow-md hover:shadow-red-200 hover:bg-linear-to-r ${program.color.from} ${program.color.to} hover:text-white transition-all cursor-pointer flex items-center justify-center gap-2`}
                  >
                    Learn More <ArrowRight size="20" />
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
