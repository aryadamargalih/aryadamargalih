import { Layers, Book, Code, Award } from "lucide-react";
import { FaReact } from "react-icons/fa";
import {
  SiPhp,
  SiJavascript,
  SiTailwindcss,
  SiLaravel,
  SiCodeigniter,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiFlutter,
} from "react-icons/si";

export const stats = [
  { icon: Layers, value: "7+", label: "Personal Projects" },
  { icon: Book, value: "100+", label: "Study Hours" },
  { icon: Code, value: "2+", label: "Languages Learned" },
  { icon: Award, value: "3+", label: "Course Certificates" },
];

export const skills = [
  {
    name: "HTML5",
    description: "Semantic, accessible markup with modern HTML5 features.",
    category: "frontend",
    icon: SiHtml5,
    accent: "#E34F26",
  },
  {
    name: "CSS3",
    description: "Flexbox, grid, and responsive design from scratch.",
    category: "frontend",
    icon: SiCss,
    accent: "#1572B6",
  },
  {
    name: "JavaScript",
    description: "ES6+ features and asynchronous programming.",
    category: "language",
    icon: SiJavascript,
    accent: "#F7DF1E",
  },
  {
    name: "PHP",
    description: "Server-side scripting with OOP and MVC patterns.",
    category: "language",
    icon: SiPhp,
    accent: "#777BB4",
  },
  {
    name: "Bootstrap",
    description: "Rapid UI development with a responsive component set.",
    category: "framework",
    icon: SiBootstrap,
    accent: "#7952B3",
  },
  {
    name: "React",
    description: "Component-based UIs with hooks and state management.",
    category: "framework",
    icon: FaReact,
    accent: "#61DAFB",
  },
  {
    name: "TailwindCSS",
    description: "Utility-first styling with custom design systems.",
    category: "framework",
    icon: SiTailwindcss,
    accent: "#06B6D4",
  },
  {
    name: "Laravel",
    description: "Full-stack development, elegant syntax, MVC architecture.",
    category: "framework",
    icon: SiLaravel,
    accent: "#FF2D20",
  },
  {
    name: "CodeIgniter",
    description: "Lightweight PHP framework for dynamic web apps.",
    category: "framework",
    icon: SiCodeigniter,
    accent: "#EF4223",
  },
  {
    name: "Flutter",
    description: "Cross-platform mobile apps from a single codebase.",
    category: "mobile",
    icon: SiFlutter,
    accent: "#02569B",
  },
];

export const projects = [
  {
    title: "Bakatku",
    description:
      "Talent discovery platform helping users explore their natural abilities through interactive assessments.",
    tech: ["React", "Node.js", "MongoDB", "TailwindCSS"],
    image: "./project1.png",
    link: "#",
    github: "#",
    status: "archived",
  },
  {
    title: "SmartVillage",
    description:
      "Village profile site providing official information, public services, and digital transparency for Desa Sokop.",
    tech: ["Laravel", "TailwindCSS", "MySQL"],
    image: "./Screenshot 2026-02-01 142445.png",
    link: "https://desasokop.com/",
    github: "#",
    status: "archived",
  },
  {
    title: "SmartMomss",
    description:
      "Maternal health platform promoting the SmartMomss app, with an integrated admin dashboard.",
    tech: ["Laravel", "TailwindCSS", "MySQL"],
    image: "./Screenshot 2026-02-01 142556.png",
    link: "https://smartmomss.com/",
    github: "#",
    status: "archived",
  },
  {
    title: "SmartMomss V2",
    description:
      "Second iteration of the SmartMomss maternal health platform, rebuilt with an AI-powered layer that analyzes user health data to surface personalized insights.",
    tech: ["React", "Laravel", "MySQL"],
    image: "./Screenshot 2026-09-05 003136.png",
    link: "https://smartmoms.id/",
    github: "#",
    status: "live",
  },
  {
    title: "SmartMoms Mobile",
    description:
      "Flutter mobile companion for the SmartMoms platform, helping monitor postpartum (nifas) mother health on the go.",
    tech: ["Flutter"],
    images: [
      "./smartmoms-app-01.png",
      "./smartmoms-app-02.png",
      "./smartmoms-app-03.png",
      "./smartmoms-app-04.png",
      "./smartmoms-app-05.png",
      "./smartmoms-app-06.png",
      "./smartmoms-app-07.png",
      "./smartmoms-app-08.png",
      "./smartmoms-app-09.png",
      "./smartmoms-app-10.png",
      "./smartmoms-app-11.png",
      "./smartmoms-app-12.png",
      "./smartmoms-app-13.png",
      "./smartmoms-app-14.png",
      "./smartmoms-app-15.png",
      "./smartmoms-app-16.png",
      "./smartmoms-app-17.png",
      "./smartmoms-app-18.png",
    ],
    link: "#",
    github: "#",
    status: "live",
  },
];

export const experiences = [
  {
    role: "IT Intern — Daskrimti Division",
    company: "Kejaksaan Tinggi Riau (Riau High Prosecutor's Office)",
    duration: "Sep 2025 – Dec 2025",
    description:
      "Assisted the IT division with hands-on work in servers, networking, and web infrastructure — real-world exposure beyond coursework.",
  },
  {
    role: "Cleaning Staff",
    company: "One Street Food, Pekanbaru",
    duration: "Oct 2022 – Apr 2023",
    description:
      "Kept the work area clean and organized while collaborating closely with the team. Built strong discipline, responsibility, and consistency in a fast-paced environment.",
  },
];
