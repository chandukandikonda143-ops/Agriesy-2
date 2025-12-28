
import React, { useState } from 'react';
import { View } from './types';
import WeatherCard from './components/WeatherCard';
import CropManagerCard from './components/CropManagerCard';
import GridItem from './components/GridItem';
import { MicIcon, CameraIcon, LeafIcon, HomeIcon } from './components/Icons';
import AdvisoryView from './views/AdvisoryView';
import MarketplaceView from './views/MarketplaceView';
import TechView from './views/TechView';
import SchemesView from './views/SchemesView';
import WeatherReportView from './views/WeatherReportView';
import CropManagerDetailView from './views/CropManagerDetailView';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.DASHBOARD);

  const renderContent = () => {
    switch (currentView) {
      case View.ADVISORY:
        return <AdvisoryView />;
      case View.MARKETPLACE:
        return <MarketplaceView />;
      case View.TECHNOLOGY:
        return <TechView />;
      case View.SCHEMES:
        return <SchemesView />;
      case View.WEATHER_REPORT:
        return <WeatherReportView />;
      case View.CROP_MANAGER_DETAIL:
        return <CropManagerDetailView />;
      case View.DASHBOARD:
      default:
        return (
          <div className="space-y-4 pb-24 animate-in fade-in duration-500">
            {/* Top Cards Grid */}
            <div className="grid grid-cols-2 gap-4 px-4 h-44 mt-2">
              <div onClick={() => setCurrentView(View.WEATHER_REPORT)} className="cursor-pointer h-full">
                <WeatherCard />
              </div>
              <div onClick={() => setCurrentView(View.CROP_MANAGER_DETAIL)} className="cursor-pointer h-full">
                <CropManagerCard />
              </div>
            </div>

            {/* Govt Schemes Banner */}
            <div className="px-4">
              <button 
                onClick={() => setCurrentView(View.SCHEMES)}
                className="w-full bg-[#bd5c00] rounded-3xl p-4 flex items-center gap-4 text-white shadow-lg relative group active:scale-95 transition-all"
              >
                <div className="bg-white/20 p-3 rounded-2xl">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="text-left flex-1">
                  <h4 className="font-bold text-base uppercase tracking-tight">Govt Schemes</h4>
                  <p className="text-orange-100 text-xs font-medium">View Detailed Govt Subsidies</p>
                </div>
                <svg className="w-6 h-6 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Search and FPO */}
            <div className="px-4 flex gap-3 h-16">
              <div className="flex-[2.5] bg-white rounded-2xl shadow-sm border border-gray-100 px-4 flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input 
                  type="text" 
                  placeholder="Search crops, pests..." 
                  className="flex-1 py-4 text-sm outline-none bg-transparent placeholder:text-gray-400"
                />
                <div className="flex items-center gap-2 text-gray-400 border-l pl-3">
                  <MicIcon className="w-5 h-5" />
                  <CameraIcon className="w-5 h-5" />
                </div>
              </div>
              <button className="flex-1 bg-[#0f172a] text-white rounded-2xl flex flex-col items-center justify-center shadow-md active:scale-95 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="text-xs font-bold mt-1 uppercase tracking-wider">FPO</span>
              </button>
            </div>

            {/* Feature Grid */}
            <div className="px-4 grid grid-cols-3 gap-3">
              <GridItem 
                icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>} 
                label="CONTENT" 
                color="bg-blue-50 text-blue-600"
                onClick={() => {}}
              />
              <GridItem 
                icon={<LeafIcon />} 
                label="ORGANIC FARMING" 
                color="bg-green-50 text-green-600"
                onClick={() => setCurrentView(View.TECHNOLOGY)} 
              />
              <GridItem 
                icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>} 
                label="COMMUNITY" 
                color="bg-orange-50 text-orange-500"
                onClick={() => {}}
              />
              <GridItem 
                icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>} 
                label="SLOT BOOKING" 
                color="bg-indigo-50 text-indigo-600"
                onClick={() => {}}
              />
              <GridItem 
                icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 9h-1m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>} 
                label="COLD STORAGE" 
                color="bg-cyan-50 text-cyan-600"
                onClick={() => {}}
              />
              <GridItem 
                icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>} 
                label="DEMAND" 
                color="bg-red-50 text-red-600"
                onClick={() => {}}
              />
              <GridItem 
                icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>} 
                label="ONLINE GOODS" 
                color="bg-blue-50 text-blue-500"
                onClick={() => setCurrentView(View.MARKETPLACE)} 
              />
              <GridItem 
                icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>} 
                label="DIRECT SELLING" 
                color="bg-purple-50 text-purple-600"
                onClick={() => {}}
              />
              <GridItem 
                icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>} 
                label="GOODS SELLING" 
                color="bg-pink-50 text-pink-500"
                onClick={() => {}}
              />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="max-w-md mx-auto bg-[#f8fafc] min-h-screen relative shadow-2xl flex flex-col">
      <header className="sticky top-0 z-50 bg-[#0f172a] px-4 py-3 flex items-center justify-between shadow-lg">
        <button onClick={() => setCurrentView(View.DASHBOARD)} className="flex items-center gap-1.5 bg-[#1e293b] text-white px-3 py-1.5 rounded-full border border-gray-700 active:scale-95 transition-all">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="text-xs font-bold uppercase tracking-wide">Back</span>
        </button>

        <div className="flex items-center gap-2">
          <div className="bg-[#22c55e] rounded-lg p-1.5 shadow-lg shadow-green-900/20">
             <LeafIcon className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-2xl font-black text-white tracking-tighter italic">AGRIEASY</h1>
        </div>

        <button className="bg-[#1e293b] p-2.5 rounded-2xl text-white border border-gray-700 active:scale-95 transition-all">
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
           </svg>
        </button>
      </header>

      <main className="flex-1 overflow-x-hidden">
        {renderContent()}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto glass border-t border-gray-100 px-6 py-4 flex justify-between items-center z-50">
        <button 
          onClick={() => setCurrentView(View.DASHBOARD)}
          className={`flex flex-col items-center gap-1 ${currentView === View.DASHBOARD ? 'text-green-600' : 'text-gray-400'}`}
        >
          <HomeIcon />
          <span className="text-[10px] font-bold uppercase">Home</span>
        </button>
        <button 
          onClick={() => setCurrentView(View.ADVISORY)}
          className={`flex flex-col items-center gap-1 ${currentView === View.ADVISORY ? 'text-green-600' : 'text-gray-400'}`}
        >
          <MicIcon className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase">Advisor</span>
        </button>
        <div className="relative -top-6">
           <button 
              onClick={() => setCurrentView(View.MARKETPLACE)}
              className="bg-green-600 text-white p-4 rounded-full shadow-lg border-4 border-[#f8fafc] active:scale-95 transition-all"
           >
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
             </svg>
           </button>
        </div>
        <button 
          onClick={() => setCurrentView(View.TECHNOLOGY)}
          className={`flex flex-col items-center gap-1 ${currentView === View.TECHNOLOGY ? 'text-green-600' : 'text-gray-400'}`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          <span className="text-[10px] font-bold uppercase">Tech</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-400">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <span className="text-[10px] font-bold uppercase">Account</span>
        </button>
      </nav>
    </div>
  );
};

export default App;
