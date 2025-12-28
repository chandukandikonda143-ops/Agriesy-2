
import React from 'react';
import { SunIcon } from './Icons';

const WeatherCard: React.FC = () => {
  return (
    <div className="bg-white rounded-[2rem] p-4 shadow-sm flex flex-col justify-between h-full border border-gray-50 overflow-hidden">
      <div className="space-y-0.5">
        <div className="flex items-center gap-1">
          <svg className="w-7 h-7 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z" />
          </svg>
        </div>
        <h2 className="text-3xl font-black text-gray-800 tracking-tighter">32°C</h2>
        <p className="text-gray-400 text-xs font-semibold">Location</p>
      </div>
      
      <button className="text-blue-600 font-bold text-[10px] uppercase tracking-tighter text-left mt-2 border-b-2 border-blue-600 w-fit pb-0.5 active:opacity-70 transition-opacity whitespace-nowrap">
        View 15-Day Report
      </button>
    </div>
  );
};

export default WeatherCard;
