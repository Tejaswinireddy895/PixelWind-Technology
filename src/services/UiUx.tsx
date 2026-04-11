"use client";
import { SiFigma, SiSketch, SiInvision, SiFramer, SiWebflow, SiNotion } from "react-icons/si";
import { FaPenNib, FaStickyNote } from "react-icons/fa";
import { Palette, Eye, MousePointer, LayoutDashboard, Smartphone, Globe, ShoppingBag, HeartPulse } from "lucide-react";
import ServiceTemplate from "@/components/ServiceTemplate";

export default function UiUx() {
  return (
    <ServiceTemplate
      title="UI/UX Design Services"
      subtitle="Creating digital experiences that are intuitive, beautiful, and conversion-driven. We design products that users love from the very first click."
      tags={["RESEARCH","WIREFRAMES","PROTOTYPES","DESIGN SYSTEM","ACCESSIBILITY","USABILITY TESTING","FIGMA","HANDOFF"]}
      statsTitle="Our Design Impact"
      stats={[{ value:"60+", label:"Products Designed" },{ value:"3.5×", label:"Avg. Conversion Lift" },{ value:"100%", label:"Client Satisfaction" }]}
      featuresTitle="Design That Converts Visitors Into Customers"
      featuresSubtitle="Our design process is rooted in research, empathy, and precision — delivering interfaces that are as functional as they are beautiful."
      features={[
        { title:"User Research & Discovery",  description:"We start with deep research — user interviews, journey mapping, and competitive analysis to ground every design decision." },
        { title:"Wireframing & Prototyping",  description:"From lo-fi sketches to fully interactive Figma prototypes — we validate ideas before a single line of code is written." },
        { title:"Design System Creation",     description:"Scalable, reusable component libraries that keep your product consistent and your developers moving fast." },
        { title:"Accessibility-First",        description:"WCAG 2.1 compliant designs ensuring your product is usable by everyone, including users with disabilities." },
        { title:"Developer Handoff",          description:"Pixel-perfect Figma files with annotations, style guides, and Zeplin/CSS specs for frictionless implementation." },
      ]}
      industries={[
        { icon:<LayoutDashboard size={20}/>, title:"SaaS" },
        { icon:<ShoppingBag size={20}/>,    title:"E-commerce" },
        { icon:<HeartPulse size={20}/>,     title:"HealthTech" },
        { icon:<Smartphone size={20}/>,     title:"Mobile Apps" },
        { icon:<Globe size={20}/>,          title:"Web Portals" },
        { icon:<Eye size={20}/>,            title:"Branding" },
        { icon:<MousePointer size={20}/>,   title:"Landing Pages" },
        { icon:<Palette size={20}/>,        title:"Design Systems" },
      ]}
      techTitle="Our Design Tool Stack"
      techDesc="We use industry-leading design tools to deliver pixel-perfect, developer-ready designs."
      techStack={[
        { icon:<SiFigma size={28} color="#F24E1E"/>,    name:"Figma" },
        { icon:<FaPenNib size={28} color="#FF61F6"/>,   name:"Adobe XD" },
        { icon:<SiSketch size={28} color="#F7B500"/>,   name:"Sketch" },
        { icon:<SiInvision size={28} color="#FF3366"/>, name:"InVision" },
        { icon:<FaStickyNote size={28} color="#FDBD39"/>, name:"Zeplin" },
        { icon:<SiFramer size={28} color="#0055FF"/>,   name:"Framer" },
        { icon:<SiWebflow size={28} color="#4353FF"/>,  name:"Webflow" },
        { icon:<SiNotion size={28}/>,                   name:"Notion" },
      ]}
    />
  );
}
