import { SiPython, SiTensorflow, SiPytorch, SiScikitlearn, SiKeras, SiApachespark, SiDocker } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { BrainCircuit, TrendingUp, ShoppingBag, HeartPulse, Factory, Globe, Truck, BarChart } from "lucide-react";
import ServiceTemplate from "@/components/ServiceTemplate";

export default function MachineLearning() {
  return (
    <ServiceTemplate
      badge="AI Services"
      title="Machine Learning Solutions"
      subtitle="Predict outcomes and automate decisions with intelligent ML programs. We build and deploy production-grade machine learning models that deliver real business value."
      tags={["PREDICTIVE ANALYTICS","NLP","COMPUTER VISION","RECOMMENDATION","FORECASTING","ANOMALY DETECTION","MLOps"]}
      statsTitle="Our ML Impact"
      stats={[{ value:"30+", label:"ML Models Deployed" },{ value:"92%", label:"Avg. Model Accuracy" },{ value:"5×", label:"Decision Speed Increase" }]}
      featuresTitle="Machine Learning That Drives Decisions"
      featuresSubtitle="From data preparation to model deployment, we build end-to-end ML pipelines that are accurate, scalable, and maintainable in production."
      features={[
        { title:"Predictive Modeling",       description:"Sales forecasting, churn prediction, demand planning — ML models that anticipate the future so you can act today." },
        { title:"Natural Language Processing",description:"Sentiment analysis, text classification, named entity recognition, and document summarization at scale." },
        { title:"Computer Vision",           description:"Object detection, image classification, quality inspection, and OCR solutions for visual data pipelines." },
        { title:"Recommendation Engines",    description:"Personalized product, content, and service recommendations powered by collaborative and content-based filtering." },
        { title:"MLOps & Model Monitoring",  description:"CI/CD for ML — automated retraining, drift detection, and performance monitoring to keep models production-ready." },
      ]}
      industries={[
        { icon:<ShoppingBag size={20}/>, title:"E-commerce" },
        { icon:<HeartPulse size={20}/>,  title:"Healthcare" },
        { icon:<Factory size={20}/>,     title:"Manufacturing" },
        { icon:<TrendingUp size={20}/>,  title:"FinTech" },
        { icon:<Globe size={20}/>,       title:"Telecom" },
        { icon:<Truck size={20}/>,       title:"Logistics" },
        { icon:<BarChart size={20}/>,    title:"Retail" },
        { icon:<BrainCircuit size={20}/>,title:"Research" },
      ]}
      techTitle="Our Machine Learning Stack"
      techDesc="We use industry-leading ML frameworks to build accurate, scalable, production-ready models."
      techStack={[
        { icon:<SiPython size={28} color="#3776AB"/>,      name:"Python" },
        { icon:<SiTensorflow size={28} color="#FF6F00"/>,  name:"TensorFlow" },
        { icon:<SiPytorch size={28} color="#EE4C2C"/>,     name:"PyTorch" },
        { icon:<SiScikitlearn size={28} color="#F7931E"/>, name:"Scikit-learn" },
        { icon:<SiKeras size={28} color="#D00000"/>,       name:"Keras" },
        { icon:<SiApachespark size={28} color="#E25A1C"/>, name:"Apache Spark" },
        { icon:<SiDocker size={28} color="#2496ED"/>,      name:"Docker" },
        { icon:<FaAws size={28} color="#FF9900"/>,         name:"AWS SageMaker" },
      ]}
    />
  );
}
