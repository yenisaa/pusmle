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
  Trophy


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
