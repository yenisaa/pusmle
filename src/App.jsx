import AboutUs from "./components/AboutUs.jsx"
import FeatureSection from "./components/FeatureSection.jsx"
import Hero from "./components/Hero.jsx"
import NavBar from "./components/NavBar.jsx"
import WhyChooseUs from "./components/WhyChooseUs.jsx"


function App() {

  return (
    <>

      <main className="relative min-w-screen overflow-x-hidden ">
        <div className="absolute -top-28 -left-28 w-[400px] h-[400px] bg-linear-to-r from-indigo-500/20 to-pink-500/20 rounded-full -z-10 blur-[80px]"></div>
        <div className="overflow-hidden">
          <NavBar />
          <Hero />
          <AboutUs />
          <FeatureSection />
          <WhyChooseUs />
        </div>
      </main>
    </>
  )
}

export default App
