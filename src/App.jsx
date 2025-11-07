import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import Packages from "./pages/PackagesPage";
import StepOne from './components/StepOne'
import StepTwo from './components/StepTwo'
import StepThree from './components/StepThree'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PricePage from "./pages/PricePage";
import NotFound from "./pages/NotFound";
import CourseFee from "./pages/CourseFee";

function App() {
  return (
    <main className="relative min-w-screen overflow-x-hidden ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<Packages />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/step-1" element={<StepOne />} />
          <Route path="/step-2" element={<StepTwo />} />
          <Route path="/step-3" element={<StepThree />} />
          <Route path="/pricing" element={<CourseFee />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
