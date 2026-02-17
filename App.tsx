import React, { useState, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

const Marketplace = lazy(() => import("./views/Marketplace"));
const Tutorials = lazy(() => import("./views/Tutorials"));
const ProductDetail = lazy(() => import("./views/ProductDetail"));
const TutorialDetail = lazy(() => import("./views/TutorialDetail"));

const App: React.FC = () => {
  const [cartCount, setCartCount] = useState(3);

  return (
    <BrowserRouter>
      <Suspense fallback={
        <div className="flex h-screen w-full items-center justify-center bg-bg-dark text-primary">
          <span className="material-symbols-outlined animate-spin text-4xl">hg_dents</span>
        </div>
      }>
        <Routes>
          <Route element={<Layout cartCount={cartCount} />}>
            <Route path="/" element={<Marketplace />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/tutorial/:id" element={<TutorialDetail />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
