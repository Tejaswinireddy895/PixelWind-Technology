import { SiEthereum, SiSolidity, SiWeb3Dotjs, SiIpfs, SiRust, SiPython, SiNodedotjs, SiReact } from "react-icons/si";
import { Link2, Shield, Banknote, Globe, HeartPulse, ShoppingBag, Truck, Factory } from "lucide-react";
import ServiceTemplate from "@/components/ServiceTemplate";

export default function Blockchain() {
  return (
    <ServiceTemplate
      title="Blockchain Development"
      subtitle="Building decentralized applications, smart contracts, and Web3 solutions that bring transparency, security, and efficiency to your business."
      tags={["SMART CONTRACTS","DeFi","NFT","WEB3","SOLIDITY","ETHEREUM","POLYGON","AUDITING"]}
      statsTitle="Our Blockchain Impact"
      stats={[{ value:"15+", label:"DApps Delivered" },{ value:"100%", label:"Audit Pass Rate" },{ value:"$2M+", label:"On-chain Volume" }]}
      featuresTitle="Decentralized Solutions Built for Trust"
      featuresSubtitle="Our blockchain engineers build production-ready smart contracts, DeFi protocols, and NFT platforms with security and scalability at their core."
      features={[
        { title:"Smart Contract Development", description:"Audited, gas-optimized Solidity smart contracts for Ethereum, Polygon, BNB Chain, and Avalanche." },
        { title:"DeFi Protocol Design",       description:"AMMs, yield farming, lending protocols, and staking mechanisms built with battle-tested security patterns." },
        { title:"NFT Marketplace & Minting",  description:"End-to-end NFT platforms — from minting contracts to marketplace front-ends with wallet integration." },
        { title:"Web3 Frontend Integration",  description:"React dApps connected to smart contracts via ethers.js and wagmi with MetaMask and WalletConnect support." },
        { title:"Security Audits",            description:"Comprehensive smart contract audits covering reentrancy, overflow, access control, and logic vulnerabilities." },
      ]}
      industries={[
        { icon:<Banknote size={20}/>,    title:"DeFi" },
        { icon:<Link2 size={20}/>,       title:"NFT / Gaming" },
        { icon:<Shield size={20}/>,      title:"Identity" },
        { icon:<Globe size={20}/>,       title:"Supply Chain" },
        { icon:<HeartPulse size={20}/>,  title:"Healthcare" },
        { icon:<ShoppingBag size={20}/>, title:"E-commerce" },
        { icon:<Truck size={20}/>,       title:"Logistics" },
        { icon:<Factory size={20}/>,     title:"Real Estate" },
      ]}
      techTitle="Our Blockchain Tech Stack"
      techDesc="We use battle-tested Web3 technologies to build secure, scalable decentralized applications."
      techStack={[
        { icon:<SiEthereum size={28} color="#627EEA"/>, name:"Ethereum" },
        { icon:<SiSolidity size={28} color="#363636"/>, name:"Solidity" },
        { icon:<SiWeb3Dotjs size={28} color="#F16822"/>,name:"Web3.js" },
        { icon:<SiIpfs size={28} color="#65C2CB"/>,     name:"IPFS" },
        { icon:<SiRust size={28} color="#CE412B"/>,     name:"Rust" },
        { icon:<SiPython size={28} color="#3776AB"/>,   name:"Python" },
        { icon:<SiNodedotjs size={28} color="#339933"/>,name:"Node.js" },
        { icon:<SiReact size={28} color="#61DAFB"/>,    name:"React" },
      ]}
    />
  );
}
