
import React from 'react';
import { ASSETS } from '../constants';
import { Asset, Category } from '../types';

interface MarketplaceProps {
  onSelectProduct: (product: Asset) => void;
  searchQuery: string;
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const Marketplace: React.FC<MarketplaceProps> = ({ 
  onSelectProduct, 
  searchQuery, 
  selectedCategory, 
  onCategoryChange 
}) => {
  const categories: { name: Category; count: number; icon: string }[] = [
    { name: 'All Assets', count: ASSETS.length, icon: 'grid_view' },
    { name: 'Widgets', count: ASSETS.filter(a => a.category === 'Widgets').length, icon: 'widgets' },
    { name: 'Intros', count: ASSETS.filter(a => a.category === 'Intros').length, icon: 'movie' },
    { name: 'Outros', count: ASSETS.filter(a => a.category === 'Outros').length, icon: 'logout' },
    { name: 'Scripts', count: ASSETS.filter(a => a.category === 'Scripts').length, icon: 'terminal' },
    { name: 'Tutorials', count: ASSETS.filter(a => a.category === 'Tutorials').length, icon: 'school' },
  ];

  const filteredAssets = ASSETS.filter(asset => {
    const matchesSearch = asset.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         asset.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All Assets' || asset.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row min-h-screen">
      {/* Sidebar Filters */}
      <aside className="w-full lg:w-72 lg:border-r border-white/5 p-6 lg:sticky lg:top-16 h-fit max-h-screen overflow-y-auto custom-scrollbar">
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-6">Categories</h3>
            <div className="flex flex-col gap-1.5">
              {categories.map((cat) => (
                <button 
                  key={cat.name} 
                  onClick={() => onCategoryChange(cat.name)}
                  className={`group flex items-center justify-between px-3 py-2.5 rounded-lg transition-all ${selectedCategory === cat.name ? 'bg-primary/20 text-white border border-primary/20' : 'hover:bg-surface-accent/40 text-slate-400'}`}
                >
                  <span className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-lg leading-none">{cat.icon}</span>
                    <span className="text-sm font-bold">{cat.name}</span>
                  </span>
                  <span className="text-[10px] opacity-40 font-bold">{cat.count}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-6">Price Range</h3>
            <div className="px-2">
              <div className="h-1.5 w-full bg-surface-accent rounded-full relative mb-4">
                <div className="absolute left-0 right-1/4 h-full bg-primary rounded-full"></div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 size-4 bg-white rounded-full shadow-lg border-2 border-primary cursor-pointer ring-4 ring-primary/20 transition-all hover:scale-110"></div>
                <div className="absolute right-1/4 top-1/2 -translate-y-1/2 size-4 bg-white rounded-full shadow-lg border-2 border-primary cursor-pointer ring-4 ring-primary/20 transition-all hover:scale-110"></div>
              </div>
              <div className="flex justify-between text-xs font-bold text-slate-500 tracking-wider">
                <span>$0</span>
                <span>$200+</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-6">Compatibility</h3>
            <div className="flex flex-col gap-4">
              {['OBS Studio', 'Python 3.x', 'After Effects', 'DaVinci Resolve'].map((comp, idx) => (
                <label key={comp} className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    defaultChecked={idx < 2}
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
              onClick={() => { onCategoryChange('All Assets'); }}
              className="w-full py-3 flex items-center justify-center gap-2 rounded-xl bg-surface-accent/60 text-xs font-black uppercase tracking-widest hover:bg-surface-accent transition-all active:scale-95 text-slate-300"
            >
              <span className="material-symbols-outlined text-sm">refresh</span> Reset Filters
            </button>
          </div>
        </div>
      </aside>

      {/* Product Feed */}
      <section className="flex-1 p-6 lg:p-10">
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tighter mb-3">Asset Marketplace</h2>
            <p className="text-slate-500 max-w-lg leading-relaxed font-medium">One-stop shop for professional OBS widgets, motion intros, automated scripts, and deep-dive streaming tutorials.</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs font-black uppercase tracking-widest text-slate-600">Sort by:</span>
            <select className="bg-surface-accent/60 border-none rounded-lg py-2.5 pl-4 pr-10 text-sm font-bold focus:ring-primary focus:ring-1 cursor-pointer transition-all">
              <option>Most Popular</option>
              <option>Newest Release</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredAssets.map((asset) => (
            <div 
              key={asset.id} 
              className="group flex flex-col bg-surface-accent/20 rounded-2xl overflow-hidden border border-white/5 hover:border-primary/40 hover:bg-surface-accent/30 transition-all duration-500 cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-primary/5"
              onClick={() => onSelectProduct(asset)}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" src={asset.image} alt={asset.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent opacity-80"></div>
                
                <div className="absolute top-4 left-4 px-2.5 py-1 rounded bg-surface-dark/90 backdrop-blur-md text-[10px] font-black uppercase tracking-widest flex items-center gap-2 border border-white/10">
                  <span className="material-symbols-outlined text-xs leading-none text-primary">
                    {asset.category === 'Widgets' ? 'widgets' : asset.category === 'Intros' ? 'movie' : asset.category === 'Scripts' ? 'terminal' : asset.category === 'Outros' ? 'logout' : 'school'}
                  </span>
                  {asset.category}
                </div>

                {asset.badge && (
                  <div className={`absolute top-4 right-4 px-2.5 py-1 rounded backdrop-blur-md text-[10px] font-black uppercase tracking-widest border border-white/10 ${asset.badge === 'Sale' ? 'bg-rose-600/90' : asset.badge === 'Free' ? 'bg-emerald-600/90' : 'bg-primary/90'}`}>
                    {asset.badge}
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
                    {asset.price === 'Free' ? 'Get Free' : 'Add to Cart'}
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
            <h3 className="text-xl font-bold text-slate-400 mb-2">No assets found</h3>
            <p className="text-slate-500 text-sm max-w-xs">Try adjusting your search or category filters to find what you're looking for.</p>
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