import React from 'react';

export default function ProgressBar({ current, total, label }) {
  const percentage = Math.min((current / total) * 100, 100);

  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 mb-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-white font-medium">{label}</h3>
        <span className="text-white/60 text-sm">{current.toLocaleString()} / {total.toLocaleString()}</span>
      </div>
      
      <div className="w-full bg-white/10 rounded-full h-3 mb-2 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-cyan-400 to-green-400 transition-all duration-1000 ease-out rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      
      <div className="text-right">
        <span className="text-white/80 text-sm font-medium">{percentage.toFixed(1)}% Complete</span>
      </div>
    </div>
  );
}