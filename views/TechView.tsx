
import React from 'react';
import { TECH_ARTICLES } from '../constants';

const TechView: React.FC = () => {
  return (
    <div className="p-4 space-y-6 pb-24">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-bold text-gray-800">Latest Technology</h2>
        <p className="text-sm text-gray-500 font-medium">Modern solutions for higher yields</p>
      </div>

      <div className="space-y-4">
        {TECH_ARTICLES.map((article) => (
          <div key={article.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4">
            <img src={article.image} alt={article.title} className="w-full md:w-48 h-48 object-cover" />
            <div className="p-4 flex flex-col justify-center">
              <span className="text-[10px] font-black bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full w-fit mb-2">
                {article.category}
              </span>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{article.title}</h3>
              <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                {article.excerpt}
              </p>
              <button className="text-indigo-600 text-sm font-bold mt-4 flex items-center gap-1">
                Read Full Article
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechView;
