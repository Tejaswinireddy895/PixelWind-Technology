"use client";
import { SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMongodb, SiMysql, SiExpress, SiGithub, SiTypescript, SiVercel } from "react-icons/si";
import { FaDatabase, FaServer } from "react-icons/fa";
import { Globe, HeartPulse, BookText, ShoppingBag, UsersRound, Utensils, Truck, Home } from "lucide-react";
import ServiceTemplate from "@/components/ServiceTemplate";

export default function WebDevelopment() {
  return (
    <ServiceTemplate
      title="Web Development Services"
      subtitle="Crafting fast, responsive, and user-friendly websites that drive results. We build scalable web solutions using modern technologies tailored to your business needs."
      tags={["SERVICES","FRONTEND DEVELOPMENT","BACKEND DEVELOPMENT","FULL-STACK SOLUTIONS","TECH STACK","CMS & ECOMMERCE","WHY CHOOSE US","PORTFOLIO","FAQ"]}
      statsTitle="Our Web Development Impact"
      stats={[{ value:"50+", label:"Projects Delivered" },{ value:"98%", label:"Client Satisfaction" },{ value:"10+", label:"Years of Experience" }]}
      featuresTitle="Building Web Experiences That Drive Results"
      featuresSubtitle="From frontend finesse to backend power, our web development approach is designed to deliver fast, scalable, and user-focused digital solutions."
      features={[
        { title:"Modern Web Stack Expertise",    description:"We specialize in React, Next.js, Node.js, Tailwind CSS, and other modern technologies to build high-performance web applications." },
        { title:"Custom Web Solutions",          description:"From corporate websites to e-commerce platforms, we tailor every feature to meet your specific business goals and user needs." },
        { title:"Performance & SEO Optimization",description:"Our sites are fast, responsive, and SEO-ready — giving you higher visibility, engagement, and conversions from day one." },
        { title:"User-Centered Design",          description:"We focus on intuitive UI/UX to ensure that every visitor has a smooth and engaging experience across all devices." },
        { title:"Robust Security Measures",      description:"We implement best practices in security to protect your data and ensure compliance with industry standards." },
      ]}
      industries={[
        { icon:<Globe size={20}/>,       title:"FinTech" },
        { icon:<HeartPulse size={20}/>,  title:"Healthcare" },
        { icon:<BookText size={20}/>,    title:"Education" },
        { icon:<ShoppingBag size={20}/>, title:"E-commerce" },
        { icon:<UsersRound size={20}/>,  title:"Social Media" },
        { icon:<Utensils size={20}/>,    title:"Restaurant" },
        { icon:<Truck size={20}/>,       title:"Logistics" },
        { icon:<Home size={20}/>,        title:"Construction" },
      ]}
      techTitle="Our Web Development Tech Stack"
      techDesc="We leverage a modern technology stack to build scalable, secure, and high-performance applications."
      techStack={[
        { icon:<SiReact size={28} color="#61DAFB"/>,       name:"React.js" },
        { icon:<SiNextdotjs size={28}/>,                   name:"Next.js" },
        { icon:<SiTailwindcss size={28} color="#06B6D4"/>, name:"Tailwind CSS" },
        { icon:<SiNodedotjs size={28} color="#339933"/>,   name:"Node.js" },
        { icon:<SiExpress size={28}/>,                     name:"Express.js" },
        { icon:<SiMongodb size={28} color="#47A248"/>,     name:"MongoDB" },
        { icon:<SiMysql size={28} color="#4479A1"/>,       name:"MySQL" },
        { icon:<FaDatabase size={28} color="#7c3aed"/>,    name:"PostgreSQL" },
        { icon:<SiGithub size={28}/>,                      name:"GitHub" },
        { icon:<FaServer size={28} color="#ea580c"/>,      name:"REST APIs" },
      ]}
    />
  );
}
