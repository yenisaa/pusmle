import NavBar from "../components/NavBar";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import WhyChooseUs from "../components/WhyChooseUs";
import PricingPlan from '../components/PricingPlan';
import FeatureSection from '../components/FeatureSection';
import Hero from '../components/Hero'
import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";

function HomePage() {
  return (
    <main className="relative min-w-screen overflow-x-hidden ">
      <div className="absolute -top-28 -left-28 w-[400px] h-[400px] bg-linear-to-r from-indigo-500/20 to-pink-500/20 rounded-full -z-10 blur-[80px]"></div>
      <div className="overflow-hidden">
        <NavBar />
        <Hero />
        <AboutUs /> 
        <FeatureSection />
        <WhyChooseUs />
        <PricingPlan />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

export default HomePage;
