import { Swiper, SwiperSlide } from "swiper/react";
import gbenga from "/Gbenga Timileyin.png";
import Amirat from "/Amirat Salami.png";
import David from "/David Otega.png";
import Rachel from "/Rachel Uche David.png";

// Import Swiper styles
import "swiper/css";
import { Navigation } from "swiper/modules";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Doc. Gbenga Ademola",
    credential: "Step 2 CK - Score 260",
    location: "Lagos, Nigeria → Internal Medicine Residency, Texas",
    image: gbenga,
    quote:
      "Precision USMLE Tutors was instrumental in my Step 2 CK success. As a Nigerian graduate, I struggled to understand the clinical reasoning approach required for USMLE. My tutor didn't just teach me medicine, they taught me how to think like American physicians. The personalized study plan fit perfectly around my clinical rotations, and the question bank strategies were game-changing. I scored 260 and matched to my dream residency program!",
    rating: 5,
    icon: Star,
  },
  {
    id: 2,
    name: "Doc. Amirat Salami",
    credential: "Step 1 - Score 245",
    location: "Abuja, Nigeria → Family Medicine Residency, New York",
    image: Amirat,
    quote:
      "I was overwhelmed by the volume of Step 1 material until I started working with Precision USMLE Tutors. They helped me prioritize high-yield topics and develop an efficient study system. The tutors understood exactly where my Nigerian medical education left gaps and focused our sessions there. Their support went beyond academics, they mentored me through the entire ECFMG process and residency applications.",
    rating: 5,
    icon: Star,
  },
  {
    id: 3,
    name: "Doc. David Otega",
    credential: "Step 3 - First Attempt Pass",
    location: "Port Harcourt → Emergency Medicine Residency, California",
    image: "/David Otega.png",
    quote:
      "After passing Step 1 and 2 CK, I was nervous about Step 3, especially the CCS cases. Precision USMLE Tutors provided excellent preparation for the clinical simulations and multiday exam format. Their tutor was a practicing physician who shared practical insights that went beyond study materials. I passed on my first attempt and felt confident throughout the entire exam.",
    rating: 5,
    icon: Star,
  },
  {
    id: 4,
    name: "Doc. Rachel Uche David",
    credential: "Step 1 & 2 CK Pass",
    location: "Ibadan → Applying for 2026 Match",
    image: "/Rachel Uche David.png",
    quote:
      "Finding quality USMLE tutoring in Nigeria seemed impossible until I discovered Precision USMLE Tutors. The online sessions were convenient, the tutors were knowledgeable and patient, and the study materials were comprehensive. They've supported me through both Step 1 and Step 2 CK, and now they're helping me with my residency applications. Highly recommended!",
    rating: 5,
    icon: Star,
  },
];

function Testimonial() {
  return (
    <section className="py-16 p-4 max-w-7xl mx-auto">
      <div className="">
        <p className="text-sm text-center font-medium uppercase text-blue-600">
          Success Stories
        </p>
        <h2 className="text-gray-900 font-bold text-3xl text-center mb-2">
          Reviews from our{" "}
          <span className="bg-linear-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
            happy students
          </span>
        </h2>
        <p className="text-center text-lg text-gray-600">
          Join hundreds of successful medical students who achieved their USMLE
          goals with our expert guidance.
        </p>
      </div>

      {/* Testimonial  */}
      <div className="max-w-7xl mt-8">
        {/* Swiper Cards  */}

        <Swiper
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Navigation]}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="h-full md:py-12  py-4">
              <div className="bg-white text-center p-4  rounded-lg shadow-md h-full">
                <div className="w-24 h-24 mx-auto mb-4">
                  <img
                    src={testimonial.image}
                    className="rounded-full w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="mb-2">
                  <h3 className="text-lg font-medium">{testimonial.name}</h3>
                </div>

                <div className="flex items-center justify-center mb-2">
                  {[...Array(5)].map((_, starIndex) => (
                    <span key={starIndex} className="flex">
                      <Star className="fill-yellow-400 text-yellow-400" />
                    </span>
                  ))}
                </div>
                <div className="">{testimonial.quote}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation buton  */}
      <div className="flex justify-center gap-4 mt-8">
        <button className="swiper-button-prev-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-pointer">
          <ChevronLeft />
        </button>
        <button className="swiper-button-next-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-pointer">
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}

export default Testimonial;
