import React, { useState, useEffect } from 'react';
import { FLAVORS, CATEGORY_COLORS } from './constants';
import { Flavor } from './types';
import { FlavorCard } from './components/FlavorCard';
import { InfoPanel } from './components/InfoPanel';

export default function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [selectedFlavorId, setSelectedFlavorId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState<string[]>(() => {
    try { return JSON.parse(localStorage.getItem('geekflavor_favorites') || '[]'); } catch { return []; }
  });
  const [ratings, setRatings] = useState<Record<string, number>>(() => {
    try { return JSON.parse(localStorage.getItem('geekflavor_ratings') || '{}'); } catch { return {}; }
  });
  const [compareList, setCompareList] = useState<string[]>([]);
  const [isCompareMode, setIsCompareMode] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  useEffect(() => { localStorage.setItem('geekflavor_favorites', JSON.stringify(favorites)); }, [favorites]);
  useEffect(() => { localStorage.setItem('geekflavor_ratings', JSON.stringify(ratings)); }, [ratings]);

  const selectedFlavor = selectedFlavorId ? FLAVORS.find(f => f.id === selectedFlavorId) || null : null;

  const handleFlavorSelect = (flavor: Flavor) => {
    setIsCompareMode(false);
    setSelectedFlavorId(flavor.id);
  };

  const toggleFavorite = (id: string) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]);
  };

  const filteredFlavors = FLAVORS.filter(f => {
    const matchesSearch = f.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(f.category || "Standard");
    return matchesSearch && matchesCategory;
  });

  if (showLanding) {
    return (
      <div 
        className="min-h-screen bg-neo-yellow bg-dots flex flex-col items-center justify-center p-6 lg:p-12 overflow-hidden relative"
        role="main"
      >
        <div className="absolute top-10 right-10 w-64 h-64 bg-neo-pink neo-border neo-shadow-lg rotate-12 animate-spin-slow opacity-20" aria-hidden="true"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-neo-cyan neo-border neo-shadow-lg -rotate-12 opacity-20" aria-hidden="true"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] border-8 border-black pointer-events-none opacity-5" aria-hidden="true"></div>

        <div className="relative z-10 max-w-4xl text-center space-y-10 animate-fade-in-up">
          <div className="bg-neo-white neo-border p-8 lg:p-12 neo-shadow-xl inline-block -rotate-2">
            <h1 className="text-7xl md:text-9xl font-display font-black uppercase italic leading-[0.8] mb-4">
              Geek<br/><span className="text-neo-pink">Flavor</span><br/>Analyzer
            </h1>
          </div>
          
          <div className="bg-neo-black text-white p-6 neo-border neo-shadow-lg rotate-1 transform inline-block max-w-lg">
            <p className="text-2xl font-black uppercase leading-tight italic">
              Instant offline access to every Geek Bar flavor module.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => setShowLanding(false)}
              className="bg-neo-cyan px-12 py-6 neo-border neo-shadow-lg font-black uppercase text-3xl neo-btn-hover neo-btn-active focus:ring-4 focus:ring-black"
              aria-label="Enter the GeekFlavor database"
            >
              Start Analysis
            </button>
          </div>

          <div className="flex gap-4 justify-center" aria-hidden="true">
             <div className="bg-neo-white neo-border p-3 neo-shadow font-black uppercase text-xs italic">47 Pulse X Modules</div>
             <div className="bg-neo-white neo-border p-3 neo-shadow font-black uppercase text-xs italic">37 Pulse 15K Modules</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-neo-yellow bg-dots overflow-hidden relative p-4 lg:p-8" role="application">
      
      {/* Sidebar Wrapper */}
      <aside 
        className="w-full md:w-96 flex flex-col neo-border bg-neo-white neo-shadow-lg z-20 relative mr-0 lg:mr-8 overflow-hidden animate-slide-in-left"
        aria-label="Flavor database sidebar"
      >
        {/* Header */}
        <div className="p-6 border-b-4 border-black bg-neo-yellow flex-shrink-0">
          <h1 className="font-display font-black text-3xl uppercase italic mb-4">Database</h1>
          
          <div className="relative mb-4">
            <label htmlFor="flavor-search" className="sr-only">Search Modules</label>
            <input
              id="flavor-search"
              type="text"
              placeholder="SEARCH MODULES..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-neo-white border-4 border-black text-black p-3 font-black uppercase focus:ring-4 focus:ring-neo-pink placeholder-black/40"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide" role="group" aria-label="Category filters">
             {Object.keys(CATEGORY_COLORS).map(cat => {
               const isActive = selectedCategories.includes(cat);
               return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategories(prev => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat])}
                  aria-pressed={isActive}
                  className={`
                    flex-shrink-0 px-3 py-1.5 border-4 border-black text-[10px] font-black uppercase transition-all flex items-center gap-2
                    ${isActive ? `${CATEGORY_COLORS[cat]} translate-x-0.5 translate-y-0.5 shadow-none` : 'bg-neo-white neo-shadow hover:-translate-x-0.5 hover:-translate-y-0.5'}
                  `}
                >
                  <span className={`w-2 h-2 border-2 border-black ${isActive ? 'bg-black' : 'bg-white'}`}></span>
                  {cat.replace(" Edition", "")}
                </button>
               );
             })}
          </div>
        </div>

        {/* Scrollable List */}
        <nav 
          className="flex-1 overflow-y-auto p-4 scrollbar-hide bg-neo-white"
          aria-label="Flavor list"
        >
          <div className="space-y-4" role="list">
            {filteredFlavors.map(flavor => (
              <div role="listitem" key={flavor.id}>
                <FlavorCard 
                    flavor={flavor} 
                    isSelected={selectedFlavorId === flavor.id}
                    isFavorite={favorites.includes(flavor.id)}
                    onClick={() => handleFlavorSelect(flavor)}
                />
              </div>
            ))}
          </div>
        </nav>
        
        {/* Footer */}
        <div className="p-4 bg-neo-black text-white border-t-4 border-black flex justify-between font-black uppercase text-[10px] italic">
           <span>X-25K: {filteredFlavors.filter(f => f.model.includes('25000')).length}</span>
           <span>P-15K: {filteredFlavors.filter(f => f.model.includes('15000')).length}</span>
        </div>
      </aside>

      {/* Main Panel */}
      <main 
        className={`
          fixed inset-0 lg:relative lg:inset-auto flex-1 bg-neo-white neo-border neo-shadow-lg transition-all duration-500 z-30 
          ${selectedFlavorId || isCompareMode ? 'translate-x-0 opacity-100' : 'translate-x-full lg:translate-x-0 opacity-0 lg:opacity-100'}
          animate-slide-in-right
        `}
        aria-live="polite"
      >
        <button 
          onClick={() => setSelectedFlavorId(null)}
          className="lg:hidden absolute top-4 left-4 z-50 bg-neo-pink px-4 py-2 neo-border neo-shadow font-black uppercase text-xs"
          aria-label="Back to database"
        >
           Return
        </button>

        <InfoPanel 
          flavor={selectedFlavor} 
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          ratings={ratings}
          onRate={(id, r) => setRatings(prev => ({ ...prev, [id]: r }))}
          compareList={compareList}
          onToggleCompare={(id) => setCompareList(prev => prev.includes(id) ? prev.filter(cid => cid !== id) : prev.length < 3 ? [...prev, id] : prev)}
          isCompareMode={isCompareMode}
          onSetCompareMode={setIsCompareMode}
        />
      </main>
    </div>
  );
}
