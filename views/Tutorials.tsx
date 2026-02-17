
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TUTORIALS } from '../constants';

const Tutorials: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-[1440px] mx-auto w-full px-6 lg:px-20 py-10 flex flex-col min-h-screen">
      {/* Featured Banner */}
      <section className="mb-16 relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary/30 to-secondary/30 border border-white/5 shadow-2xl">
        <div className="flex flex-col lg:flex-row items-stretch">
          <div className="w-full lg:w-1/2 p-10 lg:p-20 z-10 flex flex-col justify-center">
            <span className="inline-block self-start px-4 py-1.5 bg-primary text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-6 shadow-xl shadow-primary/20">Curso Destacado</span>
            <h1 className="text-5xl lg:text-7xl font-black leading-none tracking-tighter mb-6">
              Masterclass de Setup OBS: <br/><span className="text-primary">Guía Definitiva 2024</span>
            </h1>
            <p className="text-slate-300 text-lg lg:text-xl font-medium mb-10 max-w-lg leading-relaxed opacity-80">
              Domina cada configuración, filtro y plugin en este curso completo de 35 minutos para streamers profesionales.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <button className="bg-primary text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 hover:brightness-110 transition-all shadow-2xl shadow-primary/40 flex items-center gap-3 active:scale-95">
                <span className="material-symbols-outlined text-2xl font-bold">play_circle</span>
                Empezar Aprendizaje
              </button>
              <div className="flex items-center gap-3 text-slate-400 font-bold px-4 py-3">
                <span className="material-symbols-outlined text-lg">schedule</span>
                <span className="text-sm tracking-widest uppercase">35 mins</span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-80 lg:h-auto relative group">
            <img 
              alt="Streaming Setup" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDID2ZfUoRoLmNGIdi4zWAipUAaEaTIXBKCxW54Osuqx6iQiYdZepgynOqxvI2mmbHjOYN17h0wALpxdJhP7iBF7O0z6r0feZ7qWkd3-qmJN7ODeg0NcXyEtEctLYeutOP2LQc110gQH8HEUoMIBLj4hakiJRYWlIO6nmLnJeW9rAUe-2F1X2IQL0OvNG0WS4HamzgQJxJ0wkVXx-2rmkOjKex-cfUVilLQA0mEnKi4onaKR1RgwmQ57gf-Dy9gRXhDGI490EOfee91"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-transparent to-transparent lg:opacity-100 opacity-60"></div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
        <div className="flex items-center gap-3 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
          {['Todas las Guías'].map((lvl, idx) => (
            <button 
              key={lvl} 
              className={`px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest whitespace-nowrap transition-all shadow-sm ${idx === 0 ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105' : 'bg-surface-accent/40 text-slate-500 hover:text-white hover:bg-surface-accent'}`}
            >
              {lvl}
            </button>
          ))}
        </div>
        <div className="w-full md:w-80 relative group">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors">search</span>
          <input className="w-full bg-surface-accent/40 border-none rounded-2xl pl-12 pr-4 py-4 text-sm focus:ring-2 focus:ring-primary text-white placeholder:text-slate-600 transition-all" placeholder="Buscar tutoriales..." type="text" />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {TUTORIALS.map((tutorial) => (
          <article 
            key={tutorial.id} 
            className="group cursor-pointer flex flex-col"
            onClick={() => navigate(`/tutorial/${tutorial.id}`)}
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden mb-5 bg-surface-accent border border-white/5 shadow-2xl transition-all duration-500 group-hover:shadow-primary/5 group-hover:border-primary/20">
              <img alt={tutorial.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={tutorial.thumbnail} loading="lazy" />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300 backdrop-blur-[2px]">
                <span className="material-symbols-outlined text-6xl text-white drop-shadow-2xl font-bold">play_circle</span>
              </div>
              <div className="absolute bottom-4 right-4 bg-bg-dark/80 backdrop-blur-md px-3 py-1.5 rounded-xl text-[10px] font-black tracking-widest text-white border border-white/10">
                {tutorial.duration}
              </div>
            </div>
            <h3 className="font-bold text-lg leading-snug group-hover:text-primary transition-colors mb-2 line-clamp-2">{tutorial.title}</h3>
            <div className="flex items-center gap-3 text-slate-500 text-[10px] font-black uppercase tracking-widest mt-auto">
              <span>{tutorial.views} vistas</span>
              <span className="opacity-30">•</span>
              <span>{tutorial.date}</span>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20 flex justify-center">
        <button className="group flex items-center gap-3 bg-surface-accent/40 hover:bg-surface-accent text-slate-300 hover:text-white border border-white/5 px-12 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all active:scale-95 shadow-xl">
          <span className="material-symbols-outlined group-hover:rotate-180 transition-transform duration-500">expand_more</span>
          Cargar Más
        </button>
      </div>
    </div>
  );
};

export default Tutorials;