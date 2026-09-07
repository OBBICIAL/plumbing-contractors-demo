"use client";

import React, { useState, useRef, useEffect } from 'react';
import { 
  Building2, 
  Home, 
  UploadCloud, 
  CheckCircle2, 
  Clock, 
  Truck, 
  Briefcase, 
  AlertTriangle,
  FileText,
  MessageSquare,
  Zap,
  TrendingUp,
  ArrowRight,
  ShieldAlert,
  Droplet
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Types ---
type Bid = {
  id: string;
  title: string;
  value: number;
  status: string;
};

type EventLog = {
  id: string;
  time: string;
  message: string;
  type: 'info' | 'success' | 'warning';
};

export default function Page() {
  // --- Global State ---
  const [activeTab, setActiveTab] = useState<'commercial' | 'residential'>('commercial');
  const [commercialPipeline, setCommercialPipeline] = useState(284000);
  const [domesticSpeed, setDomesticSpeed] = useState(38);
  const [adminSaved, setAdminSaved] = useState(16.5);
  
  const [activeBids, setActiveBids] = useState<Bid[]>([
    {
      id: 'bid-1',
      title: 'Office Park Chilled Water & Plant Room Retrofit',
      value: 42000,
      status: 'Specs Analyzed, Awaiting Quantity Surveyor Review'
    },
    {
      id: 'bid-2',
      title: '12-Unit Apartment First-Fix Plumbing',
      value: 68000,
      status: '48h Follow-up Triggered'
    }
  ]);

  const [fleetCommercial, setFleetCommercial] = useState(4);
  const [fleetDomestic, setFleetDomestic] = useState(6);

  const [eventStream, setEventStream] = useState<EventLog[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // --- Commercial Form State ---
  const [commercialScope, setCommercialScope] = useState('Commercial Boiler Plant Room');
  const [commercialValue, setCommercialValue] = useState('€25k–€75k');
  const [commercialContact, setCommercialContact] = useState('');
  const [fileUploaded, setFileUploaded] = useState(false);

  // --- Residential Form State ---
  const [residentialType, setResidentialType] = useState('Emergency Burst Pipe / Leak');
  const [residentialEircode, setResidentialEircode] = useState('');
  const [residentialUrgency, setResidentialUrgency] = useState('Immediate Emergency');

  // --- Handlers ---
  const addEvent = (time: string, message: string, type: 'info' | 'success' | 'warning' = 'info') => {
    setEventStream(prev => [...prev, { id: Math.random().toString(36).substr(2, 9), time, message, type }]);
  };

  const handleCommercialSubmit = () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    setEventStream([]);

    let valAmount = 50000;
    if (commercialValue === '€10k–€25k') valAmount = 18000;
    if (commercialValue === '€75k+') valAmount = 95000;

    setTimeout(() => {
      addEvent('0.6s', 'Inbound commercial tender parsed via OpenRouter/Claude.', 'info');
    }, 600);

    setTimeout(() => {
      addEvent('1.4s', 'Specification validated: Scope contains commercial gas compliance & boiler plant design.', 'success');
    }, 1400);

    setTimeout(() => {
      addEvent('2.1s', 'High-priority tender card pushed directly to Senior Estimator review feed.', 'warning');
      setCommercialPipeline(prev => prev + valAmount);
      setActiveBids(prev => [
        {
          id: `bid-${Math.random()}`,
          title: `${commercialScope} - Tender Submittal`,
          value: valAmount,
          status: 'Newly Assigned to Estimator'
        },
        ...prev
      ]);
    }, 2100);

    setTimeout(() => {
      addEvent('2.8s', 'Automated confirmation SMS sent to Quantity Surveyor: "Apex Mechanical received tender specs. Initial review delivery scheduled for Thursday 2 PM."', 'success');
      setIsSubmitting(false);
      setFileUploaded(false);
      setCommercialContact('');
    }, 2800);
  };

  const handleResidentialSubmit = () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    setEventStream([]);

    setTimeout(() => {
      addEvent('0.4s', 'Residential request logged; automated speed-to-lead responder triggered.', 'info');
    }, 400);

    setTimeout(() => {
      addEvent('1.1s', `Automated WhatsApp sent: "Apex Plumbing here. For ${residentialType.toLowerCase()} in ${residentialEircode || 'your area'}, our domestic team has survey slots tomorrow at 9 AM or 1 PM. Tap to select."`, 'success');
      setDomesticSpeed(prev => Math.max(12, prev - 2)); // simulate getting faster
    }, 1100);

    setTimeout(() => {
      addEvent('2.0s', 'Domestic van calendar automatically allocated without office intervention.', 'success');
      setFleetDomestic(prev => prev + 1);
      setAdminSaved(prev => prev + 0.5);
      setIsSubmitting(false);
      setResidentialEircode('');
    }, 2000);
  };

  const triggerFollowUp = (id: string) => {
    setActiveBids(prev => prev.map(bid => 
      bid.id === id ? { ...bid, status: 'Automated Follow-up Dispatched to Procurement' } : bid
    ));
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-slate-300 font-sans p-4 md:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* LEFT COLUMN: Intake Simulator */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl flex flex-col">
          <div className="p-6 border-b border-slate-800 bg-slate-900/50">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Zap className="w-6 h-6 text-amber-500" />
              Unified Contractor Intake Engine
            </h2>
            <p className="text-sm text-slate-400 mt-1">Smart Dual-Track Routing System</p>
          </div>

          {/* Segmented Control */}
          <div className="p-6 pb-2">
            <div className="flex bg-slate-950 rounded-lg p-1 border border-slate-800">
              <button
                onClick={() => { setActiveTab('commercial'); setEventStream([]); }}
                className={cn(
                  "flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-md text-sm font-medium transition-all duration-200",
                  activeTab === 'commercial' 
                    ? "bg-slate-800 text-amber-400 shadow-sm border border-slate-700" 
                    : "text-slate-500 hover:text-slate-300 hover:bg-slate-900/50"
                )}
              >
                <Building2 className="w-4 h-4" />
                Commercial / Industrial RFQ
              </button>
              <button
                onClick={() => { setActiveTab('residential'); setEventStream([]); }}
                className={cn(
                  "flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-md text-sm font-medium transition-all duration-200",
                  activeTab === 'residential' 
                    ? "bg-slate-800 text-blue-400 shadow-sm border border-slate-700" 
                    : "text-slate-500 hover:text-slate-300 hover:bg-slate-900/50"
                )}
              >
                <Home className="w-4 h-4" />
                Residential / Emergency
              </button>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-6 flex-1 flex flex-col">
            {activeTab === 'commercial' ? (
              <div className="space-y-5 animate-fade-in-up">
                
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Project Scope</label>
                  <select 
                    value={commercialScope}
                    onChange={(e) => setCommercialScope(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-slate-200 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 outline-none"
                  >
                    <option>Commercial Boiler Plant Room</option>
                    <option>Multi-Unit Fitout</option>
                    <option>Backflow Testing / Compliance</option>
                    <option>School/Hospital Facility Contract</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Tender Document / Plan Upload</label>
                  <div 
                    className={cn(
                      "border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer transition-colors",
                      fileUploaded ? "border-amber-500/50 bg-amber-500/5" : "border-slate-700 hover:border-slate-500 bg-slate-950/50"
                    )}
                    onClick={() => setFileUploaded(true)}
                  >
                    {fileUploaded ? (
                      <>
                        <FileText className="w-8 h-8 text-amber-500 mb-2" />
                        <span className="text-amber-400 font-medium">Mechanical_Specs_Unit4B.pdf</span>
                        <span className="text-xs text-slate-500 mt-1">4.2 MB - Parsed & Ready</span>
                      </>
                    ) : (
                      <>
                        <UploadCloud className="w-8 h-8 text-slate-500 mb-2" />
                        <span className="text-slate-300">Drag & drop specifications here</span>
                        <span className="text-xs text-slate-500 mt-1">or click to browse</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Value Bracket</label>
                    <select 
                      value={commercialValue}
                      onChange={(e) => setCommercialValue(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-slate-200 focus:ring-2 focus:ring-amber-500/50 outline-none"
                    >
                      <option>€10k–€25k</option>
                      <option>€25k–€75k</option>
                      <option>€75k+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Main Contractor</label>
                    <input 
                      type="text" 
                      placeholder="e.g. BAM, Sisk..."
                      value={commercialContact}
                      onChange={(e) => setCommercialContact(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-slate-200 focus:ring-2 focus:ring-amber-500/50 outline-none placeholder:text-slate-600"
                    />
                  </div>
                </div>

                <button 
                  onClick={handleCommercialSubmit}
                  disabled={isSubmitting || !fileUploaded}
                  className="w-full mt-4 bg-amber-500 hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed text-amber-950 font-bold py-4 rounded-lg shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2"><Clock className="w-5 h-5 animate-spin" /> Processing AI Analysis...</span>
                  ) : (
                    <span className="flex items-center gap-2">Submit Commercial Tender for Scope Analysis <ArrowRight className="w-5 h-5" /></span>
                  )}
                </button>
              </div>
            ) : (
              <div className="space-y-5 animate-fade-in-up">
                
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Service Type</label>
                  <select 
                    value={residentialType}
                    onChange={(e) => setResidentialType(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-slate-200 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none"
                  >
                    <option>Emergency Burst Pipe / Leak</option>
                    <option>Boiler Replacement (SEAI grant eligible)</option>
                    <option>Full Bathroom Renovation</option>
                    <option>General Maintenance</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Location Eircode</label>
                    <input 
                      type="text" 
                      placeholder="e.g. D04 X1Y2"
                      value={residentialEircode}
                      onChange={(e) => setResidentialEircode(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-slate-200 focus:ring-2 focus:ring-blue-500/50 outline-none placeholder:text-slate-600 uppercase"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Urgency</label>
                    <select 
                      value={residentialUrgency}
                      onChange={(e) => setResidentialUrgency(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-slate-200 focus:ring-2 focus:ring-blue-500/50 outline-none"
                    >
                      <option>Immediate Emergency</option>
                      <option>Planned Booking</option>
                    </select>
                  </div>
                </div>

                <div className="bg-blue-950/30 border border-blue-900/50 rounded-lg p-4 flex items-start gap-3 mt-4">
                  <ShieldAlert className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-blue-300">Automated Dispatch Ready</h4>
                    <p className="text-xs text-blue-200/70 mt-1">This request will bypass the office and directly ping the nearest available domestic van based on Eircode proximity.</p>
                  </div>
                </div>

                <button 
                  onClick={handleResidentialSubmit}
                  disabled={isSubmitting}
                  className="w-full mt-4 bg-blue-500 hover:bg-blue-400 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2"><Clock className="w-5 h-5 animate-spin" /> Routing...</span>
                  ) : (
                    <span className="flex items-center gap-2">Book Certified Plumber <ArrowRight className="w-5 h-5" /></span>
                  )}
                </button>
              </div>
            )}

            {/* Event Stream */}
            <div className="mt-8 flex-1 flex flex-col">
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Live System Events</h3>
              <div className="flex-1 bg-slate-950 rounded-lg border border-slate-800 p-4 font-mono text-xs overflow-hidden relative min-h-[160px]">
                {eventStream.length === 0 ? (
                  <div className="absolute inset-0 flex items-center justify-center text-slate-600">
                    Awaiting form submission...
                  </div>
                ) : (
                  <div className="space-y-3">
                    {eventStream.map((event, i) => (
                      <div key={event.id} className="flex gap-3 items-start animate-fade-in-left">
                        <span className="text-slate-500 shrink-0">[{event.time}]</span>
                        <span className={cn(
                          "leading-relaxed",
                          event.type === 'success' ? "text-emerald-400" :
                          event.type === 'warning' ? "text-amber-400" : "text-blue-300"
                        )}>
                          {event.message}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: TradeOS Hub */}
        <div className="flex flex-col gap-6">
          
          {/* Executive Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-lg">
              <div className="flex items-center gap-2 text-amber-500 mb-2">
                <TrendingUp className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">Com. Pipeline</span>
              </div>
              <div className="text-2xl font-bold text-white transition-all">
                €{commercialPipeline.toLocaleString()}
              </div>
              <div className="text-xs text-slate-500 mt-1">Active quotes under review</div>
            </div>
            
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-lg">
              <div className="flex items-center gap-2 text-blue-500 mb-2">
                <Clock className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">Speed-to-Lead</span>
              </div>
              <div className="text-2xl font-bold text-white transition-all">
                {domesticSpeed} Sec
              </div>
              <div className="text-xs text-slate-500 mt-1">100% self-serve booking</div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-lg">
              <div className="flex items-center gap-2 text-emerald-500 mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">Admin Saved</span>
              </div>
              <div className="text-2xl font-bold text-white transition-all">
                {adminSaved} Hrs/Wk
              </div>
              <div className="text-xs text-slate-500 mt-1">Zero resi interruptions</div>
            </div>
          </div>

          {/* Active Commercial Tender Board */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg flex-1 flex flex-col">
            <div className="p-5 border-b border-slate-800 flex items-center justify-between">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-amber-500" />
                Active Commercial Tender Board
              </h2>
              <span className="bg-amber-500/10 text-amber-500 text-xs font-bold px-2 py-1 rounded-md border border-amber-500/20">
                {activeBids.length} Active
              </span>
            </div>
            <div className="p-5 space-y-4 flex-1 overflow-y-auto max-h-[400px]">
              {activeBids.map((bid) => (
                <div key={bid.id} className="bg-slate-950 border border-slate-800 rounded-lg p-4 animate-zoom-in">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-slate-200">{bid.title}</h3>
                    <span className="text-amber-400 font-bold bg-amber-400/10 px-2 py-0.5 rounded text-sm">
                      €{bid.value.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className={cn(
                      "w-2 h-2 rounded-full",
                      bid.status.includes('Follow-up') ? "bg-emerald-500" : "bg-amber-500"
                    )} />
                    <p className="text-sm text-slate-400">{bid.status}</p>
                  </div>
                  
                  {!bid.status.includes('Follow-up') && (
                    <button 
                      onClick={() => triggerFollowUp(bid.id)}
                      className="text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 py-2 px-3 rounded-md transition-colors w-full border border-slate-700 hover:border-slate-600"
                    >
                      Trigger 48h Estimator Follow-Up
                    </button>
                  )}
                  {bid.status.includes('Follow-up') && (
                    <div className="text-xs font-medium bg-emerald-500/10 text-emerald-400 py-2 px-3 rounded-md border border-emerald-500/20 text-center">
                      ✓ Follow-up active
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Fleet Allocation Quick-View */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg p-5">
            <h2 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
              <Truck className="w-4 h-4 text-emerald-500" />
              Fleet Allocation Quick-View
            </h2>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-slate-400 uppercase font-semibold">Commercial Site Fitouts</span>
                  <span className="text-amber-400 font-bold">{fleetCommercial} Vans</span>
                </div>
                <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden flex gap-1">
                  {Array.from({length: 12}).map((_, i) => (
                    <div key={`com-${i}`} className={cn("h-full flex-1 rounded-sm", i < fleetCommercial ? "bg-amber-500" : "bg-slate-800")} />
                  ))}
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-slate-400 uppercase font-semibold">Domestic Residential Routing</span>
                  <span className="text-blue-400 font-bold">{fleetDomestic} Vans</span>
                </div>
                <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden flex gap-1">
                  {Array.from({length: 12}).map((_, i) => (
                    <div key={`dom-${i}`} className={cn("h-full flex-1 rounded-sm", i < fleetDomestic ? "bg-blue-500" : "bg-slate-800")} />
                  ))}
                </div>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  );
}
