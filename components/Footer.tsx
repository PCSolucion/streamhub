import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-bg-dark border-t border-white/5 py-12 px-6 lg:px-20 mt-auto">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-3 text-primary mb-6">
            <span className="material-symbols-outlined text-3xl font-bold">rocket_launch</span>
            <h2 className="text-xl font-bold uppercase tracking-tighter">StreamHub</h2>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed mb-6">El marketplace líder mundial para assets personalizados de streaming, desde automatización por código hasta visuales cinematográficos.</p>
          <div className="flex gap-3">
            {['share', 'chat', 'mail'].map((icon) => (
              <a key={icon} className="size-9 rounded-lg bg-surface-accent flex items-center justify-center hover:bg-primary transition-all text-white shadow-sm" href="#">
                <span className="material-symbols-outlined text-sm">{icon}</span>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-400">Tienda</h4>
          <ul className="flex flex-col gap-4 text-sm text-slate-500">
            {['Ver Todo', 'Mejores Scripts', 'Series Masterclass', 'Kits de Intro'].map(link => (
              <li key={link}>
                <Link 
                  to="/" 
                  className="hover:text-primary transition-colors text-left"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-400">Soporte</h4>
          <ul className="flex flex-col gap-4 text-sm text-slate-500">
            {['Documentación Dev', 'Licencias', 'Programa de Creadores', 'Preguntas Frecuentes'].map(link => (
              <li key={link}>
                <button 
                  className="hover:text-primary transition-colors text-left"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-400">Newsletter</h4>
          <p className="text-sm text-slate-500 mb-4">Recibe los últimos lanzamientos y consejos de streaming.</p>
          <div className="flex gap-2">
            <input className="bg-surface-accent/50 border-none rounded-lg py-2 px-4 text-sm flex-1 focus:ring-primary focus:ring-1 text-white" placeholder="Dirección de correo" type="email" />
            <button className="bg-primary px-5 py-2 rounded-lg font-bold text-sm hover:brightness-110 active:scale-95 transition-all text-white shadow-lg">Unirse</button>
          </div>
        </div>
      </div>
      
      <div className="max-w-[1440px] mx-auto border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-600 uppercase font-bold tracking-[0.15em]">
        <p>© 2024 StreamHub Marketplace. Todos los derechos reservados.</p>
        <div className="flex gap-8">
          <a className="hover:text-slate-400 transition-colors" href="#">Política de Privacidad</a>
          <a className="hover:text-slate-400 transition-colors" href="#">Términos de Servicio</a>
          <a className="hover:text-slate-400 transition-colors" href="#">Política de Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;