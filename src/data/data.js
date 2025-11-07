
import { Settings } from "lucide-react";
import {
  Medal,
  Gem,
  Star,
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
  Mail,
} from "lucide-react";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Study Plans", href: "/courses" },
  { label: "Our Pricings", href: "/pricing" },
];
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

export const step1Bundle = [
  {
    icon: Medal,
    title: "Bronze Fees",
    fee: "$2,850",
    paymentMethod: "(one-time payment)",
    paymentRate:
      "Naira Equivalent applicable based on Forex Rate at time of Transaction",
    hourlyPayment: "@$20.36/hour",
  },
  {
    title: "Silver Fees",
    icon: Star,
    fee: "$3,000",
    paymentMethod: "(one-time payment)",
    paymentRate:
      "Naira Equivalent applicable based on Forex Rate at time of Transaction",
    hourlyPayment: "@$17.86/hour",
  },
  {
    icon: Trophy,
    title: "Gold Fees",
    fee: "$3,450",
    paymentMethod: "(one-time payment)",
    paymentRate:
      "Naira Equivalent applicable based on Forex Rate at time of Transaction",
    hourlyPayment: "@$15.4/hour",
  },
  {
    icon: Gem,
    title: "Platinum Fees",
    fee: "$4,000",
    paymentMethod: "(one-time payment)",
    paymentRate:
      "Naira Equivalent applicable based on Forex Rate at time of Transaction",
    hourlyPayment: "@$8.33/hour",
  },
];

export const step2Bundle = [
  {
    title: "Bronze Fees",
    icon: Medal,
    fee: "$2,750",
    paymentMethod: "(one-time payment)",
    paymentRate:
      "Naira Equivalent applicable based on Forex Rate at time of Transaction",
    hourlyPayment: "@$19.64/hour",
  },
  {
    title: "Silver Fees",
    icon: Star,
    fee: "$2,900",
    paymentMethod: "(one-time payment)",
    paymentRate:
      "Naira Equivalent applicable based on Forex Rate at time of Transaction",
    hourlyPayment: "@$17.26/hour",
  },
  {
    title: "Gold Fees",
    icon: Trophy,
    fee: "$3,550",
    paymentMethod: "(one-time payment)",
    paymentRate:
      "Naira Equivalent applicable based on Forex Rate at time of Transaction",
    hourlyPayment: "@$19.94/hour",
  },
  // {
  //   title: "Platinum Fees - This package does not exist for Step 2 program",
  //   icon: Gem,
  //   fee: "",
  //   paymentMethod: "",
  //   paymentRate: "",
  //   hourlyPayment: "",
  // },
];

export const step3Bundle = [
  {
    title: "Bronze Fees",
    icon: Medal,
    fee: "$2,950",
    paymentMethod: "(one-time payment)",
    paymentRate:
      "Naira Equivalent applicable based on Forex Rate at time of Transaction",
    hourlyPayment: "@$21.1/hour",
  },
  {
    title: "Silver Fees",
    icon: Star,
    fee: "$3,400",
    paymentMethod: "(one-time payment)",
    paymentRate:
      "Naira Equivalent applicable based on Forex Rate at time of Transaction",
    hourlyPayment: "@$20.24/hour",
  },
  {
    title: "Gold Fees",
    icon: Trophy,
    fee: "$3,950",
    paymentMethod: "(one-time payment)",
    paymentRate:
      "Naira Equivalent applicable based on Forex Rate at time of Transaction",
    hourlyPayment: "@$17.63/hour",
  },
  // {
  //   title: "Platinum Fees - This package does not exist for Step 3 program",
  //   icon: Gem,
  //   fee: "",
  //   paymentMethod: "",
  //   paymentRate: "",
  //   hourlyPayment: "",
  // },
];

