import { SiGooglecloud, SiDocker, SiKubernetes, SiTerraform, SiJenkins, SiGithubactions } from "react-icons/si";
import { FaAws, FaMicrosoft } from "react-icons/fa";
import { Cloud, Server, Shield, Zap, Database, Globe, Lock, BarChart } from "lucide-react";
import ServiceTemplate from "@/components/ServiceTemplate";

export default function CloudDevops() {
  return (
    <ServiceTemplate
      title="Cloud & DevOps Services"
      subtitle="Accelerate your delivery pipeline and scale your infrastructure with modern cloud architecture and DevOps practices."
      tags={["AWS","AZURE","GCP","CI/CD","CONTAINERS","INFRASTRUCTURE","SECURITY","MONITORING"]}
      statsTitle="Our Cloud & DevOps Impact"
      stats={[{ value:"99.9%", label:"Uptime Guaranteed" },{ value:"60%", label:"Avg Cost Reduction" },{ value:"10×", label:"Faster Deployments" }]}
      featuresTitle="Cloud Infrastructure Built to Scale"
      featuresSubtitle="From migration to managed services, we architect cloud environments that are resilient, cost-effective, and continuously improving."
      features={[
        { title:"Cloud Migration",            description:"Seamless migration from on-premise to AWS, Azure, or GCP with zero downtime and full data integrity." },
        { title:"CI/CD Pipeline Setup",       description:"Automated build, test, and deployment pipelines using Jenkins, GitHub Actions, and ArgoCD." },
        { title:"Containerization & Orchestration", description:"Docker containerization and Kubernetes orchestration for scalable, portable microservices." },
        { title:"Infrastructure as Code",     description:"Terraform and CloudFormation scripts that make your infrastructure version-controlled and reproducible." },
        { title:"24/7 Monitoring & Alerts",   description:"Real-time dashboards, log analysis, and proactive alerts to catch issues before they impact users." },
      ]}
      industries={[
        { icon:<Cloud size={20}/>,    title:"SaaS" },
        { icon:<Server size={20}/>,   title:"FinTech" },
        { icon:<Shield size={20}/>,   title:"Healthcare" },
        { icon:<Zap size={20}/>,      title:"E-commerce" },
        { icon:<Database size={20}/>, title:"Data Platforms" },
        { icon:<Globe size={20}/>,    title:"Media" },
        { icon:<Lock size={20}/>,     title:"GovTech" },
        { icon:<BarChart size={20}/>, title:"Analytics" },
      ]}
      techTitle="Our Cloud & DevOps Stack"
      techDesc="We work with leading cloud providers and DevOps tools to deliver reliable, scalable infrastructure."
      techStack={[
        { icon:<FaAws size={28} color="#FF9900"/>,             name:"AWS" },
        { icon:<SiGooglecloud size={28} color="#4285F4"/>,     name:"Google Cloud" },
        { icon:<FaMicrosoft size={28} color="#0078D4"/>,       name:"Azure" },
        { icon:<SiDocker size={28} color="#2496ED"/>,          name:"Docker" },
        { icon:<SiKubernetes size={28} color="#326CE5"/>,      name:"Kubernetes" },
        { icon:<SiTerraform size={28} color="#7B42BC"/>,       name:"Terraform" },
        { icon:<SiJenkins size={28} color="#D33833"/>,         name:"Jenkins" },
        { icon:<SiGithubactions size={28} color="#2088FF"/>,   name:"GitHub Actions" },
      ]}
    />
  );
}
