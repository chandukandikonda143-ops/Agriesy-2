
import React, { useState } from 'react';

const CropManagerDetailView: React.FC = () => {
  const [seeds, setSeeds] = useState<number>(0);
  const [fertilizer, setFertilizer] = useState<number>(0);
  const [labor, setLabor] = useState<number>(0);
  const [others, setOthers] = useState<number>(0);
  const [sellingPrice, setSellingPrice] = useState<number>(0);

  const totalExpenses = seeds + fertilizer + labor + others;
  const profit = sellingPrice - totalExpenses;
  const isProfit = profit >= 0;

  return (
    <div className="p-4 space-y-6 pb-24 animate-in slide-in-from-bottom duration-300">
      <div className="flex items-center gap-3">
        <div className="bg-indigo-100 p-3 rounded-2xl text-indigo-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <h2 className="text-xl font-black text-slate-800 uppercase tracking-tight">Profit Calculator</h2>
          <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Financial Management</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {/* Input Card */}
        <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 space-y-4">
          <h3 className="font-black text-slate-800 uppercase text-xs tracking-widest mb-2 border-b pb-2">Expenses (₹)</h3>
          
          <div className="space-y-3">
            {[
              { label: 'Seeds', val: seeds, set: setSeeds },
              { label: 'Fertilizer', val: fertilizer, set: setFertilizer },
              { label: 'Labor', val: labor, set: setLabor },
              { label: 'Others', val: others, set: setOthers }
            ].map((input) => (
              <div key={input.label} className="flex flex-col gap-1">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">{input.label}</label>
                <input 
                  type="number" 
                  value={input.val || ''} 
                  onChange={(e) => input.set(Number(e.target.value))}
                  placeholder="0"
                  className="bg-slate-50 border-none rounded-xl p-3 text-slate-700 font-bold outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                />
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-50">
            <h3 className="font-black text-slate-800 uppercase text-xs tracking-widest mb-2 border-b pb-2">Earnings (₹)</h3>
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Total Selling Price</label>
              <input 
                type="number" 
                value={sellingPrice || ''} 
                onChange={(e) => setSellingPrice(Number(e.target.value))}
                placeholder="0"
                className="bg-slate-50 border-none rounded-xl p-3 text-slate-700 font-bold outline-none focus:ring-2 focus:ring-green-500 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Results Card */}
        <div className={`rounded-[2rem] p-6 text-white shadow-xl transition-colors duration-500 ${isProfit ? 'bg-green-600' : 'bg-red-600'}`}>
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest opacity-80">Net {isProfit ? 'Profit' : 'Loss'}</p>
              <h2 className="text-4xl font-black tracking-tighter">₹{Math.abs(profit).toLocaleString()}</h2>
            </div>
            <div className="bg-white/20 p-2 rounded-xl">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d={isProfit ? "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" : "M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"} />
              </svg>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/10">
            <div>
              <p className="text-[9px] font-black uppercase tracking-widest opacity-60">Total Expenses</p>
              <p className="font-bold">₹{totalExpenses.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-[9px] font-black uppercase tracking-widest opacity-60">Revenue</p>
              <p className="font-bold">₹{sellingPrice.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <button className="bg-indigo-600 text-white rounded-2xl py-4 font-black uppercase tracking-widest text-sm shadow-lg active:scale-95 transition-all">
          Save Record
        </button>
      </div>
    </div>
  );
};

export default CropManagerDetailView;
