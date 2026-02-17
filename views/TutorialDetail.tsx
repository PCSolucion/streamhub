
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TUTORIALS } from '../constants';

const TutorialDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const tutorial = TUTORIALS.find(t => t.id === id);

  if (!tutorial) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h2 className="text-4xl font-black text-white mb-4">Tutorial no encontrado</h2>
        <button 
          onClick={() => navigate('/tutorials')} 
          className="bg-primary text-white px-8 py-3 rounded-xl font-bold uppercase tracking-widest"
        >
          Volver a Tutoriales
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-10">
      <button 
        onClick={() => navigate('/tutorials')}
        className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-500 hover:text-primary transition-colors mb-10"
      >
        <span className="material-symbols-outlined text-sm">arrow_back</span> Volver a Tutoriales
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-8">
          {/* Video Player Mockup */}
          <div className="relative aspect-video rounded-[2.5rem] overflow-hidden bg-black border border-white/5 shadow-2xl group">
            <img 
              src={tutorial.thumbnail} 
              alt={tutorial.title} 
              className="w-full h-full object-cover opacity-40 blur-sm"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="size-24 rounded-full bg-primary text-white flex items-center justify-center shadow-2xl shadow-primary/40 hover:scale-110 transition-transform active:scale-95">
                <span className="material-symbols-outlined text-5xl font-bold">play_arrow</span>
              </button>
            </div>
            {/* Controls Mockup */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent flex items-center gap-6">
              <span className="material-symbols-outlined text-white">pause</span>
              <div className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-1/3 shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]"></div>
              </div>
              <span className="text-xs font-bold text-white mono">10:45 / {tutorial.duration}</span>
              <span className="material-symbols-outlined text-white">volume_up</span>
              <span className="material-symbols-outlined text-white">fullscreen</span>
            </div>
          </div>

          <div className="pt-4">
            <h1 className="text-4xl lg:text-5xl font-black tracking-tighter mb-6">{tutorial.title}</h1>
            <div className="flex items-center gap-6 text-slate-500 text-xs font-black uppercase tracking-widest">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">visibility</span> {tutorial.views} vistas
              </span>
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">calendar_today</span> {tutorial.date}
              </span>
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">schedule</span> {tutorial.duration}
              </span>
            </div>
          </div>

          <div className="prose prose-invert max-w-none border-t border-white/5 pt-10">
            <h3 className="text-2xl font-black tracking-tight mb-6">Descripción del Tutorial</h3>
            <p className="text-slate-400 text-lg leading-relaxed font-medium">
              En este tutorial detallado, cubriremos todos los pasos necesarios para dominar "{tutorial.title}". 
              Aprenderás las mejores prácticas, configuraciones recomendadas y trucos de experto para llevar tu stream al siguiente nivel.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 list-none p-0">
              {[
                'Configuración paso a paso',
                'Optimización de recursos',
                'Integración con OBS',
                'Solución de problemas comunes'
              ].map(item => (
                <li key={item} className="flex items-center gap-3 bg-surface-accent/20 p-4 rounded-2xl border border-white/5 font-bold text-sm">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <div className="bg-surface-accent/30 backdrop-blur-xl rounded-[2.5rem] border border-white/5 p-8 sticky top-24 shadow-2xl">
            <h3 className="text-xl font-black tracking-tight mb-6 text-white">Recursos del Tutorial</h3>
            <div className="space-y-4">
              {[
                { name: 'Guía en PDF', icon: 'picture_as_pdf', size: '2.4 MB' },
                { name: 'Scripts de Ejemplo', icon: 'description', size: '156 KB' },
                { name: 'Assets de Video', icon: 'movie', size: '45 MB' }
              ].map(file => (
                <div key={file.name} className="flex items-center justify-between p-4 rounded-2xl bg-surface-dark/40 border border-white/5 group hover:border-primary/40 transition-all cursor-pointer">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-primary">{file.icon}</span>
                    <div>
                      <p className="text-sm font-bold text-white">{file.name}</p>
                      <p className="text-[10px] text-slate-500 font-bold uppercase">{file.size}</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-slate-500 group-hover:text-primary transition-all">download</span>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-10 border-t border-white/5">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-6">Siguiente Tutorial</h4>
              <div 
                className="group cursor-pointer"
                onClick={() => {
                  const nextIndex = (TUTORIALS.indexOf(tutorial) + 1) % TUTORIALS.length;
                  navigate(`/tutorial/${TUTORIALS[nextIndex].id}`);
                }}
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 border border-white/5">
                  <img 
                    src={TUTORIALS[(TUTORIALS.indexOf(tutorial) + 1) % TUTORIALS.length].thumbnail} 
                    className="w-full h-full object-cover transition-transform group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-3xl text-white">play_arrow</span>
                  </div>
                </div>
                <p className="text-sm font-bold group-hover:text-primary transition-colors line-clamp-2">
                  {TUTORIALS[(TUTORIALS.indexOf(tutorial) + 1) % TUTORIALS.length].title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialDetail;
