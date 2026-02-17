import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-bg-dark border-t border-white/5 py-12 px-6 lg:px-20 mt-auto">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3 text-primary">
            <span className="material-symbols-outlined text-3xl font-bold">rocket_launch</span>
            <h2 className="text-xl font-bold uppercase tracking-tighter">StreamHub</h2>
          </div>
          
          <div className="flex gap-6">
            {['share', 'chat', 'mail'].map((icon) => (
              <a key={icon} className="size-10 rounded-xl bg-surface-accent flex items-center justify-center hover:bg-primary transition-all text-white shadow-sm border border-white/5" href="#">
                <span className="material-symbols-outlined text-lg">{icon}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/5 mt-10 pt-10 flex justify-center">
          <p className="text-[10px] text-slate-600 uppercase font-black tracking-[0.2em]">
            © {currentYear} StreamHub Marketplace. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;