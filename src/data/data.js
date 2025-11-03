export const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Our Courses", href: "#courses" },
    { label: "Our Pricings", href: "#pricing" },
    { label: "Testimonials", href: "#testimonial" },
  ];

import {
  Target,
  Award,
  BookOpen,
  Stethoscope,
  GraduationCap,
  Users,
  CheckCircle,
  TrendingUp,
  Globe,
  Clock,
  DollarSign,
  Rocket,
  Trophy,
  DollarSignIcon,
  Star,
} from "lucide-react";

export const feature = [
  {
    icon: Target,
    title: "Built for impact",
    description:
      "We bridge the critical gap between your Nigerian medical education and the USMLE curriculum, ensuring you're not just prepared, but confident and competitive.",
  },
  {
    icon: Award,
    title: "Why Nigerian Medical Professionals Choose Us",
    description:
      "Our tutors are experienced USMLE-certified physicians who have successfully navigated the same journey you're on. They understand the nuances of transitioning from Nigerian medical training to US board standards, making your preparation more efficient and targeted.",
  },
];

export const stats = [
  {
    id: 1,
    value: "500+",
    label: "Students Coached",
    icon: Users,
  },
  {
    id: 2,
    value: "92%",
    label: "First-Attempt Pass Rate",
    icon: CheckCircle,
  },
  {
    id: 3,
    value: "25",
    label: "Average Score Improvement",
    icon: TrendingUp,
  },
  {
    id: 4,
    value: "50+",
    label: "Residents Matched to US Programs",
    icon: Award,
  },
];

export const programs = [
  {
    title: "USMLE Step 1",
    description:
      "Master fundamental medical sciences with comprehensive preparation",
    details: [
      "Comprehensive content review",
      "High-yield topics focus",
      "Practice questions & assessments",
      "Personalized study schedule",
    ],
    icon: BookOpen,
    color: {
      from: "from-blue-600",
      to: "to-indigo-600",
    },
  },
  {
    title: "USMLE Step 2 CK",
    description: "Excel in clinical knowledge and patient care scenarios",
    details: [
      "Clinical case analysis",
      "Diagnosis & management",
      "Patient communication skills",
      "Full-length practice exams",
    ],
    icon: Stethoscope,
    color: {
      from: "from-purple-600",
      to: "to-pink-600",
    },
  },
  {
    title: "USMLE Step 3",
    description:
      "Complete your journey with confidence and advanced strategies",
    details: [
      "Practice management",
      "CCS case simulations",
      "Integrated knowledge testing",
      "Residency preparation",
    ],
    icon: GraduationCap,
    color: {
      from: "from-orange-600",
      to: "to-red-600",
    },
  },
];

export const differentiators = [
  {
    id: 1,
    title: "We Understand Your Journey",
    description:
      "Our tutors are intimately familiar with Nigerian medical curricula and know exactly where gaps exist in USMLE preparation. We bridge these gaps efficiently, saving you time and reducing frustration.",
    icon: Globe,
  },
  {
    id: 2,
    title: "Learn from Those Who've Succeeded",
    description:
      "Every tutor on our team has successfully passed USMLE and many are practicing in US residency programs or as attending physicians. They provide real-world insights beyond textbook knowledge.",
    icon: Award,
  },
  {
    id: 3,
    title: "Fit Preparation Into Your Life",
    description:
      "Whether you're a busy clinical student or a working physician, we offer flexible scheduling including evening and weekend sessions. Online tutoring makes quality preparation accessible regardless of your location in Nigeria.",
    icon: Clock,
  },
  {
    id: 4,
    title: "Premium Quality, Accessible Pricing",
    description:
      "We believe financial constraints shouldn't limit your potential. Our pricing is structured to be accessible to Nigerian medical students while maintaining the highest tutoring standards. Payment plans available.",
    icon: DollarSign,
  },
  {
    id: 5,
    title: "More Than Just Exam Prep",
    description:
      "We support your entire journey from USMLE preparation through residency application and matching. Our guidance extends to observerships, ECFMG certification, and navigating the complex US medical system.",
    icon: Rocket,
  },
  {
    id: 6,
    title: "Track Record of Excellence",
    description:
      "With a 92% first-attempt pass rate and students matched to competitive residency programs across the United States, our results speak for themselves. Join hundreds of successful Nigerian physicians we've helped.",
    icon: Trophy,
  },
];

