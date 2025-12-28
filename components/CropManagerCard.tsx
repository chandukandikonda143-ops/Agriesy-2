
import React from 'react';
import { MicIcon } from './Icons';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const data = [
  { val: 10 }, { val: 20 }, { val: 15 }, { val: 40 }, { val: 30 }, { val: 50 }
];

const CropManagerCard: React.FC = () => {
  return (
    <div className="bg-[#5c42eb] rounded-[2rem] p-4 shadow-lg text-white relative h-full flex flex-col overflow-hidden">
      {/* Folder Badge */}
      <div className="flex items-center gap-1 bg-[#4a32c4] px-2 py-1 rounded-full w-fit mb-2">
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
        </svg>
        <span className="text-[8px] font-bold uppercase tracking-widest">Crop Manager</span>
      </div>

      {/* Floating Mic Icon - Resized */}
      <button className="absolute top-2 right-2 bg-white p-2 rounded-full text-[#5c42eb] shadow-xl active:scale-90 transition-transform z-10">
        <MicIcon className="w-4 h-4" />
      </button>

      <div className="mb-1">
        <h3 className="text-lg font-black leading-none tracking-tight">Track Profit</h3>
        <p className="text-indigo-100 text-[10px] font-medium mt-0.5">Manage Expenses</p>
      </div>
      
      {/* Green Sparkline */}
      <div className="h-10 mt-auto opacity-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Line 
              type="monotone" 
              dataKey="val" 
              stroke="#22c55e" 
              strokeWidth={2.5} 
              dot={false} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <button className="bg-white/10 hover:bg-white/20 transition-colors w-full py-2 rounded-2xl flex items-center justify-center gap-1.5 font-bold text-[11px] mt-2 border border-white/20">
        <span className="bg-white text-[#5c42eb] rounded-full w-3.5 h-3.5 flex items-center justify-center text-[10px] font-black">+</span>
        Start New Crop
      </button>
      
      {/* Decorative background shape */}
      <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white/5 rounded-full"></div>
    </div>
  );
};

export default CropManagerCard;
