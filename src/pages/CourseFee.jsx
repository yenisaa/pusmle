import { ShoppingCart } from "lucide-react";
import NavBar from "../components/NavBar";
import { ccsDrills, step1Bundle, step2Bundle, step3Bundle } from "../data/data";
import { Link } from "react-router-dom";

function CourseFee() {
  return (
    <section className="bg-gray-50">
      {/* Navigation Menu  */}
      <div className="mb-30">
        <NavBar />
      </div>

      {/*Step 1 Course Selection Section  */}
      <div className="max-w-7xl mx-auto">
        <div className="mb-9 p-9">
          <h2 className="text-3xl font-bold text-center text-gray-600">
            Step 1 Bundles
          </h2>
        </div>
        <div className="grid grid-cols-4 gap-9  ">
          {step1Bundle.map((bundle, index) => (
            <div
              className="group hover:shadow-xl transition-all duration-500 hover:translate-y-2 relative bg-white rounded-xl overflow-hidden shadow-sm flex-1 p-5"
              key={index}
            >
              {/* image div  */}
              {/* <div className=""><img src="/clinic.jpg" className="w-82 " alt="" /></div> */}
              {/* content div  */}
              <div className="">
                <div className="w-12 h-12 bg-blue-200 rounded-lg flex items-center justify-center hover:translate-0.5 transition-all duration-200">
                  <bundle.icon className="w-6 h-6 text-blue-600 hover:transition-colors" />
                </div>
                <h3 className="text-blue-600 font-bold text-xl my-3">
                  {bundle.title}
                </h3>
                <div className="flex gap-3 items-baseline">
                  <h4 className="text-3xl text-gray-900 font-medium">
                    {bundle.fee}
                  </h4>
                  <p className="text-sm font-semibold text-gray-900">
                    {bundle.paymentMethod}
                  </p>
                </div>
                <p className="text-gray-600 mb-2 mt-2">{bundle.paymentRate}</p>
                <p className="text-gray-600 font-medium">
                  {bundle.hourlyPayment}
                </p>
                <Link to={"/contact"}>
                  <button className="p-3 flex bg-white text-gray-600 border-gray-200 border hover:bg-blue-600 rounded-xl gap-3 w-full my-3 hover:text-white text-center items-center justify-center font-semibold">
                    <ShoppingCart className="text-white" /> Purchase Package{" "}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*Step 2 Course Selection Section  */}
      <div className="max-w-7xl my-13 mx-auto">
        <div className="mb-9">
          <h2 className="text-gray-600 text-3xl font-bold text-center">
            Step 2 CK Bundles
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-9  justify-items-center">
          {step2Bundle.map((bundle, index) => (
            <div
              className="group hover:shadow-xl transition-all duration-500 hover:translate-y-2 relative bg-white rounded-xl overflow-hidden shadow-sm flex-1 p-5"
              key={index}
            >
              {/* image div  */}
              {/* <div className=""><img src="/clinic.jpg" className="w-82 " alt="" /></div> */}
              {/* content div  */}
              <div className="">
                <div className="w-12 h-12 bg-blue-200 rounded-lg flex items-center justify-center hover:translate-0.5 transition-all duration-200">
                  <bundle.icon className="w-6 h-6 text-blue-600 hover:transition-colors" />
                </div>
                <h3 className="text-blue-600 font-bold text-xl my-3">
                  {bundle.title}
                </h3>
                <div className="flex gap-3 items-baseline">
                  <h4 className="text-3xl text-gray-900 font-medium">
                    {bundle.fee}
                  </h4>
                  <p className="text-sm font-semibold text-gray-600">
                    {bundle.paymentMethod}
                  </p>
                </div>
                <p className="text-gray-600 mb-2 mt-2">{bundle.paymentRate}</p>
                <p className="text-gray-900 font-medium">
                  {bundle.hourlyPayment}
                </p>
                <Link to={"/contact"}>
                  <button className="p-3 flex bg-white text-gray-600 border-gray-200 border hover:bg-blue-600 rounded-xl gap-3 w-full my-3 hover:text-white text-center items-center justify-center font-semibold">
                    <ShoppingCart className="text-white" /> Purchase Package{" "}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*Step 3 Course Selection Section  */}
      <div className="max-w-7xl my-13 mx-auto">
        <div className="mb-9">
          <h2 className="text-gray-600 text-3xl font-bold text-center">
            Step 3 Bundles
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-9  justify-items-center ">
          {step3Bundle.map((bundle, index) => (
            <div
              className="group hover:shadow-xl transition-all duration-500 hover:translate-y-2 relative bg-white rounded-xl overflow-hidden shadow-sm flex-1 mb-8 p-5"
              key={index}
            >
              {/* image div  */}
              {/* <div className=""><img src="/clinic.jpg" className="w-82 " alt="" /></div> */}
              {/* content div  */}
              <div className="">
                <div className="w-12 h-12 bg-blue-200 rounded-lg flex items-center justify-center hover:translate-0.5 transition-all duration-200">
                  <bundle.icon className="w-6 h-6 text-blue-600 hover:transition-colors" />
                </div>
                <h3 className="text-blue-600 font-bold text-xl my-3">
                  {bundle.title}
                </h3>
                <h3 className="text-gray-600 font-bold text-xl my-3">
                  {bundle.package}
                </h3>
                <div className="flex gap-3 items-baseline">
                  <h4 className="text-3xl text-gray-900 font-medium">
                    {bundle.fee}
                  </h4>
                  <p className="text-sm font-semibold text-grey-600">
                    {bundle.paymentMethod}
                  </p>
                </div>
                <p className="text-gray-600 mb-2 mt-2">{bundle.paymentRate}</p>
                <p className="text-gray-600 font-semibold ">
                  {bundle.hourlyPayment}
                </p>
                <Link to={"/contact"}>
                  <button className="p-3 flex bg-white text-gray-600 border-gray-200 border hover:bg-blue-600 rounded-xl gap-3 w-full my-3 hover:text-white text-center items-center justify-center font-semibold">
                    <ShoppingCart className="text-white" /> Purchase Package{" "}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*CCS Drill Course Selection Section  */}
      <div className="max-w-7xl my-13 mx-auto">
        <div className="mb-9">
          <h2 className="text-gray-600 text-3xl font-bold text-center">
            CCS Drills
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-9  justify-items-center ">
          {ccsDrills.map((drills, index) => (
            <div
              className="group hover:shadow-xl transition-all duration-500 hover:translate-y-2 relative bg-white rounded-xl overflow-hidden shadow-sm flex-1 mb-8 p-5"
              key={index}
            >
              {/* image div  */}
              {/* <div className=""><img src="/clinic.jpg" className="w-82 " alt="" /></div> */}
              {/* content div  */}
              <div className="">
                <div className="w-12 h-12 bg-blue-200 rounded-lg flex items-center justify-center hover:translate-0.5 transition-all duration-200">
                  <drills.icon className="w-6 h-6 text-blue-600 hover:transition-colors" />
                </div>
                <h3 className="text-blue-600 font-bold text-xl my-3">
                  {drills.title}
                </h3>
                <h3 className="text-gray-600 font-bold text-xl my-3">
                  {drills.commitment}
                </h3>

                <div className="flex gap-2 items-baseline">
                    <h4 className="text-xl text-gray-900 font-medium mb-3">
                      {drills.Fee}
                    </h4>
                    <p className="text-sm text-gray-600 font-medium mb-3">
                      {drills.reviewFee}
                    </p>
                </div>
                <p className=" font-semibold text-grey-600">
                  {drills.duration}
                </p>
                <p className="text-gray-600 mb-2 mt-2">
                  {drills.assessmentFee}
                </p>
                <p className="text-gray-600 font-semibold ">
                  {drills.hourlyPayment}
                </p>
                <Link to={"/contact"}>
                  <button className="p-3 flex bg-white text-gray-600 border-gray-200 border hover:bg-blue-600 rounded-xl gap-3 w-full my-3 hover:text-white text-center items-center justify-center font-semibold">
                    <ShoppingCart className="text-white" /> Purchase Package{" "}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CourseFee;
