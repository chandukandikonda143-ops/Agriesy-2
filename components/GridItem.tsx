
import React from 'react';

interface GridItemProps {
  icon: React.ReactNode;
  label: string;
  color?: string;
  onClick?: () => void;
}

const GridItem: React.FC<GridItemProps> = ({ icon, label, color = "bg-gray-50 text-indigo-600", onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="bg-white rounded-[2rem] p-5 shadow-sm border border-gray-50 flex flex-col items-center justify-center gap-3 active:scale-95 transition-all duration-150"
    >
      <div className={`${color} p-4 rounded-full`}>
        {React.cloneElement(icon as React.ReactElement, { className: "w-7 h-7" })}
      </div>
      <span className="text-[10px] font-black text-slate-700 tracking-tight text-center leading-tight w-full px-1">
        {label}
      </span>
    </button>
  );
};

export default GridItem;