export const pricing = [
  {
    id: "foundation",
    name: "Foundation Package",
    tagline: "Best for students starting USMLE preparation",
    color: {
      from: "from-blue-600",
      to: "to-indigo-600",
    },
    icon: DollarSignIcon,
    cost: 1000,
    duration: "3-6 months recommended",
    popular: false,
    features: [
      "4 one-on-one tutoring sessions per month (60 minutes each)",
      "Personalized study plan and timeline",
      "Progress tracking and assessments",
      "Study resource recommendations",
      "Email support between sessions",
      "Access to curated study materials",
    ],
    ctaText: "Start Foundation Package",
    ctaLink: "/contact",
  },
  {
    id: "accelerated",
    name: "Accelerated Package",
    tagline: "Best for students with 2-4 months until exam",
    color: {
      from: "from-blue-600",
      to: "to-indigo-600",
    },
    icon: DollarSignIcon,
    cost: 5000,
    duration: "2-4 months recommended",
    popular: true,
    features: [
      "8 one-on-one tutoring sessions per month (60 minutes each)",
      "Intensive personalized study plan",
      "Weekly progress assessments",
      "Question bank review sessions",
      "Practice test analysis",
      "Priority scheduling",
      "Email and WhatsApp support",
      "Access to premium study materials and resources",
    ],
    ctaText: "Choose Accelerated Package",
    ctaLink: "/contact",
  },
  {
    id: "premium",
    name: "Premium Package",
    tagline: "Best for students seeking maximum support and highest scores",
    color: {
      from: "from-blue-600",
      to: "to-indigo-600",
    },
    icon: DollarSignIcon,
    cost: 10000,
    duration: "3-6 months recommended",
    popular: false,
    features: [
      "12 one-on-one tutoring sessions per month (120 minutes each)",
      "Comprehensive personalized study strategy",
      "Bi-weekly progress assessments",
      "Unlimited email and WhatsApp support",
      "Practice test analysis and review",
      "Custom flashcard and Anki deck guidance",
      "Priority scheduling and rescheduling",
      "Residency application guidance",
      "Access to all study materials and resources",
      "ECFMG certification support",
    ],
    ctaText: "Get Premium Package",
    ctaLink: "/contact",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Dr. Adebayo Ademola",
    credential: "Step 2 CK - Score 260",
    location: "Lagos, Nigeria → Internal Medicine Residency, Texas",
    image: "/hero image 1.png",
    quote:
      "Precision USMLE Tutors was instrumental in my Step 2 CK success. As a Nigerian graduate, I struggled to understand the clinical reasoning approach required for USMLE. My tutor didn't just teach me medicine—they taught me how to think like American physicians. The personalized study plan fit perfectly around my clinical rotations, and the question bank strategies were game-changing. I scored 260 and matched to my dream residency program!",
    rating: 5,
    icon: Star,
  },
  {
    id: 2,
    name: "Dr. Nafisat Ibrahim",
    credential: "Step 1 - Score 245",
    location: "Abuja, Nigeria → Family Medicine Residency, New York",
    image: "/hero image2.png",
    quote:
      "I was overwhelmed by the volume of Step 1 material until I started working with Precision USMLE Tutors. They helped me prioritize high-yield topics and develop an efficient study system. The tutors understood exactly where my Nigerian medical education left gaps and focused our sessions there. Their support went beyond academics—they mentored me through the entire ECFMG process and residency applications.",
    rating: 5,
    icon: Star,
  },
  {
    id: 3,
    name: "Dr. Gladys Munachisom",
    credential: "Step 3 - First Attempt Pass",
    location: "Port Harcourt → Emergency Medicine Residency, California",
    image: "/images/testimonials/chidinma.jpg",
    quote:
      "After passing Step 1 and 2 CK, I was nervous about Step 3, especially the CCS cases. Precision USMLE Tutors provided excellent preparation for the clinical simulations and multiday exam format. Their tutor was a practicing physician who shared practical insights that went beyond study materials. I passed on my first attempt and felt confident throughout the entire exam.",
    rating: 5,
    icon: Star,
  },
  {
    id: 4,
    name: "Oluwatomisin Abayomi",
    credential: "Step 1 & 2 CK Pass",
    location: "Ibadan → Applying for 2026 Match",
    image: "/images/testimonials/tosin.jpg",
    quote:
      "Finding quality USMLE tutoring in Nigeria seemed impossible until I discovered Precision USMLE Tutors. The online sessions were convenient, the tutors were knowledgeable and patient, and the study materials were comprehensive. They've supported me through both Step 1 and Step 2 CK, and now they're helping me with my residency applications. Highly recommended!",
    rating: 5,
    icon: Star,
  },
];
