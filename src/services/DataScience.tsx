import { SiPython, SiPandas, SiNumpy, SiPlotly, SiApachespark, SiGoogleanalytics } from "react-icons/si";
import { FaChartBar, FaChartLine } from "react-icons/fa";
import { BarChart, TrendingUp, ShoppingBag, HeartPulse, Factory, Globe, Banknote, Database } from "lucide-react";
import ServiceTemplate from "@/components/ServiceTemplate";

export default function DataScience() {
  return (
    <ServiceTemplate
      badge="AI Services"
      title="Data Science & Analytics"
      subtitle="Make informed career and business decisions using data visualization, statistical modeling, and real-world insights that drive measurable outcomes."
      tags={["DATA ANALYSIS","VISUALIZATION","STATISTICAL MODELING","DASHBOARDS","ETL","DATA ENGINEERING","REPORTING"]}
      statsTitle="Our Data Science Impact"
      stats={[{ value:"50+", label:"Dashboards Built" },{ value:"40%", label:"Avg. Cost Savings" },{ value:"Real-Time", label:"Insights Delivery" }]}
      featuresTitle="Turn Raw Data Into Strategic Advantage"
      featuresSubtitle="We help organizations collect, process, and visualize data to uncover patterns, drive decisions, and achieve measurable business outcomes."
      features={[
        { title:"Exploratory Data Analysis",  description:"Deep-dive analysis of your data to uncover trends, anomalies, correlations, and actionable patterns." },
        { title:"Interactive Dashboards",     description:"Tableau, Power BI, and custom dashboards that give your team real-time visibility into KPIs that matter." },
        { title:"Data Engineering & ETL",     description:"Robust data pipelines that extract, transform, and load data from any source into clean, query-ready warehouses." },
        { title:"Statistical Modeling",       description:"A/B testing, regression analysis, and hypothesis testing to validate strategies with statistical confidence." },
        { title:"Predictive Reporting",       description:"Automated reports with forecasting built in — so leadership always has tomorrow's numbers today." },
      ]}
      industries={[
        { icon:<ShoppingBag size={20}/>, title:"Retail" },
        { icon:<HeartPulse size={20}/>,  title:"Healthcare" },
        { icon:<Banknote size={20}/>,    title:"Finance" },
        { icon:<Factory size={20}/>,     title:"Manufacturing" },
        { icon:<Globe size={20}/>,       title:"SaaS" },
        { icon:<TrendingUp size={20}/>,  title:"Marketing" },
        { icon:<Database size={20}/>,    title:"Data Platforms" },
        { icon:<BarChart size={20}/>,    title:"Analytics" },
      ]}
      techTitle="Our Data Science Tech Stack"
      techDesc="We use the best data tools and frameworks to turn raw numbers into clear, actionable insights."
      techStack={[
        { icon:<SiPython size={28} color="#3776AB"/>,           name:"Python" },
        { icon:<SiPandas size={28} color="#150458"/>,           name:"Pandas" },
        { icon:<SiNumpy size={28} color="#013243"/>,            name:"NumPy" },
        { icon:<SiPlotly size={28} color="#3F4F75"/>,           name:"Plotly" },
        { icon:<SiApachespark size={28} color="#E25A1C"/>,      name:"Apache Spark" },
        { icon:<FaChartBar size={28} color="#E97627"/>,         name:"Tableau" },
        { icon:<FaChartLine size={28} color="#F2C811"/>,        name:"Power BI" },
        { icon:<SiGoogleanalytics size={28} color="#E37400"/>,  name:"GA4" },
      ]}
    />
  );
}
