
import React, { useState } from 'react';
import { View } from '../types';
import { Link, useNavigate, useLocation } from 'react-router-dom';

interface HeaderProps {
  cartCount: number;
}

const Header: React.FC<HeaderProps> = ({ cartCount }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (value: string) => {
    setSearchValue(value);
    // Optional: Auto-navigate on type or just set state?
    // Let's navigate on enter or just passing query? 
    // For now, let's keep it simple: We might want debounce, but let's just navigate on change for instant feedback like before
    // But updating URL on every keystroke might be noisy. 
    // Let's navigate to marketplace if not there.
    if (location.pathname !== '/') {
        navigate(`/?q=${value}`);
    } else {
        // Update current URL query params without full navigation logic if possible, 
        // but navigate matches the previous behavior roughly.
        // Actually, let's just update the URL.
        navigate(`/?q=${value}`, { replace: true });
    }
  };

  const isActive = (path: string) => location.pathname === path ? 'text-primary' : 'hover:text-primary text-slate-300';

  return (
    <header className="glass-header sticky top-0 z-50 w-full border-b border-white/10 px-4 lg:px-10 py-3 transition-all">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-4 text-primary cursor-pointer">
          <div className="size-9 flex items-center justify-center bg-primary/10 rounded-lg shadow-lg shadow-primary/5">
            <span className="material-symbols-outlined text-primary font-bold">rocket_launch</span>
          </div>
          <h1 className="text-xl font-bold leading-tight tracking-tighter hidden sm:block uppercase">
            Stream<span className="text-slate-400">Hub</span>
          </h1>
        </Link>

        <div className="flex-1 max-w-2xl mx-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500"></div>
            <div className="relative flex items-center bg-surface-accent/20 border border-white/5 rounded-2xl group-focus-within:border-primary/50 group-focus-within:bg-surface-accent/40 transition-all duration-300 backdrop-blur-sm overflow-hidden shadow-2xl">
              <div className="pl-4 h-11 flex items-center justify-center pointer-events-none">
                <span className="material-symbols-outlined text-slate-500 group-focus-within:text-primary transition-colors text-[20px]">search</span>
              </div>
              <input 
                value={searchValue}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full bg-transparent border-none py-2 px-3 text-sm text-white focus:ring-0 placeholder:text-slate-600 font-medium h-11" 
                placeholder="Busca el recurso perfecto para tu stream..." 
                type="text"
              />
              <div className="pr-3 flex items-center gap-2">
                <div className="hidden sm:flex items-center gap-1 border border-white/10 rounded-md px-1.5 py-0.5 bg-white/5 text-[10px] font-black tracking-widest text-slate-500">
                  <span className="material-symbols-outlined text-[10px]">keyboard_command_key</span>
                  K
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 lg:gap-8">
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/5 p-1 rounded-2xl backdrop-blur-sm">
            {[
              { path: '/', label: 'Tienda', icon: 'storefront' },
              { path: '/tutorials', label: 'Tutoriales', icon: 'school' },
            ].map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link 
                  key={item.path}
                  to={item.path}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 group
                    ${active 
                      ? 'bg-primary/20 text-white shadow-[0_0_20px_rgba(19,19,236,0.15)]' 
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'}
                  `}
                >
                  <span className={`material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:scale-110 ${active ? 'text-primary' : 'text-slate-500 group-hover:text-primary/70'}`}>
                    {item.icon}
                  </span>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            {/* Shopping cart removed */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;