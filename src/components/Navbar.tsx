"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useScroll } from "@/hooks/useScroll";
import { CORE_SERVICES, TECH_SERVICES, AI_SERVICES } from "@/data/servicesData";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { BsLinkedin, BsInstagram } from "react-icons/bs";

export default function Navbar() {
  const router = useRouter();
  const scrolled = useScroll(40);
  const [megaOpen, setMegaOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const megaTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const companyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const prefetchAllServices = () => {
    CORE_SERVICES.forEach((s) => router.prefetch(s.href));
    TECH_SERVICES.forEach((s) => router.prefetch(s.href));
    AI_SERVICES.forEach((s) => router.prefetch(s.href));
  };

  const open  = () => {
    if (megaTimer.current) clearTimeout(megaTimer.current);
    setMegaOpen(true);
    prefetchAllServices();
  };
  const close = () => { megaTimer.current = setTimeout(() => setMegaOpen(false), 180); };
  const openCompany  = () => {
    if (companyTimer.current) clearTimeout(companyTimer.current);
    setCompanyOpen(true);
    router.prefetch("/about");
  };
  const closeCompany = () => { companyTimer.current = setTimeout(() => setCompanyOpen(false), 180); };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "px-6 py-3" : "px-0 py-0"}`}>
        <div className={`mx-auto relative flex items-center justify-between transition-all duration-500 bg-white
          ${scrolled ? "max-w-5xl rounded-full shadow-xl border border-gray-200 px-6 h-14" : "max-w-7xl px-8 h-20 border-b border-gray-100"}`}>

          {/* Logo */}
          <Link href="/" prefetch={true} className="flex items-center gap-3 flex-shrink-0">
            <div className="w-11 h-11 rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm flex items-center justify-center">
              <Image src="/images/logo.ico" alt="Pixelwind logo" width={44} height={44} />
            </div>
            <span className="font-bold text-lg text-gray-900">Pixelwind<span className="text-brand"> Technologies</span></span>
          </Link>

          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-1">
            <div className="relative" onMouseEnter={open} onMouseLeave={close}>
              <button className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-brand hover:bg-brand-light transition-all">
                Services <FiChevronDown className={`transition-transform duration-200 ${megaOpen ? "rotate-180 text-brand" : ""}`} size={14} />
              </button>

              {megaOpen && (
                <div className="absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 w-[860px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-5"
                  onMouseEnter={open} onMouseLeave={close}>
                  <div className="grid grid-cols-4 gap-0">
                    {/* Training col - blue */}
                    <div className="bg-brand rounded-xl p-4">
                      <p className="text-[10px] font-bold text-white/60 uppercase tracking-widest mb-3">Training & Staffing</p>
                      {CORE_SERVICES.map((s) => (
                        <Link key={s.id} href={s.href} prefetch={true} onClick={() => setMegaOpen(false)}
                          className="block px-3 py-2 rounded-lg mb-1 hover:bg-white/10 transition-all">
                          <p className="text-xs font-semibold text-white">{s.emoji} {s.title}</p>
                          <p className="text-[11px] text-white/65 mt-0.5 leading-snug">{s.desc}</p>
                        </Link>
                      ))}
                    </div>
                    {/* Tech col */}
                    <div className="p-4">
                      <p className="text-[10px] font-bold text-brand uppercase tracking-widest mb-3">Technology</p>
                      {TECH_SERVICES.slice(0,4).map((s) => (
                        <Link key={s.id} href={s.href} prefetch={true} onClick={() => setMegaOpen(false)}
                          className="block px-3 py-2 rounded-lg mb-1 hover:bg-brand-light transition-all group">
                          <p className="text-xs font-semibold text-gray-800 group-hover:text-brand">{s.emoji} {s.title}</p>
                          <p className="text-[11px] text-gray-500 mt-0.5 leading-snug">{s.desc}</p>
                        </Link>
                      ))}
                    </div>
                    <div className="p-4">
                      <p className="text-[10px] font-bold text-brand uppercase tracking-widest mb-3">More Services</p>
                      {TECH_SERVICES.slice(4).map((s) => (
                        <Link key={s.id} href={s.href} prefetch={true} onClick={() => setMegaOpen(false)}
                          className="block px-3 py-2 rounded-lg mb-1 hover:bg-brand-light transition-all group">
                          <p className="text-xs font-semibold text-gray-800 group-hover:text-brand">{s.emoji} {s.title}</p>
                          <p className="text-[11px] text-gray-500 mt-0.5 leading-snug">{s.desc}</p>
                        </Link>
                      ))}
                    </div>
                    {/* AI col */}
                    <div className="p-4 bg-gray-50 rounded-xl">
                      <p className="text-[10px] font-bold text-purple-600 uppercase tracking-widest mb-3">AI & Data</p>
                      {AI_SERVICES.map((s) => (
                        <Link key={s.id} href={s.href} prefetch={true} onClick={() => setMegaOpen(false)}
                          className="block px-3 py-2 rounded-lg mb-1 hover:bg-purple-50 transition-all group">
                          <p className="text-xs font-semibold text-gray-800 group-hover:text-purple-600">{s.emoji} {s.title}</p>
                          <p className="text-[11px] text-gray-500 mt-0.5 leading-snug">{s.desc}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="relative" onMouseEnter={openCompany} onMouseLeave={closeCompany}>
              <button className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-brand hover:bg-brand-light transition-all">
                Company <FiChevronDown className={`transition-transform duration-200 ${companyOpen ? "rotate-180 text-brand" : ""}`} size={14} />
              </button>

              {companyOpen && (
                <div className="absolute top-[calc(100%+10px)] left-0 w-[280px] bg-white rounded-3xl shadow-2xl border border-gray-100 p-4"
                  onMouseEnter={openCompany} onMouseLeave={closeCompany}>
                  <div className="space-y-4">
                    <div className="rounded-3xl bg-gray-50 p-4">
                      <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-3">Our Company</p>
                      <Link href="/about" prefetch={true} onClick={() => setCompanyOpen(false)} className="block text-sm font-semibold text-gray-900 hover:text-brand transition-colors">About</Link>
                      <p className="text-xs text-gray-500 mt-3">Learn more about our mission, values, and team.</p>
                    </div>
                    <div className="rounded-3xl bg-gray-50 p-4">
                      <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-3">Social Media</p>
                      <div className="flex items-center gap-3">
                        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-brand hover:text-white transition-all">
                          <BsLinkedin size={18} />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-brand hover:text-white transition-all">
                          <BsInstagram size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="hidden md:flex">
            <Link href="/contact" prefetch={true} onMouseEnter={() => router.prefetch("/contact")} className="flex items-center gap-1.5 bg-brand text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-brand-dark transition-all shadow-md shadow-brand/30 hover:scale-[1.02]">
              Get in touch
            </Link>
          </div>

          <button className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-20 px-6 overflow-y-auto">
          <div className="flex flex-col gap-2 mt-4">
            <p className="text-xs font-bold text-brand uppercase tracking-widest mb-2">Services</p>
            {[...CORE_SERVICES, ...TECH_SERVICES, ...AI_SERVICES].map((s) => (
              <Link key={s.id} href={s.href} prefetch={true} onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 hover:bg-brand-light hover:text-brand transition-all font-medium text-sm text-gray-700">
                <span>{s.emoji}</span> {s.title}
              </Link>
            ))}
            <div className="border-t border-gray-100 my-3" />
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Company</p>
            <Link href="/about" prefetch={true} onClick={() => setMobileOpen(false)} className="px-4 py-3 rounded-xl bg-gray-50 text-sm font-medium text-gray-700">About</Link>
            <div className="flex gap-3 px-4 mt-2">
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="flex-1 text-center px-4 py-3 rounded-xl bg-gray-50 text-sm font-medium text-gray-700 hover:text-brand transition-all">LinkedIn</a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="flex-1 text-center px-4 py-3 rounded-xl bg-gray-50 text-sm font-medium text-gray-700 hover:text-brand transition-all">Instagram</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
