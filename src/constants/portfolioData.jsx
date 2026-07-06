import { 
  SiHtml5, SiCss, SiJavascript, SiReact, SiRedux, 
  SiMongodb, SiNodedotjs, SiExpress, SiTailwindcss, SiFramer ,SiGit
} from "react-icons/si";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";


export const HERO_WORDS = ["Hi, I'm Charu Mehra", "MERN Stack Developer"];
export const RESUME_PATH = "/resume.pdf";

export const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/Charumehra", icon: FiGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/charu-mehra-cm/", icon: FiLinkedin },
  { label: "Gmail", href: "mailto:charumehracm2004@gmail.com", icon: FiMail },
];

export const SKILL_CATEGORIES = {
  frontend: {
    title: "Frontend Engineering",
    skills: [
      { name: "React", subtitle: "Component Architecture", icon: SiReact, color: "text-cyan-400", metric: "92%" },
      { name: "Redux Toolkit", subtitle: "Predictable State Systems", icon: SiRedux, color: "text-violet-400", metric: "85%" },
      { name: "Tailwind CSS", subtitle: "Utility-First Design Systems", icon: SiTailwindcss, color: "text-sky-400", metric: "95%" },
      { name: "Framer Motion", subtitle: "Immersive Micro-interactions", icon: SiFramer, color: "text-pink-400", metric: "88%" },
    ]
  },
  backend: {
    title: "Backend & Cloud Systems",
    skills: [
      { name: "Node.js", subtitle: "Asynchronous Runtimes", icon: SiNodedotjs, color: "text-emerald-400", metric: "88%" },
      { name: "Express.js", subtitle: "RESTful Endpoint Architecture", icon: SiExpress, color: "text-slate-300", metric: "90%" },
      { name: "MongoDB", subtitle: "Document Schema Management", icon: SiMongodb, color: "text-green-500", metric: "84%" },
    ]
  }
};

export const PROJECTS = [
  {
    id: "career-forge",
    title: "Career Forge AI",
    category: "AI & Productivity Subsystem",
    badge: "Featured SaaS",
    description: "An advanced, full-stack AI Cover Letter orchestration ecosystem that transforms raw application contexts into production-grade professional documentation using targeted generative pipelines.",
    metrics: { efficiency: "+140% speed", accuracy: "99.4%" },
    tags: ["React", "Node.js", "Express", "MongoDB", "Gemini API", "Tailwind CSS"],
    githubUrl: "https://github.com/Charumehra/Cine_Stream",
    liveUrl: "https://ai-cover-letter-maker-z3r1.vercel.app/"
  },
  {
    id: "educore",
    title: "EduCore Platform",
    category: "EdTech Distributed System",
    badge: "Core Architecture",
    description: "An interactive automated study suite enabling lightning-fast extraction of complex context from research materials, bundled with an automated technical quiz engine.",
    metrics: { parseSpeed: "<2.4s/MB", dataRetention: "98.2%" },
    tags: ["MERN Stack", "Redux Toolkit", "PDF Processing Pipelines", "Framer Motion"],
    githubUrl: "https://github.com/Charumehra",
    liveUrl: "#"
  }
];

export const PIPELINE_MILESTONES = [
  { name: "Semantic Structures", subtitle: "HTML5/CSS Core layout systems", icon: SiHtml5, color: "text-orange-400" },
  { name: "Engine Logic Mastery", subtitle: "Asynchronous JavaScript & ES6 modules", icon: SiJavascript, color: "text-yellow-400" },
  { name: "Component Optimization", subtitle: "Dynamic lifecycles & state distribution via React", icon: SiReact, color: "text-cyan-400" },
  { name: "Enterprise Data Architectures", subtitle: "End-to-end full stack execution via MERN platform", icon: SiMongodb, color: "text-emerald-400" },
];


export const EXPERIENCES = [
  {
    id: "prodesk-it",
    role: "Full Stack Developer Intern",
    company: "ProDesk IT",
    type: "Internship",
    duration: "Present", // Aap apne hisab se months/years daal sakte hain
    glow: "from-cyan-500/20 to-blue-600/5",
    accentColor: "border-cyan-400/35 text-cyan-400",
    responsibilities: [
      "Developed high-performance distributed web applications using React.js and modern JavaScript architecture.",
      "Engineered structural reusable UI primitives and responsive design systems optimized for layout stability.",
      "Collaborated across agile squads to orchestrate secure REST API integrations, improving core application runtime functionality.",
      "Debugged, benchmarked, and audited frontend performance to ensure cross-browser compatibility and sub-second load times.",
      "Enforced production-grade code quality by participating in peer reviews and managing Git-based version control workflows."
    ],
    techStack: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Git", "REST APIs", "Node.js", "Express.js", "MongoDB"]
  },
  {
    id: "ten",
    role: "Frontend Developer Intern",
    company: "The Entrepreneurship Network (TEN)",
    type: "Internship",
    duration: "Previous", // Aap apne hisab se timeline change kar sakte hain
    glow: "from-indigo-500/20 to-purple-600/5",
    accentColor: "border-indigo-400/35 text-indigo-400",
    responsibilities: [
      "Designed and delivered highly responsive web pages, prioritizing semantic HTML structure and clean UX hierarchy.",
      "Converted high-fidelity Figma/design mockups into production-grade, mobile-first interactive interfaces.",
      "Worked closely under senior mentors to deploy core product features and patch complex UI/UX layout bottlenecks.",
      "Optimized standard asset delivery pipelines to maximize cross-device rendering speed and browser responsiveness.",
      "Gained deep operational experience in agile development workflows and collaborative team sprint standups."
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Git"]
  }
];