import React, { useEffect, useState } from 'react';
import { Flavor, FlavorRating } from '../types';
import { FLAVORS } from '../constants';

interface InfoPanelProps {
  flavor: Flavor | null;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  ratings: Record<string, number>;
  onRate: (id: string, rating: number) => void;
  compareList: string[];
  onToggleCompare: (id: string) => void;
  isCompareMode: boolean;
  onSetCompareMode: (v: boolean) => void;
}

const UFRSBar = ({ label, value, color = "bg-neo-black", justification }: { label: string, value: number, color?: string, justification?: string }) => (
    <div className="mb-4 group relative">
        <div className="flex justify-between text-xs font-black uppercase mb-1">
            <span>{label}</span>
            <span>{value}/100</span>
        </div>
        <div className="h-4 bg-neo-white border-2 border-black overflow-hidden relative" role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100} aria-label={`${label} intensity`}>
            <div className={`h-full ${color} border-r-2 border-black transition-all duration-1000 ease-out`} style={{ width: `${value}%` }}></div>
        </div>
        {justification && (
            <div className="hidden group-hover:block absolute z-10 bottom-full left-0 right-0 bg-neo-black text-white text-[10px] p-2 mb-2 italic">
                {justification}
            </div>
        )}
    </div>
);

const ScoreCard = ({ title, score, children }: { title: string, score: number, children?: React.ReactNode }) => (
    <div className="bg-neo-white neo-border p-4 neo-shadow h-full flex flex-col">
        <div className="flex justify-between items-center mb-4 border-b-2 border-black pb-2">
            <h4 className="font-black uppercase text-sm">{title}</h4>
            <span className="font-black text-xl bg-neo-black text-white px-2 py-0.5 transform -rotate-2">{score}</span>
        </div>
        <div className="flex-1">
            {children}
        </div>
    </div>
);

