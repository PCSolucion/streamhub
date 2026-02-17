
import React from 'react';
import { Asset, View } from '../types';

interface ProductDetailProps {
  product: Asset;
  onNavigate: (view: View) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onNavigate }) => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-10">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-10">
        <button onClick={() => onNavigate('marketplace')} className="hover:text-primary transition-colors">Marketplace</button>
        <span className="material-symbols-outlined text-sm font-bold opacity-30">chevron_right</span>
        <button onClick={() => onNavigate('marketplace')} className="hover:text-primary transition-colors">{product.category}</button>
        <span className="material-symbols-outlined text-sm font-bold opacity-30">chevron_right</span>
        <span className="text-white">{product.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Content */}
        <div className="lg:col-span-8 space-y-12">
          <section>
            <div className="flex items-start justify-between gap-6 mb-8 flex-wrap lg:flex-nowrap">
              <div>
                <h1 className="text-5xl lg:text-6xl font-black tracking-tighter mb-6 leading-none">{product.title}</h1>
                <div className="flex flex-wrap gap-3">
                  {product.tags.map(tag => (
                    <span key={tag} className="bg-primary/10 text-primary text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest border border-primary/20 shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-surface-accent/30 backdrop-blur-md p-6 rounded-3xl border border-white/5 text-center min-w-[120px] shadow-xl">
                <p className="text-[9px] text-slate-500 uppercase font-black tracking-[0.25em] mb-3">Rating</p>
                <div className="flex items-center justify-center gap-2 text-primary">
                  <span className="material-symbols-outlined fill-1 text-3xl">star</span>
                  <span className="text-3xl font-black text-white">4.9</span>
                </div>
              </div>
            </div>
            <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-3xl opacity-80">
              {product.description}
            </p>
          </section>

          {/* Code Preview */}
          <section className="rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl group">
            <div className="bg-surface-accent/60 px-6 py-4 flex items-center justify-between border-b border-white/5 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl font-bold">code</span>
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-300">main.py preview</span>
              </div>
              <button className="text-[10px] font-black uppercase tracking-[0.25em] flex items-center gap-2 hover:text-primary transition-all text-slate-500 group-hover:text-slate-300">
                <span className="material-symbols-outlined text-sm">content_copy</span> Copy
              </button>
            </div>
            <div className="bg-[#080816] p-8 font-mono text-sm leading-loose overflow-x-auto custom-scrollbar">
              <pre className="text-slate-400"><code><span className="text-slate-600"># Auto-Scene Switcher Pro v1.2.4</span>
<span className="text-primary">import</span> obsws_python <span className="text-primary">as</span> obs
<span className="text-primary">import</span> time

<span className="text-primary">def</span> <span className="text-secondary">on_event</span>(data):
    <span className="text-primary">if</span> data[<span className="text-emerald-400">'active_window'</span>] == <span className="text-emerald-400">'VALORANT'</span>:
        <span className="text-secondary">switch_scene</span>(<span className="text-emerald-400">'Gameplay'</span>)
    <span className="text-primary">elif</span> data[<span className="text-emerald-400">'idle_time'</span>] &gt; <span className="text-emerald-400">300</span>:
        <span className="text-secondary">switch_scene</span>(<span className="text-emerald-400">'BRB'</span>)

<span className="text-primary">def</span> <span className="text-secondary">switch_scene</span>(scene_name):
    client = obs.ReqClient(host=<span className="text-emerald-400">'localhost'</span>, port=<span className="text-emerald-400">4455</span>)
    client.set_current_program_scene(scene_name)
    {/* Fix: Escaping curly braces to prevent JSX from evaluating scene_name */}
    <span className="text-secondary">print</span>(<span className="text-emerald-400">f"Switched to {'{'}scene_name{'}'}"</span>)

<span className="text-primary">if</span> __name__ == <span className="text-emerald-400">"__main__"</span>:
    <span className="text-secondary">connect_to_obs</span>()
    <span className="text-slate-600"># Start main automation loop</span></code></pre>
            </div>
          </section>

          {/* Tabs */}
          <div className="border-b border-white/5">
            <nav className="flex gap-12">
              {['Documentation', 'Version History', 'Reviews'].map((tab, idx) => (
                <button key={tab} className={`pb-6 text-xs font-black uppercase tracking-[0.2em] transition-all relative ${idx === 0 ? 'text-primary' : 'text-slate-500 hover:text-white'}`}>
                  {tab}
                  {idx === 0 && <div className="absolute bottom-[-1px] left-0 right-0 h-1 bg-primary rounded-full shadow-lg shadow-primary/40"></div>}
                </button>
              ))}
            </nav>
          </div>

          {/* Documentation Content */}
          <article className="prose prose-invert max-w-none">
            <h3 className="text-2xl font-black tracking-tight mb-6">How to Install</h3>
            <p className="text-slate-400 mb-8 font-medium">
              1. Ensure you have <span className="bg-primary/10 px-2 py-0.5 rounded text-primary font-mono font-bold">Python 3.9+</span> installed on your system.<br/>
              2. Install the required dependency: <code className="bg-surface-accent p-1.5 rounded text-secondary">pip install obsws-python</code>.<br/>
              3. Open OBS and go to <span className="italic text-slate-500 font-bold">Tools -&gt; WebSocket Server Settings</span> to enable the server.<br/>
              4. Copy the server password and paste it into the <code className="bg-surface-accent p-1.5 rounded text-emerald-400">config.json</code> file provided in the download.
            </p>
            
            <h3 className="text-2xl font-black tracking-tight mb-6">Available Commands</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-surface-accent/20 border border-white/5 shadow-inner">
                <span className="font-black text-primary block mb-2 uppercase tracking-widest text-sm">!switch [name]</span>
                <p className="text-xs text-slate-500 font-bold leading-relaxed">Forces an immediate scene switch to the specified scene name.</p>
              </div>
              <div className="p-6 rounded-2xl bg-surface-accent/20 border border-white/5 shadow-inner">
                <span className="font-black text-primary block mb-2 uppercase tracking-widest text-sm">!lock</span>
                <p className="text-xs text-slate-500 font-bold leading-relaxed">Prevents the automatic switcher from changing scenes until unlocked.</p>
              </div>
            </div>
          </article>
        </div>

        {/* Sidebar Purchase Card */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-surface-accent/30 backdrop-blur-xl rounded-[2.5rem] border border-white/5 p-8 sticky top-24 shadow-2xl">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-[9px] text-slate-500 font-black uppercase tracking-[0.3em] mb-4">Price</p>
                <h2 className="text-5xl font-black tracking-tighter">
                  {typeof product.price === 'number' ? `$${product.price}` : product.price}
                </h2>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[10px] text-emerald-400 font-black flex items-center gap-2 uppercase tracking-widest mb-1">
                  <span className="material-symbols-outlined text-sm font-bold">verified</span> Verified Seller
                </span>
                <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">Instant Access</span>
              </div>
            </div>

            <button className="w-full bg-primary text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 hover:brightness-110 hover:scale-105 active:scale-95 transition-all mb-4 shadow-2xl shadow-primary/30">
              <span className="material-symbols-outlined text-xl">shopping_bag</span> Purchase Now
            </button>
            <button className="w-full bg-white/5 text-slate-300 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 hover:bg-white/10 active:scale-95 transition-all">
              <span className="material-symbols-outlined text-xl">favorite</span> Add to Wishlist
            </button>

            {/* Technical Requirements */}
            <div className="mt-10 pt-10 border-t border-white/5">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-8">Requirements</h4>
              <div className="space-y-8">
                {[
                  { icon: 'terminal', label: 'Language', value: 'Python 3.9+' },
                  { icon: 'videocam', label: 'Platform', value: 'OBS Studio 28.0+' },
                  { icon: 'settings_ethernet', label: 'API', value: 'Websocket 5.x' },
                ].map(req => (
                  <div key={req.label} className="flex items-center gap-4">
                    <div className="size-11 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shadow-inner">
                      <span className="material-symbols-outlined text-xl">{req.icon}</span>
                    </div>
                    <div>
                      <p className="text-[9px] text-slate-600 font-black uppercase tracking-widest mb-1">{req.label}</p>
                      <p className="text-sm font-black text-slate-200 tracking-tight">{req.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Author */}
            <div className="mt-10 pt-10 border-t border-white/5">
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-2xl bg-surface-dark p-1 border border-white/10 overflow-hidden shadow-lg">
                  <img alt="Author" className="w-full h-full object-cover rounded-xl" src="https://picsum.photos/100/100?random=1" />
                </div>
                <div>
                  <p className="text-[9px] text-slate-600 font-black uppercase tracking-widest mb-1">Created by</p>
                  <a className="font-black hover:text-primary transition-all text-sm tracking-tight" href="#">PixelLogic Dev</a>
                </div>
                <button className="ml-auto text-primary hover:bg-primary/10 size-10 rounded-xl transition-all flex items-center justify-center border border-primary/10">
                  <span className="material-symbols-outlined text-xl">mail</span>
                </button>
              </div>
            </div>
          </div>

          {/* Help Widget */}
          <div className="bg-primary/5 rounded-[2.5rem] border border-primary/20 p-8 flex items-start gap-5 shadow-2xl">
            <span className="material-symbols-outlined text-primary text-3xl font-bold">help_outline</span>
            <div>
              <h4 className="text-sm font-black uppercase tracking-widest mb-2 text-white">Need help?</h4>
              <p className="text-xs text-slate-500 font-bold leading-relaxed mb-6 opacity-80">Join our developer Discord for installation support and community scripts.</p>
              <a className="text-xs font-black text-primary flex items-center gap-2 uppercase tracking-widest hover:gap-4 transition-all" href="#">
                Join Community <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;