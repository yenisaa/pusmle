import { pricing } from "../data/data";
import { CircleArrowRight } from "lucide-react";

function PricingPlan() {
  return (
    <section className=" mx-auto px-4 py-2  mb-16 bg-white max-w-7xl" id="pricing">
      <div className="flex flex-col items-center justify-center">
          <h2 className=" text-4xl max-w-md font-bold text-center text-gray-900 my-8 h-5xl">
            Our <span className="bg-linear-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">Pricing</span>
          </h2>
      </div>
      <div className="flex flex-col md:flex-row items-stretch justify-center gap-6  my-8">
        {pricing.map((price, index) => (
            <div
            className=" group hover:shadow-xl transition-all duration-500 hover:translate-y-2 relative bg-white rounded-xl overflow-hidden shadow-sm flex-1"
            key={index}
            >
            <div
                    className={`absolute top-0 left-0 w-full h-2 bg-linear-to-r ${price.color.from} ${price.color.to}`}
                  ></div>
            <div
              className="flex flex-col md:flex-row bg-white w-full rounded-4xl p-4 "
              role="Price Table Container"
            >
              <div className=" w-full">
                {/* Price Table Header Info  */}
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-2xl text-center font-bold text-gray-700/40  w-full mb-2">
                    {price.name}
                  </h3>
                  <p className="text-gray-600 text-lg text-center mb-4 pb-3 border-b-2 border-gray-100">{price.tagline}</p>
                  <h2 className="flex text-6xl font-bold text-blue-600 items-center mb-4 pb-3 border-b-2 border-gray-100">
                    <price.icon className=" size-12 " /> {price.cost}
                  </h2>
                </div>
                <div className="flex flex-col items-center justify-center">
                  {/* Price Table Body  */}
                  <ul className="flex flex-col md:flex-row items-center justify-center">
                    <li className="">
                      {price.features.map((feature, index) => (
                        <ul key={index} className="list-disc list-inside ">
                          <li className="text-gray-600">{feature}</li>
                        </ul>
                      ))}
                    </li>
                  </ul>
                  <button className="bg-blue-600 text-white cursor-pointer w-xs h-12 rounded-full font-medium hover:bg-blue-700 transition-colors relative flex items-center justify-center gap-3 mt-8 ">
                    Choose this package
                    <CircleArrowRight className="flex size-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PricingPlan;
