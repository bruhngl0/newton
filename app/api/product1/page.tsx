"use client";

import React from "react";
import {
  ShieldCheck,
  Target,
  Factory,
  Maximize,
  Settings,
  Zap,
  ArrowRight,
  ClipboardCheck,
  Box,
  ChevronRight,
} from "lucide-react";

const Product1 = () => {
  return (
    <div
      className="min-h-screen w-full font-sans selection:bg-[#9acd32] selection:text-white"
      style={{
        background:
          "linear-gradient(to bottom, #4169E1 0%, #4169E1 60%, #FFFFFF 100%)",
        backgroundAttachment: "scroll",
      }}
    >
      {/* Blueprint Grid Overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px), 
                          linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="relative z-10 w-full">
        {/* --- HERO SECTION --- */}
        <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-12 items-center gap-12">
            <div className="lg:col-span-7 space-y-8 text-white">
              <h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase">
                Bellows Covers
              </h1>

              <div className="space-y-6 text-blue-50 text-lg leading-relaxed">
                <p className="font-medium">
                  At Signage Products, we manufacture custom-engineered bellows
                  covers for industrial applications, offering multiple
                  construction variants to suit different operating environments
                  and performance requirements.
                </p>
                <p className="opacity-90">
                  Our capabilities span sewn bellows, thermo-welded
                  (heat-sealed) bellows, and lamella-reinforced bellows,
                  produced to precise customer specifications.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="flex items-center group">
                  <span className="bg-[#9acd32] text-white font-black py-4 px-8 group-hover:opacity-90 transition-opacity uppercase text-sm tracking-widest">
                    Contact Us
                  </span>
                  <span className="bg-[#86b32b] text-white py-4 px-4 border-l border-white/10">
                    <ChevronRight size={20} />
                  </span>
                </button>
                <button className="flex items-center group border border-white/40">
                  <span className="bg-white/10 text-white font-black py-4 px-8 group-hover:bg-white/20 transition-colors uppercase text-sm tracking-widest">
                    Applications
                  </span>
                  <span className="bg-white/20 text-white py-4 px-4 border-l border-white/40 group-hover:bg-white/30 transition-colors">
                    <ChevronRight size={20} />
                  </span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
              <div className="w-full max-w-md aspect-square bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl flex items-center justify-center">
                <span className="text-white/30 font-black uppercase tracking-widest text-xs text-center p-6">
                  <img src="/heatsealed.jpg" />
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* --- CONSTRUCTION VARIANTS (UNIFORM STYLING) --- */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-24">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-white text-sm font-black tracking-[0.6em] uppercase">
              Construction Variants
            </h2>
            <div className="h-[1px] flex-grow bg-white/30"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1: Sewn */}
            <div className="group flex flex-col bg-white rounded-[2rem] shadow-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-500">
              <div className="h-[400px] bg-slate-100 overflow-hidden relative">
                <img
                  src="/sewn1.jpg"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Sewn Bellows"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-600">
                  Stitched
                </div>
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-black text-blue-900 mb-4 uppercase tracking-tight">
                  Sewn Bellows
                </h3>
                <p className="text-slate-600 text-base leading-relaxed mb-8">
                  Fabric bellows constructed using industrial stitching
                  techniques, offering controlled flexibility and cost
                  efficiency.
                </p>
                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[#9acd32] font-black text-xs tracking-widest uppercase">
                    Precision Stitched
                  </span>
                  <ArrowRight size={20} className="text-blue-900" />
                </div>
              </div>
            </div>

            {/* Card 2: Thermo-Welded */}
            <div className="group flex flex-col bg-white rounded-[2rem] shadow-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-500">
              <div className="h-[400px] bg-slate-100 overflow-hidden relative">
                <img
                  src="/heatsealed1.jpg"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Thermo-Welded Bellows"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-600">
                  Heat-Sealed
                </div>
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-black text-blue-900 mb-4 uppercase tracking-tight">
                  Thermo-Welded
                </h3>
                <p className="text-slate-600 text-base leading-relaxed mb-8">
                  Precision-pleated and heat-welded to PVC stiffeners for a
                  sealed construction without needle holes.
                </p>
                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[#9acd32] font-black text-xs tracking-widest uppercase">
                    Liquid & Dust Proof
                  </span>
                  <ArrowRight size={20} className="text-blue-900" />
                </div>
              </div>
            </div>

            {/* Card 3: Lamella */}
            <div className="group flex flex-col bg-white rounded-[2rem] shadow-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-500">
              <div className="h-[400px] bg-slate-100 overflow-hidden relative">
                <img
                  src="/lamella2.jpg"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Lamella Bellows"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-600">
                  Armored
                </div>
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-black text-blue-900 mb-4 uppercase tracking-tight">
                  Lamella Bellows
                </h3>
                <p className="text-slate-600 text-base leading-relaxed mb-8">
                  Heavy-duty bellows with stainless steel plates for protection
                  against hot chips and high abrasion.
                </p>
                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[#9acd32] font-black text-xs tracking-widest uppercase">
                    Extreme Protection
                  </span>
                  <ArrowRight size={20} className="text-blue-900" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* --- MANUFACTURING CAPABILITIES SECTION --- */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-40">
          <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden">
            {/* Materials & Design */}
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-16 bg-slate-50 border-r border-slate-100">
                <h3 className="text-3xl font-black text-blue-900 mb-8 border-b-4 border-[#9acd32] inline-block uppercase">
                  Materials Expertise
                </h3>
                <p className="text-slate-600 mb-8 font-medium uppercase text-xs tracking-wider">
                  We work with a wide range of industrial and technical fabrics,
                  including:
                </p>
                <ul className="space-y-4">
                  {[
                    "PVC-coated polyester (single and double-sided)",
                    "PU-coated fabrics",
                    "PTFE and specialty technical fabrics",
                    "Multi-layer fabric constructions",
                  ].map((mat, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-slate-800 font-bold"
                    >
                      <div className="w-2 h-2 bg-[#9acd32] rotate-45 shrink-0"></div>
                      {mat}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-sm text-slate-500 border-l-2 border-slate-200 pl-4 leading-relaxed">
                  Material selection is based on application conditions such as
                  abrasion, temperature, chemical exposure, and movement cycles.
                </p>
              </div>

              <div className="p-8 lg:p-16 bg-white">
                <h3 className="text-3xl font-black text-blue-900 mb-8 border-b-4 border-[#9acd32] inline-block uppercase">
                  Design & Customisation
                </h3>
                <p className="text-slate-600 mb-8 uppercase text-xs tracking-wider">
                  All bellows are custom-manufactured to match machine geometry
                  and operating parameters:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Rectangular, square, circular, tapered, and complex profiles",
                    "Customized fold pitch, stroke length, and compression ratio",
                    "Optional internal PVC stiffeners, frames, or guide elements",
                    "Multiple mounting solutions to suit customer interfaces",
                  ].map((text, i) => (
                    <div
                      key={i}
                      className="bg-slate-50 p-4 rounded-xl text-xs font-bold text-blue-900 leading-relaxed border border-slate-200"
                    >
                      {text}
                    </div>
                  ))}
                </div>
                <p className="mt-8 text-sm font-black text-[#9acd32] uppercase tracking-widest">
                  Optimized for smooth movement, dimensional stability, and long
                  service life.
                </p>
              </div>
            </div>

            {/* Manufacturing Capabilities Block */}
            <div className="p-8 lg:p-16 bg-[#4169e1] text-white">
              <h3 className="text-2xl font-black mb-12 text-center uppercase tracking-[0.3em]">
                Manufacturing Capabilities
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: <Target size={30} className="text-[#9acd32]" />,
                    text: "Precision pleating and folding",
                  },
                  {
                    icon: <Settings size={30} className="text-[#9acd32]" />,
                    text: "Sewing, thermo-welding, and hybrid constructions",
                  },
                  {
                    icon: <Factory size={30} className="text-[#9acd32]" />,
                    text: "Integration of PVC stiffeners and metal reinforcements",
                  },
                  {
                    icon: <ShieldCheck size={30} className="text-[#9acd32]" />,
                    text: "Consistent batch production with repeatable quality",
                  },
                ].map((item, i) => (
                  <div key={i} className="text-center group">
                    <div className="mb-4 flex justify-center">{item.icon}</div>
                    <p className="text-xs font-bold leading-relaxed opacity-80 uppercase tracking-tighter">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-12 text-center pt-8 border-t border-white/10">
                <p className="text-sm font-medium text-blue-200">
                  We support prototype development, small batches, and series
                  production.
                </p>
              </div>
            </div>

            {/* Quality & Applications */}
            <div className="p-8 lg:p-16 grid lg:grid-cols-2 gap-16 items-start">
              <div className="text-slate-900">
                <h3 className="text-2xl font-black text-blue-900 mb-8 uppercase">
                  Quality Focus
                </h3>
                <ul className="space-y-4">
                  {[
                    "Controlled fabrication processes",
                    "Dimensional accuracy and consistency",
                    "Visual and functional inspection at key stages",
                    "Focus on durability under repetitive motion",
                  ].map((text, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 font-bold text-slate-700"
                    >
                      <ClipboardCheck size={20} className="text-[#9acd32]" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl border-2 border-slate-100">
                <h3 className="text-2xl font-black text-blue-900 mb-8 uppercase">
                  Applications Served
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    "Machine tools and CNC equipment",
                    "Linear motion systems and guideways",
                    "Automation and material handling machinery",
                    "Industrial and precision mechanical equipment",
                  ].map((text, i) => (
                    <div
                      key={i}
                      className="bg-white px-4 py-3 rounded-lg shadow-sm border border-slate-200 text-xs font-black text-blue-900 uppercase"
                    >
                      • {text}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Final CTA Area */}
            <div className="bg-[#4169E1] p-10 flex flex-col md:flex-row justify-between items-center gap-8 text-white">
              <div className="text-center md:text-left">
                <h4 className="text-2xl font-black uppercase mb-2">
                  Ready for Series Production?
                </h4>
                <p className="text-blue-100 font-medium">
                  Download technical specifications or request a custom quote.
                </p>
              </div>
              <button className="bg-[#9acd32] text-white px-10 py-4 rounded-full font-black text-xs tracking-[0.2em] shadow-2xl hover:bg-white hover:text-blue-900 transition-all">
                EXPORT ENQUIRY / RFQ
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Product1;
