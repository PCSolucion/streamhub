import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  cartCount: number;
}

const Layout: React.FC<LayoutProps> = ({ cartCount }) => {
  return (
    <div className="flex flex-col min-h-screen bg-bg-dark text-slate-300 font-sans selection:bg-primary/30">
      <Header cartCount={cartCount} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
