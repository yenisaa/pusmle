import { feature } from "../data/data.js";

function AboutUs() {
  return (
    <section className="w-full bg-gray-50 py-16 px-4 sm:px-6 md:px8" id="about">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
          {/* Heading Text  */}
          <div className="">
            <p className="text-sm text-purple-600 font-medium mb-2">
              Your Precision Path to USMLE Success
            </p>
            <p className="text-gray-600  md:w-3/4">
              <strong>Precision USMLE Tutors</strong> is Nigeria's premier USMLE
              preparation service, specifically designed for medical students
              and international medical graduates navigating the challenging
              United States Medical Licensing Examination.
            </p>
          </div>

          {/* Bullet points */}
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 justify-between gap-8">
            {feature.map((features, index) => (
              <div key={index} className="   space-x-4">
                <div className="flex gap-5 items-center ">
                  <div className="mb-2 shrink-0 w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center">
                    {<features.icon className="text-blue-600 " />}
                  </div>
                  <div className="text-xl font-semibold text-gray-900 mb-2">
                    {features.title}
                  </div>
                </div>
                <div className="text-gray-600">{features.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