export const InfoPanel: React.FC<InfoPanelProps> = ({ 
    flavor,
    favorites, onToggleFavorite,
    ratings, onRate,
    compareList, onToggleCompare, isCompareMode, onSetCompareMode
}) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayFlavor, setDisplayFlavor] = useState<Flavor | null>(null);

  useEffect(() => {
    if (flavor?.id !== displayFlavor?.id) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setDisplayFlavor(flavor);
        setIsTransitioning(false);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [flavor, displayFlavor]);

  // Comparison View
  if (isCompareMode && compareList.length > 0) {
      const compareFlavors = compareList.map(id => FLAVORS.find(f => f.id === id)).filter(Boolean) as Flavor[];
      return (
        <section className="h-full bg-neo-cyan bg-dots p-6 lg:p-10 overflow-y-auto" aria-labelledby="compare-heading">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10 bg-neo-white neo-border p-6 neo-shadow-lg animate-fade-in-up">
                <div>
                    <h2 id="compare-heading" className="text-4xl font-display font-black uppercase italic leading-none">UFRS Comparison Matrix</h2>
                    <p className="text-sm font-bold uppercase tracking-widest mt-2 underline">Unified Flavor Rating Schema v3.0</p>
                </div>
                <button 
                  onClick={() => onSetCompareMode(false)}
                  className="bg-neo-pink px-8 py-3 neo-border neo-shadow font-black uppercase text-lg hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neo-lg transition-all"
                >
                  Exit Analysis
                </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {compareFlavors.map((f, i) => {
                    const ufrs = f.ufrs!;
                    return (
                        <div key={f.id} className="bg-neo-white neo-border p-6 neo-shadow-lg animate-fade-in-up flex flex-col gap-6" style={{ animationDelay: `${i * 100}ms` }}>
                             <div>
                                <h3 className="text-2xl font-black font-display uppercase italic mb-1 underline decoration-neo-pink decoration-4">{f.name}</h3>
                                <div className="flex justify-between items-center mt-2">
                                    <span className="text-xs font-bold uppercase opacity-60 tracking-tighter">{f.model}</span>
                                    <span className="bg-neo-black text-white text-xs font-black px-2 py-1">Score: {ufrs.overall_score}</span>
                                </div>
                             </div>

                             <div className="space-y-2 flex-1">
                                <UFRSBar label="Fidelity" value={ufrs.domain_breakdown.flavor_fidelity} color="bg-neo-blue" />
                                <UFRSBar label="Sensory" value={ufrs.domain_breakdown.core_sensory_profile} color="bg-neo-pink" />
                                <UFRSBar label="Balance" value={ufrs.ratings.balance} />
                                <UFRSBar label="Sweetness" value={ufrs.ratings.sweetness} color="bg-neo-yellow" />
                                <UFRSBar label="Cooling" value={ufrs.ratings.mentholation} color="bg-neo-cyan" />
                             </div>
                        </div>
                    );
                })}
            </div>
        </section>
      );
  }

  // Landing State
  if (!flavor && !displayFlavor) {
    return (
      <section className="h-full bg-neo-yellow bg-dots flex items-center justify-center p-8">
        <div className="bg-neo-white neo-border p-12 neo-shadow-lg max-w-xl text-center animate-fade-in-up">
            <div className="w-24 h-24 mx-auto mb-8 bg-neo-pink neo-border neo-shadow flex items-center justify-center animate-bounce-slow" aria-hidden="true">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            </div>
            <h2 className="text-5xl font-display font-black uppercase italic mb-4">Select Flavor</h2>
            <p className="text-xl font-bold leading-none mb-8">Access the UFRS v3.0 dataset to start the breakdown.</p>
            {compareList.length > 1 && (
                 <button onClick={() => onSetCompareMode(true)} className="bg-neo-cyan px-10 py-4 neo-border neo-shadow font-black uppercase text-xl neo-btn-hover neo-btn-active">
                     Analyze Matrix ({compareList.length})
                 </button>
            )}
        </div>
      </section>
    );
  }

  const activeFlavor = displayFlavor || flavor;
  if (!activeFlavor) return null;

  const ufrs = activeFlavor.ufrs!;
  const isFavorite = favorites.includes(activeFlavor.id);
  const isInCompare = compareList.includes(activeFlavor.id);
  const userRating = ratings[activeFlavor.id] || 0;

  return (
    <div className={`h-full bg-neo-white overflow-y-auto p-6 lg:p-12 transition-all duration-300 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        <div className="max-w-6xl mx-auto space-y-8">
            
            {/* Header / Actions */}
            <div className="flex justify-between items-start">
                <div>
                     <div className="inline-block bg-neo-black text-white px-2 py-1 font-black uppercase text-xs mb-2 transform -rotate-1">UFRS v3.0 Certified</div>
                </div>
                <div className="flex gap-4">
                    <button 
                    onClick={() => onToggleCompare(activeFlavor.id)} 
                    className={`p-4 neo-border neo-shadow transition-all ${isInCompare ? 'bg-neo-cyan' : 'bg-neo-white hover:bg-neo-cyan/20'}`}
                    aria-label={isInCompare ? "Remove from comparison matrix" : "Add to comparison matrix"}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                    </button>
                    <button 
                    onClick={() => onToggleFavorite(activeFlavor.id)} 
                    className={`p-4 neo-border neo-shadow transition-all ${isFavorite ? 'bg-neo-pink' : 'bg-neo-white hover:bg-neo-pink/20'}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${isFavorite ? 'fill-current' : 'fill-none'}`} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </button>
                </div>
            </div>

            <header className="bg-neo-yellow neo-border p-8 lg:p-12 neo-shadow-lg relative overflow-hidden group">
                <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-dots opacity-20 pointer-events-none" />
                
                <div className="relative z-10">
                    <div className="flex flex-col md:flex-row gap-6 md:items-end mb-4">
                        <h1 className="text-5xl md:text-7xl font-display font-black uppercase italic leading-[0.85] flex-1">
                            {activeFlavor.name}
                        </h1>
                        <div className="flex flex-col items-center justify-center p-4 bg-neo-black text-white neo-border transform rotate-2">
                             <span className="text-xs font-bold uppercase tracking-widest text-neo-yellow">Composite</span>
                             <span className="text-4xl font-black leading-none">{ufrs.overall_score}</span>
                             <span className="text-[10px] uppercase opacity-70">/ 100</span>
                        </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mt-6">
                        <span className="bg-neo-white px-4 py-1 font-black uppercase text-sm border-2 border-black neo-shadow-sm">{activeFlavor.model}</span>
                        <span className={`px-4 py-1 font-black uppercase text-sm border-2 border-black neo-shadow-sm bg-neo-cyan`}>{activeFlavor.category}</span>
                        {activeFlavor.tags.map(t => (
                            <span key={t} className="bg-white/50 px-2 py-1 font-bold uppercase text-xs border border-black">{t}</span>
                        ))}
                    </div>
                </div>
            </header>

            {/* UFRS Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {/* Fidelity */}
                 <ScoreCard title="Flavor Fidelity" score={ufrs.domain_breakdown.flavor_fidelity}>
                     <UFRSBar label="Accuracy" value={ufrs.ratings.accuracy} color="bg-neo-blue" justification={ufrs.justification.accuracy} />
                     <UFRSBar label="Balance" value={ufrs.ratings.balance} color="bg-neo-blue" justification={ufrs.justification.balance} />
                     <UFRSBar label="Complexity" value={ufrs.ratings.complexity} color="bg-neo-blue" justification={ufrs.justification.complexity} />
                 </ScoreCard>

                 {/* Core Profile */}
                 <ScoreCard title="Core Sensory" score={ufrs.domain_breakdown.core_sensory_profile}>
                     <UFRSBar label="Intensity" value={ufrs.ratings.intensity} color="bg-neo-pink" justification={ufrs.justification.intensity} />
                     <UFRSBar label="Sweetness" value={ufrs.ratings.sweetness} color="bg-neo-pink" justification={ufrs.justification.sweetness} />
                     <UFRSBar label="Aftertaste" value={ufrs.ratings.aftertaste} color="bg-neo-pink" justification={ufrs.justification.aftertaste} />
                 </ScoreCard>

                 {/* Modifiers */}
                 <ScoreCard title="Modifiers" score={ufrs.domain_breakdown.secondary_modifiers}>
                     <UFRSBar label="Menthol" value={ufrs.ratings.mentholation} color="bg-neo-cyan" justification={ufrs.justification.mentholation} />
                     <UFRSBar label="Tartness" value={ufrs.ratings.tartness} color="bg-neo-cyan" justification={ufrs.justification.tartness} />
                     <UFRSBar label="Warmth" value={ufrs.ratings.warmth} color="bg-neo-cyan" justification={ufrs.justification.warmth} />
                 </ScoreCard>

                 {/* Meta */}
                 <div className="flex flex-col gap-6">
                    <ScoreCard title="Practicality" score={ufrs.domain_breakdown.practicality}>
                        <UFRSBar label="Cleanliness" value={ufrs.ratings.cleanliness} color="bg-neo-green" justification={ufrs.justification.cleanliness} />
                    </ScoreCard>
                    
                    <div className="bg-neo-black text-white neo-border p-4 neo-shadow flex-1">
                        <span className="block text-xs font-black uppercase mb-4 tracking-widest text-neo-yellow">User Rating</span>
                        <div className="flex justify-between gap-1">
                            {[1, 2, 3, 4, 5].map(star => (
                                <button 
                                key={star} 
                                onClick={() => onRate(activeFlavor.id, star)} 
                                className={`transition-transform hover:scale-110 ${star <= userRating ? 'text-neo-pink' : 'text-gray-600'}`}
                                >
                                    <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                                </button>
                            ))}
                        </div>
                    </div>
                 </div>
            </div>

            {/* Content Body */}
            <div className="grid md:grid-cols-3 gap-8">
                <section className="md:col-span-2 bg-neo-white neo-border p-8 neo-shadow-lg">
                    <h3 className="text-2xl font-black uppercase mb-6 italic underline decoration-neo-pink decoration-4">Experience Protocol</h3>
                    <p className="text-lg leading-relaxed font-medium">{activeFlavor.experience}</p>
                    
                    <div className="mt-8">
                        <h4 className="font-black uppercase text-sm mb-4">Tasting Notes</h4>
                        <div className="flex flex-wrap gap-3">
                            {activeFlavor.tasting_notes.map((note, idx) => (
                                <span key={idx} className="bg-neo-yellow neo-border px-3 py-2 font-black uppercase text-xs shadow-neo-sm">
                                    {note}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                <aside className="bg-neo-green neo-border p-8 neo-shadow flex flex-col justify-center">
                    <span className="font-black uppercase text-xs mb-2">Primary Essence</span>
                    <p className="text-3xl font-black italic leading-none mb-6">{activeFlavor.essence}</p>
                    <div className="h-1 w-full bg-black mb-6" />
                    <p className="font-bold text-sm italic">"{activeFlavor.summary}"</p>
                </aside>
            </div>

        </div>
    </div>
  );
};