import { SiGoogleanalytics, SiSnowflake, SiDbt, SiApachespark, SiPython } from "react-icons/si";
import { FaChartBar, FaChartLine, FaMicrosoft } from "react-icons/fa";
import { BarChart, TrendingUp, ShoppingBag, HeartPulse, Factory, Globe, Banknote, Database } from "lucide-react";
import ServiceTemplate from "@/components/ServiceTemplate";

export default function BusinessIntelligence() {
  return (
    <ServiceTemplate
      badge="AI Services"
      title="Business Intelligence Solutions"
      subtitle="Transform raw knowledge into actionable career and business strategies with BI tools. We build self-service analytics platforms that empower every decision-maker."
      tags={["DATA WAREHOUSE","DASHBOARDS","KPI TRACKING","SELF-SERVICE BI","ETL","REPORTING","FORECASTING"]}
      statsTitle="Our BI Impact"
      stats={[{ value:"70+", label:"BI Dashboards Delivered" },{ value:"3×", label:"Faster Reporting" },{ value:"100%", label:"Data Accuracy" }]}
      featuresTitle="Business Intelligence That Empowers Every Decision"
      featuresSubtitle="We design and implement BI solutions that give your entire organization a single source of truth — from C-suite dashboards to front-line operational reports."
      features={[
        { title:"Data Warehouse Design",      description:"Scalable, well-modeled data warehouses on Snowflake, BigQuery, or Redshift that serve as your single source of truth." },
        { title:"Self-Service BI Platforms",  description:"Empower non-technical teams to build their own reports and dashboards without waiting for data engineering queues." },
        { title:"Executive Dashboards",       description:"C-suite dashboards with real-time KPIs, trend analysis, and drill-down capabilities for faster strategic decisions." },
        { title:"Data Integration & ETL",     description:"Connect and harmonize data from CRMs, ERPs, marketing tools, and databases into a unified analytics layer." },
        { title:"BI Training & Enablement",   description:"We train your team to own and maintain their BI tools — ensuring long-term value from every solution we deliver." },
      ]}
      industries={[
        { icon:<ShoppingBag size={20}/>, title:"Retail" },
        { icon:<Banknote size={20}/>,    title:"Finance" },
        { icon:<HeartPulse size={20}/>,  title:"Healthcare" },
        { icon:<Factory size={20}/>,     title:"Manufacturing" },
        { icon:<Globe size={20}/>,       title:"SaaS" },
        { icon:<TrendingUp size={20}/>,  title:"Marketing" },
        { icon:<Database size={20}/>,    title:"Data Platforms" },
        { icon:<BarChart size={20}/>,    title:"Analytics" },
      ]}
      techTitle="Our BI Tech Stack"
      techDesc="We implement enterprise-grade BI platforms that scale with your business."
      techStack={[
        { icon:<FaChartBar size={28} color="#E97627"/>,          name:"Tableau" },
        { icon:<FaChartLine size={28} color="#F2C811"/>,         name:"Power BI" },
        { icon:<SiGoogleanalytics size={28} color="#E37400"/>,  name:"GA4" },
        { icon:<SiSnowflake size={28} color="#29B5E8"/>,        name:"Snowflake" },
        { icon:<SiDbt size={28} color="#FF694B"/>,              name:"dbt" },
        { icon:<SiApachespark size={28} color="#E25A1C"/>,      name:"Apache Spark" },
        { icon:<FaMicrosoft size={28} color="#0078D4"/>,        name:"Azure Synapse" },
        { icon:<SiPython size={28} color="#3776AB"/>,           name:"Python" },
      ]}
    />
  );
}
