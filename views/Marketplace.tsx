
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
  const [maxPrice, setMaxPrice] = useState(200);
  const [selectedCompat, setSelectedCompat] = useState<string[]>([]);

  // Mapping compatibility labels to tags found in ASSETS
  const compatibilityMap: { [key: string]: string } = {
    'OBS Studio': 'OBS',
    'Python 3.x': 'PY',
    'After Effects': 'AE',
    'DaVinci Resolve': 'DR'
  };

  const categories: { name: Category; label: string; count: number; icon: string }[] = [
    { name: 'All Assets', label: 'Todo', count: ASSETS.length, icon: 'grid_view' },
    { name: 'Widgets', label: 'Widgets', count: ASSETS.filter(a => a.category === 'Widgets').length, icon: 'widgets' },
    { name: 'Intros', label: 'Intros', count: ASSETS.filter(a => a.category === 'Intros').length, icon: 'movie' },
    { name: 'Outros', label: 'Outros', count: ASSETS.filter(a => a.category === 'Outros').length, icon: 'logout' },
    { name: 'Scripts', label: 'Scripts', count: ASSETS.filter(a => a.category === 'Scripts').length, icon: 'terminal' },
    { name: 'Tutorials', label: 'Tutoriales', count: ASSETS.filter(a => a.category === 'Tutorials').length, icon: 'school' },
  ];

  const handleCategoryChange = (category: Category) => {
      const newParams = new URLSearchParams(searchParams);
      if (category === 'All Assets') {
          newParams.delete('category');
      } else {
          newParams.set('category', category);
      }
      setSearchParams(newParams);
  };

  const filteredAssets = ASSETS.filter(asset => {
    // Search
    const matchesSearch = asset.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         asset.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Category
    const matchesCategory = selectedCategory === 'All Assets' || asset.category === selectedCategory;

    // Price
    const assetPrice = asset.price === 'Free' ? 0 : asset.price;
    const matchesPrice = assetPrice >= minPrice && (maxPrice === 200 ? true : assetPrice <= maxPrice);

    // Compatibility
    let matchesCompat = true;
    if (selectedCompat.length > 0) {
      const requiredTags = selectedCompat.map(c => compatibilityMap[c]).filter(Boolean);
      if (requiredTags.length > 0) {
        matchesCompat = asset.tags.some(tag => requiredTags.includes(tag));
      }
    }

    return matchesSearch && matchesCategory && matchesPrice && matchesCompat;
  });

  const toggleCompat = (comp: string) => {
    setSelectedCompat(prev => 
      prev.includes(comp) ? prev.filter(c => c !== comp) : [...prev, comp]
    );
  };

  const handleResetFilters = () => {
    setSearchParams({}); // Clear all params including query and category
    setMinPrice(0);
    setMaxPrice(200);
    setSelectedCompat([]);
  };

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
                        max="200"
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
                        max="200"
                        value={maxPrice} 
                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                        className="w-full bg-transparent border-none p-0 text-sm font-bold text-white focus:ring-0"
                      />
                    </div>
                 </div>
                 <input 
                    type="range" 
                    min="0" 
                    max="200" 
                    value={maxPrice} 
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full h-1.5 bg-surface-accent rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:rounded-full"
                 />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-6">Compatibilidad</h3>
            <div className="flex flex-col gap-4">
              {['OBS Studio', 'Python 3.x', 'After Effects', 'DaVinci Resolve'].map((comp) => (
                <label key={comp} className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    checked={selectedCompat.includes(comp)}
                    onChange={() => toggleCompat(comp)}
                    className="form-checkbox bg-surface-accent border-none rounded text-primary focus:ring-primary focus:ring-offset-bg-dark transition-all" 
                    type="checkbox"
                  />
                  <span className="text-sm font-medium text-slate-400 group-hover:text-white transition-colors">{comp}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/5">
            <button 
              onClick={handleResetFilters}
              className="w-full py-3 flex items-center justify-center gap-2 rounded-xl bg-surface-accent/60 text-xs font-black uppercase tracking-widest hover:bg-surface-accent transition-all active:scale-95 text-slate-300"
            >
              <span className="material-symbols-outlined text-sm">refresh</span> Restablecer Filtros
            </button>
          </div>
        </div>
      </aside>

      {/* Product Feed */}
      <section className="flex-1 p-6 lg:p-10">
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tighter mb-3">Tienda de Recursos</h2>
            <p className="text-slate-500 max-w-lg leading-relaxed font-medium">Sitio único para widgets de OBS profesionales, intros, scripts automatizados y tutoriales de streaming.</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs font-black uppercase tracking-widest text-slate-600">Ordenar:</span>
            <select className="bg-surface-accent/60 border-none rounded-lg py-2.5 pl-4 pr-10 text-sm font-bold focus:ring-primary focus:ring-1 cursor-pointer transition-all">
              <option>Más Populares</option>
              <option>Más Recientes</option>
              <option>Precio: Bajo a Alto</option>
              <option>Precio: Alto a Bajo</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredAssets.map((asset) => (
            <div 
              key={asset.id} 
              className="group flex flex-col bg-surface-accent/20 rounded-2xl overflow-hidden border border-white/5 hover:border-primary/40 hover:bg-surface-accent/30 transition-all duration-500 cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-primary/5"
              onClick={() => navigate(`/product/${asset.id}`)}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" src={asset.image} alt={asset.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent opacity-80"></div>
                
                <div className="absolute top-4 left-4 px-2.5 py-1 rounded bg-surface-dark/90 text-white backdrop-blur-md text-[10px] font-black uppercase tracking-widest flex items-center gap-2 border border-white/10">
                  <span className="material-symbols-outlined text-xs leading-none text-primary">
                    {asset.category === 'Widgets' ? 'widgets' : asset.category === 'Intros' ? 'movie' : asset.category === 'Scripts' ? 'terminal' : asset.category === 'Outros' ? 'logout' : 'school'}
                  </span>
                  {asset.category === 'Tutorials' ? 'Tutoriales' : asset.category}
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
                    <span className="material-symbols-outlined text-sm font-bold">{asset.price === 'Free' ? 'download' : 'add_shopping_cart'}</span>
                    {asset.price === 'Free' ? 'Gratis' : 'Añadir'}
                  </button>
                </div>
              </div>
            </div>
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
        <div className="mt-20 flex items-center justify-center gap-3">
          <button className="size-11 flex items-center justify-center rounded-xl bg-surface-accent/40 text-slate-400 hover:text-white hover:bg-primary transition-all shadow-sm">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          {[1, 2, 3].map(p => (
            <button key={p} className={`size-11 flex items-center justify-center rounded-xl font-black text-sm transition-all shadow-sm ${p === 1 ? 'bg-primary text-white scale-110' : 'bg-surface-accent/40 text-slate-400 hover:bg-surface-accent'}`}>{p}</button>
          ))}
          <button className="size-11 flex items-center justify-center rounded-xl bg-surface-accent/40 text-slate-400 hover:text-white hover:bg-primary transition-all shadow-sm">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Marketplace;