import AboutUs from "../components/AboutUs"
import NavBar from "../components/NavBar"


function AboutPage() {
  return (
    <section className="w-full bg-gray-50 py-16 px-4 sm:px-6 md:px8 overflow-x-hidden">
        <NavBar />
        <AboutUs />
    </section>
  )
}

export default AboutPage