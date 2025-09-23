import React from 'react';
import { EnvironmentCardProps } from '../types';

const EnvironmentCard: React.FC<EnvironmentCardProps> = ({ environment, onClick }) => {
  return (
    <div 
      className="card-hover rounded-xl p-6 cursor-pointer group"
      onClick={() => onClick(environment)}
    >
      <div className="relative overflow-hidden rounded-lg mb-4">
        <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center">
          <div className="text-6xl opacity-50">🏢</div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
        {environment.name}
      </h3>
      
      <p className="text-gray-400 text-sm mb-4 line-clamp-3">
        {environment.description}
      </p>
      
      <div className="flex items-center justify-between">
        <span className="text-cyan-400 text-sm font-medium">
          Explorar em VR
        </span>
        <div className="w-8 h-8 bg-cyan-400/20 rounded-full flex items-center justify-center group-hover:bg-cyan-400/40 transition-colors">
          <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
      
      <div className="mt-4 flex items-center space-x-2">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <span className="text-xs text-green-400">Compatível com Meta Quest 3</span>
      </div>
    </div>
  );
};

export default EnvironmentCard;

