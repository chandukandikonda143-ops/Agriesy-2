
import React, { useState, useEffect } from 'react';
import { getAgriSchemes } from '../services/geminiService';

const SchemesView: React.FC = () => {
  const [data, setData] = useState<{ text: string, sources: any[] }>({ text: '', sources: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSchemes = async () => {
      const schemes = await getAgriSchemes();
      setData(schemes);
      setLoading(false);
    };
    fetchSchemes();
  }, []);

  return (
    <div className="p-4 space-y-6 pb-24 animate-in slide-in-from-right duration-300">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tight">Full Govt Schemes</h2>
        <p className="text-sm text-slate-500 font-medium italic">Comprehensive database for all Indian Farmers</p>
      </div>

      {loading ? (
        <div className="py-20 flex flex-col items-center justify-center gap-4">
          <div className="w-12 h-12 border-4 border-orange-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-orange-600 font-bold animate-pulse uppercase tracking-widest text-xs text-center">Gathering Nationwide Data...</p>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100">
            <div className="prose prose-sm max-w-none text-slate-700 leading-relaxed font-medium whitespace-pre-wrap">
              {data.text}
            </div>
            
            {data.sources.length > 0 && (
              <div className="mt-8 pt-6 border-t border-slate-50">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Direct Application Links</h4>
                <div className="flex flex-wrap gap-2">
                  {data.sources.map((s, i) => (
                    <a 
                      key={i} 
                      href={s.uri} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[10px] font-bold bg-orange-50 text-orange-700 px-4 py-2 rounded-full hover:bg-orange-600 hover:text-white transition-all shadow-sm"
                    >
                      {s.title || 'Visit Official Portal'}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="bg-blue-600 rounded-[2rem] p-6 text-white shadow-lg relative overflow-hidden">
            <h4 className="font-black uppercase tracking-tight text-lg mb-2 relative z-10">Eligibility Check?</h4>
            <p className="text-blue-100 text-sm font-medium relative z-10">Most schemes require PM-Kisan ID, Aadhaar, and updated land record (Khatauni).</p>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SchemesView;
