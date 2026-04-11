"use client";
import { SiFlutter, SiReact, SiKotlin, SiSwift, SiFirebase, SiAndroid, SiApple, SiGoogleplay } from "react-icons/si";
import { Smartphone, Globe, HeartPulse, ShoppingBag, Utensils, Truck, GraduationCap, Banknote } from "lucide-react";
import ServiceTemplate from "@/components/ServiceTemplate";

export default function AppDevelopment() {
  return (
    <ServiceTemplate
      title="App Development Services"
      subtitle="Building powerful, intuitive mobile applications for iOS and Android. We craft cross-platform and native apps that users love and businesses depend on."
      tags={["SERVICES","iOS","ANDROID","CROSS-PLATFORM","FLUTTER","REACT NATIVE","TESTING","DEPLOYMENT","APP STORE"]}
      statsTitle="Our App Development Impact"
      stats={[{ value:"40+", label:"Apps Delivered" },{ value:"4.8★", label:"Average App Rating" },{ value:"100K+", label:"End Users Served" }]}
      featuresTitle="Mobile Apps That Users Love"
      featuresSubtitle="We develop cross-platform and native mobile apps that are fast, secure, and beautifully designed for every screen size."
      features={[
        { title:"Cross-Platform Excellence",    description:"Using Flutter and React Native, we deliver apps that feel native on both iOS and Android from a single codebase." },
        { title:"Intuitive UX Design",          description:"Every screen is crafted with user behavior in mind — clean flows, smooth animations, and zero friction." },
        { title:"Offline-First Architecture",   description:"Apps that work seamlessly even without internet — crucial for rural and low-connectivity environments." },
        { title:"Real-Time Features",           description:"Push notifications, live chat, GPS tracking, and real-time data sync built into your app out of the box." },
        { title:"App Store Deployment",         description:"Full support for App Store and Google Play submission, review management, and post-launch updates." },
      ]}
      industries={[
        { icon:<Smartphone size={20}/>,     title:"HealthTech" },
        { icon:<ShoppingBag size={20}/>,    title:"E-commerce" },
        { icon:<Utensils size={20}/>,       title:"Food Delivery" },
        { icon:<Truck size={20}/>,          title:"Logistics" },
        { icon:<GraduationCap size={20}/>,  title:"EdTech" },
        { icon:<Banknote size={20}/>,       title:"FinTech" },
        { icon:<Globe size={20}/>,          title:"Travel" },
        { icon:<HeartPulse size={20}/>,     title:"Fitness" },
      ]}
      techTitle="Our App Development Tech Stack"
      techDesc="We use cross-platform and native frameworks to deliver apps that are fast, beautiful, and reliable."
      techStack={[
        { icon:<SiFlutter size={28} color="#54C5F8"/>,   name:"Flutter" },
        { icon:<SiReact size={28} color="#61DAFB"/>,     name:"React Native" },
        { icon:<SiKotlin size={28} color="#7F52FF"/>,    name:"Kotlin" },
        { icon:<SiSwift size={28} color="#FA7343"/>,     name:"Swift" },
        { icon:<SiFirebase size={28} color="#FFCA28"/>,  name:"Firebase" },
        { icon:<SiAndroid size={28} color="#3DDC84"/>,   name:"Android SDK" },
        { icon:<SiApple size={28}/>,                     name:"iOS SDK" },
        { icon:<SiGoogleplay size={28} color="#01875F"/>,name:"Play Store" },
      ]}
    />
  );
}
