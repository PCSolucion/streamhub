import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Marketplace from "./views/Marketplace";
import Tutorials from "./views/Tutorials";
import ProductDetail from "./views/ProductDetail";
import { View } from "./types";

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>("marketplace");
  const [cartCount, setCartCount] = useState(3);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState<Category>("All Assets");
  const [selectedProduct, setSelectedProduct] = useState<Asset | null>(null);

  const navigateTo = (view: View, product: Asset | null = null) => {
    setCurrentView(view);
    if (product) setSelectedProduct(product);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearch = (query: string) => {
    setQuery(query);
    setCurrentView("marketplace");
  };

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
    setCurrentView("marketplace");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        onNavigate={navigateTo}
        currentView={currentView}
        cartCount={cartCount}
        onSearch={setSearchQuery}
        searchQuery={searchQuery}
      />

      <main className="flex-1">
        {currentView === "marketplace" && (
          <Marketplace
            onSelectProduct={(product) => navigateTo("product-detail", product)}
            searchQuery={searchQuery}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        )}
        {currentView === "tutorials" && <Tutorials />}
        {currentView === "product-detail" && selectedProduct && (
          <ProductDetail product={selectedProduct} onNavigate={navigateTo} />
        )}
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