export const ccsDrills = [
  {
    icon: Settings,
    title: "CCS Drills",
    commitment: "14 hour/week",
    duration: "2 weeks duration",
    Fee: "$700",
    reviewFee: "(Case reviewing and progression training only",
    assessmentFee: "$1,100 (CCS drills plus UWORLD CSS assessment review sessions",
  },
]

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
    link: "/step-1",
    linkText: "Learn more",
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
    link: "/step-2",
    linkText: "Learn more",
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
    link: "/step-3",
    linkText: "Learn more",
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
    id: "step1",
    name: "USMLE Step 1 bundle",
    tagline: "Bronze bundle",
    color: {
      from: "from-blue-600",
      to: "to-indigo-600",
    },
    icon: DollarSignIcon,
    cost: 1000,
    duration: "12 to 14 weeks recommended",
    popular: false,
    features: [
      "12 to 14 weeks duration",
      "10 hours minimum/week",
      "Online Skype Sessions only",
      "Covers ALL General Principles and systemic disorders",
    ],
    ctaText: "View more bundles",
    ctaLink: "/bundles",
  },
  {
    id: "step2",
    name: "USMLE Step 2 CK bundle",
    tagline: "Bronze bundle ",
    from: "from-blue-600",
    to: "to-indigo-600",

    icon: DollarSignIcon,
    cost: 5000,
    duration: "12 to 14 weeks recommended",
    popular: true,
    features: [
      " 12 to 14 weeks duration",
      "10 hours minimum/week",
      "Online Skype Sessions only",
      "Covers ALL Internal Medicine and HIGH-YIELD concepts only in Pediatrics, Surgery, Obstetrics & Gynecology",
    ],
    ctaText: "View more bundles",
    ctaLink: "/bundles",
  },
  {
    id: "step 3",
    name: "USMLE Step 3 bundle",
    tagline: "Bronze Bundle",
    color: {
      from: "from-blue-600",
      to: "to-indigo-600",
    },
    icon: DollarSignIcon,
    cost: "10,000",
    duration: "16 weeks recommended",
    popular: false,
    features: [
      "12 to 14 weeks duration",
      "10 hours minimum/week",
      "Online Skype Sessions only",
      "Covers ALL Internal Medicine and HIGH-YIELD concepts only in Pediatrics, Surgery, Obstetrics & Gynecology, Emergency Medicine, Preventive Medicine, and Dermatology",
      "Preventive Medicine, Dermatology, Biostat & Epidemiology, and Ethics",
      "Weekly CCS Drills (1x).",
    ],
    ctaText: "View more bundles",
    ctaLink: "/bundles",
  },
];

export const contactInfo = [
  {
    icon: Mail,
    title: "Contact Information",
    subTitle: "Email Us",
    email: [
      "info@precisionusmletutors.com",
      "support@precisionusmletutors.com",
    ],
  },
  // {
  //   icon: MapPinIcon,
  //   title: '',
  //   subTitle: 'Address',
  //   Address: '1751 W Howard St. Chicago, IL 60626'
  // }
];

export const stepOne = [
  {
    icon: Medal,
    title: "USMLE Step 1 bundle",
    fee: "$2,850",
    subTitle: "Bronze Bundle",
    features: [
      "12 to 14 weeks duration",
      "10 hours minimum/week",
      "Online Skype Sessions only",
      "Covers ALL General Principles and systemic disorders",
    ],
  },
  {
    icon: Star,
    title: "USMLE Step 1 bundle",
    subTitle: "Silver Bundle",
    fee: "$3,000",
    features: [
      "12 to 14 weeks duration",
      "12 hours minimum/week",
      "Online Skype Sessions only",
      "Covers ALL General Principles and systemic disorders",
      "Quick drill sessions",
    ],
  },
  {
    icon: Trophy,
    title: "USMLE Step 1 bundle",
    subTitle: "Gold Bundle",
    fee: "$3,450",
    features: [
      "16 weeks duration",
      "14 hours minimum/week",
      "Online Skype Sessions only",
      "Covers ALL General Principles and Systemic disorders",
      "Pharm Drills",
      "Diagnostic Lab drills",
      "Test-taking strategy sessions",
      "UWORLD review with Instructor",
    ],
  },
  {
    icon: Gem,
    title: "USMLE Step 1 bundle",
    subTitle: "Platinum Bundle",
    fee: "$4,000",
    features: [
      "20–24 weeks duration",
      "16-20 hours minimum/week",
      "Online Skype Sessions and LIVE sessions, if feasible for student",
      "Covers ALL General Principles and Systemic disorders",
      "Pharm Drills",
      "Diagnostic Lab drills",
      "Test-taking strategy sessions",
      "UWORLD review with Instructor",
      "NBME review with Instructor",
      "Flexibility of this package comes with support summary notes for pertinent concepts",
    ],
  },
];

