
import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ASSETS } from '../constants';
import { Category } from '../types';

const Marketplace: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const searchQuery = searchParams.get('q') || '';
  const selectedCategory = (searchParams.get('category') as Category) || 'All Assets';

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(25);
  const [sortBy, setSortBy] = useState('Más Populares');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  const sortOptions = ['Más Populares', 'Más Recientes', 'Precio: Bajo a Alto', 'Precio: Alto a Bajo'];

  const categories: { name: Category; label: string; count: number; icon: string }[] = [
    { name: 'All Assets', label: 'Todo', count: ASSETS.length, icon: 'grid_view' },
    { name: 'Widgets', label: 'Widgets', count: ASSETS.filter(a => a.category === 'Widgets').length, icon: 'widgets' },
    { name: 'Intros', label: 'Intros', count: ASSETS.filter(a => a.category === 'Intros').length, icon: 'movie' },
    { name: 'Outros', label: 'Outros', count: ASSETS.filter(a => a.category === 'Outros').length, icon: 'logout' },
    { name: 'Scripts', label: 'Scripts', count: ASSETS.filter(a => a.category === 'Scripts').length, icon: 'terminal' },
    { name: 'Tutorials', label: 'Tutoriales', count: ASSETS.filter(a => a.category === 'Tutorials').length, icon: 'school' },
    { name: 'Panels', label: 'Paneles', count: ASSETS.filter(a => a.category === 'Panels').length, icon: 'dashboard' },
  ];

  const handleCategoryChange = (category: Category) => {
      const newParams = new URLSearchParams(searchParams);
      if (category === 'All Assets') {
          newParams.delete('category');
      } else {
          newParams.set('category', category);
      }
      setSearchParams(newParams);
      setCurrentPage(1); // Reset to first page on category change
  };

  const filteredAssets = ASSETS.filter(asset => {
    // Search
    const matchesSearch = asset.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         asset.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Category
    const matchesCategory = selectedCategory === 'All Assets' || asset.category === selectedCategory;

    // Price
    const assetPrice = asset.price === 'Free' ? 0 : asset.price;
    const matchesPrice = assetPrice >= minPrice && (maxPrice === 25 ? true : assetPrice <= maxPrice);

    return matchesSearch && matchesCategory && matchesPrice;
  }).sort((a, b) => {
    if (sortBy === 'Más Recientes') {
      return parseInt(b.id) - parseInt(a.id);
    }
    if (sortBy === 'Precio: Bajo a Alto') {
      const priceA = a.price === 'Free' ? 0 : a.price;
      const priceB = b.price === 'Free' ? 0 : b.price;
      return priceA - priceB;
    }
    if (sortBy === 'Precio: Alto a Bajo') {
      const priceA = a.price === 'Free' ? 0 : a.price;
      const priceB = b.price === 'Free' ? 0 : b.price;
      return priceB - priceA;
    }
    return parseInt(a.id) - parseInt(b.id);
  });

  const totalPages = Math.ceil(filteredAssets.length / ITEMS_PER_PAGE);
  const paginatedAssets = filteredAssets.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row min-h-screen">
      {/* Sidebar Filters */}
      <aside className="w-full lg:w-72 lg:border-r border-white/5 p-6 lg:sticky lg:top-16 h-fit max-h-screen overflow-y-auto custom-scrollbar">
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-6">Categorías</h3>
            <div className="flex flex-col gap-1.5">
              {categories.map((cat) => (
                <button 
                  key={cat.name} 
                  onClick={() => handleCategoryChange(cat.name)}
                  className={`group flex items-center justify-between px-3 py-2.5 rounded-lg transition-all ${selectedCategory === cat.name ? 'bg-primary/20 text-white border border-primary/20' : 'hover:bg-surface-accent/40 text-slate-400'}`}
                >
                  <span className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-lg leading-none">{cat.icon}</span>
                    <span className="text-sm font-bold">{cat.label}</span>
                  </span>
                  <span className="text-[10px] opacity-40 font-bold">{cat.count}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-6">Rango de Precio</h3>
            <div className="px-2">
              <div className="flex flex-col gap-4">
                 <div className="flex items-center justify-between gap-4">
                    <div className="bg-surface-accent/40 rounded-lg p-2 flex-1">
                      <label className="text-[10px] text-slate-500 font-bold uppercase block mb-1">Min</label>
                      <input 
                        type="number" 
                        min="0" 
                        max="25"
                        value={minPrice} 
                        onChange={(e) => setMinPrice(Number(e.target.value))}
                        className="w-full bg-transparent border-none p-0 text-sm font-bold text-white focus:ring-0"
                      />
                    </div>
                    <div className="bg-surface-accent/40 rounded-lg p-2 flex-1">
                      <label className="text-[10px] text-slate-500 font-bold uppercase block mb-1">Max</label>
                      <input 
                        type="number" 
                        min="0" 
                        max="25"
                        value={maxPrice} 
                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                        className="w-full bg-transparent border-none p-0 text-sm font-bold text-white focus:ring-0"
                      />
                    </div>
                 </div>
                 <input 
                    type="range" 
                    min="0" 
                    max="25" 
                    value={maxPrice} 
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full h-1.5 bg-surface-accent rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:rounded-full"
                 />
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Product Feed */}
      <section className="flex-1 p-6 lg:p-10">
        <div className="mb-8 flex justify-end relative z-50">
          <div className="relative">
            <button 
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-2 px-4 backdrop-blur-md hover:bg-white/10 hover:border-primary/50 transition-all group"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-500 group-hover:text-slate-400">Ordenar por</span>
              <span className="text-[11px] font-bold text-white flex items-center gap-2">
                {sortBy}
                <span className={`material-symbols-outlined text-sm transition-transform duration-300 ${isSortOpen ? 'rotate-180 text-primary' : 'text-slate-500'}`}>expand_more</span>
              </span>
            </button>

            {isSortOpen && (
              <>
                <div 
                  className="fixed inset-0 z-[-1]" 
                  onClick={() => setIsSortOpen(false)}
                ></div>
                <div className="absolute top-full right-0 mt-2 w-48 bg-surface-dark/95 border border-white/10 rounded-xl shadow-2xl backdrop-blur-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="p-1.5 flex flex-col">
                    {sortOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setSortBy(option);
                          setIsSortOpen(false);
                        }}
                        className={`text-left px-3 py-2 rounded-lg text-xs font-bold transition-all ${sortBy === option ? 'bg-primary text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {paginatedAssets.map((asset) => (
            <article 
              key={asset.id} 
              className="group flex flex-col bg-surface-accent/20 rounded-2xl overflow-hidden border border-white/5 hover:border-primary/40 hover:bg-surface-accent/30 transition-all duration-500 cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-primary/5"
              onClick={() => navigate(`/product/${asset.id}`)}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" src={asset.image} alt={asset.title} loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent opacity-80"></div>
                
                <div className="absolute top-4 left-4 px-2.5 py-1 rounded bg-surface-dark/90 text-white backdrop-blur-md text-[10px] font-black uppercase tracking-widest flex items-center gap-2 border border-white/10">
                  <span className="material-symbols-outlined text-xs leading-none text-primary">
                    {asset.category === 'Widgets' ? 'widgets' : asset.category === 'Intros' ? 'movie' : asset.category === 'Scripts' ? 'terminal' : asset.category === 'Outros' ? 'logout' : asset.category === 'Panels' ? 'dashboard' : 'school'}
                  </span>
                  {asset.category === 'Tutorials' ? 'Tutoriales' : asset.category === 'Panels' ? 'Paneles' : asset.category}
                </div>

                {asset.badge && (
                  <div className={`absolute top-4 right-4 px-2.5 py-1 rounded backdrop-blur-md text-[10px] font-black uppercase tracking-widest border border-white/10 ${asset.badge === 'Sale' ? 'bg-rose-600/90' : asset.badge === 'Free' ? 'bg-emerald-600/90' : 'bg-primary/90'}`}>
                    {asset.badge === 'Bestseller' ? 'Más Vendido' : asset.badge}
                  </div>
                )}
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="size-14 rounded-full bg-white text-primary flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-300">
                    <span className="material-symbols-outlined text-3xl font-bold">visibility</span>
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors leading-tight">{asset.title}</h3>
                  <div className="flex flex-col items-end">
                    <span className="text-2xl font-black text-primary leading-none">
                      {typeof asset.price === 'number' ? `$${asset.price}` : asset.price}
                    </span>
                    {asset.oldPrice && <span className="text-[10px] line-through text-slate-600 font-bold mt-1">${asset.oldPrice}</span>}
                  </div>
                </div>
                
                <p className="text-sm text-slate-500 line-clamp-2 mb-6 font-medium leading-relaxed">{asset.description}</p>
                
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex gap-2">
                    {asset.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 rounded bg-surface-accent/60 text-[9px] font-black uppercase tracking-widest text-slate-400 border border-white/5">{tag}</span>
                    ))}
                  </div>
                  <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-[10px] font-black uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined text-sm font-bold">visibility</span>
                    Ver Detalle
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredAssets.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <span className="material-symbols-outlined text-6xl text-slate-700 mb-4 font-light">search_off</span>
            <h3 className="text-xl font-bold text-slate-400 mb-2">No se encontraron productos</h3>
            <p className="text-slate-500 text-sm max-w-xs">Intenta ajustar tu búsqueda o filtros para encontrar lo que buscas.</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-20 flex items-center justify-center gap-3">
            <button 
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              className={`size-11 flex items-center justify-center rounded-xl transition-all shadow-sm ${currentPage === 1 ? 'bg-surface-accent/20 text-slate-700 cursor-not-allowed' : 'bg-surface-accent/40 text-slate-400 hover:text-white hover:bg-primary'}`}
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
              <button 
                key={p} 
                onClick={() => setCurrentPage(p)}
                className={`size-11 flex items-center justify-center rounded-xl font-black text-sm transition-all shadow-sm ${p === currentPage ? 'bg-primary text-white scale-110' : 'bg-surface-accent/40 text-slate-400 hover:bg-surface-accent'}`}
              >
                {p}
              </button>
            ))}

            <button 
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              className={`size-11 flex items-center justify-center rounded-xl transition-all shadow-sm ${currentPage === totalPages ? 'bg-surface-accent/20 text-slate-700 cursor-not-allowed' : 'bg-surface-accent/40 text-slate-400 hover:text-white hover:bg-primary'}`}
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Marketplace;