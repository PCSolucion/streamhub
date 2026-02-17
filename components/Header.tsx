
import React from 'react';
import { View } from '../types';

interface HeaderProps {
  onNavigate: (view: View) => void;
  currentView: View;
  cartCount: number;
  onSearch: (query: string) => void;
  searchQuery: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentView, cartCount, onSearch, searchQuery }) => {
  return (
    <header className="glass-header sticky top-0 z-50 w-full border-b border-white/10 px-4 lg:px-10 py-3 transition-all">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 text-primary cursor-pointer" onClick={() => onNavigate('marketplace')}>
          <div className="size-9 flex items-center justify-center bg-primary/10 rounded-lg shadow-lg shadow-primary/5">
            <span className="material-symbols-outlined text-primary font-bold">rocket_launch</span>
          </div>
          <h1 className="text-xl font-bold leading-tight tracking-tighter hidden sm:block uppercase">
            Stream<span className="text-slate-400">Hub</span>
          </h1>
        </div>

        <div className="flex-1 max-w-xl mx-4">
          <div className="relative flex items-center group">
            <span className="material-symbols-outlined absolute left-3 text-slate-500 group-focus-within:text-primary transition-colors">search</span>
            <input 
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
              className="w-full bg-surface-accent/40 border-none rounded-lg py-2 pl-10 pr-4 text-sm text-white focus:ring-2 focus:ring-primary placeholder:text-slate-500 transition-all" 
              placeholder="Search intros, scripts, widgets..." 
              type="text"
            />
          </div>
        </div>

        <div className="flex items-center gap-4 lg:gap-8">
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => onNavigate('marketplace')}
              className={`text-sm font-bold tracking-wide transition-colors ${currentView === 'marketplace' ? 'text-primary' : 'hover:text-primary text-slate-300'}`}
            >
              Marketplace
            </button>
            <button 
              onClick={() => onNavigate('tutorials')}
              className={`text-sm font-bold tracking-wide transition-colors ${currentView === 'tutorials' ? 'text-primary' : 'hover:text-primary text-slate-300'}`}
            >
              Tutorials
            </button>
            <button 
              onClick={() => onNavigate('marketplace')}
              className="text-sm font-bold tracking-wide text-slate-300 hover:text-primary transition-colors"
            >
              Community
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-lg bg-surface-accent/50 hover:bg-surface-accent text-white transition-all">
              <span className="material-symbols-outlined">shopping_cart</span>
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold shadow-lg">{cartCount}</span>
            </button>
            <button className="hidden sm:flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold tracking-wide hover:brightness-110 active:scale-95 transition-all">
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;