export const stepTwo = [
  {
    icon: Medal,
    title: "USMLE Step 2 CK bundle",
    fee: "$2,750",
    subTitle: "Bronze Bundle",
    features: [
      "12 to 14 weeks duration",
      "10 hours minimum/week",
      "Online Skype Sessions only",
      "Covers ALL Internal Medicine and HIGH-YIELD concepts only in Pediatrics, Surgery, Obstetrics & Gynecology",
    ],
  },
  {
    icon: Star,
    title: "USMLE Step 2 CK bundle",
    fee: "$2,900",
    subTitle: "Silver Bundle",
    features: [
      "12 to 14 weeks duration",
      "12 hours minimum/week",
      "Online Skype Sessions only",
      "Covers ALL Internal Medicine and HIGH-YIELD concepts only in Pediatrics, Surgery, Obstetrics & Gynecology",
      "Algorithm drills",
      "Weekly drills session and practice vignette.",
    ],
  },
  {
    icon: Trophy,
    title: "USMLE Step 2 CK bundle",
    fee: "$3,350",
    subTitle: "Gold Bundle",
    features: [
      "12 to 14 weeks duration",
      "12 hours minimum/week",
      "Online Skype Sessions only",
      "Covers ALL Internal Medicine and HIGH-YIELD concepts only in Pediatrics, Surgery, Obstetrics & Gynecology",
      "Algorithm drills",
      "Weekly drills session and practice vignette.",
      "Test-taking strategy sessions",
      "UWORLD review with Instructor",
    ],
  },
  {
    icon: Gem,
    title: "USMLE Step 2 CK bundle",
    fee: "This package does not exist fot step 2 program",
    subTitle: "Platinum Bundle",
    features: [
      "NO Step 2 CK platinum bundle available. If a student is disciplined and focused, the maximum duration needed for Step 2 CK preparation ought not to exceed 16 weeks.",
      "However, in extenuating circumstances, a student can liaise with the admin for flexible considerations.",
    ],
  },
];

export const stepThree = [
  {
    icon: Medal,
    title: "USMLE Step 3 bundle",
    fee: "$2,980",
    subTitle: "Bronze Bundle",
    features: [
      "12 to 14 weeks duration",
      "10 hours minimum/week",
      "Online Skype Sessions only",
      "Weekly CCS Drills (1x)",
      "Covers ALL Internal Medicine and HIGH-YIELD concepts only in Pediatrics, Surgery, Obstetrics & Gynecology, Emergency Medicine, Preventive Medicine, and Dermatology",
    ],
  },
  {
    icon: Star,
    title: "USMLE Step 3 bundle",
    fee: "$3,400",
    subTitle: "Silver Bundle",
    features: [
      "12 to 14 weeks duration",
      "12 hours minimum/week",
      "Online Skype Sessions only",
      "Weekly CCS Drills (2x)",
      "Covers ALL Internal Medicine and HIGH-YIELD concepts only in Pediatrics, Surgery, Obstetrics & Gynecology, Emergency Medicine, Preventive Medicine, Dermatology, and Ethics",
    ],
  },
  {
    icon: Trophy,
    title: "USMLE Step 3 bundle",
    fee: "$3,950",
    subTitle: "Gold Bundle",
    features: [
      "16 weeks duration",
      "14 hours minimum/week",
      "Online Skype Sessions, however, LIVE sessions can also be arranged",
      "Weekly CCS Drills (3x)",
      "Covers ALL Internal Medicine and HIGH-YIELD concepts only in Pediatrics, Surgery, Obstetrics & Gynecology, Emergency Medicine",
      "Weekly drills session and practice vignette.",
      "Preventive Medicine, Dermatology, Biostat & Epidemiology, and Ethics",
      "Test-taking strategy sessions",
      "UWORLD/NBME review with Instructor",
    ],
  },
  {
    icon: Gem,
    title: "USMLE Step 3 bundle",
    fee: "$5,000",
    subTitle: "Platinum Bundle",
    features: [
      "NO Step 3 platinum bundle available.",
      "If a student is disciplined and focused, the maximum duration needed for Step 3 preparation ought not to exceed 16 weeks.",
      " However, in extenuating circumstances, a student can liaise with the admin for flexible considerations.",
    ],
  },
];
