
import React, { useState, useEffect } from 'react';
import { get15DayWeather } from '../services/geminiService';

const WeatherReportView: React.FC = () => {
  const [report, setReport] = useState<{ text: string, sources: any[] }>({ text: '', sources: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = () => {
      navigator.geolocation.getCurrentPosition(async (pos) => {
        const data = await get15DayWeather(pos.coords.latitude, pos.coords.longitude);
        setReport(data);
        setLoading(false);
      }, async () => {
        const data = await get15DayWeather(28.6139, 77.2090); // Default New Delhi
        setReport(data);
        setLoading(false);
      });
    };
    fetchWeather();
  }, []);

  return (
    <div className="p-4 space-y-4 pb-24 animate-in slide-in-from-right duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-blue-100 p-3 rounded-2xl text-blue-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        </div>
        <div>
          <h2 className="text-xl font-black text-slate-800 uppercase tracking-tight">15-Day Report</h2>
          <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Agricultural Forecast</p>
        </div>
      </div>

      {loading ? (
        <div className="py-20 flex flex-col items-center justify-center gap-4">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-blue-600 font-black animate-pulse uppercase tracking-widest text-xs">Analyzing Atmosphere...</p>
        </div>
      ) : (
        <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100">
          <div className="prose prose-sm max-w-none text-slate-700 leading-relaxed font-medium whitespace-pre-wrap">
            {report.text}
          </div>
          
          {report.sources.length > 0 && (
            <div className="mt-8 pt-4 border-t border-slate-50 flex flex-wrap gap-2">
              {report.sources.map((s, i) => (
                <a key={i} href={s.uri} target="_blank" rel="noopener" className="text-[10px] font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                  {s.title || 'Official Source'}
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WeatherReportView;
