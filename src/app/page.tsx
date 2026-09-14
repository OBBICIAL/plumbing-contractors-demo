"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  Building2, Home, UploadCloud, CheckCircle2, Clock, Truck, 
  Briefcase, AlertTriangle, FileText, MessageSquare, Zap, 
  TrendingUp, ArrowRight, ShieldAlert, Droplet, PhoneMissed, 
  Settings, User, MapPin, Wrench, FileCheck, Phone, Check, Activity, Search, Image as ImageIcon, Plus, ShieldCheck, Flame, Info, Camera, Send, XCircle
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Page() {
  const [activeTab, setActiveTab] = useState(1);
  
  // Shared State
  const [dormantQuotes, setDormantQuotes] = useState(100);
  const [avgJobPrice, setAvgJobPrice] = useState(3800);
  
  // Tab 2 State
  const [t2Step, setT2Step] = useState(0); // 0 to 4 for chat flow
  
  // Tab 3 State
  const [t3LeftTab, setT3LeftTab] = useState(1);
  const [t3RightMode, setT3RightMode] = useState(1);
  
  // Tab 4 State
  const [t4Uploaded, setT4Uploaded] = useState(false);

  // Auto-scroll ref
  const chatEndRef = useRef<HTMLDivElement>(null);
  const chatEndRef4 = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [t2Step, t3RightMode]);

  useEffect(() => {
    chatEndRef4.current?.scrollIntoView({ behavior: 'smooth' });
  }, [t4Uploaded]);

  // Calculations
  const reactivatedPipeline = dormantQuotes * 0.08 * avgJobPrice;
  const projectedRevenue = dormantQuotes * 0.03 * avgJobPrice;

  const renderTopTabs = () => (
    <div className="flex bg-[#0F172A] rounded-xl p-1.5 border border-slate-800 shadow-xl overflow-x-auto shrink-0 scrollbar-hide">
      {[
        { id: 1, label: 'Full Cockpit', icon: Activity },
        { id: 2, label: 'Old Quote Reactivation', icon: TrendingUp },
        { id: 3, label: 'Speed-to-Lead & Qualification', icon: Zap },
        { id: 4, label: 'RGI & Boiler Doc Chaser', icon: FileCheck },
      ].map(tab => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={cn(
            "flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-semibold transition-all whitespace-nowrap",
            activeTab === tab.id 
              ? "bg-[#10B981]/10 text-[#10B981] shadow-sm border border-[#10B981]/20" 
              : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
          )}
        >
          <tab.icon className="w-4 h-4" />
          {tab.label}
        </button>
      ))}
    </div>
  );

  const renderTab1 = () => (
    <div className="space-y-6 animate-fade-in">
      {/* Top KPI Banner */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-[#0F172A] border border-slate-800 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <div className="absolute -right-4 -top-4 p-4 opacity-10"><Zap className="w-24 h-24 text-[#10B981]" /></div>
          <div className="text-[#10B981] font-semibold text-[10px] uppercase tracking-wider mb-2 flex items-center gap-1"><Clock className="w-3 h-3"/> Emergency Speed-to-Lead</div>
          <div className="text-3xl font-bold text-white relative z-10">28 Sec</div>
          <div className="text-xs text-slate-400 mt-1 relative z-10">vs. 3-hr trade standard</div>
        </div>
        <div className="bg-[#0F172A] border border-slate-800 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <div className="absolute -right-4 -top-4 p-4 opacity-10"><User className="w-24 h-24 text-[#10B981]" /></div>
          <div className="text-[#10B981] font-semibold text-[10px] uppercase tracking-wider mb-2 flex items-center gap-1"><Briefcase className="w-3 h-3"/> Office Admin ROI</div>
          <div className="text-3xl font-bold text-white relative z-10">16.5 Hrs/Wk</div>
          <div className="text-xs text-slate-400 mt-1 relative z-10">Chasing boiler serials, photos & invoices eliminated</div>
        </div>
        <div className="bg-[#0F172A] border border-slate-800 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <div className="absolute -right-4 -top-4 p-4 opacity-10"><ShieldCheck className="w-24 h-24 text-[#10B981]" /></div>
          <div className="text-[#10B981] font-semibold text-[10px] uppercase tracking-wider mb-2 flex items-center gap-1"><FileCheck className="w-3 h-3"/> RGI & SEAI Compliance</div>
          <div className="text-3xl font-bold text-white relative z-10">100%</div>
          <div className="text-xs text-slate-400 mt-1 relative z-10">RGI Cert 3 & SEAI Home Energy grants auto-drafted</div>
        </div>
        <div className="bg-[#0F172A] border border-slate-800 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <div className="absolute -right-4 -top-4 p-4 opacity-10"><TrendingUp className="w-24 h-24 text-[#10B981]" /></div>
          <div className="text-[#10B981] font-semibold text-[10px] uppercase tracking-wider mb-2 flex items-center gap-1"><Activity className="w-3 h-3"/> Reactivated Pipeline</div>
          <div className="text-3xl font-bold text-white relative z-10">€{reactivatedPipeline.toLocaleString()}</div>
          <div className="text-xs text-slate-400 mt-1 relative z-10">From dormant boiler/heat pump quotes mined</div>
        </div>
      </div>

      {/* 3-Column Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Col 1 */}
        <div className="bg-[#0F172A] border border-slate-800 rounded-xl shadow-lg flex flex-col">
          <div className="p-4 border-b border-slate-800 bg-[#1E293B]/30 flex items-center justify-between">
            <h3 className="font-bold text-white flex items-center gap-2 text-sm"><Zap className="w-4 h-4 text-[#10B981]" /> Live Inbound Job Feed</h3>
            <span className="flex h-2 w-2 rounded-full bg-[#10B981] animate-pulse"></span>
          </div>
          <div className="p-4 space-y-3">
            <div className="bg-[#1E293B] border border-slate-700 rounded-lg p-3">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-bold text-rose-400 bg-rose-400/10 px-2 py-1 rounded">Domestic Boiler Breakdown</span>
                <span className="text-xs text-slate-400">28s ago</span>
              </div>
              <div className="font-semibold text-slate-200 text-sm">Navan • Oil Boiler (OFTEC)</div>
              <div className="text-xs text-slate-400 mt-1">No heat/hot water. Eircode: C15 ***</div>
            </div>
            <div className="bg-[#1E293B] border border-slate-700 rounded-lg p-3">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-bold text-blue-400 bg-blue-400/10 px-2 py-1 rounded">Bathroom Renovation Quote</span>
                <span className="text-xs text-slate-400">12m ago</span>
              </div>
              <div className="font-semibold text-slate-200 text-sm">Swords • Full Fitout</div>
              <div className="text-xs text-slate-400 mt-1">Requested callback at 5pm. Eircode: K67 ***</div>
            </div>
            <div className="bg-[#1E293B] border border-slate-700 rounded-lg p-3">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-bold text-[#10B981] bg-[#10B981]/10 px-2 py-1 rounded">SEAI Heat Pump Query</span>
                <span className="text-xs text-slate-400">45m ago</span>
              </div>
              <div className="font-semibold text-slate-200 text-sm">Kildare • Retrofit Survey</div>
              <div className="text-xs text-slate-400 mt-1">Currently on oil, looking to upgrade.</div>
            </div>
          </div>
        </div>

        {/* Col 2 */}
        <div className="bg-[#0F172A] border border-slate-800 rounded-xl shadow-lg flex flex-col">
          <div className="p-4 border-b border-slate-800 bg-[#1E293B]/30 flex items-center justify-between">
            <h3 className="font-bold text-white flex items-center gap-2 text-sm"><Clock className="w-4 h-4 text-blue-400" /> Master Service Calendar & Field Matrix</h3>
          </div>
          <div className="p-4 space-y-4">
            <div className="relative pl-4 border-l-2 border-blue-500/30">
              <div className="absolute w-2 h-2 rounded-full bg-blue-400 -left-[5px] top-1.5"></div>
              <div className="text-xs font-bold text-blue-400">Thursday 09:00 AM</div>
              <div className="font-semibold text-slate-200 mt-0.5 text-sm">Combi Boiler Install</div>
              <div className="text-[11px] text-slate-400 flex gap-2 mt-1"><span>📍 Swords</span><span>👷‍♂️ Darren</span></div>
            </div>
            <div className="relative pl-4 border-l-2 border-[#10B981]/30">
              <div className="absolute w-2 h-2 rounded-full bg-[#10B981] -left-[5px] top-1.5"></div>
              <div className="text-xs font-bold text-[#10B981]">Thursday 12:30 PM</div>
              <div className="font-semibold text-slate-200 mt-0.5 text-sm">Heat Pump Technical Survey</div>
              <div className="text-[11px] text-slate-400 flex gap-2 mt-1"><span>📍 Navan</span><span>👷‍♂️ Mark</span></div>
            </div>
            <div className="relative pl-4 border-l-2 border-rose-500/30">
              <div className="absolute w-2 h-2 rounded-full bg-rose-400 -left-[5px] top-1.5"></div>
              <div className="text-xs font-bold text-rose-400">Friday 02:00 PM</div>
              <div className="font-semibold text-slate-200 mt-0.5 text-sm">Emergency Cylinder Replacement</div>
              <div className="text-[11px] text-slate-400 flex gap-2 mt-1"><span>📍 Dunboyne</span><span>👷‍♂️ Mark</span></div>
            </div>
          </div>
        </div>

        {/* Col 3 */}
        <div className="bg-[#0F172A] border border-slate-800 rounded-xl shadow-lg flex flex-col">
          <div className="p-4 border-b border-slate-800 bg-[#1E293B]/30 flex items-center justify-between">
            <h3 className="font-bold text-white flex items-center gap-2 text-sm"><ShieldCheck className="w-4 h-4 text-purple-400" /> RGI & SEAI Compliance Queue</h3>
          </div>
          <div className="p-4 space-y-3">
            <div className="bg-[#1E293B] border border-slate-700 rounded-lg p-3 flex items-start gap-3">
              <FileCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-slate-200 text-sm">RGI Declaration of Conformance</div>
                <div className="text-xs text-slate-400 mt-1">Cert 3 • Boiler Install, Swords</div>
                <div className="mt-2 text-[10px] font-bold text-emerald-400 bg-emerald-400/10 inline-block px-2 py-1 rounded">✓ Pre-Filled</div>
              </div>
            </div>
            <div className="bg-[#1E293B] border border-slate-700 rounded-lg p-3 flex items-start gap-3">
              <FileText className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-slate-200 text-sm">SEAI Heat Pump Assessment</div>
                <div className="text-xs text-slate-400 mt-1">€6,500 Grant • Technical Survey</div>
                <div className="mt-2 text-[10px] font-bold text-amber-400 bg-amber-400/10 inline-block px-2 py-1 rounded">In Review</div>
              </div>
            </div>
            <div className="bg-[#1E293B] border border-slate-700 rounded-lg p-3 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-slate-200 text-sm">Home Heating Survey</div>
                <div className="text-xs text-slate-400 mt-1">Cylinder Replacement • Dunboyne</div>
                <div className="mt-2 text-[10px] font-bold text-blue-400 bg-blue-400/10 inline-block px-2 py-1 rounded">✓ Approved</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTab2 = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in">
      {/* Left */}
      <div className="bg-[#0F172A] border border-slate-800 rounded-xl shadow-lg flex flex-col p-6">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-[#10B981]" />
          Feature 1: Dormant Boiler & Heating Quote Revival Engine
        </h2>
        
        <div className="space-y-6">
          <div className="bg-[#1E293B] p-5 rounded-xl border border-slate-700">
            <label className="flex justify-between text-sm font-semibold text-slate-300 mb-4">
              Database Archive Slider
              <span className="text-[#10B981] font-bold">{dormantQuotes} Quotes</span>
            </label>
            <input 
              type="range" min="50" max="1000" step="10" 
              value={dormantQuotes} 
              onChange={(e) => setDormantQuotes(parseInt(e.target.value))}
              className="w-full accent-[#10B981]" 
            />
            <div className="flex justify-between text-[11px] text-slate-500 mt-2 font-medium">
              <span>50 Quotes</span><span>1,000 historic unclosed quotes</span>
            </div>
          </div>

          <div className="bg-[#1E293B] p-5 rounded-xl border border-slate-700">
            <label className="block text-sm font-semibold text-slate-300 mb-3">Interactive Average Job Price Input</label>
            <div className="relative">
              <span className="absolute left-4 top-3.5 text-slate-400 font-bold">€</span>
              <input 
                type="number" 
                value={avgJobPrice}
                onChange={(e) => setAvgJobPrice(parseInt(e.target.value) || 0)}
                className="w-full bg-[#0F172A] border border-slate-600 rounded-lg py-3.5 pl-9 pr-4 text-white font-bold focus:ring-1 focus:ring-[#10B981] outline-none shadow-inner"
              />
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {[
                { label: 'Gas Boiler Repl. (€2.85k)', val: 2850 },
                { label: 'Blended + Flush (€3.8k)', val: 3800 },
                { label: 'Bathroom Renovation (€6.5k)', val: 6500 },
                { label: 'SEAI Heat Pump (€14k)', val: 14000 }
              ].map(preset => (
                <button 
                  key={preset.val}
                  onClick={() => setAvgJobPrice(preset.val)}
                  className={cn(
                    "border text-[11px] py-2 px-2 rounded-md transition-all font-medium text-center leading-tight",
                    avgJobPrice === preset.val 
                      ? "bg-[#10B981]/20 border-[#10B981] text-[#10B981]" 
                      : "bg-[#0F172A] border-slate-700 text-slate-400 hover:text-slate-200 hover:border-slate-500"
                  )}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-[#1E293B] border border-[#10B981]/30 rounded-xl p-6 shadow-[0_0_20px_rgba(16,185,129,0.05)] relative overflow-hidden">
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#10B981]/10 to-transparent pointer-events-none"></div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Live Dynamic Math</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider mb-1">Reactivated Pipeline</div>
                <div className="text-3xl font-bold text-[#10B981] mb-1">€{reactivatedPipeline.toLocaleString()}</div>
                <div className="text-[11px] text-slate-500 font-medium">({dormantQuotes} × 8% surveys × €{avgJobPrice.toLocaleString()})</div>
              </div>
              <div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider mb-1">Projected Realized Revenue</div>
                <div className="text-3xl font-bold text-white mb-1">€{projectedRevenue.toLocaleString()}</div>
                <div className="text-[11px] text-slate-500 font-medium">({dormantQuotes} × 3% closed jobs × €{avgJobPrice.toLocaleString()})</div>
              </div>
            </div>
            <div className="text-xs text-[#10B981] font-medium mt-5 pt-4 border-t border-slate-700/50">
              {dormantQuotes} dormant quotes mined @ €{avgJobPrice.toLocaleString()} avg job • €0 upfront acquisition cost
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-300 mb-3">4-Stage Kanban Pipeline</h3>
            <div className="flex gap-2">
              <div className="flex-1 bg-[#1E293B] border border-slate-700 p-2.5 rounded-lg flex flex-col items-center justify-center text-center shadow-sm">
                <span className="text-[11px] font-bold text-slate-300">1. Dispatched</span>
              </div>
              <div className="flex items-center text-slate-600"><ArrowRight className="w-4 h-4"/></div>
              <div className="flex-1 bg-[#1E293B] border border-slate-700 p-2.5 rounded-lg flex flex-col items-center justify-center text-center shadow-sm">
                <span className="text-[11px] font-bold text-blue-400">2. Replied</span>
              </div>
              <div className="flex items-center text-slate-600"><ArrowRight className="w-4 h-4"/></div>
              <div className="flex-1 bg-[#1E293B] border border-[#10B981]/50 p-2.5 rounded-lg flex flex-col items-center justify-center text-center relative overflow-hidden shadow-sm">
                <div className="absolute inset-0 bg-[#10B981]/5"></div>
                <span className="text-[11px] font-bold text-[#10B981] relative z-10">3. Qualified</span>
                <span className="text-[9px] text-[#10B981]/80 relative z-10 leading-none mt-1">(Boiler Fuel/Age)</span>
              </div>
              <div className="flex items-center text-slate-600"><ArrowRight className="w-4 h-4"/></div>
              <div className="flex-1 border border-emerald-500 p-2.5 rounded-lg flex flex-col items-center justify-center text-center bg-emerald-500/10 shadow-sm">
                <span className="text-[11px] font-bold text-emerald-400">4. Booked</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right - Handset */}
      <div className="flex justify-center items-center">
        <div className="bg-white rounded-[40px] border-[12px] border-slate-200 h-[730px] w-full max-w-[370px] flex flex-col overflow-hidden relative shadow-2xl">
          {/* Status Bar */}
          <div className="h-7 bg-slate-50 flex items-center justify-between px-6 shrink-0 w-full z-10 relative">
            <span className="text-[11px] font-bold text-[#0F172A]">12:45</span>
            <div className="flex gap-1.5 items-center">
              <Activity className="w-3.5 h-3.5 text-[#0F172A]" />
              <div className="w-4 h-2.5 bg-[#0F172A] rounded-sm"></div>
            </div>
          </div>
          {/* Header */}
          <div className="shrink-0 bg-slate-50 border-b border-slate-200 px-4 py-3.5 flex items-center justify-center relative z-10 shadow-sm">
            <div className="text-center">
              <div className="text-[15px] font-bold text-[#0F172A]">Sarah (Desk)</div>
              <div className="text-[11px] text-slate-500 font-medium">Gibbons Plumbing & Heating</div>
            </div>
          </div>

          {/* Chat */}
          <div className="flex-1 min-h-0 overflow-y-auto p-4 space-y-4 bg-white flex flex-col relative">
            <div className="flex flex-col items-start max-w-[88%]">
              <div className="bg-slate-100 text-[#0F172A] rounded-2xl rounded-tl-sm p-3.5 text-[14px] leading-snug shadow-sm">
                Hi Dave, it’s Sarah from Gibbons Plumbing & Heating. Is this still the same Dave that was looking at a boiler replacement / heating upgrade with us a while back?
              </div>
              <span className="text-[10px] text-slate-400 mt-1.5 ml-2 font-medium">12:45 PM</span>
            </div>

            {t2Step >= 1 && (
              <div className="flex flex-col items-end self-end max-w-[88%] animate-fade-in">
                <div className="bg-[#10B981] text-white rounded-2xl rounded-tr-sm p-3.5 text-[14px] leading-snug shadow-sm">
                  Yes, still looking
                </div>
              </div>
            )}

            {t2Step >= 1 && (
              <div className="flex flex-col items-start max-w-[88%] animate-fade-in delay-100">
                <div className="bg-slate-100 text-[#0F172A] rounded-2xl rounded-tl-sm p-3.5 text-[14px] leading-snug shadow-sm">
                  Grand! With the winter months coming in, what make of boiler is currently in the house, and is it natural gas, oil, or are you looking to switch to an SEAI heat pump?
                </div>
              </div>
            )}

            {t2Step >= 2 && (
              <div className="flex flex-col items-end self-end max-w-[88%] animate-fade-in">
                <div className="bg-[#10B981] text-white rounded-2xl rounded-tr-sm p-3.5 text-[14px] leading-snug shadow-sm">
                  Gas boiler (Worcester Bosch) in Navan
                </div>
              </div>
            )}

            {t2Step >= 2 && (
              <div className="flex justify-center w-full my-3 animate-fade-in delay-100">
                <div className="bg-slate-800 text-[#10B981] text-[10px] font-bold px-3.5 py-2 rounded-full flex flex-col items-center gap-1 shadow-md border border-slate-700 text-center leading-tight">
                  <div className="flex items-center gap-1"><Check className="w-3.5 h-3.5" /> Boiler Spec Logged</div>
                  <div className="text-slate-300 font-medium">Gas System • SEAI Heating Controls Grant Eligible</div>
                </div>
              </div>
            )}

            {t2Step >= 2 && (
              <div className="flex flex-col items-start max-w-[88%] animate-fade-in delay-200">
                <div className="bg-slate-100 text-[#0F172A] rounded-2xl rounded-tl-sm p-3.5 text-[14px] leading-snug shadow-sm">
                  Perfect. Could you snap a quick photo of the data plate on the bottom?
                </div>
              </div>
            )}

            {t2Step >= 3 && (
              <div className="flex flex-col items-end self-end max-w-[88%] animate-fade-in">
                <div className="bg-[#10B981] text-white rounded-2xl rounded-tr-sm p-3.5 text-[14px] leading-snug shadow-sm">
                  Too expensive / Waiting on budget right now tbh
                </div>
              </div>
            )}

            {t2Step >= 3 && (
              <div className="flex flex-col items-start max-w-[88%] animate-fade-in delay-100">
                <div className="bg-slate-100 text-[#0F172A] rounded-2xl rounded-tl-sm p-3.5 text-[14px] leading-snug shadow-sm">
                  Completely understand — SEAI grant rates and 0% financing shifted recently so the out-of-pocket is much lower. Would Thursday at 10:00 or Friday at 2:00 suit for Mark to take a quick look?
                </div>
              </div>
            )}

            {t2Step >= 4 && (
              <div className="flex flex-col items-end self-end max-w-[88%] animate-fade-in">
                <div className="bg-[#10B981] text-white rounded-2xl rounded-tr-sm p-3.5 text-[14px] leading-snug shadow-sm">
                  Friday at 2:00 works
                </div>
              </div>
            )}

            {t2Step >= 4 && (
              <div className="flex justify-center w-full my-3 animate-fade-in delay-100">
                <div className="bg-slate-800 text-blue-400 text-[10px] font-bold px-3.5 py-2 rounded-full flex flex-col items-center gap-1 shadow-md border border-slate-700 text-center leading-tight">
                  <div className="flex items-center gap-1"><Check className="w-3.5 h-3.5" /> Heating Survey Locked</div>
                  <div className="text-slate-300 font-medium">Friday 2:00 PM • Engineer: Mark Gibbons</div>
                </div>
              </div>
            )}

            <div ref={chatEndRef} className="h-2" />
          </div>

          {/* Footer Chips */}
          <div className="shrink-0 bg-white border-t border-slate-200 p-4 pt-3 flex flex-col gap-2.5 relative z-10 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
            {t2Step < 4 && <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1 mb-0.5">Shortcut Chips</div>}
            
            {t2Step === 0 && (
              <button onClick={() => setT2Step(1)} className="bg-white border-2 border-[#10B981] text-[#10B981] hover:bg-[#10B981] hover:text-white transition-colors text-[13px] font-bold py-2.5 px-5 rounded-full shadow-sm text-left w-full flex justify-between items-center group">
                <span>"Yes, still looking"</span> <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100" />
              </button>
            )}
            {t2Step === 1 && (
              <button onClick={() => setT2Step(2)} className="bg-white border-2 border-[#10B981] text-[#10B981] hover:bg-[#10B981] hover:text-white transition-colors text-[13px] font-bold py-2.5 px-5 rounded-full shadow-sm text-left w-full flex justify-between items-center group">
                <span className="truncate pr-2">"Gas boiler (Worcester Bosch) in Navan"</span> <ArrowRight className="w-4 h-4 shrink-0 opacity-50 group-hover:opacity-100" />
              </button>
            )}
            {t2Step === 2 && (
              <button onClick={() => setT2Step(3)} className="bg-white border-2 border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white transition-colors text-[13px] font-bold py-2.5 px-5 rounded-full shadow-sm text-left w-full flex justify-between items-center group">
                <span className="truncate pr-2">"Too expensive / Waiting on budget"</span> <ArrowRight className="w-4 h-4 shrink-0 opacity-50 group-hover:opacity-100" />
              </button>
            )}
            {t2Step === 3 && (
              <button onClick={() => setT2Step(4)} className="bg-white border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors text-[13px] font-bold py-2.5 px-5 rounded-full shadow-sm text-left w-full flex justify-between items-center group">
                <span>"Friday at 2:00 works"</span> <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100" />
              </button>
            )}
            {t2Step === 4 && (
              <button onClick={() => setT2Step(0)} className="bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors text-[13px] font-bold py-3 px-5 rounded-full text-center w-full mt-1">
                Reset Simulation
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderTab3 = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in">
      {/* Left */}
      <div className="bg-[#0F172A] border border-slate-800 rounded-xl shadow-lg flex flex-col overflow-hidden">
        <div className="p-6 border-b border-slate-800 relative overflow-hidden">
          <div className="absolute right-0 top-0 opacity-5"><Zap className="w-32 h-32 text-amber-500" /></div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2 relative z-10">
            <Zap className="w-6 h-6 text-amber-500" />
            Feature 2: Instant Emergency & Heating Pre-Qualification Engine
          </h2>
        </div>
        
        {/* Switcher Tabs */}
        <div className="flex bg-[#1E293B] border-b border-slate-800">
          <button onClick={() => {setT3LeftTab(1); setT3RightMode(2);}} className={cn("flex-1 py-4 px-2 text-[13px] font-bold transition-colors border-b-[3px] text-center", t3LeftTab === 1 ? "text-amber-400 border-amber-400 bg-amber-400/5" : "text-slate-400 border-transparent hover:text-slate-200")}>
            [1. Emergency / Web Form Speed-to-Lead]
          </button>
          <button onClick={() => {setT3LeftTab(2); setT3RightMode(3);}} className={cn("flex-1 py-4 px-2 text-[13px] font-bold transition-colors border-b-[3px] text-center", t3LeftTab === 2 ? "text-blue-400 border-blue-400 bg-blue-400/5" : "text-slate-400 border-transparent hover:text-slate-200")}>
            [2. Missed Call Saver (14s Auto-Text)]
          </button>
        </div>

        <div className="p-6 space-y-8">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-[#1E293B] rounded-xl p-5 border border-slate-700 text-center shadow-md">
              <div className="text-3xl font-bold text-amber-400 mb-1">28s</div>
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wide">Median Emergency Response</div>
            </div>
            <div className="bg-[#1E293B] rounded-xl p-5 border border-slate-700 text-center shadow-md">
              <div className="text-3xl font-bold text-blue-400 mb-1">84%</div>
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wide">Missed Call Recovery Rate</div>
              <div className="text-[9px] text-slate-500 mt-1">Prevents competitor calls</div>
            </div>
            <div className="bg-[#1E293B] rounded-xl p-5 border border-slate-700 text-center shadow-md">
              <div className="text-3xl font-bold text-purple-400 mb-1">68%</div>
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wide">After-Hours Breakdown Capture</div>
              <div className="text-[9px] text-slate-500 mt-1">6:00 PM - 8:00 AM</div>
            </div>
          </div>

          <div className="bg-[#1E293B] border border-slate-700 rounded-xl p-6 shadow-md">
            <h3 className="text-sm font-bold text-slate-300 mb-6 uppercase tracking-wider">Interactive Lead Flow Visualizer</h3>
            <div className="flex flex-col gap-1 relative">
              <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-slate-700"></div>
              
              <div className="flex items-center gap-4 relative z-10 group">
                <div className="w-10 h-10 rounded-full bg-[#0F172A] border-2 border-slate-600 flex items-center justify-center shrink-0 group-hover:border-slate-400 transition-colors"><User className="w-4 h-4 text-slate-300"/></div>
                <div className="flex-1 bg-[#0F172A] border border-slate-700 p-3 rounded-lg text-xs font-bold text-slate-300 shadow-sm flex items-center gap-2">
                  Form/Call Ingest <span className="bg-slate-800 text-slate-400 px-2 py-0.5 rounded text-[10px]">&lt; 1s</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 relative z-10 group mt-3">
                <div className="w-10 h-10 rounded-full bg-[#0F172A] border-2 border-amber-500 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(245,158,11,0.2)]"><MessageSquare className="w-4 h-4 text-amber-500"/></div>
                <div className="flex-1 bg-amber-500/10 border border-amber-500/30 p-3 rounded-lg text-xs font-bold text-amber-400 shadow-sm flex items-center gap-2">
                  Warm Sarah SMS <span className="bg-amber-500/20 text-amber-500 px-2 py-0.5 rounded text-[10px]">&lt; 28s</span>
                </div>
              </div>

              <div className="flex items-center gap-4 relative z-10 group mt-3">
                <div className="w-10 h-10 rounded-full bg-[#0F172A] border-2 border-blue-500 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.2)]"><Flame className="w-4 h-4 text-blue-500"/></div>
                <div className="flex-1 bg-blue-500/10 border border-blue-500/30 p-3 rounded-lg text-xs font-bold text-blue-400 shadow-sm flex items-center gap-2">
                  Boiler & Eircode Intake <span className="bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded text-[10px]">Instant</span>
                </div>
              </div>

              <div className="flex items-center gap-4 relative z-10 group mt-3">
                <div className="w-10 h-10 rounded-full bg-[#0F172A] border-2 border-[#10B981] flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.2)]"><Clock className="w-4 h-4 text-[#10B981]"/></div>
                <div className="flex-1 bg-[#10B981]/10 border border-[#10B981]/30 p-3 rounded-lg text-xs font-bold text-[#10B981] shadow-sm flex items-center gap-2">
                  Slot Locked on Engineer Cal <span className="bg-[#10B981]/20 text-[#10B981] px-2 py-0.5 rounded text-[10px]">&lt; 3m</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right - Handset */}
      <div className="flex justify-center items-center">
        <div className="bg-white rounded-[40px] border-[12px] border-slate-200 h-[730px] w-full max-w-[370px] flex flex-col overflow-hidden relative shadow-2xl">
          {/* Sub-mode switcher */}
          <div className="shrink-0 bg-[#0F172A] border-b border-slate-800 p-2.5 flex gap-1 justify-center relative z-20">
            <button onClick={() => setT3RightMode(1)} className={cn("text-[10px] font-bold px-2.5 py-1.5 rounded transition-colors", t3RightMode === 1 ? "bg-[#10B981] text-white shadow-sm" : "bg-slate-800 text-slate-400 hover:text-slate-200")}>[1. Web Funnel]</button>
            <button onClick={() => setT3RightMode(2)} className={cn("text-[10px] font-bold px-2.5 py-1.5 rounded transition-colors", t3RightMode === 2 ? "bg-amber-500 text-white shadow-sm" : "bg-slate-800 text-slate-400 hover:text-slate-200")}>[2. Form SMS]</button>
            <button onClick={() => setT3RightMode(3)} className={cn("text-[10px] font-bold px-2.5 py-1.5 rounded transition-colors", t3RightMode === 3 ? "bg-blue-500 text-white shadow-sm" : "bg-slate-800 text-slate-400 hover:text-slate-200")}>[3. Missed Call]</button>
          </div>
          
          <div className="h-7 bg-slate-50 flex items-center justify-between px-6 shrink-0 w-full z-10 relative">
            <span className="text-[11px] font-bold text-[#0F172A]">14:22</span>
            <div className="flex gap-1.5 items-center">
              <Activity className="w-3.5 h-3.5 text-[#0F172A]" />
              <div className="w-4 h-2.5 bg-[#0F172A] rounded-sm"></div>
            </div>
          </div>

          {t3RightMode === 1 && (
            <div className="flex-1 bg-slate-50 flex flex-col p-5 overflow-y-auto animate-fade-in">
              <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 p-6 mb-4">
                <div className="w-12 h-12 bg-[#0F172A] rounded-xl flex items-center justify-center mb-5 shadow-inner"><Flame className="w-6 h-6 text-[#10B981]"/></div>
                <h3 className="font-bold text-[#0F172A] text-xl mb-1 leading-tight">Request a Quote / Emergency Call-Out</h3>
                <p className="text-[13px] text-slate-500 mb-8 font-medium">Gibbons Plumbing & Heating</p>
                
                <div className="space-y-5">
                  <div>
                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">1. Eircode</label>
                    <input type="text" placeholder="e.g. K67 X2T9" className="w-full bg-slate-50 border-2 border-slate-200 rounded-lg p-3 text-sm mt-1.5 outline-none focus:border-[#10B981] focus:bg-white transition-colors font-medium text-[#0F172A]" />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">2. Fuel Type</label>
                    <select className="w-full bg-slate-50 border-2 border-slate-200 rounded-lg p-3 text-sm mt-1.5 outline-none focus:border-[#10B981] focus:bg-white transition-colors font-medium text-[#0F172A] appearance-none">
                      <option>Gas Boiler</option>
                      <option>Oil Boiler (OFTEC)</option>
                      <option>Heat Pump</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">3. Heating Symptoms</label>
                    <select className="w-full bg-slate-50 border-2 border-slate-200 rounded-lg p-3 text-sm mt-1.5 outline-none focus:border-[#10B981] focus:bg-white transition-colors font-medium text-[#0F172A] appearance-none">
                      <option>No Heat & No Hot Water (Emergency)</option>
                      <option>Hot Water Only</option>
                      <option>Old Boiler / Planned Upgrade</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">4. Preferred Engineer Slot</label>
                    <select className="w-full bg-slate-50 border-2 border-slate-200 rounded-lg p-3 text-sm mt-1.5 outline-none focus:border-[#10B981] focus:bg-white transition-colors font-medium text-[#0F172A] appearance-none">
                      <option>As soon as possible</option>
                      <option>Morning (8am - 12pm)</option>
                      <option>Afternoon (12pm - 4pm)</option>
                    </select>
                  </div>
                  <button className="w-full bg-[#0F172A] hover:bg-slate-800 text-white font-bold py-3.5 rounded-xl mt-4 text-[15px] shadow-lg transition-colors">
                    Get Instant Response
                  </button>
                </div>
              </div>
            </div>
          )}

          {t3RightMode === 2 && (
            <div className="flex flex-col h-full animate-fade-in">
              <div className="shrink-0 bg-slate-50 border-b border-slate-200 px-4 py-3.5 flex items-center justify-center relative z-10 shadow-sm">
                <div className="text-center">
                  <div className="text-[15px] font-bold text-[#0F172A]">Sarah (Desk)</div>
                  <div className="text-[11px] text-slate-500 font-medium">Gibbons Plumbing & Heating</div>
                </div>
              </div>
              <div className="flex-1 min-h-0 overflow-y-auto p-4 space-y-4 bg-white flex flex-col relative">
                <div className="flex flex-col items-start max-w-[88%] mt-2">
                  <div className="bg-slate-100 text-[#0F172A] rounded-2xl rounded-tl-sm p-3.5 text-[14px] leading-snug shadow-sm">
                    Hi Liam! Sarah here from Gibbons Plumbing & Heating on Main St. I just got your boiler inquiry for Swords on my screen! I know having heating issues is a headache so didn't want to ring in case you're flat out — are you completely without heat/hot water right now, or is this for a planned replacement?
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1.5 ml-2 font-medium">14:23 PM <span className="text-amber-500 font-bold">(&lt; 28s response)</span></span>
                </div>
              </div>
              <div className="shrink-0 bg-white border-t border-slate-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
                <div className="bg-slate-100 border border-slate-200 rounded-full flex items-center px-4 py-2.5">
                  <span className="text-slate-400 text-[13px] flex-1 font-medium">Type a message...</span>
                  <div className="bg-[#10B981] p-1.5 rounded-full"><ArrowRight className="w-3.5 h-3.5 text-white"/></div>
                </div>
              </div>
            </div>
          )}

          {t3RightMode === 3 && (
            <div className="flex flex-col h-full animate-fade-in">
              <div className="shrink-0 bg-slate-50 border-b border-slate-200 px-4 py-3.5 flex items-center justify-center relative z-10 shadow-sm">
                <div className="text-center">
                  <div className="text-[15px] font-bold text-[#0F172A]">Sarah (Desk)</div>
                  <div className="text-[11px] text-slate-500 font-medium">Gibbons Plumbing & Heating</div>
                </div>
              </div>
              <div className="flex-1 min-h-0 overflow-y-auto p-4 space-y-4 bg-white flex flex-col relative">
                <div className="flex justify-center w-full my-3">
                  <div className="bg-rose-50 text-rose-600 text-[10px] font-bold px-3.5 py-2 rounded-full flex flex-col items-center gap-1 border border-rose-200 shadow-sm text-center leading-tight">
                    <div className="flex items-center gap-1"><PhoneMissed className="w-3.5 h-3.5" /> System Log</div>
                    <div className="text-rose-500/80 font-medium">Missed Call from (087) 552 1984 • 1:12 PM (Engineer in Boiler Plant)</div>
                  </div>
                </div>
                <div className="flex flex-col items-start max-w-[88%] mt-2">
                  <div className="bg-slate-100 text-[#0F172A] rounded-2xl rounded-tl-sm p-3.5 text-[14px] leading-snug shadow-sm">
                    Hi there, Sarah here from Gibbons Plumbing & Heating. Really sorry I missed your call just now — our heating engineers are on-site in a boiler room! How can we help you today? Were you having an emergency leak/breakdown, or looking for a quote?
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1.5 ml-2 font-medium">1:12 PM <span className="text-blue-500 font-bold">(+14s auto-text)</span></span>
                </div>
              </div>
              <div className="shrink-0 bg-white border-t border-slate-200 p-4 pt-3 flex flex-col gap-2.5 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1 mb-0.5">Fast Shortcuts</div>
                <button className="bg-white border-2 border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50 transition-colors text-[13px] font-bold py-2.5 px-5 rounded-full text-left w-full shadow-sm">
                  "Boiler stopped firing / no hot water"
                </button>
                <button className="bg-white border-2 border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50 transition-colors text-[13px] font-bold py-2.5 px-5 rounded-full text-left w-full shadow-sm">
                  "Eircode: K67 X2T9"
                </button>
                <button className="bg-white border-2 border-[#10B981] text-[#10B981] hover:bg-[#10B981] hover:text-white transition-colors text-[13px] font-bold py-2.5 px-5 rounded-full text-left w-full shadow-sm flex justify-between items-center group">
                  <span>"Can you ring me in 5 mins?"</span> <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );

  const renderTab4 = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in">
      {/* Left */}
      <div className="bg-[#0F172A] border border-slate-800 rounded-xl shadow-lg flex flex-col p-6">
        <h2 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
          <FileCheck className="w-6 h-6 text-purple-400" />
          Feature 3: Automated RGI Cert 3 & Boiler Plate Document Chaser
        </h2>
        
        <div className="space-y-5">
          <div className="bg-[#1E293B] border border-slate-700 rounded-2xl p-6 relative overflow-hidden group hover:border-slate-500 transition-colors shadow-sm">
            <div className="absolute right-2 top-2 p-4 opacity-5"><FileCheck className="w-24 h-24" /></div>
            <div className="flex items-center gap-4 mb-3 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold shadow-inner">1</div>
              <h3 className="font-bold text-white text-[17px]">RGI Cert 3 Pre-Population Engine</h3>
            </div>
            <p className="text-[13px] text-slate-400 pl-14 relative z-10 font-medium leading-relaxed">Auto-populates Registered Gas Installer Declaration of Conformance with gas meter PRV readings and flue test outputs.</p>
          </div>

          <div className="bg-[#1E293B] border border-slate-700 rounded-2xl p-6 relative overflow-hidden group hover:border-slate-500 transition-colors shadow-sm">
            <div className="absolute right-2 top-2 p-4 opacity-5"><Activity className="w-24 h-24" /></div>
            <div className="flex items-center gap-4 mb-3 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold shadow-inner">2</div>
              <h3 className="font-bold text-white text-[17px]">SEAI Heat Pump Assessment Queue</h3>
            </div>
            <p className="text-[13px] text-slate-400 pl-14 relative z-10 font-medium leading-relaxed">Manages technical surveyor room-by-room heat loss calculations for €6,500 SEAI grants.</p>
          </div>

          <div className={cn("bg-[#1E293B] border rounded-2xl p-6 relative overflow-hidden transition-all shadow-sm", t4Uploaded ? "border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.15)]" : "border-slate-700 hover:border-slate-500")}>
            <div className="absolute right-2 top-2 p-4 opacity-5"><Camera className="w-24 h-24" /></div>
            <div className="flex items-center gap-4 mb-3 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-500 flex items-center justify-center font-bold shadow-inner">3</div>
              <h3 className="font-bold text-white text-[17px]">AI OCR Boiler Data Plate Reader</h3>
            </div>
            <p className="text-[13px] text-slate-400 pl-14 relative z-10 font-medium leading-relaxed">Reads incoming customer photos of boiler ratings, serial numbers, GC numbers, and hot water cylinder coils.</p>
            {t4Uploaded && (
              <div className="ml-14 mt-5 bg-[#0F172A] border border-amber-500/30 rounded-lg p-4 text-[11px] font-mono text-amber-400 flex flex-col gap-1.5 shadow-inner animate-fade-in">
                <span><span className="text-slate-500">&gt;</span> Processing image payload...</span>
                <span><span className="text-slate-500">&gt;</span> Extracting Model: Worcester Bosch Greenstar 24i System</span>
                <span><span className="text-slate-500">&gt;</span> GC Number: 47-311-82 found.</span>
                <span className="text-[#10B981] font-bold mt-1"><span className="text-slate-500 font-normal">&gt;</span> Verification complete. RGI Pre-Pack ready.</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right - Handset */}
      <div className="flex justify-center items-center">
        <div className="bg-white rounded-[40px] border-[12px] border-slate-200 h-[730px] w-full max-w-[370px] flex flex-col overflow-hidden relative shadow-2xl">
          <div className="h-7 bg-slate-50 flex items-center justify-between px-6 shrink-0 w-full z-10 relative">
            <span className="text-[11px] font-bold text-[#0F172A]">09:15</span>
            <div className="flex gap-1.5 items-center">
              <Activity className="w-3.5 h-3.5 text-[#0F172A]" />
              <div className="w-4 h-2.5 bg-[#0F172A] rounded-sm"></div>
            </div>
          </div>
          <div className="shrink-0 bg-slate-50 border-b border-slate-200 px-4 py-3.5 flex items-center justify-center relative z-10 shadow-sm">
            <div className="text-center">
              <div className="text-[15px] font-bold text-[#0F172A]">Sarah (Technical Desk)</div>
              <div className="text-[11px] text-slate-500 font-medium">Gibbons Plumbing</div>
            </div>
          </div>

          <div className="flex-1 min-h-0 overflow-y-auto p-4 space-y-4 bg-white flex flex-col relative">
            <div className="flex flex-col items-start max-w-[88%]">
              <div className="bg-slate-100 text-[#0F172A] rounded-2xl rounded-tl-sm p-3.5 text-[14px] leading-snug shadow-sm">
                Hi Dave, Sarah from Gibbons Plumbing technical desk. Before Mark calls out on Friday at 2:00 PM, could you snap a clear photo of the silver data plate underneath your boiler and a quick picture of the hot water cylinder in the hot press?
              </div>
              <span className="text-[10px] text-slate-400 mt-1.5 ml-2 font-medium">09:15 AM</span>
            </div>

            <div className="flex flex-col items-end self-end max-w-[88%] mt-2">
              <div className="bg-[#10B981] text-white rounded-2xl rounded-tr-sm p-3.5 text-[14px] leading-snug shadow-sm">
                No hassle, here they are now.
              </div>
            </div>

            {t4Uploaded && (
              <>
                <div className="flex flex-col items-end self-end max-w-[88%] animate-fade-in">
                  <div className="bg-slate-100 rounded-2xl rounded-tr-sm p-1.5 shadow-sm border border-slate-200">
                    <div className="w-48 h-32 bg-slate-800 rounded-xl overflow-hidden relative flex items-center justify-center shadow-inner">
                      {/* Realistic Mockup representation */}
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-600 to-slate-800 flex flex-col items-center justify-center p-3 text-white/90">
                         <div className="border-[2px] border-white/20 p-2 w-full h-full flex flex-col justify-center items-center bg-black/40 text-[9px] font-mono text-center shadow-inner">
                           <span className="font-bold text-white mb-1 tracking-widest uppercase">Worcester Bosch</span>
                           <span className="text-slate-300">GC Number: <span className="text-white font-bold">47-311-82</span></span>
                           <span className="text-slate-300 mt-0.5">Output: 24kW</span>
                           <div className="mt-2 text-[7px] text-slate-400">CE 0087 • 230V~50Hz 140W</div>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center w-full my-3 animate-fade-in delay-100">
                  <div className="bg-slate-800 text-[#10B981] text-[10px] font-bold px-3.5 py-2.5 rounded-2xl flex flex-col items-center gap-1.5 shadow-md border border-slate-700 text-center leading-tight max-w-[95%]">
                    <div className="flex items-center gap-1.5 bg-[#10B981]/20 px-2 py-1 rounded-full"><Check className="w-3.5 h-3.5" /> OCR Verification Passed</div>
                    <div className="text-slate-300 font-medium px-2">Worcester Bosch Greenstar 24i System • Flue Type: Horizontal Room-Sealed • RGI Pre-Pack Ready</div>
                  </div>
                </div>

                <div className="flex flex-col items-start max-w-[88%] animate-fade-in delay-200">
                  <div className="bg-slate-100 text-[#0F172A] rounded-2xl rounded-tl-sm p-3.5 text-[14px] leading-snug shadow-sm">
                    Spot on! That data plate gives Mark the exact flue configuration and bracket size. He'll have the exact replacement parts in the van on Friday.
                  </div>
                </div>
              </>
            )}

            <div ref={chatEndRef4} className="h-2" />
          </div>

          <div className="shrink-0 bg-white border-t border-slate-200 p-4 pt-3 flex flex-col gap-2.5 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] relative z-10">
            {!t4Uploaded ? (
              <>
                <button className="bg-white border-2 border-slate-200 text-slate-500 hover:border-slate-300 hover:bg-slate-50 transition-colors text-[13px] font-bold py-2.5 px-4 rounded-full text-center w-full shadow-sm">
                  [Send Photo Reminder]
                </button>
                <button onClick={() => setT4Uploaded(true)} className="bg-white border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white transition-colors text-[13px] font-bold py-2.5 px-4 rounded-full text-center w-full shadow-sm flex justify-center items-center gap-2 group">
                  <ImageIcon className="w-4 h-4 opacity-80 group-hover:opacity-100"/> [Simulate Data Plate Upload]
                </button>
              </>
            ) : (
              <button onClick={() => setT4Uploaded(false)} className="bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors text-[13px] font-bold py-3 px-4 rounded-full text-center w-full mt-1">
                Reset Document Flow
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0B132B] text-slate-200 font-sans p-4 md:p-8 selection:bg-[#10B981]/30">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-6">
        
        {/* Top Header / Navigation */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#0F172A] p-4 rounded-2xl border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5"><Flame className="w-32 h-32 text-[#10B981]" /></div>
          <div className="relative z-10">
            <h1 className="text-2xl font-bold text-white flex items-center gap-2.5">
              <Flame className="w-7 h-7 text-[#10B981]" />
              Gibbons Plumbing & Heating OS
            </h1>
            <p className="text-[11px] text-[#10B981] mt-1.5 uppercase tracking-[0.2em] font-bold">AI Sales & Operations Engine</p>
          </div>
          <div className="relative z-10">
            {renderTopTabs()}
          </div>
        </div>

        {/* Dynamic Tab Content */}
        <div className="mt-2 min-h-[800px]">
          {activeTab === 1 && renderTab1()}
          {activeTab === 2 && renderTab2()}
          {activeTab === 3 && renderTab3()}
          {activeTab === 4 && renderTab4()}
        </div>

      </div>
    </div>
  );
}
