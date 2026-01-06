import React from 'react';
import { Flavor } from '../types';
import { CATEGORY_COLORS } from '../constants';

interface FlavorCardProps {
  flavor: Flavor;
  isSelected: boolean;
  isFavorite: boolean;
  onClick: () => void;
}

export const FlavorCard: React.FC<FlavorCardProps> = ({ flavor, isSelected, isFavorite, onClick }) => {
  const isPulseX = flavor.model.includes("25000");
  const categoryStyle = CATEGORY_COLORS[flavor.category || "Standard"];

  return (
    <button 
      onClick={onClick}
      aria-current={isSelected ? 'true' : undefined}
      className={`
        relative w-full text-left p-4 neo-border transition-all duration-200 group overflow-hidden
        ${isSelected 
          ? 'bg-neo-yellow translate-x-1 translate-y-1 shadow-none' 
          : 'bg-neo-white neo-shadow hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neo-lg hover:scale-[1.02]'
        }
      `}
    >
      {/* Selected Stripe */}
      {isSelected && (
        <div className="absolute left-0 top-0 bottom-0 w-4 bg-neo-black" aria-hidden="true" />
      )}

      {/* Favorite Icon */}
      <div className={`
        absolute top-2 right-2 z-20 transition-all duration-300 transform
        ${isFavorite ? 'opacity-100 scale-110' : 'opacity-0 scale-0 group-hover:opacity-40 group-hover:scale-90'}
      `}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neo-pink fill-current stroke-black stroke-2" viewBox="0 0 24 24">
              <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
      </div>

      <div className={`relative z-10 ${isSelected ? 'pl-4' : ''}`}>
        <h3 className="font-display font-black text-lg uppercase tracking-tight mb-2 leading-none">
          {flavor.name}
        </h3>
        
        <div className="flex flex-wrap gap-2">
            <span className={`text-[10px] font-black uppercase px-2 py-0.5 border-2 border-black ${isPulseX ? 'bg-neo-pink' : 'bg-neo-cyan'}`}>
                {isPulseX ? "25K" : "15K"}
            </span>
            <span className={`text-[10px] font-black uppercase px-2 py-0.5 border-2 border-black ${categoryStyle}`}>
                {flavor.category?.replace(" Edition", "")}
            </span>
        </div>
      </div>
    </button>
  );
};