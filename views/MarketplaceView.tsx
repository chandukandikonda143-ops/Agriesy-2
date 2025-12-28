
import React from 'react';
import { FERTILIZERS } from '../constants';

const MarketplaceView: React.FC = () => {
  return (
    <div className="p-4 space-y-6 pb-24">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Fertilizer Booker</h2>
        <span className="text-sm bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full font-bold">4 Products</span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {FERTILIZERS.map((item) => (
          <div key={item.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <img src={item.image} alt={item.name} className="w-full h-32 object-cover" />
            <div className="p-4">
              <div className="text-[10px] font-bold text-indigo-600 uppercase mb-1">{item.type}</div>
              <h3 className="font-bold text-gray-800 text-sm mb-2">{item.name}</h3>
              <div className="flex items-center justify-between">
                <span className="text-lg font-black text-gray-900">₹{item.price}</span>
                <button className="bg-indigo-600 text-white p-2 rounded-xl active:scale-90 transition-transform">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-orange-50 rounded-3xl p-6 border border-orange-100">
        <h4 className="font-bold text-orange-800 flex items-center gap-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
          Subsidized Fertilizer Policy
        </h4>
        <p className="text-sm text-orange-700 mt-2 leading-relaxed">
          Government subsidies are automatically applied for registered farmers with valid PM-Kisan ID.
        </p>
      </div>
    </div>
  );
};

export default MarketplaceView;
