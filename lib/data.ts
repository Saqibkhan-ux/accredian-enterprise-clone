export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Platform", href: "#platform" },
  { label: "How it works", href: "#process" },
  { label: "Programs", href: "#programs" },
  { label: "Outcomes", href: "#outcomes" },
  { label: "Stories", href: "#stories" },
];

export const partnerInstitutes = [
  "IIT Guwahati",
  "IIM Visakhapatnam",
  "XLRI Jamshedpur",
  "SP Jain School of Global Management",
  "IIT Roorkee",
];

export type ProcessStep = {
  index: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    title: "Diagnose the gap",
    description:
      "L&D consultants run structured interviews and skills benchmarking against your roadmap, so the learning agenda starts from evidence, not guesswork.",
  },
  {
    index: "02",
    title: "Design the path",
    description:
      "Curriculum, cohort composition, and mentor matching are built around your domain and timelines — assembled for your teams, not pulled off a shelf.",
  },
  {
    index: "03",
    title: "Launch without friction",
    description:
      "SSO, HRMS sync, and white-glove onboarding mean day-one access for every learner, with no disruption to the team's existing workflow.",
  },
  {
    index: "04",
    title: "Measure what matters",
    description:
      "A live dashboard tracks progress, risk, and ROI. Monthly reviews and adaptive nudges keep completion rates high long after kickoff.",
  },
];

export type Feature = {
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    title: "Academic-grade curriculum",
    description:
      "Every program is co-designed with faculty from IITs, IIMs, and global universities, then stress-tested for real-world application.",
  },
  {
    title: "Practitioner mentorship",
    description:
      "500+ mentors across AI, data science, product, and leadership run live 1:1 sessions — not pre-recorded office hours.",
  },
  {
    title: "Cohort-based accountability",
    description:
      "Structured peer cohorts drive completion rates above 94%, well past the industry norm for asynchronous corporate learning.",
  },
  {
    title: "Verifiable credentials",
    description:
      "Learners graduate with globally recognised, shareable certification from partner institutions — built to hold weight on a resume.",
  },
  {
    title: "Adaptive learning engine",
    description:
      "Pacing and content adjust to each learner's baseline and progress, so a distributed, multi-timezone team never learns out of step.",
  },
  {
    title: "Command-center analytics",
    description:
      "Engagement, completion, and ROI reporting live in one dashboard, refreshed in real time for L&D leaders and finance alike.",
  },
];

export type Stat = {
  value: string;
  label: string;
};

export const stats: Stat[] = [
  { value: "500+", label: "Enterprise clients" },
  { value: "94%", label: "Average cohort completion" },
  { value: "98%", label: "Client satisfaction" },
  { value: "40%", label: "Median team velocity gain" },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Within six months, our data engineering team's delivery velocity improved by 40%. The dashboard made the ROI conversation with the board effortless.",
    name: "Priya Raman",
    role: "CHRO",
    company: "a global fintech platform",
  },
  {
    quote:
      "The custom cohort design meant our managers finished a leadership track that actually referenced our own product, not a generic case study.",
    name: "Arvind Sethi",
    role: "VP, People & Culture",
    company: "an enterprise SaaS company",
  },
  {
    quote:
      "SSO and HRMS sync took a single afternoon. That's the difference between a pilot that stalls and one that scales past the first cohort.",
    name: "Meera Iyer",
    role: "Head of L&D",
    company: "a multinational retail group",
  },
];

export const footerLinks = {
  Platform: ["Overview", "How it works", "Security", "Integrations"],
  Programs: ["AI & Generative AI", "Data Science", "Product Management", "CXO Leadership"],
  Company: ["About", "Careers", "Partner institutes", "Contact"],
};
