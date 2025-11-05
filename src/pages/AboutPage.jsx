import AboutUs from "../components/AboutUs"
import FeatureSection from "../components/FeatureSection"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import Testimonial from "../components/Testimonial"
import WhyChooseUs from "../components/WhyChooseUs"


function AboutPage() {
  return (
    <section className="w-full bg-gray-50 py-16 px-4 sm:px-6 md:px8 overflow-x-hidden">
        <div className="">
          <NavBar />
        </div>

        <div className="text-center mb-12 max-w-7xl mt-50">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Bridging Nigerian Medical Excellence with {" "}
          <span className="bg-linear-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
            US Residency Dreams
          </span>
        </h2>
        <p className="text-gray-600 text-lg">
          Precision USMLE Tutors provides tailored tutoring for the United States Medical Licensing Examination (USMLE). Whether you're preparing for Step 1, Step 2 CK, or Step 3, we help medical students and international medical graduates (IMGs) succeed with smart strategies and expert support.{" "}
        </p>
      </div>
      
        <div className="">
          <AboutUs />
        </div>
        <div className="">
          <FeatureSection />
        </div>
        <div className="">
          <WhyChooseUs />
        </div>
        <div className="">
          <Testimonial />
        </div>
        <div className="">
          <Footer />
        </div>
    </section>
  )
}

export default AboutPage